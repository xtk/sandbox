_MODE_ = 'header';

_CURRENT_IFD = null;

Ifd = function() {

  this._offset = -1;
  this._count = -1;

};

_TIFF_ = {
  'little_endian' : true,
  'magic_number' : -1,
  'ifd' : []
};

// tags
_TIFF_TAGS = {
  'NEW_SUBFILE_TYPE' : 254,
  'IMAGE_WIDTH' : 256,
  'IMAGE_LENGTH' : 257,
  'BITS_PER_SAMPLE' : 258,
  'COMPRESSION' : 259,
  'PHOTO_INTERP' : 262,
  'IMAGE_DESCRIPTION' : 270,
  'STRIP_OFFSETS' : 273,
  'ORIENTATION' : 274,
  'SAMPLES_PER_PIXEL' : 277,
  'ROWS_PER_STRIP' : 278,
  'STRIP_BYTE_COUNT' : 279,
  'X_RESOLUTION' : 282,
  'Y_RESOLUTION' : 283,
  'PLANAR_CONFIGURATION' : 284,
  'RESOLUTION_UNIT' : 296,
  'SOFTWARE' : 305,
  'DATE_TIME' : 306,
  'ARTEST' : 315,
  'HOST_COMPUTER' : 316,
  'PREDICTOR' : 317,
  'COLOR_MAP' : 320,
  'TILE_WIDTH' : 322,
  'SAMPLE_FORMAT' : 339,
  'JPEG_TABLES' : 347,
  'METAMORPH1' : 33628,
  'METAMORPH2' : 33629,
  'IPLAB' : 34122,
  'NIH_IMAGE_HDR' : 43314,
  // private tag registered with Adobe
  'META_DATA_BYTE_COUNTS' : 50838,
  // private tag registered with Adobe
  'META_DATA' : 50839

};

function main() {

  ren3d = new X.renderer3D();
  ren3d.container = 'ren';
  ren3d.init();
  ren3d.render();

  var files = document.getElementById('files').files;

  slicer = new FileSlicer(files[0]);

  // register the callback
  slicer.done = function(data) {

    parse(slicer, data);

  };

  slicer.scan(8);

}

function parse(slicer, bytes) {

  // initialize the scanner with the bytes
  var scanner = new Scanner(bytes);
  scanner._littleEndian = _TIFF_['little_endian'];

  //
  // TIFF parser
  // implemented based on the TIFF6 specs
  // http://partners.adobe.com/public/developer/en/tiff/TIFF6.pdf
  //

  if ( _MODE_ == 'header' ) {

    //
    // THE HEADER
    //  

    var _byteorder = scanner.scan('ushort');
    // propagate the endianness to the scanner
    _TIFF_['little_endian'] = scanner._littleEndian = (_byteorder == 0x4949);

    _TIFF_['magic_number'] = scanner.scan('ushort');
    // the magicnumber has to be 42
    if ( _TIFF_['magic_number'] != '42' ) {
      throw new Error('Invalid TIFF file. Magicnumber: ',
          _TIFF_['magic_number']);
    }

    // the image file directory byte offset
    var _ifd_offset = scanner.scan('uint');

    // now let's jump to the offset and scan the ifd
    slicer.jumpTo(_ifd_offset);
    _MODE_ = 'ifd_probe';
    slicer.scan(2);

  } else if ( _MODE_ == 'ifd_probe' ) {

    //
    // THE IFD HEADER
    //    

    // create a new IFD
    _CURRENT_IFD = new Ifd();

    _CURRENT_IFD._count = scanner.scan('ushort');

    _MODE_ = 'ifd';
    slicer.scan(_CURRENT_IFD._count * 12 + 4);

  } else if ( _MODE_ == 'ifd' ) {

    //
    // THE IFD CONTENT
    //
    for ( var i = -1; i < _CURRENT_IFD._count; i++) {

      var _identifier = scanner.scan('ushort');

      var _field = scanner.scan('ushort');

      var _count = scanner.scan('uint');

      var _value_type = 'uint';
      var _byte_size = -1;

      switch (_field) {

      case 1:
      case 2:
        _value_type = 'uchar';
        _byte_size = 1;
        break;
      case 3:
        _value_type = 'ushort';
        _byte_size = 2;
        break;
      case 4:
        _value_type = 'uint';
        _byte_size = 4;
        break;
      default:
      }

      // check if we have a value or a value location
      var _value = null;
      if ( _count * _byte_size > 4 ) {

        // this is a value location
        _value = 'SOMEWHERE_ELSE';

      } else {
        _value = scanner.scan(_value_type, _count);
      }

      scanner.jumpTo(i * 12 + 12);

      for (tag in _TIFF_TAGS) {

        if ( _TIFF_TAGS[tag] == _identifier ) {

          // add it to the dictionary
          _CURRENT_IFD[tag] = _value;

        }

      }

    }

    // push the current ifd to our tiff file
    _TIFF_.ifd.push(_CURRENT_IFD);

    scanner.jumpTo(_CURRENT_IFD._count * 12);
    var _next_ifd = scanner.scan('uint');

    if ( _next_ifd == 0 ) {

      volume = new X.volume();
      volume._dimensions = [ 1, 1, _TIFF_.ifd.length ];
      volume.borders = false;
      volume.create_();

      // grab data of image 0
      show(0);

    } else {

      slicer.jumpTo(_next_ifd);
      _MODE_ = 'ifd_probe';
      slicer.scan(2);

    }

  } else if ( _MODE_ == 'data' ) {

    var _data = scanner.scan('uchar', bytes.byteLength);

    var s = new X.slice();
    s.texture._rawDataWidth = _CURRENT_IFD['IMAGE_WIDTH'];
    s.texture._rawDataHeight = _CURRENT_IFD['IMAGE_LENGTH'];
    s.texture._rawData = _data;
    s.setup([ 0, 0, _CURRENT_SLICE ], [ 0, 0, 1 ], [ 0, 1, 0 ],
        _CURRENT_IFD['IMAGE_WIDTH'], _CURRENT_IFD['IMAGE_LENGTH'], false);

    // ren3d.add(s);
    volume.children[2].children[_CURRENT_SLICE] = s;
    
    if ( _CURRENT_SLICE < _TIFF_.ifd.length-1 ) {
      show(_CURRENT_SLICE + 1);
    } else {
      ren3d.add(volume);
      addUI();
    }

  }

}

function addUI() {

  // create the GUI
  var gui = new dat.GUI();
  
  gui.add(volume, 'indexZ', 0, volume.dimensions[2]-1);
  
}

function show(n) {

  // grab the data for image n
  _CURRENT_IFD = _TIFF_['ifd'][n];
  _CURRENT_SLICE = n;
  console.log(n);
  _MODE_ = 'data';
  slicer.jumpTo(_CURRENT_IFD['STRIP_OFFSETS']);
  slicer.scan(_CURRENT_IFD['STRIP_BYTE_COUNT']);

}

//
//
//
FileSlicer = function(file) {

  this._file = file;
  this._filePointer = 0;
  this._reader = new FileReader();
  this._reader.onloadend = this.scanDone.bind(this);

};

FileSlicer.prototype.done = function(data) {

  console.log('Please overload.' + data);

};

FileSlicer.prototype.jumpTo = function(position) {

  this._filePointer = position;

};

FileSlicer.prototype.scan = function(chunks) {

  if ( typeof chunks == 'undefined' ) {
    chunks = 1;
  }

  var blob = this._file.slice(this._filePointer, this._filePointer + chunks);
  this._filePointer += chunks;
  this._reader.readAsArrayBuffer(blob);

};

FileSlicer.prototype.scanDone = function(e) {

  if ( e.target.readyState == FileReader.DONE ) {
    // activate the callback
    this.done(e.target.result);
  }

};

//
// PARSE UTILITY FUNCTIONS FROM XTK (http://goXTK.com)
// (MIT LICENSED, COPYRIGHT XTK DEVELOPERS <dev@goxtk.com>)
//
Scanner = function(data) {

  this._data = data;
  this._dataPointer = 0;
  this._nativeLittleEndian = new Int8Array(new Int16Array([ 1 ]).buffer)[0] > 0;
  this._littleEndian = true;

};

/**
 * Jump to a position in the byte stream.
 * 
 * @param {!number} position The new offset.
 */
Scanner.prototype.jumpTo = function(position) {

  this._dataPointer = position;
};

/**
 * Scan binary data relative to the internal position in the byte stream.
 * 
 * @param {!string} type The data type to scan, f.e.
 *            'uchar','schar','ushort','sshort','uint','sint','float'
 * @param {!number=} chunks The number of chunks to scan. By default, 1.
 */
Scanner.prototype.scan = function(type, chunks) {

  if ( typeof chunks == 'undefined' ) {
    chunks = 1;
  }
  var _chunkSize = 1;
  var _array_type = Uint8Array;
  switch (type) {
  // 1 byte data types
  case 'uchar':
    break;
  case 'schar':
    _array_type = Int8Array;
    break;
  // 2 byte data types
  case 'ushort':
    _array_type = Uint16Array;
    _chunkSize = 2;
    break;
  case 'sshort':
    _array_type = Int16Array;
    _chunkSize = 2;
    break;
  // 4 byte data types
  case 'uint':
    _array_type = Uint32Array;
    _chunkSize = 4;
    break;
  case 'sint':
    _array_type = Int32Array;
    _chunkSize = 4;
    break;
  case 'float':
    _array_type = Float32Array;
    _chunkSize = 4;
    break;
  }
  // increase the data pointer in-place
  var _bytes = new _array_type(this._data.slice(this._dataPointer,
      this._dataPointer += chunks * _chunkSize));
  // if required, flip the endianness of the bytes
  if ( this._nativeLittleEndian != this._littleEndian ) {
    // we need to flip here since the format doesn't match the native endianness
    _bytes = this.flipEndianness(_bytes, _chunkSize);
  }
  if ( chunks == 1 ) {
    // if only one chunk was requested, just return one value
    return _bytes[0];
  }
  // return the byte array
  return _bytes;
};

/**
 * Flips typed array endianness in-place. Based on
 * https://github.com/kig/DataStream.js/blob/master/DataStream.js.
 * 
 * @param {!Object} array Typed array to flip.
 * @param {!number} chunkSize The size of each element.
 * @return {!Object} The converted typed array.
 */
Scanner.prototype.flipEndianness = function(array, chunkSize) {

  var u8 = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
  for ( var i = 0; i < array.byteLength; i += chunkSize) {
    for ( var j = i + chunkSize - 1, k = i; j > k; j--, k++) {
      var tmp = u8[k];
      u8[k] = u8[j];
      u8[j] = tmp;
    }
  }
  return array;
};
