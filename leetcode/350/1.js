var intersect = function(nums1,nums2) {
    let arr = []
    if(nums1.length > nums2.length){
        for(a in nums2){
            if(nums1.includes(nums2[a])){
                var b = nums1.indexOf(nums2[a])
                nums1.splice(b,1)
                arr.push(nums2[a])
            }
        }
    }
    else{
        for(a in nums1){
            if(nums2.includes(nums1[a])){
                var b = nums2.indexOf(nums1[a])
                nums2.splice(b,1)
                arr.push(nums1[a])
            }
        }
    }
    return arr
};
console.log(intersect([1,2],[2,1]))