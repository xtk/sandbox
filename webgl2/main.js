
RENDERER = {};

RENDERER.prototype.initGL = function(canvasId) {

  var canvas = document.getElementById(canvasId);
  this._gl = canvas.getContext("experimental-webgl2");
 
  if (!this._gl) {
    // WebGL 2 not supported
    return null;
  }
 
  if (!this._gl instanceof WebGL2RenderingContext) {
    // unexpected rendering context.
    return null;
  }

  // configure the WebGL context
  this._gl.viewport(0, 0, canvas.width, canvas.height);

  // configure opacity to 0.0 to overwrite the viewport background-color by
  // the container color
  this._gl.clearColor(0.0, 0.0, 0.0, 0.0);

  // enable WebGL settings
  this._gl.clearDepth(0);
  this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1);
  this._gl.pixelStorei(this._gl.PACK_ALIGNMENT, 1);
  // this._gl.cullFace(this._gl.BACK);
  // this._gl.enable(this._gl.CULL_FACE);
  this._gl.enable(this._gl.DEPTH_TEST);
  this._gl.depthFunc(this._gl.GREATER);
  this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, true);
  this._gl.enable(this._gl.BLEND);
  this._gl.blendEquation(this._gl.FUNC_ADD);
  this._gl.blendFunc(this._gl.SRC_ALPHA,
      this._gl.ONE_MINUS_SRC_ALPHA);

  // clear color and depth buffer
  this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);  

  return this._gl;
 
}
