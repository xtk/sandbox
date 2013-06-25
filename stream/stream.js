function stream(url) {

  // we use a simple XHR to get the file contents
  // this works for binary and for ascii files
  var request = new XMLHttpRequest();

  request.onreadystatechange = new_data.bind(request);

  // configure the URL
  request.open('GET', url, true);
  // request.responseType = 'arraybuffer';
  request.overrideMimeType("text/plain; charset=x-user-defined");
  // .. and GO!
  request.send(null);

}

header_parsed = false;
slice_number = 0;
slices = null;
_max = 300;
blocked=false;

function new_data() {

  if (this.readyState != 3) {
    return;
  }

  if (blocked) {
      console.log('blocked');
      new_data();
    
  }
  
  blocked = true;
  
  var br = new BinaryReader(this.response);

  if (!header_parsed) {

     header = {
    'sizeof_hdr': br.readUInt32(),
    'data_type': br.readString(10),
    'db_name': br.readString(18),
    'extents': br.readUInt32(),
    'session_error': br.readUInt16(),
    'regular': br.readUInt8(),
    'dim_info': br.readUInt8(),
    'dim': [br.readUInt16(), br.readUInt16(), br.readUInt16(), br.readUInt16(),
           br.readUInt16(), br.readUInt16(), br.readUInt16(), br.readUInt16()],
    'intent_p1': br.readFloat(),
    'intent_p2': br.readFloat(),
    'intent_p3': br.readFloat(),
    'intent_code': br.readUInt16(),
    'datatype': br.readUInt16(),
    'bitpix': br.readUInt16(),
    'slice_start': br.readUInt16(),
    'pixdim': [br.readFloat(), br.readFloat(), br.readFloat(), br.readFloat(),
              br.readFloat(), br.readFloat(), br.readFloat(), br.readFloat()],
    'vox_offset': br.readFloat(),
    'scl_slope': br.readFloat(),
    'scl_inter': br.readFloat(),
    'slice_end': br.readFloat(),
    'slice_code': br.readUInt8(),
    'xyzt_units': br.readUInt8(),
    'cal_max':br.readFloat(),
    'cal_min':br.readFloat(),
    'slice_duration':br.readFloat(),
    'toffset':br.readFloat(),
    'glmax':br.readUInt32(),
    'glmin':br.readUInt32(),
    'descrip':br.readString(80),
    'aux_file':br.readString(24),
    'qform_code':br.readUInt16(),
    'sform_code':br.readUInt16(),
    'quatern_b':br.readFloat(),
    'quatern_c':br.readFloat(),
    'quatern_d':br.readFloat(),
    'qoffset_x':br.readFloat(),
    'qoffset_y':br.readFloat(),
    'qoffset_z':br.readFloat(),
    'srow_x':[br.readFloat(), br.readFloat(), br.readFloat(), br.readFloat()],
    'srow_y':[br.readFloat(), br.readFloat(), br.readFloat(), br.readFloat()],
    'srow_z': [br.readFloat(), br.readFloat(), br.readFloat(), br.readFloat()],
    'intent_name': br.readString(16),
    'magic': br.readString(4)
    
    };
    
    slice_length= header.dim[1] * header.dim[2];
    slices = new Array(header.dim[3]);
        
    console.log(header);
    
    header_parsed = true;

    simpleviewer = new SIMPLEVIEWER('ren1', header.dim.slice(1,4));

  }

  
  if (br._buffer.length > (header.vox_offset + slice_length*(slice_number+1))) {

    // we have everything to show the first slice
    
    br.seek(header.vox_offset+(slice_number*slice_length));
    
    var slicedata = new Uint8Array(slice_length);

    if (header.datatype == 2) {

      //
      for (var i=0; i<slice_length; i++) {

         var pixel = br.readUInt8();
         slicedata[i] = 255 * (pixel / _max)

      }

    } else if (header.datatype == 16) {

      // float
      for (var i=0; i<slice_length; i++) {

         var pixel = br.readFloat();
         slicedata[i] = 255 * (pixel / _max)

      }

    }

    slices[slice_number] = slicedata;

    simpleviewer.show(slicedata);
    console.log('slice', slice_number);
    slice_number++;

  }
  
  blocked = false;

}
