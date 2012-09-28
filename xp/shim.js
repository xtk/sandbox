function bind_shim() {

  if (!Function.prototype.bind) {
    
    Function.prototype.bind = function(oThis) {

      if (typeof this !== "function") {
        // closest thing possible to the ECMAScript 5 internal IsCallable
        // function
        throw new TypeError(
            "Function.prototype.bind - what is trying to be bound is not callable");
      }
      
      var fSlice = Array.prototype.slice, aArgs = fSlice.call(arguments, 1), fToBind = this;
      
      /**
       * @constructor
       */
      var fNOP = function() {

      };
      
      var fBound = function() {

        return fToBind.apply(this instanceof fNOP ? this : oThis || window,
            aArgs.concat(fSlice.call(arguments)));
      };
      
      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();
      
      return fBound;
    };
  }
  
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Mšller
// fixes from Paul Irish and Tino Zijdel
//
// from: https://gist.github.com/1579671

function requestAnimationFrame_shim() {

  (function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] +
          'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
          window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {

        var currTime = Date.now(); // changed this to avoid new object each
                                    // time
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {

          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {

        clearTimeout(id);
      };
    }
  }());
  
}

// install the shims, if necessary
bind_shim();
requestAnimationFrame_shim();
