---
title: Nginx
date: 2022-3-30
sidebar: 'auto'
tags:
 - 开发小记
categories: 
 - utils
---

# Nginx

## server_name

### 基础语法



![1646554079](/nginx/1646554079.jpg)

### 匹配优先级

![1646554260](/nginx/1646554260.jpg)

## root跟alias语法区别

![1646554422](/nginx/1646554422.jpg)

![1646554498](/nginx/1646554498.jpg)

![1646554542](/nginx/1646554542.jpg)

![1646554624](/nginx/1646554624.jpg)

![1646554698](/nginx/1646554698.jpg)



## location的基础用法

![1646555135](/nginx/1646555135.jpg)

![1646555726](/nginx/1646555726.jpg)

![1646555785](/nginx/1646555785.jpg)

![1646555885(1)](/nginx/1646555885(1).jpg)

注释： 不带 - 先判断是否是个目录 - 再判断是否是个文件

​            带 - 只会判断是否是个目录

## stub_status 模块 - 监控nginx

![1646556201(1)](/nginx/1646556201(1).jpg)

![1646556229(1)](/nginx/1646556229(1).jpg)

## rewrite模块中的return

![1646557208(1)](/nginx/1646557208(1).jpg)

![1646562550(1)](/nginx/1646562550(1).jpg)

![1646562793(1)](/nginx/1646562793(1).jpg)

![1646562832(1)](/nginx/1646562832(1).jpg)

## if指令

![1646563549(1)](/nginx/1646563549(1).jpg)

![1646563634(1)](/nginx/1646563634(1).jpg)

## autoindex 模块

![1646564302(1)](/nginx/1646564302(1).jpg)

![1646564311(1)](/nginx/1646564311(1).jpg)

## Nginx常用变量

![1646564808(1)](/nginx/1646564808(1).jpg)

![1646564834(1)](/nginx/1646564834(1).jpg)

![1646565011(1)](/nginx/1646565011(1).jpg)

![1646565036(1)](/nginx/1646565036(1).jpg)

![1646565133(1)](/nginx/1646565133(1).jpg)

![1646565865(1)](/nginx/1646565865(1).png)

![1646565882(1)](/nginx/1646565882(1).jpg)

## upstream模块

![1646572457(1)](/nginx/1646572457(1).jpg) 

![1646572829(1)](/nginx/1646572829(1).jpg)

![1646572923(1)](/nginx/1646572923(1).jpg)

![1646572945(1)](/nginx/1646572945(1).jpg)

![1646573013(1)](/nginx/1646573013(1).png)

![Snipaste_2022-03-06_21-32-09](/nginx/Snipaste_2022-03-06_21-32-09.png)

![Snipaste_2022-03-06_21-33-36](/nginx/Snipaste_2022-03-06_21-33-36.png)

## proxy_poass指令

![Snipaste_2022-03-06_21-42-24](/nginx/Snipaste_2022-03-06_21-42-24.png)

![Snipaste_2022-03-06_21-42-45](/nginx/Snipaste_2022-03-06_21-42-45.png)

![Snipaste_2022-03-06_22-11-06](/nginx/Snipaste_2022-03-06_22-11-06.png)

![Snipaste_2022-03-06_22-11-16](/nginx/Snipaste_2022-03-06_22-11-16.png)