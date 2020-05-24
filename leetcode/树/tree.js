// 深度优先：前序(根左右)、中序(左根右)、后序（左右根）
// 广度优先：层次遍历
var invertTree = function(root) {
    function swap(node){
        if(!node) return 
        [node.left,node.right]=[node.right,node.left]
        swap(node.left)
        swap(node.right)
    }
    swap(root)
    return root
};