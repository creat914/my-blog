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

#### var关键字

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

1.2var声明提升

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
#### let声明

let声明的范围是块作用域，而var声明的范围是函数作用域

```js
if (true) {
var name = 'Matt';
console.log(name); // Matt
}
console.log(name); // Matt
if (true) {
let age = 26;
console.log(age); // 26
}
console.log(age); // ReferenceError: age没有定义
```

let也不允许同一个块作用域中出现冗余声明。这样会导致报错：

```js
var name;
var name;
let age;
let age; // SyntaxError；标识符age已经声明过了
```

2.1 暂时性死区

let与var的另一个重要的区别，就是let声明的变量不会在作用域中被提升。

```js
// name会被提升
console.log(name); // undefined
var name = 'Matt';
// age不会被提升
console.log(age); // ReferenceError：age没有定义
let age = 26;
```

在解析代码时，JavaScript引擎也会注意出现在块后面的let声明，只不过在此之前不能以任何方式来引用未声明的变量。在let声明之前的执行瞬间被称为“暂时性死区”（temporal dead zone），在此阶段引用任何后面才声明的变量都会抛出ReferenceError。

2.2 全局声明

与var关键字不同，使用let在全局作用域中声明的变量不会成为window对象的属性（var声明的变量则会）。

```js
var name = 'Matt';
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined
```

不过，let声明仍然是在全局作用域中发生的，相应变量会在页面的生命周期内存续。因此，为了避免SyntaxError，必须确保页面不会重复声明同一个变量。

2.3 条件声明

在使用var声明变量时，由于声明会被提升，JavaScript引擎会自动将多余的声明在作用域顶部合并为一个声明。因为let的作用域是块，所以不可能检查前面是否已经使用let声明过同名变量，同时也就不可能在没有声明的情况下声明它

```js
<script>
var name = 'Nicholas';
let age = 26;
</script>
<script>
// 假设脚本不确定页面中是否已经声明了同名变量
// 那它可以假设还没有声明过
var name = 'Matt';
// 这里没问题，因为可以被作为一个提升声明来处理
// 不需要检查之前是否声明过同名变量
let age = 36;
// 如果age之前声明过，这里会报错
</script>
```

2.4 for循环中的let声明

在let出现之前，for循环定义的迭代变量会渗透到循环体外部：

```js
for (var i = 0; i < 5; ++i) {
// 循环逻辑
}
console.log(i); // 5
```

改成使用let之后，这个问题就消失了，因为迭代变量的作用域仅限于for循环块内部：

```js
for (let i = 0; i < 5; ++i) {
// 循环逻辑
}
console.log(i); // ReferenceError: i没有定义
```

在使用var的时候，最常见的问题就是对迭代变量的奇特声明和修改：

```js
for (var i = 0; i < 5; ++i) {
setTimeout(() => console.log(i), 0)
}
// 你可能以为会输出0、1、2、3、4
// 实际上会输出5、5、5、5、5
```

之所以会这样，是因为在退出循环时，迭代变量保存的是导致循环退出的值：5。在之后执行超时逻辑时，所有的i都是同一个变量，因而输出的都是同一个最终值。而在使用let声明迭代变量时，JavaScript引擎在后台会为每个迭代循环声明一个新的迭代变量。每个setTimeout引用的都是不同的变量实例，所以console.log输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。

```js
for (let i = 0; i < 5; ++i) {
setTimeout(() => console.log(i), 0)
}
// 会输出0、1、2、3、4
```

这种每次迭代声明一个独立变量实例的行为适用于所有风格的for循环，包括for-in和for-of循环。

#### const声明

const的行为与let基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时错误。

```js
const age = 26;
age = 36; // TypeError: 给常量赋值
// const也不允许重复声明
const name = 'Matt';
const name = 'Nicholas'; // SyntaxError
// const声明的作用域也是块
const name = 'Matt';
if (true) {
const name = 'Nicholas';
}
console.log(name); // Matt
```

const声明的限制只适用于它指向的变量的引用。换句话说，如果const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const的限制。

```js
const person = {};
person.name = 'Matt'; // ok
```

#### 数据类型

ECMAScript有6种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、String和Symbol。Symbol（符号）是ECMAScript 6新增的。还有一种复杂数据类型叫Object（对象）。Object是一种无序名值对的集合。因为在ECMAScript中不能定义自己的数据类型，所有值都可以用上述7种数据类型之一来表示。只有7种数据类型似乎不足以表示全部数据。但ECMAScript的数据类型很灵活，一种数据类型可以当作多种数据类型来使用。

##### typeof操作符

对一个值使用typeof操作符会返回下列字符串之一：

- "undefined"表示值未定义；
- "boolean"表示值为布尔值；
- "string"表示值为字符串；
- "number"表示值为数值；
- "object"表示值为对象（而不是函数）或null；
- "function"表示值为函数；
- "symbol"表示值为符号。

注意typeof在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用typeof null返回的是"object"。这是因为特殊值null被认为是一个对空对象的引用。注意 严格来讲，函数在ECMAScript中被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过typeof操作符来区分函数和其他对象。

##### Undefined类型

Undefined类型只有一个值，就是特殊值undefined。当使用var或let声明了变量但没有初始化时，就相当于给变量赋予了undefined值：

```js
let message;
console.log(message == undefined); // true
```

在这个例子中，变量message在声明的时候并未初始化。而在比较它和undefined的字面值时，两者是相等的。这个例子等同于如下示例：

```js
let message = undefined;
console.log(message == undefined); // true
```

这里，变量message显式地以undefined来初始化。但这是不必要的，因为默认情况下，任何未经初始化的变量都会取得undefined值。

包含undefined值的变量跟未定义变量是有区别的。请看下面的例子：

```js
let message; // 这个变量被声明了，只是值为undefined
// 确保没有声明过这个变量
// let age
console.log(message); // "undefined"
console.log(age); // 报错
```

对未声明的变量，只能执行一个有用的操作，就是对它调用typeof。无论是声明还是未声明，typeof返回的都是字符串"undefined"。逻辑上讲这是对的，因为虽然严格来讲这两个变量存在根本性差异，但它们都无法执行实际操作。

注意 即使未初始化的变量会被自动赋予undefined值，但我们仍然建议在声明变量的同时进行初始化。这样，当typeof返回"undefined"时，你就会知道那是因为给定的变量尚未声明，而不是声明了但未初始化。

##### Null类型

Null类型同样只有一个值，即特殊值null。逻辑上讲，null值表示一个空对象指针，这也是给typeof传一个null会返回"object"的原因：

```js
let car = null;
console.log(typeof car); // "object"
```

在定义将来要保存对象值的变量时，建议使用null来初始化，不要使用其他值。这样，只要检查这个变量的值是不是null就可以知道这个变量是否在后来被重新赋予了一个对象的引用，比如：

```js
if (car != null) {
// car是一个对象的引用
}
```

undefined值是由null值派生而来的，因此ECMA-262将它们定义为表面上相等，如下面的例子所示：

```js
console.log(null == undefined); // true
```

用等于操作符（==）比较null和undefined始终返回true。

即使null和undefined有关系，它们的用途也是完全不一样的。如前所述，永远不必显式地将变量值设置为undefined。但null不是这样的。任何时候，只要变量要保存对象，而当时又没有那个对象可保存，就要用null来填充该变量。这样就可以保持null是空对象指针的语义，并进一步将其与undefined区分开来。

##### Boolean类型

Boolean（布尔值）类型是ECMAScript中使用最频繁的类型之一，有两个字面值：true和false。这两个布尔值不同于数值，因此true不等于1，false不等于0。下面是给变量赋布尔值的例子：

```js
let found = true;
let lost = false;
```

注意，布尔值字面量true和false是区分大小写的，因此True和False（及其他大小混写形式）是有效的标识符，但不是布尔值。

虽然布尔值只有两个，但所有其他ECMAScript类型的值都有相应布尔值的等价形式。要将一个其他类型的值转换为布尔值，可以调用特定的Boolean()转型函数：

```js
let message = "Hello world!";
let messageAsBoolean = Boolean(message)
```

| 数据类型      | 转换为true的值   | 转换为false的值 |
| --------- | ----------- | ---------- |
| Boolean   | true        | false      |
| String    | 非空字符串       | ""（空字符串）   |
| Number    | 非零数值（包括无穷值） | 0、NaN      |
| Object    | 任意对象        | null       |
| Undefined | N/A（不存在）    | undefined  |

理解以上转换非常重要，因为像if等流控制语句会自动执行其他类型值到布尔值的转换

##### Number类型

最基本的数值字面量格式是十进制整数，直接写出来即可：

```js
let intNum = 55; // 整数
```

整数也可以用八进制（以8为基数）或十六进制（以16为基数）字面量表示。对于八进制字面量，第一个数字必须是零（0），然后是相应的八进制数字（数值0~7）。如果字面量中包含的数字超出了应有的范围，就会忽略前缀的零，后面的数字序列会被当成十进制数，如下所示：

```js
let octalNum1 = 070; // 八进制的56
let octalNum2 = 079; // 无效的八进制值，当成79处理
let octalNum3 = 08; // 无效的八进制值，当成8处理
```

八进制字面量在严格模式下是无效的，会导致JavaScript引擎抛出语法错
误。
ECMAScript 2015或ES6中的八进制值通过前缀0o来表示；严格模式下，前缀0会被视为语法错误，如果要表示八进制值，应该使用前缀0o。——译者注

要创建十六进制字面量，必须让真正的数值前缀0x（区分大小写），然后是十六进制数字（0~9以及A~F）。十六进制数字中的字母大小写均可。下面是几个例子：

```js
let hexNum1 = 0xA; // 十六进制10
let hexNum2 = 0x1f; // 十六进制31
```

使用八进制和十六进制格式创建的数值在所有数学操作中都被视为十进制数值。

注意 由于JavaScript保存数值的方式，实际中可能存在正零（+0）和负零（-0）。正零和负零在所有情况下都被认为是等同的，这里特地说明一下。

浮点值

要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不是必须有整数，但推荐加上。下面是几个例子：

```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // 有效，但不推荐
```

因为存储浮点值使用的内存空间是存储整数值的两倍，所以ECMAScript总是想方设法把值转换为整数。在小数点后面没有数字的情况下，数值就会变成整数。类似地，如果数值本身就是整数，只是小数点后面跟着0（如1.0），那它也会被转换为整数，如下例所示：

```js
let floatNum1 = 1.; // 小数点后面没有数字，当成整数1处理
let floatNum2 = 10.0; // 小数点后面是零，当成整数10处理
```

浮点值的精确度最高可达17位小数，但在算术计算中远不如整数精确。例如，0.1加0.2得到的不是0.3，而是0.300 000 000 000 00004。由于这种微小的舍入错误，导致很难测试特定的浮点值。比如下面的例子：

```js
if (a + b == 0.3) { // 别这么干！
console.log("You got 0.3.");
}
```

这里检测两个数值之和是否等于0.3。如果两个数值分别是0.05和0.25，或者0.15和0.15，那没问题。但如果是0.1和0.2，如前所述，测试将失败。因此永远不要测试某个特定的浮点值。注意 之所以存在这种舍入错误，是因为使用了IEEE 754数值，这种错误并非ECMAScript所独有。其他使用相同格式的语言也有这个问题。

值的范围

由于内存的限制，ECMAScript并不支持表示这个世界上的所有数值。ECMAScript可以表示的最小数值保存在Number.MIN_VALUE中，这个值在多数浏览器中是5e-324；可以表示的最大数值保存在Number.MAX_VALUE中，这个值在多数浏览器中是1.797 693 134862 315 7e+308。

如果某个计算得到的数值结果超出了JavaScript可以表示的范围，那么这个数值会被自动转换为一个特殊的Infinity（无穷）值。任何无法表示的负数以-Infinity（负无穷大）表示，任何无法表示的正数以Infinity（正无穷大）表示。

如果计算返回正Infinity或负Infinity，则该值将不能再进一步用于任何计算。这是因为Infinity没有可用于计算的数值表示形式。要确定一个值是不是有限大（即介于JavaScript能表示的最小值和最大值之间），可以使用isFinite()函数，如下所示：

```js
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false
```

注意 使用Number.NEGATIVE_INFINITY和Number.POSITIVE_INFINITY也可以获取正、负Infinity。没错，这两个属性包含的值分别就是-Infinity和Infinity。

