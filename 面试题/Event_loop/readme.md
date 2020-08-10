1. settimeout 
2. Promise
3. 请求
4. addevent
5. 页面


一个浏览器通常由以下几个常驻的线程：

渲染引擎线程，负责页面的渲染
js引擎线程，负责js的解析和执行
定时触发器线程，处理setInterval和setTimeout
事件触发线程,处理DOM事件
异步http请求线程，处理http请求

什么是 Event-loop:
浏览器协调用户交互，渲染，网络等任务

宏任务、任务
setTimeout，整体的一段script
由宿主环境引起的任务

微任务
Promise.then MuatationObserver IntersectionObeserver  Process.nextTick
由 js 本身引起的任务

## 流程
只要宏任务队列 不为空
1. 从宏任务队列里面取出 **一个** 执行
2. 从微任务里面取出**所有**的微任务执行，如果在这执行过程中又产生了微任务，再次重复第二步。
3. 有可能进入浏览器的更新渲染阶段
   1. reqAnimationframe 回调
   2. IntersectionObeserver 回调
   3. 重新绘制渲染
4. 再次重复第一步