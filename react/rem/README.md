em: 相对于自己的font-size 自己没有设置就继承父类的font-size
rem:相对于html的font-size  不同的设备HTML上的fontsize不一样 故全部使用rem 所有元素都会等比例缩放

DPR device piex ratio  设备真实像素
css 1px 在不同的设备上面 渲染出来的像素是不一样的   iPhone6 2px iPhone X 3px
想要 1px
1. meta init-scale ：0.5 所有元素缩小0.5倍
   写元素宽高的时候  按照扩大两倍之后写 如 一个元素 20*20  必须必须写成40*40
   这样量得的尺寸就是扩大两倍之后的尺寸


2. 等比缩放
  屏幕划分 10等分
  750/10 =75
  1125/10 =122.5
  一份就是1rem  html:font-size 75px 或者 112.5px
  x/10 = 56px/750px  => x=?
  ?/1o = ??px/ 1025px =>??

