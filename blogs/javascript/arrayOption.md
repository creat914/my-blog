---
title: 数组方法
date: 2021-10-17
sidebar: 'auto'
tags:
 - javascript
categories: 
 - javascript
---

# 数组方法

### 一、数组转字符串方法

##### 1、Array.prototype.toSting()

```
用法：arr.toString()

const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString()); // 1,2,a,1a

```

##### 2.Array.prototype.join()

```
用法：arr.join([separator])

```

`separator` 可选，默认是`,`分割， 若是`""`则所有元素之间都没有任何字符

```js
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // FireAirWater
console.log(elements.join('-')); // Fire-Air-Water

```

str.split()

### 二、堆栈方法：

| 方法名  | 解释           | 原数组->新数组                 | `**`返回值          |
| ------- | -------------- | ------------------------------ | ------------------- |
| push    | 数组后增加一位 | [1,2,3,4,5]->[1, 2, 3, 4,5,10] | 增加后数组的长度`6` |
| pop     | 数组后删除一位 | [1,2,3]->[1, 2]                | 被删除的元素`3`     |
| unshift | 数组前增加一位 | [1,2,3]->[10,1, 2, 3]          | 增加后数组的长度`4` |
| shift   | 数组前删除一位 | [1,2,3]->[ 2, 3]               | 被删除的元素`1`     |

### 三、排序相关

1. sort 返回值=> 排序后的数组
2. reverse 倒序 返回值=> 排序后的数组
3. 乱序排序 返回值=> 排序后的数组

```js
// 乱序排序实现
let arr = [1,2,3,4]
function compare(){
return Math.random()-0.5
}
arr.sort(compare) // [1,3,4,2]

```

### 四、数组拼接方法

##### 1.Array.prototype.concat 返回值=> 拼接后的数组

```js
let arr = [1,2];
arr.concat(3,4); // [1,2,3,4]
arr.concat([3,4]); // [1,2,3,4]
arr.concat([3,[4]]); // [1,2,3,[4]]

```

### 五、数组的删改

##### 1.Array.prototype.slice(start,end) // `左闭右开` `返回值` 截取之后的数组

```js
var arr = [1,2,3,4,5];
arr.slice() // [1,2,3,4,5] ***拷贝原数组
arr.slice(2) // [3,4,5]
arr.slice(2,4) // [3,4]
arr.slice(4,2) // []  没有交集
arr.slice(-2,-1) // 从数组后开始算 [4]

// 字符串转数组
var str ="123456";
Array.prototype.slice.call(str) // [1,2,3,4,5,6]

function test(){
console.log(Array.prototype.slice.call(arguments)); 
}
test(1,2,3,4,5,6) // [1,2,3,4,5,6]

```

##### 2.Array.prototype.splice(start,deleteCount,...new) // `左闭右开` start,删除个数,...新增 `返回值` 被删除之后的数组

```js
var arr = [1,2,3,4,5];
arr.splice() // [] ***操作原数组项
arr.splice(0) // [1,2,3,4,5] ***全部被截取
arr.splice(2) // [3,4,5]
arr.splice(0,4) // [1,2,3,4] 被删除[1,2,3,4]剩下[5]
arr.splice(4,2) // 返回[5]
arr.splice(-2,-1) // 返回值[]
arr.splice(0,0,'a') //返回值[]   arr => ['a', 1, 2, 3, 4, 5]
arr.splice(0,0,'a','b') // 返回值[]  arr 变成 ['a', 1, 2, 3, 4, 5]


```

### 六、查找

##### 1.indexOf 从左往右

##### 2.lastIndexOf 从右往左

```js
let arr = [1,2,3,4]
arr.indexOf(3)  // 3 返回后的位置

```

##### 3.find 找到符合元素的第一个成员

##### 4.findIndex 找到符合元素的第一个成员位置

```jslet
let arr = [1,2,3,4,5,6]
arr.find(n=>n>4) // 返回符合的第一个元素 5
arr.findIndex(n=>n>4)  // 返回符合的第一个元素位置 4

```

// 创建数组 Array()

##### 5.Array.of() 解决Array创建数组时，产生的疑问

```js
Array(2)  [,] 长度为2的空数组
Array(3,4,5) // [3,4,5]

```

##### 6.Array.from()

```js
// Array.from()将类数组转化成数组的方法：
function test(){
console.log(Array.prototype.slice.call(arguments)) es5的写法优化
}
test(1,2,3,4,5) // [1,2,3,4,5] 

Array.from('1234') //[1,2,3,4]

```

##### 7.arr.fill() 数组填充方法

```js
arr.fill(value, start, end)

let arr = [1,2,3,4,5,6]
arr.fill('a',1,3) // [1, 'a', 'a', 4, 5, 6]

```

##### 8.includes() 是否包含某元素

##### 9.find findIndex 找到符合元素的第一个成员/成员位置

```js
let arr =[1,2,3,45] 
arr.find(n=>n>4) // 返回符合的第一个元素
arr.findIndex(n=>n>4)  // 返回符合的第一个元素位置

```

### 七、循环

forEach map some every filter reduce reduceRight

ES6:

Array.keys() Array.values() Array.entries()