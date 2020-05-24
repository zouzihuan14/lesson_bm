var preorderTraversal = function(root) {
    let arr=[]
    function helper(node){
    if(node){
    let val = node.val
    arr.push(val)
    helper(node.left)
    helper(node.right)
    }
    }
   helper(root)
   return arr;
    //遇到右子树 也要root  left right顺序
    
};