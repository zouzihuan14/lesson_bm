//return the total number of smiling faces in the array
function countSmileys(arr) {
    let nums = 0
    for(a in arr){
        if(arr[a].length>3 || arr[a].length<2)
        nums = nums
        else if(arr[a].length=3)
        {
           if(arr[a]===str3 || arr[a]===str4){
               nums = nums + 1
           }
        }
        else{
            if(arr[a]===str1 || arr[a]===str2){
                nums = nums + 1
            }
        }
    }
    return nums
}
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))