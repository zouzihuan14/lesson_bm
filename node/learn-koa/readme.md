koa node web 开发框架
7天后 blog网站
一个web服务就是一个app
koa  在3000端口提供了http协议访问服务
http协议是干嘛的？
ctx context 上下文环境
http协议诞生于1991年  用于传输学术论文的
采用基于请求req相应res的模式，在网络间传输HTML  超文本的内容 
http /0.9 1991
HTTP（web server应用层协议）基于TCP（Transmission control protocol）协议
TCP连接  三次握手
应用层 HTTP 
会话层
传输层 TCP
网络层
数据链路层
物理层
建立连接后 会发送一个GET请求行（request method GET url /）的信息
GET / template.html
- 服务器接收到请求信息后，读取对应的HTML文件 并将数据以SAC 返回用户浏览器
- 断开连接

- http req + res 可以完成一次请求？
 HTTP网络通信协议 基于请求应答模型
 writeHead 在做什么事情 
 req res 之间是什么关系
 n : 1  说一下  
 n很大  高并发  


 img 不可以显示
 怎么办
 1. img 是一个资源  http协议