
RENDERER = function() {

  this._gl = null;
  this._width = 0;
  this._height = 0;
  this._shaderProgram = null;

};

RENDERER.prototype.initGL = function(canvasId) {

  var canvas = document.getElementById(canvasId);
  this._gl = canvas.getContext("experimental-webgl2");

  if (!this._gl) {
    this._gl = canvas.getContext("experimental-webgl");
  }
 
  if (!this._gl instanceof WebGLRenderingContext) {
    // unexpected rendering context.
    return null;
  }

  console.log(this._gl);

  this._width = canvas.width;
  this._height = canvas.height;

  // configure the WebGL context
  this._gl.viewport(0, 0, this._width, this._height);

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
 
};


RENDERER.prototype.readAndCompileShader = function(id) {

  var shaderScript = document.getElementById(id);
  
  if (!shaderScript) {
    return null;
  }

  var gl = this._gl;

  var str = "";
  var k = shaderScript.firstChild;
  while (k) {
    if (k.nodeType == 3) {
      str += k.textContent;
    }
    k = k.nextSibling;
  }

  var shader;
  if (shaderScript.type == "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;
  }
  
  gl.shaderSource(shader, str);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log(gl.getShaderInfoLog(shader));
    return null;
  }

  return shader;

};

RENDERER.prototype.linkShaders = function(vs_id, fs_id) {

  var gl = this._gl;

  var fragmentShader = this.readAndCompileShader(fs_id);
  var vertexShader = this.readAndCompileShader(vs_id);

  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.log("Could not initialise shaders");

      console.log(gl.getShaderInfoLog(fragmentShader));
      console.log(gl.getShaderInfoLog(vertexShader));
      console.log(gl.getProgramInfoLog(shaderProgram));

      return null;

  }

  gl.useProgram(shaderProgram);

  this._shaderProgram = shaderProgram;

  return shaderProgram;

};

RENDERER.prototype.createArrayBuffer = function(data) {

  var gl = this._gl;

  var gl_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, gl_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  return gl_buffer;

};

RENDERER.prototype.attribute = function(position, gl_buffer, itemsize) {

  var gl = this._gl;

  gl.enableVertexAttribArray(position);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl_buffer);
  gl.vertexAttribPointer(position, itemsize, gl.FLOAT, false, 0, 0);

};

RENDERER.prototype.draw = function() {

  this._gl.viewport(0, 0, this._width, this._height);
  this._gl.clearColor(0.0, 0.0, 0.0, 0.0);

};
