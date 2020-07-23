function foo(a){
    var b = a
    return a + b
}
var c = foo(2)

// L a=2; b=2 c=foo 
// R =a  a  b foo 