// var longestValidParentheses = function(s) {
//     s = 'qweqweq'
//     let arr = s.split('')
//     let num = 0 ;
//     let temp=[] ;
//     temp.push(arr[0])
//     var i = 1;
//     while(i<arr.length)
//     {
//         temp.push(arr[i])
//         if(temp[temp.length-1] != temp[temp.length-2])
//         {
//             temp.pop()
//             temp.pop()
//         }
        
//     }
//     return num
// };

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestValidParentheses = function(s) {
//     var ans=0;
//     var len=s.length;
//     var str=[];
//     str.push(-1);
//     for(var i=0;i<s.length;++i){
//         if(s[i]==='('){
//            str.push(i);            
//         }
//         else{
//             str.pop();
//             if(str.length===0){
//                 str.push(i);
//             }
//             else{
//                 ans=Math.max(ans,i-str[str.length-1]);
//             }
//         }
//     }
//     return ans;
// };



// codewars  题目 
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// function digital_root(n) {

//     let str = n.toString()
//     let arr = str.split('')
//     let ans = 0;
//     for(let i = 0 ; i < arr.length ; i++ ){
//         ans = ans + parseInt(arr[i])
//     }
//     if(ans > 9) {
//         return digital_root(ans)
//     }
//     return ans
//   }
//   console.log(digital_root(11111))

// 不同重复单词
// toLowerCase
function isIsogram(str){
    let arr = str.toLowerCase().split('')
    let temp = new Array()
    let i = 0;
    while(i < arr.length){
        
        for(let j = 0 ; j <temp.length ; j ++ )
        {
            if(temp[j]===arr[i]){
                return false
            }
        }
        temp.push(arr[i])
        i++
    }
    return true;
  }

  console.log(isIsogram('asfgsj'))