self.onmessage = function(e) {

  if (e.data.cmd == 'dimensions') {

    // we just received the dimensions
    dimensions = e.data.value;

  } else {

    // we just received the slice

    // input slice data
    var _data = e.data;

    // process
    process(_data);

    // output slice data
    self.postMessage(_data, [_data]);

  }

};


function process(data) {

  // create array view
  var arr = new Uint8Array(data);

  var l = arr.length;
  for ( var i = 0; i < l; i++) {

    // just invert this
    arr[i] = 255 - arr[i];

  }

}
