    function Foo() {
        Foo.a = function() {
            console.log(1)
        }
        // new 过程  1.把构造函数执行一遍 2.把this
        this.a = function() {
            console.log(2)
        }
    }
    Foo.prototype.a = function() {
        console.log(3)
    }
    Foo.a = function() {
        console.log(4)
    }
    Foo.a();
    let obj = new Foo();
    obj.a(); // 按顺序查找
    Foo.a();
