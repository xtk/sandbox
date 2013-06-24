function stream(url) {

  // we use a simple XHR to get the file contents
  // this works for binary and for ascii files
  var request = new XMLHttpRequest();

  request.onreadystatechange = new_data.bind(request);

  // configure the URL
  request.open('GET', url, true);
  // request.responseType = 'arraybuffer';

  // .. and GO!
  request.send(null);

}

header_parsed = false;
slice_number = 0;
slices = null;
_max = 1000;

function new_data() {

  if (this.readyState != 3) {
    return;
  }

  var br = new BinaryReader(this.response);

  if (!header_parsed) {

    sizeof_hdr = br.readUInt32();
    data_type = br.readString(10);
    db_name = br.readString(18);
    extents = br.readUInt32();
    session_error = br.readUInt16();
    regular = br.readChar();
    dim_info = br.readChar();
    dim = [br.readUInt16(), br.readUInt16(), br.readUInt16(), br.readUInt16(),
           br.readUInt16(), br.readUInt16(), br.readUInt16(), br.readUInt16()];
    slice_length = dim[1] * dim[2];
    slices = new Array(dim[3]);

    intent_p1 = br.readFloat();
    intent_p2 = br.readFloat();
    intent_p3 = br.readFloat();
    intent_code = br.readUInt16();
    datatype = br.readUInt16();
    bitpix = br.readUInt16();
    slice_start = br.readUInt16();
    pixdim = [br.readFloat(), br.readFloat(), br.readFloat(), br.readFloat(),
              br.readFloat(), br.readFloat(), br.readFloat(), br.readFloat()];
    vox_offset = br.readFloat();

    header_parsed = true;

    simpleviewer = new SIMPLEVIEWER('ren1', dim.slice(1,4));

  }

  if (br._buffer.length > (vox_offset + slice_length*(slice_number+1))) {

    // we have everything to show the first slice

    br.seek(vox_offset+(slice_number*slice_length));

    var slicedata = new Uint8Array(slice_length);

    if (datatype == 2) {

      //
      for (var i=0; i<slice_length; i++) {

         var pixel = br.readUInt8();
         slicedata[i] = 255 * (pixel / _max)

      }

    } else if (datatype == 16) {

      // float
      for (var i=0; i<slice_length; i++) {

         var pixel = br.readFloat();
         slicedata[i] = 255 * (pixel / _max)

      }

    }

    slices[slice_number] = slicedata;

    simpleviewer.show(slicedata);

    slice_number++;

  }

}
