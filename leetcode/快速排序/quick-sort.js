function partition(nums,left,right){
    if(left >= right)  return ;
    let i=left;
    let j=right;
    let provit = nums[left];
    while (left<right){
        // 1. 右边扫描，比基准值小的数 如果这个数比基准值大，一直往前走
        while(left<right&&nums[right]>=provit)  right--;
        nums[left]=arr[right]
        // 2. 左边扫描，比基准值大的数 如果这个数比基准值小，一直往前走
        while(left<right&&nums[left]<=provit)  left++;
        nums[right]=nums[left]
    }
    nums[left]=provit;
    // return left  知道基准值的位置
    partition(nums,i,left-1)
    partition(nums,left+1,j)

}


const arr=[8,9,7,-1,5,6,8,9,434,53,23,24,56,345,32]
// 大问题

const quickSort=function(arr){
    partition(arr,0,arr.length-1)
}
quickSort(arr)
console.log(arr)

// //小问题
// partition(nums,0,(length-1)/2)
// partition(nums,(length-1)/2,length-1)

