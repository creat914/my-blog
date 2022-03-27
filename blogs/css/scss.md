---
title: scss 入门
date: 2021-3-27
sidebar: 'auto'
tags:
 - scss
categories: 
 - css
---

# 基础用法与功能：

## 1. **变量**（定义变量后，在选择器里可以直接引用）：

如：我定义一个变量名为 $yanse，值为颜色rgb(223, 148, 148)

```
$yanse: rgb(223, 148, 148);

```

直接在选择器引用：

```
h1{
        color: $yanse；
    }

```

当然变量也可以套娃，比如我定义一个变量名为 kuang，里面引用了kuang，里面引用了 kuang，里面引用了yanse

```
$yanse: rgb(223, 148, 148);
$kuang: 1px solid $yanse;

```

然后也直接用：

```
 h1{
        border: $kuang;
    }

```

## 2. **嵌套**（父选择器里可以嵌套子选择器）

如：有以下标签

```
 <div>
        <ul>
            <li></li>
        </ul>     
    </div>

```

可以直接这样写：

```
div{
    height: 100px;
    ul{
        height: 80px;
        li{
           height: 50px;
        }
    }
}

```

相当于：

```
div {
  height: 100px;
}
div ul {
  height: 80px;
}
div ul li {
  height: 50px;
}

```

若 li 有伪类选择器：hover可以这样写（里面添加&：hover{}）：

```
div{
    height: 100px;
    ul{ 
        height: 80px;
        li{
           height: 50px;
           &:hover {
             color: #000;
           }
        }
    }
}

```

相当于又写了：

```
div ul li:hover {
  color: #000;
}

```

不止选择器，属性里也可以嵌套，如这样写：

```
div{
    height: 100px;

    font: {
        family: 'fangsong';
        size: 20px;
        weight: 700;
    }
    border: 1px solid red {
       left: 0;
       top: 0;
    }
}

```

相当于：

```
div {
  height: 100px;
  font-family: "fangsong";
  font-size: 20px;
  font-weight: 700;
  border: 1px solid red;
  border-left: 0;
  border-top: 0;
}

```

## 3. **mixin 混合** （相当于预先写好了一组样式，其它地方直接引用）：

基本语法：

```
@mixin 名字（参数1，参数2，...）
{
........样式.......

}

```

如（无参数的，里面也可以嵌套，下面定义了一个名字为hunhe的mixin，然后在div这个选择器里通过（@include 名字）调用 ）：

```
@mixin hunhe {
     color: red;
     a {
         font-size: 12px;
     }
}

div{
    @include hunhe;  
}

```

相当于：

```
div {
  color: red;
}
div a {
  font-size: 12px;
}

```

有参数的（更灵活，参数相当于你要的数值，参数名前面要写$，调用时值的位置要对）：

如：

```
@mixin hunhe($one,$two) {
     color: $one;
     a {
         color: $one;
         font-size: $two;
     }
}

div{
    @include hunhe(red,15px);  
}

```

*div也可以这样写,指定参数名，参数位置就可以随意变换：

```
div{
    @include hunhe($two:15px,$one:red);  
}

```

上面相当于：

```
div {
  color: red;
}
div a {
  color: red;
  font-size: 15px;
}

```

## 4. **继承/扩展**（一个选择器可以继承另一个选择器的全部样式）

如: .two类里继承了.one类的全部样式 （**@extend  名字**）；  *还不止.one的，跟.one相关的都继承了* ，具体如下：

```
.one{
    color: #000;
}
.one a{
    font-size: 10px;
}
.two{
    @extend .one;
    background-color: #fff;
}

```

相当于：

```
.one, .two {
  color: #000;
}

.one a, .two a {
  font-size: 10px;
}

.two {
  background-color: #fff;
}

```

## 5. **@import** 引入一个.scss后缀的文件作为自己的一部分，被引入的那个文件并不会转换成.css格式的，所以此文件命名要注意以下划线开头，如：_base.scss ，引入它的时候不用写下划线。

语法：@import: ".....路径";如：建立一个文件叫 _base.scss，里面写上一些选择器和样式，然后在一个正常的如one.scss文件里引入它,假如目录是同等级的：

```
@import: "base.scss";

```

这样.one.scss就有了_base.scss里的全部内容。

## 6. **计算功能** （SASS允许在代码中使用算式）如：

```
  $chang: 20px;
body{   
    margin: (10px*2);
    left: 20px + $chang;
} 

```

相当于：

```
body {
  margin: 20px;
  left: 40px;
}

```

## 7. **颜色函数**（SASS提供了一些内置的颜色函数，以便生成系列颜色。）

**hsl（色相，饱和度，明度）;**

```
body{   
   background-color: hsl(5, 20%, 20%);
} 

```

相当于：

```
body {
  background-color: #3d2b29;
}

```

**hsl（色相，饱和度，明度，不透明度）;**

```
body{   
   background-color: hsl(5, 20%, 20%,0.5);
} 

```

相当于：

```
body {
  background-color: rgba(61, 43, 41, 0.5);
}

```

**用来调整色相： adjust-hue(颜色，调整的度数)；**

```
body{   
   background-color: adjust-hue(hsl(0,100,50%), 100deg);
} 

```

相当于：

```
body {
  background-color: #55ff00;
}

```

**用来调整颜色明度：lighten让颜色更亮，darken让颜色更暗**如：lighten（颜色，增加亮度的百分比）；

```
body{   
   background-color: lighten(rgb(228, 145, 145),50%);
   color: darken(rgb(228, 145, 145),50%);
} 

```

相当于：

```
body {
  background-color: white;
  color: #5f1717;
}

```

**用来调整颜色纯度 saturate让颜色更纯 ，desaturate让颜色不纯**saturate（颜色，百分比）；

## 8. **Interpolation** 把一个值插入到另一个值，具体用法如下 #{变量} 如：

```
$yanse: color;
body{   

   #{$yanse}:red;
   
}  

```

相当于：

```
body {
  color: red;
}

```

1. **if 判断（逻辑跟C语言差不多）：**

语法：

```
@if 判断条件 {
.......执行语句...
} @else {
  ...else有就写没就不写....
}
 

```

如：

```
$jia: false;
body{   

   @if false{
       color: red;
   }
   @if 2>3 {
       background-color: white;
   }@else{
       background-color: black;
   }
   
}  

```

相当于：

```
body {
  background-color: black;
}

```

## 10. **for循环**

语法：

```
结束值不执行：
@for 变量 from 开始值 through 结束值 {
     ......
}
结束值也执行：
@for 变量 from 开始值 to 结束值 {
     ......
}

```

例子：

```
@for $i from 1 to 3 {
    
    .div#{$i}{
       height: $i*20px;
    }

}

```

相当于：

```
.div1 {
  height: 20px;
}

.div2 {
  height: 40px;
}

```

## 11. **列表循环**，能循环一遍一个列表的值，列表相当于数组；

语法：

```
@each 变量 in 列表{
...
}

```

例子：

```
$yanse: red blue black;
@each $i in $yanse {
    
    .div#{$i}{
      color: $i;
    }

}

```

相当于：

```
.divred {
  color: red;
}

.divblue {
  color: blue;
}

.divblack {
  color: black;
}

```

## 12. **while循环**，有判断条件更灵活。

语法：

```
@while 条件 {
   ...
}

```

例子：

```
$gao: 1;
@while $gao<4 {
    .div#{$gao}{
        height: $gao*10px;
    }
   $gao : $gao+1;
}

```

相当于：

```
.div1 {
  height: 10px;
}

.div2 {
  height: 20px;
}

.div3 {
  height: 30px;
}

```

## 13.**自定义函数 function**,自己定义的函数可以调用；

语法：

```
@function 名字(参数1，参数2，..){
....
}

```

例子：

```
@function ziji ($bian)
{
    @return $bian+10px;
}

div{
    width: ziji(5px);
}

```

相当于：

```
div {
  width: 15px;
}
```