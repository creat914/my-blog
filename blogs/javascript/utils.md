---
title: js的一些基本工具类操作
date: 2021-10-17
sidebar: 'auto'
tags:
 - utils
categories: 
 - javascript
---


## 用JavaScript获取图片真实尺寸大小的简单方法
使用JavaScript，我们能获取一个图片的真实宽度和高度：

```
myImage.addEventListener('onload', function() {
	console.log('我的宽度是: ', this.naturalWidth);
	console.log('我的高度是: ', this.naturalHeight);
});
```
## 直接对样式表进行添加和删除样式规则

 ```js
 function addCSSRule(sheet, selector, rules, index) {
 	if(sheet.insertRule) {
 		sheet.insertRule(selector + "{" + rules + "}", index);
 	}
 	else {
 		sheet.addRule(selector, rules, index);
 	}
 }
 
 // Use it!
 addCSSRule(document.styleSheets[0], "header", "float: left");
 ```
## 用JavaScript获取伪元素(pseudo-element)属性
 
 ```js
 // Get the color value of .element:before
 var color = window.getComputedStyle(
 	document.querySelector('.element'), ':before'
 ).getPropertyValue('color');
 
 // Get the content value of .element:before
 var content = window.getComputedStyle(
 	document.querySelector('.element'), ':before'
 ).getPropertyValue('content');
 ```
 
## rimraf 

```
快速删除node_moudul 根目录执行
```

## scrollIntoView() 

```
让元素出现在窗口
    alignToTop 是一个布尔值。true ：窗口滚动后元素的顶部与视口顶部对齐。false ：窗口滚动后元素的底部与视口底部对齐。
    scrollIntoViewOptions 是一个选项对象。behavior ：定义过渡动画，可取的值为 "smooth" 和 "auto" ，默认为 "auto" 。
    block ：定义垂直方向的对齐，可取的值为 "start" 、 "center" 、 "end" 和 "nearest" ，默认为  "start" 。
    inline ：定义水平方向的对齐，可取的值为 "start" 、 "center" 、 "end" 和 "nearest" ，默认为  "nearest" 。
不传参数等同于 alignToTop 为 true 
```

## 部署前端项目到github
### 添加密钥
```$xslt
 ssh-keygen -t rsa -C github登录邮箱 到本地.ssh文件夹复制生成的密钥
配置github
头像->setting->ssh and Gpg keys-> 填写生成的ssh密钥
使用ssh方式提交代码 避开登录验证
验证 是否密钥生效
ssh -t git@github.com
```
### 配置githubpage
进入项目然后点击setting 找到page 填写分支名跟根目录 点击保存