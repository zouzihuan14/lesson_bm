//位运算
// 左移

// 10 << 1  ==> 20
// 将二进制全部左移，然后补全右边空出来的一项
// 右移
//将二进制全部右移，然后移除右边多出来的一项

// 按位操作
    // 按位与     &

    // 按位或     | 

    // 按位异或   ^


    function buble(arr){
        let a = arr.length;
        for(i = 0 ; i < a - 1 ; i++)
        for(j = 0 ; j < a - i - 1 ; j++)
        {
            if(arr[j] > arr[j+1])
            {
               
                let temp=arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
        return arr
    }
    console.log(buble([2,4,5,71,43345,342,21]))