



## multipart/form-data  编码方式
生成一个 boundary=----WebKitFormBoundarypbS2qkvLMPF3Nrtp
- 如下 205579936434786223734260171678
```js
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"/ "a.jpeg"
Content-Type: text/plain   image/jpeg   

123456789

-----------------------------205579936434786223734260171678--
```

前面两种编码对于二进制文件 或者一些 非ASCII字符  处理很低效
后端处理文件上传；
- 分隔符分割
- 得到分割之后的每一块，文件内容 fs.write()   保存文件了