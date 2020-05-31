## req 
浏览器： xhr fetch
node http.get()
不同的api ->http -> 一样

http:超文本传输协议

 ```js
    const xhr = new Xmlhttprequest();
    xhr.setheader('Content-Type':'application/json')
    xhr.open('POST','api.com',true)
    xhr.send({a:1,b:2})
 ```
- 浏览器拼接报文
http1.1 报文(纯文本)
- 首行
- 首部
- \r\n
- 实体



## 解析报文
 split('\r\n')
 限制：必须等到拿到一个完整的报文
 现实：报文传输，可以允许我们，分段传输
 ## 解析
 有限机 FSM( finite state machine )
 infinity 无穷
 浏览器解析报文：body(html),headers,相应行


 ## 编译原理

 代码都是字符串 ：
 - 词法分析(分词)：
 - 语法分词:栈 LL LR
 - 生成目标代码

