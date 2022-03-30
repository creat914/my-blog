---
title: 移动端问题
date: 2022-3-30
sidebar: 'auto'
tags:
 - 兼容性问题
categories: 
 - question
---

## 移动端输入框问题
ios 端
# 键盘设置 type number还能输入字母 / 在输入框设置type=number时 如果输入其他非数字字符，校验非空时会显示内容为空
解决方案 
设置type = 'tel' 或者监听键盘事件去除非数字字符 onkeyup="this.value=this.value.replace(/\D/g, '')；

# 读取信息时重复复制短信内容到输入框
解决方案 
设置最大长度 或用正则截取 maxlength="4" oninput="this.value=this.value.replace(/\D/g, '')";

## 解决ios audio无法自动播放、循环播放的问题
# ios手机在使用audio或者video播放的时候，个别机型无法实现自动播放
// 解决ios audio无法自动播放、循环播放的问题
```js
var music = document.getElementById('video');
var state = 0;
document.addEventListener('touchstart', function(){
    if(state==0){
      music.play();
      state=1;
      }
}, false);
document.addEventListener("WeixinJSBridgeReady", function () {
    music.play();
}, false);
//循环播放
music.onended = function () {
   music.load();
   music.play();
}
```

## ios跟安卓下的日期兼容
// window和安卓支持，ios和mac不支持
new Date('2020-11-26'); 
// window和安卓支持，ios和mac支持
new Date('2020/11/26');

## IOS手机容器滚动条滑动不流畅
overflow: auto;
-webkit-overflow-scrolling: touch;