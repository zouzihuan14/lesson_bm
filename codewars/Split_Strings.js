/*
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

*/

function solution(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
  }