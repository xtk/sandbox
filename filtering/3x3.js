self.onmessage = function(e) {

  if (e.data.cmd == 'dimensions') {

    // we just received the dimensions
    dimensions = e.data.value;

  } else if (e.data.cmd == 'filter') {

    // receive the filter mask
    filter = e.data.value;

  } else {

    // we just received the slice

    // input slice data
    var _data = e.data;

    // process
    process(dimensions, filter, _data);

    // output slice data
    self.postMessage(_data, [_data]);

  }

};


function process(dimensions, filter, data) {

  // create array view
  var arr = new Uint8Array(data);
  //var arr_out = new Uint32Array(data);

  var cols = dimensions[0];
  var rows = dimensions[1];


  for (var r = 0; r < rows; r++) {

    for (var c = 0; c < cols; c++) {



      var sum = 0;

      var current_index = r*cols + c;

      // center
      sum += arr[current_index] * filter[4];

      // west
      if (c > 0) {

        sum += arr[current_index - 1] * filter[3];

      }

      // east
      if ( c < (cols-1) ) {

        sum += arr[current_index + 1] * filter[5];

      }




      var _north_index = current_index - cols;

      // north
      if (r > 0) {

        sum += arr[_north_index] * filter[1];

      }

      // north-west
      if (r > 0 && c > 0) {

        sum += arr[_north_index - 1] * filter[0];

      }

      // north-east
      if (r > 0 && c < (cols-1)) {

        sum += arr[_north_index + 1] * filter[2];

      }



      var _south_index = current_index + cols;

      // south
      if (r < (rows-1)) {

        sum += arr[_south_index] * filter[7];

      }

      // south-west
      if (r < (rows-1) && c > 0) {

        sum += arr[_south_index - 1] * filter[6];

      }

      // south-east
      if (r < (rows-1) && c < (cols-1)) {

        sum += arr[_south_index + 1] * filter[8];

      }


      //
      //
      sum /= 9;
      //sum = Math.min(Math.max(sum, 0), 255);

      arr[current_index] = sum;

    }

  }




}
