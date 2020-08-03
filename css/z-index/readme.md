## 
我们的一个网页 是沿着一条 Z轴排开的 (ps 图层)

## 层叠上下文形成
 1. position不为static
 2. filter transform perspective 不为none
 3. will-change 

 ## layers (图层)
 共同点：都是z轴 顺序
 transform:translate3d
 will-change
 video 标签
 backface-visibility 为hidden
 css3里面的animation动画开始的时候

## 
js-> relayout -> repaint ->composite(合成) - GPU


## 提升layers的好处
- 当前这个layers变化不会影响其他layers
- 对于 transform、opacity产生变化了，不会经过relayout repaint跳到composite 

## flex 
flex容器里面的每一项
flex-grow, flex-shrink 与 flex-basis
align-self：会覆盖align-item
order 

flex容器
display:flex
主轴 交叉轴 决定排列的方向
flex-direction : row / cloumn
flex-wrap 是否换行
justify-content: 主轴方向 元素排列位置
align-items：交叉轴方向 
align-content 

## 圣杯 双飞翼
left 固定 main 自适应 right固定
html结构 让main在前面
<div>main</div>
<div>left</div>
<div>right</div>
