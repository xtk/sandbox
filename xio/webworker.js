self.window = self;
importScripts('js/xio.js');

self.onmessage = function(e) {

  var _cmd = e.data.cmd;
  var _what = e.data.what;
  var _value = e.data.value;

  if (_cmd == 'load') {

    X.io.load(_what);
    
    X.io.onloading = function(id, progress) {
      
      self.postMessage({cmd:'progress', what:'loading', value:progress});
      
    };

    X.io.oncomplete = function() {

      var _output = X.io.get(_what);
      var _header = _output.header;

      self.postMessage({cmd:'done', what:'header', value:_header});

    };

  } else if (_cmd == 'get') {

    var _output = X.io.get(_what);
    var _slices = _output.data.image;

    self.postMessage(_slices[_value], [_slices[_value]]);
    
  }


};
