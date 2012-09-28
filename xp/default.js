function initgl(canvas) {

  _context = canvas.getContext('experimental-webgl');
  
  _context.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
  
  // configure opacity to 0.0 to overwrite the viewport background-color by
  // the container color
  _context.clearColor(0.0, 0.0, 0.0, 0.0);
  
  _context.depthFunc(_context.LEQUAL);
  
}

function shader(id) {

  var shaderScript = document.getElementById(id);
  if (!shaderScript) {
    return null;
  }
  

  return shaderScript.firstChild.nodeValue;
  
}

function compile_shaders(vertex_source, fragment_source) {

  var _vertexShader = _context.createShader(_context.VERTEX_SHADER);
  var _fragmentShader = _context.createShader(_context.FRAGMENT_SHADER);
  
  _context.shaderSource(_vertexShader, vertex_source);
  _context.shaderSource(_fragmentShader, fragment_source);
  

  _context.compileShader(_vertexShader);
  _context.compileShader(_fragmentShader);
  
  if (!_context.getShaderParameter(_fragmentShader, _context.COMPILE_STATUS)) {
    
    throw new Error('Fragment Shader compilation failed!\n' +
        _context.getShaderInfoLog(_fragmentShader));
    
  }
  
  if (!_context.getShaderParameter(_vertexShader, _context.COMPILE_STATUS)) {
    
    throw new Error('Vertex Shader compilation failed!\n' +
        _context.getShaderInfoLog(_vertexShader));
    
  }
  
  _program = _context.createProgram();
  _context.attachShader(_program, _vertexShader);
  _context.attachShader(_program, _fragmentShader);
  _context.linkProgram(_program);
  _context.useProgram(_program);
  
  _context.vertexPositionAttribute = _context.getAttribLocation(_program,
      'aVertexPosition');
  _context.enableVertexAttribArray(_context.vertexPositionAttribute);
  
  _context.vertexColorAttribute = _context.getAttribLocation(_program,
      'aVertexColor');
  _context.enableVertexAttribArray(_context.vertexColorAttribute);
  
  _context.cameraPositionUniform = _context.getUniformLocation(_program,
      'camera_position');
  
  _context.widthUniform = _context.getUniformLocation(_program, 'width');
  
  _context.heightUniform = _context.getUniformLocation(_program, 'height');
  
  _context.perspective = _context.getUniformLocation(_program, 'perspective');
  
  _context.view = _context.getUniformLocation(_program, 'view');
  

  console.log(_context.vertexPositionAttribute, _context.vertexColorAttribute);
  
}

function start() {

  stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  
  // Align top-left
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  
  document.body.appendChild(stats.domElement);
  
  _canvas = document.getElementById('c');
  
  initgl(_canvas);
  compile_shaders(shader('vertex'), shader('fragment'));
  
  cube();
  
  console.log('setup.')
  _camera_position = [0, 0, 100];
  
  perspectiveMatrix = mat4.create();
  mat4.perspective(perspectiveMatrix, 45, _canvas.clientWidth /
      _canvas.clientHeight, 1, 10000);
  
  viewMatrix = mat4.create();
  mat4.lookAt(viewMatrix, [0, 0, 100], [0, 0, 0], [0, 1, 0]);
  
  draw();
  
}

function draw() {

  stats.begin();
  
  _context.viewport(0, 0, _canvas.clientWidth, _canvas.clientHeight);
  _context.clear(_context.COLOR_BUFFER_BIT | _context.DEPTH_BUFFER_BIT);
  
  _context.uniformMatrix4fv(_context.perspective, false, perspectiveMatrix);
  _context.uniformMatrix4fv(_context.view, false, viewMatrix);
  
  _context.uniform3f(_context.cameraPositionUniform,
      parseFloat(_camera_position[0]), parseFloat(_camera_position[1]),
      parseFloat(_camera_position[2]));
  
  _context.uniform1f(_context.widthUniform, parseFloat(_canvas.clientWidth));
  _context.uniform1f(_context.heightUniform, parseFloat(_canvas.clientHeight));
  
  _context.bindBuffer(_context.ARRAY_BUFFER, cubeVertexColorBuffer);
  _context.vertexAttribPointer(_context.vertexColorAttribute,
      cubeVertexColorBuffer.itemSize, _context.FLOAT, false, 0, 0);
  
  _context.bindBuffer(_context.ARRAY_BUFFER, cubeVertexPositionBuffer);
  _context.vertexAttribPointer(_context.vertexPositionAttribute,
      cubeVertexPositionBuffer.itemSize, _context.FLOAT, false, 0, 0);
  
  // _context.bindBuffer(_context.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
  // _context.drawElements(_context.TRIANGLES, cubeVertexIndexBuffer.numItems,
  // _context.UNSIGNED_SHORT, 0);
  _context.drawArrays(_context.TRIANGLES, 0, cubeVertexPositionBuffer.numItems)



  stats.end();
  
  window.requestAnimationFrame(draw, _canvas);
  
}


function cube() {

  gl = _context;
  

  cubeVertexPositionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
  vertices = [100, 0, 0, 0, 0, 0, 0, 100, 0];
  // vertices = [
  // // Front face
  // -10.0, -10.0, 10.0, 10.0, -10.0, 10.0, 10.0, 10.0, 10.0, -10.0, 10.0, 10.0,
  //
  // // Back face
  // -10.0, -10.0, -10.0, -10.0, 10.0, -10.0, 10.0, 10.0, -10.0, 10.0, -10.0,
  // -10.0,
  //
  // // Top face
  // -10.0, 10.0, -10.0, -10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0,
  // 10.0, -10.0,
  //
  // // Bottom face
  // -10.0, -10.0, -10.0, 10.0, -10.0, -10.0, 10.0, -10.0, 10.0,
  // -10.0, -10.0, 10.0,
  //
  // // Right face
  // 10.0, -10.0, -10.0, 10.0, 10.0, -10.0, 10.0, 10.0, 10.0, 10.0,
  // -10.0, 10.0,
  //
  // // Left face
  // -10.0, -10.0, -10.0, -10.0, -10.0, 10.0, -10.0, 10.0, 10.0,
  // -10.0, 10.0, -10.0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  cubeVertexPositionBuffer.itemSize = 3;
  cubeVertexPositionBuffer.numItems = 3;
  
  cubeVertexColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexColorBuffer);
  colors = [1.0, 0.0, 0.0, 1.0, // Front face
  1.0, 1.0, 0.0, 1.0, // Back face
  0.0, 1.0, 0.0, 1.0 // Top face
  // 1.0, 0.5, 0.5, 1.0, // Bottom face
  // 1.0, 0.0, 1.0, 1.0, // Right face
  // 0.0, 0.0, 1.0, 1.0 // Left face
  ];
  // var unpackedColors = [];
  // for ( var i in colors) {
  // var color = colors[i];
  // for ( var j = 0; j < 4; j++) {
  // unpackedColors = unpackedColors.concat(color);
  // }
  // }
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  cubeVertexColorBuffer.itemSize = 4;
  cubeVertexColorBuffer.numItems = 3;
  
  cubeVertexIndexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
  var cubeVertexIndices = [0, 1, 2, 0, 2, 3, // Front face
  4, 5, 6, 4, 6, 7, // Back face
  8, 9, 10, 8, 10, 11, // Top face
  12, 13, 14, 12, 14, 15, // Bottom face
  16, 17, 18, 16, 18, 19, // Right face
  20, 21, 22, 20, 22, 23 // Left face
  ];
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices),
      gl.STATIC_DRAW);
  cubeVertexIndexBuffer.itemSize = 1;
  cubeVertexIndexBuffer.numItems = 36;
  

}
