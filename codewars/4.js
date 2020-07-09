var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    if(Array.isArray(iterable)){
        let temp = [iterable[0]]
        for(let i =1; i<iterable.length; i++){
            if(iterable[i-1] !== iterable[i]){
                temp.push(iterable[i])
            }
        }
    }
    if(String.isString(iterable)){
        iterable1 =iterable.split('')
        let temp = [iterable1[0]]
        for(let i =1; i<iterable1.length; i++){
            if(iterable1[i-1] !== iterable1[i]){
                temp.push(iterable1[i])
            }
        }
    }
    return temp
  }
