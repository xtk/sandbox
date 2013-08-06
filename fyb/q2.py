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
    self.__tracks = s[0]

    lh = nibabel.freesurfer.read_geometry(lh)
    rh = nibabel.freesurfer.read_geometry(rh)
    vol = nibabel.load(vol)
    vol_header = vol.get_header()

    # bring in the same space
    q_form = vol_header.get_qform()
    q_formM = numpy.matrix( q_form )

    lh_v = numpy.column_stack( ( lh[0], numpy.ones( len( lh[0] ) ) ) )
    lh_v_ras = []
    lh_v_ras2 = []
    rh_v = numpy.column_stack( ( rh[0], numpy.ones( len( rh[0] ) ) ) )
    rh_v_ras = []
    rh_v_ras2 = []

    for l in lh_v:
      lh_v_ras.extend( numpy.dot( q_formM.I, l ) )
    for r in rh_v:
      rh_v_ras.extend( numpy.dot( q_formM.I, r ) )

    for l in lh_v_ras:
      lh_v_ras2.append( l.tolist()[0][:-1] )
    for r in rh_v_ras:
      rh_v_ras2.append( r.tolist()[0][:-1] )

    # create trees
    self.__lh_tree = scipy.spatial.KDTree( lh_v_ras2 )
    self.__rh_tree = scipy.spatial.KDTree( rh_v_ras2 )

    self._lh_v_ras2 = lh_v_ras2
    self._rh_v_ras2 = rh_v_ras2
    self._lh_v = lh[0]
    self._rh_v = rh[0]

  def query(self, id, radius):

    # probe data
    points = self.__tracks[int(id)][0]

    first = points[0]
    last = points[-1]

    print 'first,last', first, last

    # FIRST POINT
    # check which surface vertex index is the closest to the first point
    # and use the lh and rh meshes to look this up
    first_indices_nn = self.__lh_tree.query_ball_point( first, int(radius) )
    first_right_indices_nn = self.__rh_tree.query_ball_point( first, int(radius) )

    print 'first LH', first_indices_nn
    print 'first RH', first_right_indices_nn

    # now for the LAST POINT
    # check which surface vertex index is the closest to the last point
    # and use the lh and rh meshes to look this up
    last_indices_nn = self.__lh_tree.query_ball_point( last, int(radius) )
    last_right_indices_nn = self.__rh_tree.query_ball_point( last, int(radius) )

    print 'last LH', last_indices_nn
    print 'last RH', last_right_indices_nn

    # grab coords for the first points
    first_coords = []
    for f in first_indices_nn:
      first_coords.append(self._lh_v[f].tolist())
    for f in first_right_indices_nn:
      first_coords.append(self._rh_v[f].tolist())

    print 'first', first_coords

    last_coords = []
    for l in last_indices_nn:
      last_coords.append(self._lh_v[l].tolist())
    for l in last_right_indices_nn:
      last_coords.append(self._rh_v[l].tolist())

    print 'last', last_coords

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
