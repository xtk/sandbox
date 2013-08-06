#
#
#

import numpy
import sys


def query(file, id):

  # setup file
  m = numpy.load(file, mmap_mode='r')

  # read all mappings for this id
  v = m[int(id)]

  return v[v>0]


query(sys.argv[1], sys.argv[2])
