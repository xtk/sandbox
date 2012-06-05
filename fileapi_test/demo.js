// 
//
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
      
      console.log(data);
      
    };
    
  })(file);
  
  // start reading the file
  reader.readAsDataURL(file);
  
};
