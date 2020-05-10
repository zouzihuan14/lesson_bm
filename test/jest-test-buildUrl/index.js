// const math =require('./math');
// const {add,minus}=math;
const {add,minus}=require('./math');

// let result = add(3,7)
// let expected=10;
// if(result !==expected){
//     throw new Error('3+7=10');
// }

// let result = minus(3,7)
// let expected=-41;
// if(result !==expected){
//     throw new Error('3+7=10');
// }

function test(desc,fn){
    try{
        fn()
        console.log(`√:${desc}通过`)
    }catch(err){
        console.log(`×:${desc}不通过`)
    }
}
test('测试减法',()=>{
    expect(minus(1,7)).toBe(-4)
})
test('测试加法',()=>{
    expect(add(3,7)).toBe(10)
})
function expect(result){
    return {
        toBe:function (value){
            if(result !==value){
                throw new Error('预期值与真实值不一样')
            }
        }
    }
}
// expect(minus(3,7)).toBe(-4)
// expect(add(3,7)).toBe(10)