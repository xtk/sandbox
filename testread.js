function go() {

  console.log('gogogo');
  
  var client = new XMLHttpRequest();
  client.onreadystatechange = handler;
  client.open("GET", "P0004_model.vtk");
  client.send();
  
  function test(data) {

    // taking care of data
    console.log(new Date());
    
    //
    // the following takes 3m:53s on my macbook air
    //
    // while (data.length > 1) {
    //      
    // endOfNextLine = data.indexOf('\n');
    // // console.log(data.substr(0, endOfNextLine));
    // data = data.slice(endOfNextLine + 1);
    //      
    // }
    
    // the following takes less than 1 sec but more memory
    // arr = data.split('\n');
    // console.log(arr[0]);
    
    arr = data.split('\n');
    l = arr.length;
    s = 0;
    for (i = 0; i < l; i++) {
      
      cur = arr[i].split(' ');
      
    }
    
    console.log('all done');
    console.log(new Date());
    // console.log(data.substr(0, ));
  }
  
  function handler() {

    if (this.readyState == 4 && this.status == 200) {
      // so far so good
      if (this.responseText != null) {// success!
        test(this.responseText);
      } else {
        test(null);
      }
    } else if (this.readyState == 4 && this.status != 200) {
      // fetched the wrong page or network error...
      test(null);
    }
  }
}
