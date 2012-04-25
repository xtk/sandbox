// xtk
window = new Object();
importScripts('xtk_edge.js');

// some loader specific stuff
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

function parse(data) {

  aparser.parse(anobject, data);
  self.postMessage(JSON.stringify(anobject));
  
}

anobject = new X.object();
aparser = new X.parserVTK();

load('avf.vtk', parse);

//
// 
// 
//
// 
// p = new X.parserNRRD();

