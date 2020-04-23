//长方形面积函数

/**
 * 
 * @param {number} w 
 * @param {number} h 
 */
function area(w,h)
{
    // es5
    if(arguments.length<2)
    {console.error('参数不够');
    throw new error('参数不够');//终止代码运行
    return ;
}
if(typeof w!='number' || typeof h!= 'number')
{
    throw new error('参数类型有误')
    return ;

}
    return w*h;
}
console.log(area(2,'121233'));
// var area = function (w,h)
// {
//     //匿名函数
// }
//  let getArea=( w, h)=>w*h;//es6