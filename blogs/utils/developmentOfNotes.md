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

```js
npm install -g commitizen cz-customizable
```

#### 创建.czrc文件

```js
{"path":"cz-customizable"}
```

#### .cz-config.js 自定义说明 可加可不加

```js
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

```js
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

### vue配置全局scss样式

```js
chainWebpack(config) {
  const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  types.forEach((type) => {
    config.module
      .rule('scss')
      .oneOf(type)
      .use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [path.resolve(__dirname, 'src/assets/styles/workbench.scss')]
      })
  })
}
```
## 58个JavaScript技巧汇总

### **字符串技巧**

#### **1、比较时间**

```
const time1 = "2022-03-02 09:00:00";const time2 = "2022-03-02 09:00:01";const overtime = time1 < time2;// overtime => true
```

**2、格式化money**

```
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");const money = ThousandNum(1000000);// money => '1,000,000'
```

#### **3、生成随机ID**

```
const RandomId = len => Math.random().toString(36).substr(3, len);const id = RandomId(10);// id => "xdeguewg1f"
```

#### **4、生成随机 HEX 颜色值**

```
const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");const color = RandomColor();// color => "#2cbf89"
```

#### **5、Generate star ratings**

```
const StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);const start = StartScore(3);// start => '★★★☆☆'
```

**6、网址查询参数**

```
const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=test&sex=man"params.has("test"); // trueparams.get("sex"); // "man"
```

#### **数字技能**

#### **7、Arrangement**

用 Math.floor() 代替正数，用 Math.ceil() 代替负数

```
const num1 = ~~ 1.19;const num2 = 2.29 | 0;const num3 = 3.09 >> 0;// num1 num2 num3 => 1 2 3
```

#### **8、零填充**

```
const FillZero = (num, len) => num.toString().padStart(len, "0");const num = FillZero(1234, 5);// num => "01234"
```

#### **9、转数**

仅对 null、“”、false、数字字符串有效

```
const num1 = +null;const num2 = +"";const num3 = +false;const num4 = +"169";// num1 num2 num3 num4 => 0 0 0 169
```

**10、时间戳**

```
const timestamp = +new Date("2022-03-22");// timestamp => 1647907200000
```

#### **11、精确小数**

```
const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;const num = RoundNum(1.2345, 2);// num => 1.23
```

#### **12、平价**

```
const OddEven = num => !!(num & 1) ? "odd" : "even";const num = OddEven(2);// num => "even"
```

#### **13、取最小值最大值**

```
const arr = [0, 1, 2, 3];const min = Math.min(...arr);const max = Math.max(...arr);// min max => 0 3
```

**14、生成范围随机数**

```
const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;const num = RandomNum(1, 10); // 5
```

### **布尔技能**

#### **15、短路运算符**

```
const a = d && 1; // Fake operation, judge from left to right, return a false value when encountering a false value, and no longer execute it later, otherwise return the last true valueconst b = d || 1; // Take the true operation, judge from left to right, return the true value when encountering the true value, and do not execute it later, otherwise return the last false valueconst c = !d; // Returns false if a single expression converts to true, otherwise returns true
```

#### **16、确定数据类型**

可确定的类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap

```
function DataType(tgt, type) {    const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();    return type ? dataType === type : dataType;}DataType("test"); // "string"DataType(20220314); // "number"DataType(true); // "boolean"DataType([], "array"); // trueDataType({}, "array"); // false
```

#### **17、检查数组是否为空**

```
const arr = [];const flag = Array.isArray(arr) && !arr.length;// flag => true
```

#### **18、满足条件时执行**

```
const flagA = true; // Condition Aconst flagB = false; // Condition B(flagA || flagB) && Func(); // Execute when A or B is satisfied(flagA || !flagB) && Func(); // Execute when A is satisfied or B is not satisfiedflagA && flagB && Func(); // Execute when both A and B are satisfiedflagA && !flagB && Func(); // Execute when A is satisfied and B is not satisfied
```

**19、如果非假则执行**

```
const flag = false; // undefined、null、""、0、false、NaN!flag && Func();
```

#### **20、数组不为空时执行**

```
const arr = [0, 1, 2];arr.length && Func();
```

#### **21、对象不为空时执行**

```
const obj = { a: 0, b: 1, c: 2 };Object.keys(obj).length && Func();
```

**阵列技能**

#### **22、克隆数组**

```
const _arr = [0, 1, 2];const arr = [..._arr];// arr => [0, 1, 2]
```

#### **23、合并数组**

```
const arr1 = [0, 1, 2];const arr2 = [3, 4, 5];const arr = [...arr1, ...arr2];// arr => [0, 1, 2, 3, 4, 5];
```

#### **24、去重数组**

```
const arr = [...new Set([0, 1, 1, null, null])];// arr => [0, 1, null]
```

#### **25、混淆数组**

```
const arr = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - .5);// arr => [3, 4, 0, 5, 1, 2]
```

#### **26、清空数组**

```
const arr = [0, 1, 2];arr.length = 0;// arr => []
```

**27、截断数组**

```
const arr = [0, 1, 2];arr.length = 2;// arr => [0, 1]
```

#### **28、交换数值**

```
let a = 0;let b = 1;[a, b] = [b, a];// a b => 1 0
```

#### **29、过滤空值**

空值：undefined,null,””,0,false,NaN

```
const arr = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);// arr => [1, 2]
```

**30、在数组开头插入成员**

```
let arr = [1, 2];arr.unshift(0);arr = [0].concat(arr);arr = [0, ...arr];// arr => [0, 1, 2]
```

**31、在数组末尾插入元素**

```
let arr = [0, 1]; arr.push(2);arr.concat(2);arr[arr.length] = 2;arr = [...arr, 2];// arr => [0, 1, 2]
```

#### **32、计算数组成员的数量**

```
const arr = [0, 1, 1, 2, 2, 2];const count = arr.reduce((t, v) => { t[v] = t[v] ? ++t[v] : 1; return t;}, {});// count => { 0: 1, 1: 2, 2: 3 }
```

#### **33、解构嵌套数组成员**

```
const arr = [0, 1, [2, 3, [4, 5]]];const [a, b, [c, d, [e, f]]] = arr;// a b c d e f => 0 1 2 3 4 5
```

#### **34、解构数组成员别名**

```
const arr = [0, 1, 2];const { 0: a, 1: b, 2: c } = arr;// a b c => 0 1 2
```

**35、解构数组成员默认值**

```
const arr = [0, 1, 2];const [a, b, c = 3, d = 4] = arr;// a b c d => 0 1 2 4
```

#### **36、获取随机数组成员**

```
const arr = [0, 1, 2, 3, 4, 5];const randomItem = arr[Math.floor(Math.random() * arr.length)];// randomItem => 1
```

#### **37、创建指定长度的数组**

```
const arr = [...new Array(3).keys()];// arr => [0, 1, 2]
```

#### **38、创建一个指定长度和相等值的数组**

```
const arr = new Array(3).fill(0);// arr => [0, 0, 0]
```

#### **对象技能**

**39、克隆对象**

```
const _obj = { a: 0, b: 1, c: 2 };const obj = { ..._obj };const obj = JSON.parse(JSON.stringify(_obj));// obj => { a: 0, b: 1, c: 2 }
```

#### **40、合并对象**

```
const obj1 = { a: 0, b: 1, c: 2 };const obj2 = { c: 3, d: 4, e: 5 };const obj = { ...obj1, ...obj2 };// obj => { a: 0, b: 1, c: 3, d: 4, e: 5 }
```

#### **41、对象变量属性**

```
const flag = false;const obj = {    a: 0,    b: 1,    [flag ? "c" : "d"]: 2};// obj => { a: 0, b: 1, d: 2 }
```

#### **42、创建一个纯空对象**

```
const obj = Object.create(null);Object.prototype.a = 0;// obj => {}
```

#### **43、删除对象无用属性**

```
const obj = { a: 0, b: 1, c: 2 }; const { a, ...rest } = obj;// rest => { b: 1, c: 2 }
```

**44、解构对象属性嵌套**

```
const obj = { a: 0, b: 1, c: { d: 2, e: 3 } };const { c: { d, e } } = obj;// d e => 2 3
```

#### **45、解构对象属性别名**

```
const obj = { a: 0, b: 1, c: 2 };const { a, b: d, c: e } = obj;// a d e => 0 1 2
```

#### **46、解构对象属性默认值**

```
const obj = { a: 0, b: 1, c: 2 };const { a, b = 2, d = 3 } = obj;// a b d => 0 1 3
```

### **函数技能**

#### **47、函数自执行**

```
const Func = function() {}(); // Commonly used(function() {})(); // Commonly used(function() {}()); // Commonly used[function() {}()];+ function() {}();- function() {}();~ function() {}();! function() {}();new function() {};new function() {}();void function() {}();typeof function() {}();delete function() {}();1, function() {}();1 ^ function() {}();1 > function() {}();
```

**48、一次性函数**

适合运行一些只需要执行一次的初始化代码。

```
function Func() {    console.log("x");    Func = function() {        console.log("y");    }}
```

#### **49、延迟加载函数**

当函数中的复杂判断分支越来越多时，可以大大节省资源开销。

```
function Func() {    if (a === b) {        console.log("x");    } else {        console.log("y");    }}// replace withfunction Func() {    if (a === b) {        Func = function() {            console.log("x");        }    } else {        Func = function() {            console.log("y");        }    }    return Func();}
```

#### **50、检测非空参数**

```
function IsRequired() {    throw new Error("param is required");}function Func(name = IsRequired()) {    console.log("I Love " + name);}Func(); // "param is required"Func("You"); // "I Love You"
```

#### **51、字符串创建函数**

```
const Func = new Function("name", "console.log(\"I Love \" + name)");
```

**52、优雅地处理错误信息**

```
try {    Func();} catch (e) {    location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;}
```

#### **53、优雅地处理 Async/Await 参数**

```
function AsyncTo(promise) {    return promise.then(data => [null, data]).catch(err => [err]);}const [err, res] = await AsyncTo(Func());
```

#### **54、优雅地处理多个函数返回值**

```
function Func() {    return Promise.all([        fetch("/user"),        fetch("/comment")    ]);}const [user, comment] = await Func();
```

### **DOM 技能**

#### **55、显示所有 DOM 边框**

```
[].forEach.call($$("*"), dom => {    dom.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);});
```

#### **56、响应式页面**

页面基于设计图但需要适配多个模型，元素大小使用rem设置。

```
function AutoResponse(width = 750) {    const target = document.documentElement;    target.clientWidth >= 600        ? (target.style.fontSize = "80px")        : (target.style.fontSize = target.clientWidth / width * 100 + "px");}
```

#### **57、过滤 XSS**

```
function FilterXss(content) {    let elem = document.createElement("div");    elem.innerText = content;    const result = elem.innerHTML;    elem = null;    return result;}
```

**58、访问本地存储**

```
const love = JSON.parse(localStorage.getItem("love"));localStorage.setItem("love", JSON.stringify("I Love You"));
```
**59、查找webpack项目中无效引用文件**

1. 安装`npm i useless-files-webpack-plugin -D`

2. 在webpack.prod.conf.js中，添加如下代码：

3. ```
   const UselessFile = require('useless-files-webpack-plugin');
   ```

4. plugins中添加插件配置

5. ```
   new UselessFile({
       root: './src', // 项目目录
       out: './fileList.json', // 输出文件列表
       clean: false // 删除文件,
       exclude: /node_modules/ // 排除文件列表, 格式为文件路径数组
   })
   ```

6. 打包时会在项目的根目录下生成`unused-files.json`文件, 保存着无用文件的列表。

7. 根据列表中的提供路径，核对相应文件是否需要保留。无需保留，手动删除即可。

**60、删除json文件列表路径文件**

```js
const fs = require('fs')
fs.readFile('./unused-files.json', 'utf8', function (err, data) {
  const list = JSON.parse(data)
  console.log(list)
  list.forEach((item) => {
    fs.unlinkSync(item)
  })
})

```
**61、vuescroll的使用**

安装
```js
npm install vuescroll -S
```

配置

```js
import Vue from 'vue' 
import vuescroll from 'vuescroll' 
Vue.use(vuescroll) 
const vm = new Vue({ el: "#app", data: { ops: { vuescroll: { }, scrollPanel: { } // ... } } })
```

配置项说明

```js
data(){
  return{
      // 滚动条的配置信息
      ops:{
      vueScroll:{},
      scrollPanel:{},
      rail:{
              opacity:'0.1',
              border:'1px solid #f2f2f2',
              size:'6px'
       },
       bar:{
                size:'6px',
                background:'#999',
                keepShow:true,
              }
        },}}
```
属性
```js
export default {
  // vuescroll  vuescroll: {
    mode: 'native',
    // 设置 vuescroll的大小类型， 可选的有percent, number. 
    // 设置为percent会把 vuescroll 的 height 和 width 设置成100%,
    // 设置成number的话 vuescroll 会自动计算父元素的大小，并将height和width设置成对应的数值。
    // 提示:如果父元素的尺寸为百分比大小时建议设置成number,如果父元素大小为一个固定的px的值,那么设置为百分比比较合适一些。
    sizeStrategy: 'percent',
    // 是否开启监听 dom resize
    detectResize: true,
    // 下拉刷新相关(slide mode)    pullRefresh: {
      enable: false,
      // 下拉刷新的提示
      tips: {
        deactive: 'Pull to Refresh',
        active: 'Release to Refresh',
        start: 'Refreshing...',
        beforeDeactive: 'Refresh Successfully!'
      }
    },
    // 上推加载相关
    pushLoad: {
      enable: false,
      tips: {
        deactive: 'Push to Load',
        active: 'Release to Load',
        start: 'Loading...',
        beforeDeactive: 'Load Successfully!'
      },
      auto: false,
      autoLoadDistance: 0
    },
    paging: false,
    zooming: true,
    // 快照
    snapping: {
      enable: false,
      width: 100,
      height: 100
    },
    /* shipped scroll options */
    scroller: {
      /*
        允许滚动出边界
        true 或者 false 或者一个数组指定哪个方向可以超出边界，可选项分别是：
        ['top','bottom','left','right']
      */
      bouncing: true,
      /** Enable locking to the main axis if user moves only slightly on one of them at start */
      locking: true,
      /** 最小缩放级别 */
      minZoom: 0.5,
      /** 最大缩放级别 */
      maxZoom: 3,
      /** 滚动速度的倍速 **/
      speedMultiplier: 1,
      /** 到达边界时应用于减速的改变量  **/
      penetrationDeceleration: 0.03,
      /** 到达边界时应用于加速的改变量  **/
      penetrationAcceleration: 0.08,
      /** Whether call e.preventDefault event when sliding the content or not */
      preventDefault: true,
      /** Whether call preventDefault when (mouse/touch)move*/
      preventDefaultOnMove: true
    }
  },
  scrollPanel: {
    // 组件加载完后的初始滚动量
    initialScrollY: false,
    initialScrollX: false,
    // 是否禁止x或y方向上的滚动
    scrollingX: true,
    scrollingY: true,
    speed: 300,
    // 滚动动画
    easing: undefined,
    // 是否有一个padding样式，样式的大小应该和rail/bar的大小是一样。可以用来阻止内容被滚动条遮住一部分
    padding: false，
    // 有时候原声滚动条可能在左侧,
    // 请查看 https://github.com/YvesCoding/vuescroll/issues/64
    verticalNativeBarPos: 'right'
  },
   //滚动条滚动的地方   rail: {
    background: '#01a99a',
    opacity: 0,
    border: 'none',
    /** Rail's size(Height/Width) , default -> 6px */
    size: '6px',
    /** Specify rail's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    /** Rail the distance from the two ends of the X axis and Y axis. **/
    gutterOfEnds: null,
    /** Rail the distance from the side of container. **/
    gutterOfSide: '2px',
    /** Whether to keep rail show or not, default -> false, event content height is not enough */
    keepShow: false
  },
  bar: {
    /** 当不做任何操作时滚动条自动消失的时间 */
    showDelay: 500,
    /** Specify bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
    specifyBorderRadius: false,
    /** 是否只在滚动的时候现实滚动条 */
    onlyShowBarOnScroll: true,
    /** 是否保持显示 */
    keepShow: false,
    /** 滚动条颜色, default -> #00a650 */
    background: 'rgb(3, 185, 118)',
    /** 滚动条透明度, default -> 1  */
    opacity: 1,
    /** Styles when you hover scrollbar, it will merge into the current style */
    hoverStyle: false
  },
  scrollButton: {
    enable: false,
    background: 'rgb(3, 185, 118)',
    opacity: 1,
    step: 180,
    mousedownStep: 30
  }
};
```
