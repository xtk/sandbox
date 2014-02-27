goog.require('X.renderer3D');
goog.require('X.volume');
goog.require('X.slice');


function pad(i,n) {
  var v = i + "";
  while (v.length < n) {
    v = "0" + v
  }
  return v;
}


window.onload = function() {

  // create and initialize a 3D renderer
  var r = new X.renderer3D();
  r.init();

  vol = new X.volume();
  vol.dimensions = [512,512,75];
  vol.file = 'http://localhost:1337/image/volume/00000001/&.RZ'
  vol.labelmap.file = 'http://localhost:1337/segmentation/volume/00000001/&.RZ'

  
  r.add(vol);
  // r.add(s)

  r.render(); // ..and render it
  
};
