//函数就是对一个功能进行封装
// let a = 2;//全局变量
//时间复杂度，n*n=O(n^2)
// var twoSum = function(nums, target){
//     let arr= [];//坐标放进去
//     for(let i =0; i<nums.length;i++) //暴力解法
//     {
//         for(let j=i+1;j<nums.length;j++){//内层循环
//             //不能自己加自己
//             if(nums[i]+nums[j]===target)
//             {
//                 arr=[i,j];
//                 return arr;
//             }
//         }
//     }
// }

    const twoSum = function(nums,target){
        //两重循环，
        let map={};//对象自变量
        nums.forEach(function(e,i){
            //console.log(e,i);
            map[e]=i;
        })
    
    for(let i=0;i<nums.length;i++)
    {
        let j=map[target-nums[i]];
        if(j&&j!==i)
        {
            return [i,j];
        }
    }
};