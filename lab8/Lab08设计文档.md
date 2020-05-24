# Lab8设计文档

## CCS改动情况

因为微信群里助教说可以改CSS文件，所以我为table添加了一个样式，使其居于网页中间并且与图片宽度相等
## JS部分

###问题1

设置两个函数pageLeft和pageRight,分别控制向左翻页和向右翻页，原理为改变wrap类中left样式的值（改变显示图片）以及改变相应span的类名（改变角标）。

###问题2

声明一个变量judge，调用setInterval()函数，使其每2秒运行一次pageRight函数，代码如下:
>```
>let judge = setInterval("pageRight()",2000); 
>```
再分别设置onmouseenter事件和onmouseleave事件通过改变judge来实现暂停/开始轮播的效果。

###问题3

使用循环为每一个span都添加相应的点击事件，使得当点击对应span时，left改变为相应的值，已经对应span的类名改为on(同时删除原先span的类名)，以此达到跳转到对应图片的效果

###问题4

使用jQuery为td元素添加鼠标点击事件，当焦点在td上时，使用html修改td内元素为input（input的value为原先td的text），当input失去焦点时，再使用html修改td的元素（td的text为原先input的value）。

