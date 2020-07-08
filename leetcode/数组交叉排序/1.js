var shuffle = function(nums, n) {
    let arr1 = []
    let arr2 = []
    let result = []
    for(let i =0 ;i<n; i++)
    {
        arr1[i] = nums[i]
    }
    for(let i =0 ;i<n; i++)
    {
        arr2[i] = nums[n+i]
    }
    console.log(arr1,arr2)
    arr2.forEach((item, index) => {
    arr1.splice((index + 1) + index, 0, item);
});
    return arr1 
};
console.log(shuffle([2,5,1,3,4,7],3))