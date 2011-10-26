function go() {

  console.log('gogogo');
  
  var client = new XMLHttpRequest();
  client.onreadystatechange = handler;
  client.open("GET", "P0004_model.vtk");
  client.send();
  
  function test(data) {

    // taking care of data
    console.log('got it');
    console.log(this.responseXML);
  }
  
  function handler() {

    if (this.readyState == 4 && this.status == 200) {
      // so far so good
      if (this.responseXML != null) {// success!
        test(this.responseXML);
      } else {
        test(null);
      }
    } else if (this.readyState == 4 && this.status != 200) {
      // fetched the wrong page or network error...
      test(null);
    }
  }
}
