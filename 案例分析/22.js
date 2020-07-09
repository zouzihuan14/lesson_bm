var i = 0;
function outerFn(){
  function innnerFn(){
       i++;
       console.log(i);
  }
  return innnerFn;
}
var inner1 = outerFn();
var inner2 = outerFn();
inner1();
inner2();
inner1();
inner2();     //1 2 3 4

function outerFn(){
    var i = 0;
      function innnerFn(){
          i++;
          console.log(i);
      }
      return innnerFn;
    }
    var inner1 = outerFn();
    var inner2 = outerFn();
    inner1();
    inner2();
    inner1();
    inner2();    //1 1 2 2