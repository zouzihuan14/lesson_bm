// Examples: spinWords( "Hey fellow warriors" )
//  => returns "Hey wollef sroirraw" 
//  spinWords( "This is a test") 
//  => returns "This is a test" 
//  spinWords( "This is another test" )
//  => returns "This is rehtona test"


function spinWords(str){
    //TODO Have fun :)
    let temp = str.split(' ')
    let arr = []
    for(let node of temp){
        if(node.length>4){
            let resultStr = ''
            for(var i = node.length-1; i >= 0; i--){
                resultStr += node.charAt(i);
            }
            arr.push(resultStr)
        }
        else{
            arr.push(node)
        }
    }
    let result = arr.join(' ')
    return result
  }