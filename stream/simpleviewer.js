/* XTK simple viewer */

var SIMPLEVIEWER = function(element, dimensions) {

  this._element = element;

  this._dimensions = dimensions;

  this._slice_number = 0;

  this.create_();

};


SIMPLEVIEWER.prototype.create_ = function() {

  var ren3d = new X.renderer3D();
  ren3d.container = this._element;
  ren3d.init();
  ren3d.interactor.config.MOUSEWHEEL_ENABLED = false;
  ren3d.interactor.init();

  slice = new X.slice();
  slice.width = slice.texture.rawDataWidth = this._dimensions[0];
  slice.height = slice.texture.rawDataHeight = this._dimensions[1];
  slice.texture.grayscale = true;
  slice.texture.rawData = new Uint8Array(this._dimensions[0]*this._dimensions[1]);
  slice.create();

  ren3d.add(slice);
  ren3d.camera.position = [0, 0, 100];
  ren3d.render();

  return ren3d;

};

SIMPLEVIEWER.prototype.show = function(data) {

  slice.texture.rawData = data;
  slice.modified();

}