---
title: 开发笔记
date: 2022-3-30
sidebar: 'auto'
tags:
 - 开发小记
categories: 
 - utils
---


## 快速删除node_modules包

```javascript
npm install rimraf -g
rimraf node_modules
```

## vscode禁止运行脚本命令

用管理员模式运行vscode 再执行set-ExecutionPolicy RemoteSigned 解除限制

## oss文件打开直接下载

```javascript
	?response-content-type=application/octet-stream
```

## 判断文本内容是否超过文本区域

```javascript
dom.scrollHeight > dom.offsetHeight
```

## 让元素出现在窗口

```js
scrollIntoView() 
让元素出现在窗口
    alignToTop 是一个布尔值。true ：窗口滚动后元素的顶部与视口顶部对齐。false ：窗口滚动后元素的底部与视口底部对齐。
    scrollIntoViewOptions 是一个选项对象。behavior ：定义过渡动画，可取的值为 "smooth" 和 "auto" ，默认为 "auto" 。
    block ：定义垂直方向的对齐，可取的值为 "start" 、 "center" 、 "end" 和 "nearest" ，默认为  "start" 。
    inline ：定义水平方向的对齐，可取的值为 "start" 、 "center" 、 "end" 和 "nearest" ，默认为  "nearest" 。
不传参数等同于 alignToTop 为 true 
```

## 

## 判断ie浏览器

```
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return -1;//不是ie浏览器
    }
}
```

## npm

### 修改镜像源

```js
淘宝源 npm config set registry https://registry.npm.taobao.org
默认镜像 https://registry.npmjs.org
```

### 修改.npmrc文件

```
npm config edit
```

## 使用 yarn 更新项目依赖

在项目根目录运行

```
yarn upgrade-interactive  --latest
```

### 更新命令对照表

更新全局依赖同上

| 说明          | yarn                                     | npm-check       |
| ----------- | ---------------------------------------- | --------------- |
| 更新项目依赖，没有交互 | yarn upgrade --latest                    | npm-check -y    |
| 更新项目依赖，有交互  | yarn upgrade-interactive --latest        | npm-check -u    |
| 更新全局依赖，没有交互 | yarn global upgrade --latest             | npm-check -g -y |
| 更新全局依赖，有交互  | yarn global upgrade-interactive --latest | npm-check -g -u |

## 运行多个命令

```js
npm i npm-run-all --save-dev
npm-run-all 提供了多种运行多个命令的方式，常用的有以下几个：
--parallel: 并行运行多个命令，例如：npm-run-all --parallel lint build
--serial: 多个命令按排列顺序执行，例如：npm-run-all --serial clean lint build:**
--continue-on-error: 是否忽略错误，添加此参数 npm-run-all 会自动退出出错的命令，继续运行正常的
--race: 添加此参数之后，只要有一个命令运行出错，那么 npm-run-all 就会结束掉全部的命
```

## 创建一个微任务

```js
//兼容版本
if (typeof window.queueMicrotask !== "function") {
  window.queueMicrotask = function (callback) {
    Promise.resolve()
      .then(callback)
      .catch(e => setTimeout(() => { throw e; }));
  };
}

//基础使用
queueMicrotask(() => {
    console.log('queueMicrotask');
})
```

## git关联远程仓库分支

```git
// 存在远程分支且创建了默认文件
git remote add <仓库名> url
git add .
git commit -m 'commit message'
git fetch
git branch --set-upstream-to=<仓库名>/<分支名>
git pull origin master --allow-unrelated-histories // 运行不相关的历史提交
git push

// 无东西
git remote add <仓库名> url
git add .
git commit -m 'commit message'
git push -u origin master
```

## 使用 commitizen 规范 Git 提交说明

### 安装插件

```
npm install -g commitizen cz-customizable
```

#### 创建.czrc文件

```
{"path":"cz-customizable"}
```

#### .cz-config.js 自定义说明 可加可不加

```
'use strict';

module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     新功能'},
    {value: 'fix',      name: 'fix:      修复'},
    {value: 'docs',     name: 'docs:     文档变更'},
    {value: 'style',    name: 'style:    代码格式(不影响代码运行的变动)'},
    {value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)'},
    {value: 'perf',     name: 'perf:     性能优化'},
    {value: 'test',     name: 'test:     增加测试'},
    {value: 'chore',    name: 'chore:    构建过程或辅助工具的变动'},
    {value: 'revert',   name: 'revert:   回退'},
    {value: 'build',    name: 'build:    打包'}
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // scope: '请输入文件修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72
};
```

#### 使用

```git
git add .
git cz 
git pull
git push
```



## 基于项目创建多个分支工作环境 worktree使用

```
git worktree add [-f] [--detach] [--checkout] [--lock [--reason <string>]] [-b <new-branch>] <path> [<commit-ish>]
git worktree list [-v | --porcelain]
git worktree lock [--reason <string>] <worktree>
git worktree move <worktree> <new-path>
git worktree prune [-n] [-v] [--expire <expire>]
git worktree remove [-f] <worktree>
git worktree repair [<path>…]
git worktree unlock <worktree>
```

- 最简单的写法：
  `git worktree add <新路径>`
  将基于当前分支，新建一个 worktree 目录，新的分支名就是新建目录的名称。
- 新建一个指定分支
  `git worktree add <新路径> -b <新分支名>`
  将基于当前分支，新建一个 worktree 目录，新的分支名是指定的名称。
- 基于指定分支新建一个指定分支
  `git worktree add <新路径> -b <新分支名> <指定分支名>`
  将基于指定分支，新建一个 worktree 目录，新的分支名是指定的名称。


## 监听对象属性变化的方法

### Object.defineProperty

```js
var obj = {};
Object.defineProperty(obj, "name", {
    // 是否可删除/重新定义
    configurable: true,
    // 是否可被枚举
    enumerable: true,
    /***  writable + value跟 get set无法共存*/
    // 是否可赋值
    writable: true,
    // 赋值
    value: "",
    get: function () {},
    set: function (value) {}
})
// 同时操作多个属性
Object.defineProperties(obj,{},{})

// 获取单个属性描述符
Object.getOwnPropertyDescriptor(obj,key);
// 获取全部描述符
Object.getOwnPropertyDescriptors(obj);

// 冻结对象属性的方法
Object.freeze
Object.seal
Object.preventExtensions
```

### Proxy

```
new Proxy(target, {
    get(target, property) {

    },
    set(target, property) {

    },
    deleteProperty(target, property) {

    }
})；
// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。
handler.getPrototypeOf()
// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。
handler.setPrototypeOf()
// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。
handler.isExtensible()
// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。
handler.preventExtensions()
// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, "foo") 时。
handler.getOwnPropertyDescriptor()
// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, "foo", {}) 时。
andler.defineProperty()
// 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 "foo" in proxy 时。
handler.has()
// 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。
handler.get()
// 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。
handler.set()
// 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。
handler.deleteProperty()
// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。
handler.ownKeys()
// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。
handler.apply()
// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。
handler.construct()
```

`Proxy`区别于`Object.definedProperty`。

`Object.defineProperty`只能监听到属性的读写，而`Proxy`除读写外还可以监听属性的删除，方法的调用等。

通常情况下我们想要监视数组的变化，基本要依靠重写数组方法的方式实现，这也是`Vue`的实现方式，而`Proxy`可以直接监视数组的变化。

```
const list = [1, 2, 3];
const listproxy = new Proxy(list, {
    set(target, property, value) {
        target[property] = value;
        return true; // 标识设置成功
    }
});
list.push(4);
```

`Proxy`是以非入侵的方式监管了对象的读写，而`defineProperty`需要按特定的方式定义对象的属性。

## 去除数字选择框的上下箭头

```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
```

## Nginx配置反向代理

```js
location /pdfSource {
	rewrite  ^/pdfSource/(.*)$ /$1 break;
	proxy_pass  http://bxkc.oss-cn-shanghai.aliyuncs.com/;
}
location /pdfSource/ {
	proxy_pass  http://bxkc.oss-cn-shanghai.aliyuncs.com/;
}
```

## Vue打包部署后，刷新页面404

```
try_files $uri $uri/ /index.html;
```

## nginx上传文件大小限制

```
client_max_body_size 10m;
```


## JSON.stringify

```
JSON.stringify(value[, replacer [, space]])
```

![1646873431](E:\myself\note\前端笔记.assets\1646873431.jpg)

## getBoundingClientRect

`Element.getBoundingClientRect() ` 方法返回元素的大小及其相对于视口的位置。返回的是一个对象，对象里有这8个属性：`left，right，top，bottom，width，height，x，y`

## IntersectionObserver 观察对象与父视图的交叉状态

`IntersectionObserver`**接口** 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗([viewport](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FGlossary%2FViewport))交叉状态的方法。祖先元素与视窗([viewport](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FGlossary%2FViewport))被称为**根(root)**

```
// 接收两个参数 callback  option
var io = new IntersectionObserver(callback, option);
// 开始观察(可观察多个元素)
io.observe(document.getElementById('example1'));
io.observe(document.getElementById('example2'));
// 停止观察某个元素
io.unobserve(element);
// 关闭观察器
io.disconnect();
```

### callback

一般有两种触发情况。一种是目标元素刚刚进入视口（可见），另一种是完全离开视口（不可见）；

`callback`函数的参数（`entries`）是一个数组，每个成员都是一个[`IntersectionObserverEntry`](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FIntersectionObserverEntry)对象：

`time`：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒

`target`：被观察的目标元素，是一个 DOM 节点对象

`rootBounds`：根元素的矩形区域的信息，`getBoundingClientRect()`方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回`null`

`boundingClientRect`：目标元素的矩形区域的信息

`intersectionRect`：目标元素与视口（或根元素）的交叉区域的信息

`intersectionRatio`：目标元素的可见比例，即`intersectionRect`占`boundingClientRect`的比例，完全可见时为`1`，完全不可见时小于等于`0`

###  option

`threshold`属性决定了什么时候触发回调函数。它是一个数组，每个成员都是一个门槛值，默认为`[0]`，即交叉比例（`intersectionRatio`）达到`0`时触发回调函数。

`root`属性指定目标元素所在的容器节点（即根元素）。注意，容器元素必须是目标元素的祖先节点。

## createNodeIterator 遍历循环页面所有元素

```js
const body = document.getElementsByTagName('body')[0]
    const it = document.createNodeIterator(body)
    let root = it.nextNode()
    while(root) {
        console.log(root)
        root = it.nextNode()
    }
```

## MutationObserver 内建对象，它观察 DOM 元素，并在检测到更改时触发回调

```js
// 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');
// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };
// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);
// 以上述配置开始观察目标节点
observer.observe(targetNode, config);
// 之后，可停止观察
observer.disconnect();
```

`config` 是一个具有布尔选项的对象，该布尔选项表示“将对哪些更改做出反应”：

- `childList` —— `node` 的直接子节点的更改，
- `subtree` —— `node` 的所有后代的更改，
- `attributes` —— `node` 的特性（attribute），
- `attributeFilter` —— 特性名称数组，只观察选定的特性。
- `characterData` —— 是否观察 `node.data`（文本内容）

其他几个选项：

- `attributeOldValue` —— 如果为 `true`，则将特性的旧值和新值都传递给回调（参见下文），否则只传新值（需要 `attributes` 选项），
- `characterDataOldValue` —— 如果为 `true`，则将 `node.data` 的旧值和新值都传递给回调（参见下文），否则只传新值（需要 `characterData` 选项）。

## html热区

```html
 <img src="/client/components/img/1.png" usemap="#animalmap" class="compnay-img"/>               
<map name="animalmap">
                    <area shape="rect" coords="1457,187,1658,225" href="#" class="cls-identities" data-index="1">
                    <area shape="rect" coords="1457,237,1658,275" href="#" class="cls-identities" data-index="2">
                    <area shape="rect" coords="1457,292,1658,327" href="#" class="cls-identities" data-index="3">
                </map>
```

```js
 /**
     *  对于热区的自适应修改坐标
     */
function init() {//初始化
    initwidth = 1920;
    initarea = new Array(area.length - 1);
    for (var i = 0; i < area.length; i++) {
        initarea[i] = area[i].getAttribute("coords");
    }
}

function setCoords() {
    //根据分辨率自适应热区坐标
    var width = document.body.offsetWidth,
        percent = width / initwidth;
    for (var i = 0; i < area.length; i++) {
        var coords = initarea[i],
            arr = coords.split(",");
        for (var j = 0; j < arr.length; j++) {
            arr[j] *= percent;
        }
        area[i].setAttribute("coords", arr.join(","));
    }
}

//使用
init();
setCoords();
window.addEventListener("resize", setCoords);
```
```
var fs= require("fs");
fs.readFile(path,{flag:'r+',encoding:'utf-8'},function(err,data){
    if(err){
        console.log("bad")
    }else{
       var dataStr = data.toString();
       // 覆盖文件
       //  writeFileSync 同步版本 writeFile 回调函数版本 路径 数据 编码 回调函数
        fs.writeFile(path,dataStr,'utf-8',function(err){
            if(err){
                console.log("文件写入失败")
            }else{
                console.log("文件写入成功");
            }
        });
        // 追加文件
        fs.appendFile(path,dataStr,function(err){
            if(err){
                console.log("文件写入失败")
            }else{
                console.log("文件追加成功");
            }
        });
    }
});
```

## 解析get参数

通过`replace`方法获取`url`中的参数键值对，可以快速解析`get`参数。

```
const q = {};
location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);
console.log(q); 
```

## 解析连接url

可以通过创建`a`标签，给`a`标签赋值`href`属性的方式，获取`到协议`，`pathname`，`origin`等`location`对象上的属性。

```
// 创建a标签
const aEle = document.createElement('a');
// 给a标签赋值href路径
aEle.href = '/test.html';
// 访问aEle中的属性
aEle.protocol; // 获取协议
aEle.pathname; // 获取path
aEle.origin;
aEle.host;
aEle.search;
...
```

## localStorage本地存储

```
// 存储
localStorage.name = 'yd';
// 获取
localStorage.name; // yd
// 删除
delete localStorage.name;
// 清除全部
localStorage.clear();

// 常见方法
setItem getItem removeItem

// 遍历
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // 获取本地存储的Key
    localStorage[key]; // 获取本地存储的value
}
```

`localStorage`满了的情况下仍继续存储并不会覆盖其他的值，而是直接报错(`QuotaExceededError`)，并且当前存储的值也会被清空。浏览器支持每个域名下存储`5M`数据。

## 数组快速去重

```js
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = new Set(arr);
const arr3 = [...arr2];
```

## 让元素具备输入功能

`html`中大部分标签都是不可以编辑的，但是添加了`contenteditable`属性之后，标签会变成可编辑状态。

```
<div contenteditable="true"></div>
```

不过通过这个属性把标签变为可编辑状态后只有`input`事件，没有`change`事件。也不能像表单一样通过`maxlength`控制最大长度。