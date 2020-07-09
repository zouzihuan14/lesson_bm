function sumTwoSmallestNumbers(numbers) {  
    if(numbers.length < 4){
        return false
    }
    let min1 = 100, min2 = 100; 
    for (let  i = 0; i < numbers.length; i++) {
        if (numbers[i] < min1) {
            min2 = min1;
            min1 = numbers[i];
        } else if (numbers[i] < min2) {
            min2 = numbers[i];
        }
    }
    return min1+min2
  }
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
