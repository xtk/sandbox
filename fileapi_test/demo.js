// 
// Reading files using the HTML5 FileReader.
//
function read(files) {

  file = files[0];
  
  console.log(file.name, file.type);
  
  var reader = new FileReader();
  
  // setup callback for errors during reading
  reader.onerror = function(e) {

    console.log('Error:' + e.target.error.code);
    
  };
  
  // setup callback after reading
  reader.onload = (function(file) {

    return function(e) {

      var data = e.target.result;
      
      var base64StartIndex = data.indexOf(',') + 1;
      data = window.atob(data.substring(base64StartIndex));
      
      var vol = new X.volume();
      vol.file = file.name;
      vol.filedata = data;
      
      ren3d.add(vol);
      ren3d.render();
      
    };
    
  })(file);
  
  // start reading the file
  reader.readAsDataURL(file);
  
};

//
//
//
window.onload = function() {

  // create and initialize a 3D renderer
  ren3d = new X.renderer3D();
  ren3d.init();
  
};
