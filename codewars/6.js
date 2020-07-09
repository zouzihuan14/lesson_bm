function humanReadable(seconds) {
    // TODO
    let temp = seconds%60
    let temp1 =Math.floor(seconds/60)
    if(temp1>59){
        let temp2 = Math.floor(temp1/60)
        let temp1 = temp1%60
    }
    else{
        temp2 = 0
    }
    let arr = [temp2,temp1,temp]
    for(node of arr){
        if(node<10)
        node = '0'+node
    }
    let str = arr.join(':')
    return str
  }