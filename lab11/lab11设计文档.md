# lab11设计文档

## cookie与session的功能

cookie常用于识别用户。cookie 是一种服务器留在用户计算机上的小文件。每当同一台计算机通过浏览器请求页面时，这台计算机将会发送 cookie。通过 PHP。

session用于存储关于用户会话（session）的信息，或者更改用户会话（session）的设置。Session 变量存储单一用户的信息，并且对于应用程序中的所有页面都是可用的。

## 两者的优缺点

### cookie

优点:不需要服务器资源空间，持久时间更长。
缺点:储存空间少，且由于在HTTP请求中的cookie是明文传递的，所以不安全。

### session

优点：储存在服务器中，安全性高
缺点：占用服务器资源

