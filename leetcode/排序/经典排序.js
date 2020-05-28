var arr = [5,4,8,1,3,7,0,9,2,6];
        var len = arr.length;
        var min = null;
        var tmp = null;
        //选择排序
        for(var j=0; j<len-1 ; j++){
            min = j;
            for(var i=j+1; i<len ;i++){
                if(arr[i] < arr[min]){
                    min = i;
                }
            }
            tmp = arr[j]
            arr[j] = arr[min];
            arr[min] = tmp;

            console.log('第'+(j+1)+'次循环', arr);

        }




        ////希尔排序
        var arr = [5,4,8,1,3,7,0,9,2,6];

        function shellSort(arr) {

            var len = arr.length;
            var tmp = undefined;
            var gap = Math.floor(len/2);

            while(gap >= 1) {
                for(var i=0; i<len; i++){
                    for(var j=i; j>=gap; j=j-gap){
                        if(arr[j] < arr[j-gap]){
                            tmp = arr[j];
                            arr[j] = arr[j-gap];
                            arr[j-gap] = tmp;
                        }
                    }
                }
                gap = Math.floor(gap / 2);
            }

            console.log(arr);
            return arr;
        }

        shellSort(arr);