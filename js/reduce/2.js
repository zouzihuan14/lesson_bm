var data = [4,8,15,16,23,42];
        var add = function (a,b){
            return a+b
        }
        Array.prototype.myReduce = function (f, value=0) {
            for (let i = 0; i < this.length; i++) {
                value = f(this[i], value)
                //Array.prototype.myReduce中的this指向调用此方法的单位
                // data.myReduce(add,10)  让this指向data数组，然后在for循环里面进行回调。
            }
            return value
        }
        var sum = data.myReduce(add)
        console.log(sum)
