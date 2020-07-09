function foo() {
    var count =4
    this.count++;
    console.log('count' + this.count); 
 
} 
count =1;
foo()