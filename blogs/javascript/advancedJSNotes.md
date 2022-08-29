---
title: 红宝书学习笔记
date: 2022-08-29
sidebar: 'auto'
tags:
 - javascript
categories: 
 - javascript
---

## 第 1 章JavaScript描述

JavaScript是一门用来与网页交互的脚本语言，包含以下三个组成部分。

- ECMAScript：由ECMA-262定义并提供核心功能。
- 文档对象模型（DOM）：提供与网页内容交互的方法和接口。
- 浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。

### ECMAScript

即ECMA-262定义的语言，并不局限于Web浏览器。

在基本的层面，它描述这门语言的如下部分：

- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 全局对象

ECMAScript只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript实现了ECMAScript，而Adobe ActionScript同样也实现了ECMAScript。

### DOM

文档对象模型（DOM，Document Object Model）是一个应用编程接口（API），用于在HTML中使用扩展的XML。DOM将整个页面抽象为一组分层节点。HTML或XML页面的每个组成部分都是一种节点，包含不同的数据。

DOM通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用DOM API，可以轻松地删除、添加、替换、修改节点。

- DOM视图：描述追踪文档不同视图（如应用CSS样式前后的文档）的接口。
- DOM事件：描述事件及事件处理的接口。
- DOM样式：描述处理元素CSS样式的接口。
- DOM遍历和范围：描述遍历和操作DOM树的接口。

### BOM

IE3和Netscape Navigator3 提供了浏览器对象模型（BOM）API,用于支持访问和操作浏览器的窗口。使用BOM，开发者可以操控浏览器显示页面之外的部分

- 移动、缩放和关闭浏览器窗口的能力；
- location对象，提供浏览器加载页面的详尽信息；
- screen对象，提供关于用户屏幕分辨率的详尽信息；
- performance对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
- 对cookie的支持；
- 其他自定义对象，如XMLHttpRequest和IE的ActiveXObject。

## 第 2 章HTML中的JavaScript 

### 静态加载脚本

将JavaScript插入HTML的主要方法是使用script元素。

主要包含以下八个属性

- async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
- charset：可选。使用src属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin="anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
- defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在IE7及更早的版本中，对行内脚本也可以指定这个属性。
- integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content DeliveryNetwork）不会提供恶意内容。
- language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多
- 数浏览器都会忽略这个属性，不应该再使用它。
- src：可选。表示包含要执行的代码的外部文件。
- type：可选。代替language，表示代码块中脚本语言的内容类型（也称MIME类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。
- JavaScript文件的MIME类型通常是"application/xjavascript"，不过给type属性这个值有可能导致脚本被忽略。在
- 非IE的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。
- 如果这个值是module，则代码会被当成ES6模块，而且只有这时候代码中才能出现import和export关键字。

使用script的方式有两种：通过它直接在网页中嵌入JavaScript代码，以及通过它在网页中包含外部JavaScript文件。

- 行内JavaScript代码

  ```js
  <script>
  function sayHi() {
  console.log("Hi!");
  }
  </script>
  ```

- 外部javascript代码

  ```js
  <script src="example.js"></script>
  ```

注意点：使用了src属性的标签中再包含其他JavaScript代码。如果两者都提供的话，则
浏览器只会下载并执行脚本文件，从而忽略行内代码。不管包含的是什么代码，浏览器都会按照script在页面中出现的顺序依次解释它们，前提是它们没有使用defer和async属性。第二个script元素的代码必须在第一个script元素的代码解释完毕才能开始解释，第三个则必须等第二个解释完，以此类推。

### 动态加载脚本

在把HTMLElement元素添加到DOM且执行到这段代码之前不会发送请求。默认情况下，以这种方式创建的script元素是以异步方式加载的，相当于添加了async属性。不过这样做可能会有问题，因为所有浏览器都支持createElement()方法，但不是所有浏览器都支持async属性。因此，如果要统一动态脚本的加载行为，可以明确将其设置为同步加载：

```js
let script = document.createElement('script');
script.src = 'gibberish.js';
script.async = false;
document.head.appendChild(script);
```

以这种方式获取的资源对浏览器预加载器是不可见的。这会严重影响它们在资源获取队列中的优先级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明它们：

```
<link rel="preload" href="gibberish.js">
```

### noscript元素

针对早期浏览器不支持JavaScript的问题，需要一个页面优雅降级的处理方案。最终，noscript元素出现，被用于给不支持JavaScript的浏览器提供替代内容。虽然如今的浏览器已经100%支持JavaScript，但对于禁用JavaScript的浏览器来说，这个元素仍然有它的用处。

noscript元素可以包含任何可以出现在body中的HTML元素,script除外。在下列两种情况下，浏览器将显示包含
在noscript中的内容：

- 浏览器不支持脚本；
- 浏览器对脚本的支持被关闭。

## 第 3 章 语言基础

### 区分大小写

首先要知道的是，ECMAScript中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写。换句话说，变量test和变量Test是两个不同的变量。类似地，typeof不能作为函数名，因为它是一个关键字。但Typeof是一个完全有效的函数名。

### 标识符

所谓标识符，就是变量、函数、属性或函数参数的名称。标识符可以由一或多个下列字符组成：第一个字符必须是一个字母、下划线（_）或美元符号（$）；剩下的其他字符可以是字母、下划线、美元符号或数字。

注意 关键字、保留字、true、false和null不能作为标识符

### 注释

ECMAScript采用C语言风格的注释，包括单行注释和块注释。单行注释以两个斜杠字符开头，如：

```
// 单行注释
```

块注释以一个斜杠和一个星号（/*）开头，以它们的反向组合（*/）结尾，如：

```
/* 这是多行注释 */
```
### 严格模式

ECMAScript 5增加了严格模式（strict mode）的概念。严格模式是一种不同的JavaScript解析和执行模型ECMAScript 3的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。要对整个脚本启用严格模式，在脚本开头加上这一行：

```
"use strict";
```

也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：

```js
function doSomething() {
"use strict";
// 函数体
}
```
### 语句

ECMAScript中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾，如下面的例子所示：

```js
let sum = a + b // 没有分号也有效，但不推荐
let diff = a - b; // 加分号有效，推荐
```

即使语句末尾的分号不是必需的，也应该加上。记着加分号有助于防止省略造成的问题，比如可以避免输入内容不完整。此外，加分号也便于开发者通过删除空行来压缩代码（如果没有结尾的分号，只删除空行，则会导致语法错误）。加分号也有助于在某些情况下提升性能，因为解析器会尝试在合适的位置补上分号以纠正语法错误。

### 关键字与保留字

```js
break do in typeof
case else instanceof var
catch export new void
class extends return while
const finally super with
continue for switch yield
debugger function this
default if throw
delete import try
```

```js
始终保留:
enum
严格模式下保留:
implements package public
interface protected static
let private
模块代码中保留:
await
```

### 变量

1. var关键字

   要定义变量，可以使用var操作符（注意var是一个关键字），后跟变量名（即标识符，如前所述）：

   ```js
   var message = "hi";
   ```

   这里，message被定义为一个保存字符串值hi的变量。像这样初始化变量不会将它标识为字符串类型，只是一个简单的赋值而已。随后，不仅可以改变保存的值，也可以改变值的类型：

   ```js
   var message = "hi";
   message = 100; // 合法，但不推荐
   ```

   1.1 var声明作用域

   关键的问题在于，使用var操作符定义的变量会成为包含它的函数的局部变量。比如，使用var在一个函数内部定义一个变量，就意味着该变量将在函数退出时被销毁：

   ```js
   function test() {
   var message = "hi"; // 局部变量
   }
   test();
   console.log(message); // 出错！
   ```

   在函数内定义变量时省略var操作符，可以创建一个全局变量：

   ```js
   function test() {
   message = "hi"; // 全局变量
   }
   test();
   console.log(message); // "hi"
   ```

   去掉之前的var操作符之后，message就变成了全局变量。只要调用一次函数test()，就会定义这个变量，并且可以在函数外部访问到。注意 虽然可以通过省略var操作符定义全局变量，但不推荐这么做。在局部作用域中定义的全局变量很难维护，也会造成困惑。这是因为不能一下子断定省略var是不是有意而为之。
   在严格模式下，如果像这样给未声明的变量赋值，则会导致抛出ReferenceError，不能定义名为eval和arguments的变量，否则会导致语法错误。

2. var声明提升

   使用var时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域顶部：

   ```js
   function foo() {
   console.log(age);
   var age = 26;
   }
   foo(); // undefined

   等价于
   function foo() {
   var age;
   console.log(age);
   age = 26;
   }
   foo(); // undefined
   ```

   这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。此外，反复多次使用var声明同一个变量也没有问题：

   ```js
   function foo() {
   var age = 16;
   var age = 26;
   var age = 36;
   console.log(age);
   }
   foo(); // 36
   ```

   ​
