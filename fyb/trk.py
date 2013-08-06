import nibabel
import numpy

vol_file = 'brain.nii.gz'

volume = nibabel.load(vol_file)
vol = volume.get_data()

tracks = []


for f in range( 2 ):

  numberOfPoints = 4

  points = numpy.empty( shape=( numberOfPoints, 3 ), dtype=numpy.float32 )

  if f==0:
    # first track
    points[0] = [-21, -78, -58]
    points[1] = [-10, -10, -10]
    points[2] = [-10, 10, 10]
    points[3] = [-28, 34, 89]
  else:
    # second track
    points[0] = [-70, 70, 11]
    points[1] = [-10, 30, 10]
    points[2] = [10, 10, -10]
    points[3] = [94, 24, -23]

  tracks.append( ( points, None, None) )


trk_header = nibabel.trackvis.empty_header()
# trk_header['voxel_size'] = fa_image.get_header().get_zooms()[:3]
# trk_header['voxel_order'] = 'LPS'
trk_header['dim'] = vol.shape
trk_header['n_count'] = len(tracks)

# adjust trackvis header according to affine from FA
nibabel.trackvis.aff_to_hdr( volume.get_affine(), trk_header, True, True )


nibabel.trackvis.write( 'tracks.dec.trk', tracks, trk_header )

print 'done'
