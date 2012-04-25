// 
// X
//
window = {}; // window is not known to workers
importScripts('xtk_edge.js');

//
// LOADING
//
function load(url, callback) {

  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4) {
      
      if (xhr.status == 200 || xhr.status == 0) {
        
        callback(xhr.responseText);
        
      }
      
    }
    
  };
  
  xhr.open("GET", url, true);
  xhr.send(null);
  
};

//
// PARSING
//
function parse(data) {

  aparser.parse(anobject, data);
  self.postMessage(JSON.stringify(anobject));
  
}

anobject = new X.object();
aparser = new X.parserVTK();

// .. start the loading
load('skull.vtk', parse);
