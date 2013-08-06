import tornado.ioloop
import tornado.web
import json
import numpy
import nibabel
import scipy.spatial
import sys


class QueryHandler(tornado.web.RequestHandler):

  def initialize(self, querier):
    self.__querier = querier

  def get(self, id, radius):

    self.write(self.__querier.query(id, radius))

  def set_default_headers(self):
    self.set_header("Access-Control-Allow-Origin", "*")



class Querier():

  def __init__(self, trk, lh, rh, vol):

    # load files
    s = nibabel.trackvis.read(trk)
    tracks = s[0]

    # get the track transform
    t_m = s[1]['vox_to_ras']

    tracks_ras = []
    # transform all tracks to RAS
    for t in tracks:
      points_ras = []
      for p in t[0]:

        # add 1.0 to the x,y,z coords
        p = p.tolist()
        p.append(1.0)
        # multiply with the transform
        points_ras.append(numpy.dot(t_m, numpy.array(p))[0:-1])
      tracks_ras.append(points_ras)

    self.__tracks = tracks_ras

    self._lh = nibabel.freesurfer.read_geometry(lh)
    self._rh = nibabel.freesurfer.read_geometry(rh)


    m_m = numpy.array([[1,0,0,1.5],[0,1,0,12.2],[0,0,1,20.6],[0,0,0,1]])
    #m_m = numpy.array([[-1,0,0,1.5],[0,0,1,12.2],[0,-1,0,20.6],[0,0,0,1]])
    #m_m = numpy.array([[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[1.5,12.2,20.6,1]])
    #m_m = numpy.array([[1,0,0,0],[0,1,0,0],[0,0,1,0],[1.5,-20.6,-12.2,1]])

    lh_ras = []
    for l in self._lh[0]:
      l = l.tolist()
      l.append(1.0)

      lh_ras.append(numpy.dot(m_m, numpy.array(l))[0:-1])

    self._lh = lh_ras

    rh_ras = []
    for r in self._rh[0]:
      r = r.tolist()
      r.append(1.0)

      rh_ras.append(numpy.dot(m_m, numpy.array(r))[0:-1])

    self._rh = rh_ras    

    # create trees
    self.__lh_tree = scipy.spatial.KDTree( self._lh )
    self.__rh_tree = scipy.spatial.KDTree( self._rh )

  def query(self, id, radius):

    # probe data
    points = self.__tracks[int(id)]

    first = points[0]
    last = points[-1]

    #print 'first,last', first, last


    # FIRST POINT
    # check which surface vertex index is the closest to the first point
    # and use the lh and rh meshes to look this up
    first_indices_nn = self.__lh_tree.query_ball_point( first, int(radius) )
    first_right_indices_nn = self.__rh_tree.query_ball_point( first, int(radius) )

    #print 'first LH', first_indices_nn
    print 'first RH', first_right_indices_nn

    # now for the LAST POINT
    # check which surface vertex index is the closest to the last point
    # and use the lh and rh meshes to look this up
    last_indices_nn = self.__lh_tree.query_ball_point( last, int(radius) )
    last_right_indices_nn = self.__rh_tree.query_ball_point( last, int(radius) )

    #print 'last LH', last_indices_nn
    #print 'last RH', last_right_indices_nn

    # grab coords for the first points
    first_coords = []
    for f in first_indices_nn:
      first_coords.append(self._lh[f].tolist())
    for f in first_right_indices_nn:
      first_coords.append(self._rh[f].tolist())

    #print 'first', first_coords

    last_coords = []
    for l in last_indices_nn:
      last_coords.append(self._lh[l].tolist())
    for l in last_right_indices_nn:
      last_coords.append(self._rh[l].tolist())

    #print 'last', last_coords

    track_points = []

    for t in points:
      track_points.append(t.tolist())



    # for f in first_coords:

    #   gl_points.append(f)
    #   gl_points.append(first.tolist())

    # for l in last_coords:

    #   gl_points.append(l)
    #   gl_points.append(last.tolist())


    rval = {}
    # rval['first'] = first.tolist()
    # rval['last'] = last.tolist()
    # rval['track'] = points.tolist()
    # rval['first_coords'] = first_coords
    # rval['last_coords'] = last_coords
    rval['track_points'] = track_points
    rval['first_coords'] = first_coords
    rval['last_coords'] = last_coords

    return json.dumps(rval)

# start Querier
querier = Querier(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4])
print 'indexing complete'

application = tornado.web.Application([

    (r"/query/(?P<id>[^\/]+)/?(?P<radius>[^\/]+)?", QueryHandler, dict(querier=querier))

  ])


# start webserver
application.listen(8888)
tornado.ioloop.IOLoop.instance().start()



#query(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6])
