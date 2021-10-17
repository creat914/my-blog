---
title: JavaScript数据结构与算法
date: 2021-10-17
sidebar: 'auto'
tags:
 - 数据结构
categories: 
 - javascript
---
# JavaScript数据结构与算法

## 数据结构与算法是什么？

### 数据结构与算法

- 数据结构：计算机存储、组织数据的方式
- 算法：一系列解决问题的清晰指令

### 数据结构与算法的关系

- 程序 = 数据结构 + 算法
- 数据结构为算法提供服务，算法围绕数据结构操作

## 空间复杂度阿和时间复杂度

### 时间复杂度是什么？

- 一个函数，用大O表示，比如O(1)、O(n)
- 定性描述该算法的运行时间

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9d3c9e3410245aba720cb35ec8a407f~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d861975cb46c48ecbcb4943176f3ca98~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae0ff57611614be5a8d355aa2e202cb0~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8dcf4d1294b44d2ca76e1c32a180859e~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/175f8285ec284df3838a0072592feda6~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c34fb3efcb84e6ca40429d6d111d700~tplv-k3u1fbpfcp-watermark.awebp)

### 空间复杂度是什么？

- 一个函数，用大O表示，比如O(1)、O(n)
- 算法在运行过程中临时占用存储空间大小的量度

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db839bd0e1bd4fc1a2e9d87faf2755a4~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70c5a463096045b08d3fa94051179df0~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e25e09fc8d0b49f9bc96272a8267f42d~tplv-k3u1fbpfcp-watermark.awebp)

## 栈

- 一个后进先出的数据结构
- JavaScript中没有栈，但可以用Array实现栈的所有功能

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee392a3b86f242689fc9565140d76b80~tplv-k3u1fbpfcp-watermark.awebp)

```
const stack = [];
stack.push(1);
stack.push(2);
const item1 = stack.pop();
const item2 = stack.pop();

```

### 栈的应用场景

需要后进先出的场景

比如：十进制转二进制、判断字符串的括号是否有效、函数调用堆栈等

十进制转二进制：

- 后出来的余数反而要排在前面
- 把余数一次入栈，然后在出栈，就可以实现余数倒序输出

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4819cdfc8e9459b9c90fcbb58e17fa0~tplv-k3u1fbpfcp-watermark.awebp)

有效的括号：

- 越靠后的左括号，对应的右括号越靠前
- 左括号入栈，右括号出栈，最后栈空了就是合法的

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7151bdc1cadf44bbbf4c07d19799c42f~tplv-k3u1fbpfcp-watermark.awebp)

函数调用堆栈

- 最后调用的函数，最先执行完
- JS解释器使用栈来控制函数的调用顺序

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/819f031c06a34a54838e8132f2bc31ea~tplv-k3u1fbpfcp-watermark.awebp)

## 队列

- 一个先进先出的数据结构
- JavaScript中没有队列，但可以用Array实现队列的所有功能

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e5eaaebaaac4a7196dd00fa04ee3b46~tplv-k3u1fbpfcp-watermark.awebp)

```
const queue = [];
queue.push(1);
queue.push(2);
const item1 = queue.shift();
const item2 = queue.shift();

```

### 什么场景用队列？

需要先进先出的场景

比如：食堂排队打饭、JS异步中的任务队列、计算最近请求次数

JS异步中的任务队列：

- JS是单线程，无法同时处理异步中的并发任务
- 使用任务队列先后处理异步任务

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/630ee34ac30347c68946aaa83883575e~tplv-k3u1fbpfcp-watermark.awebp)

计算最近请求次数

- 有新请求就入队，3000ms前发出的请求出队
- 队列的长度就是最近请求次数

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54d9796e81f04aa991e82a986a7a5932~tplv-k3u1fbpfcp-watermark.awebp)

## 链表

- 多个元素组成的列表
- 元素存储不连续，用next指针连在一起

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8282bfebf6814e3fa725b4bc5cc65852~tplv-k3u1fbpfcp-watermark.awebp)

### 数组vs链表

- 数组：增删非首尾元素时往往需要移动元素
- 链表：增删非首尾元素，不需要移动元素，只需要更改next的指针即可

### JS中的链表

- JavaScript中没有链表
- 可以用Object模拟链表

```
const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

//遍历链表
let p = a;
while(p){
  console.log(p.val);
  p = p.next;
}

//插入
const e = { val: 'e' };
c.next = e;
e.next = d;

//删除
c.next = d;

```

## 集合

- 一种无序且唯一的数据结构
- ES6中有集合，名为Set
- 集合的常用操作，去重、判断某元素是否在集合中、求交集等

```
//去重
const arr = [1,1,2,2];
const arr2 = [...new Set(arr)];

//判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1);

//求交集
const set2 = new Set([2,3]);
const set3 = new Set([...set].filter(item => set2.has(item)));

```

## 字典

- 与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来存储
- ES6中有字典，名为Map
- 字典的常用操作：键值对的增删改查

```
const m = new Map();

//增
m.set('a', 'aa');
m.set('b', ''bb);

//删
m.delete('b');
//删除所有
m.clear();

//改
m.set('a', 'aaa');

//查
m.get('a');

```

## 树

- 一种 `分层` 数据的抽象模型
- 前端工作中常见的树包括：DOM树、级联选择、树形控件
- JS中没有树，但是可以用Object和Array构建树
- 树的常用操作：深度/广度优先遍历、先中后序遍历

```
{
  value: 'zhejiang',
  label: 'zhejiang',
  children: [
    {
      value: 'hangzhou',
      label: 'hangzhou',
      children: [
        {
          value: 'xihu',
          label: 'West Lake'          
        }
      ]
    }
  ]
}

```

### 树的深度和广度优先遍历

#### 深度优先遍历：尽可能深的搜索树的分支

#### 深度优先遍历过程：

- 访问根节点
- 对根节点的children挨个进行深度优先遍历

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ec15ba7de1549239377ed3717d89aaa~tplv-k3u1fbpfcp-watermark.awebp)

```
//深度优先遍历dfs
const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs);
};

dfs(tree);

```

#### 广度优先遍历：先访问离根节点最近到节点

#### 广度优先遍历过程：

- 新建一个队列，把根节点入队
- 把队头出队并访问
- 把队头的children挨个入队
- 重复第二、三步，直到队列为空

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b04767ce0f5f4c77bafc8df78630d6e3~tplv-k3u1fbpfcp-watermark.awebp)

```
//广度优先遍历 bfs
const tree = {
	val: 'a',
  children: [
    {
    	val: 'b',
      children: [
        {
        	val: 'd',
          children: []
        },
        {
        	val: 'e',
          children: []
        }
      ]
    },
    {
    	val: 'c',
      children: [
        {
        	val: 'f',
          children: []
        },
        {
        	val: 'g,
          children: []
        }
      ]
    }
  ]
}

const bfs = (root) => {
	const q = [root];
  while(q.length > 0) {
  	const n = q.shift();
    console.log(n.val);
    n.children.forEach(child => {
    	q.push(child);
    });
  }
}

bfs(tree)

```

### 二叉树的先中后序遍历

#### 二叉树是什么？

- 树中每个节点最多只能有两个子节点
- 在JS中通常用Object来模拟二叉树

#### 先序遍历过程：

- 访问根节点
- 对根节点的左子树进行先序遍历
- 对根节点的右子树进行先序遍历

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf0322093c6e4973a5f2028b0344a2ab~tplv-k3u1fbpfcp-watermark.awebp)

```
const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 6,
    left: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

//先序遍历
const preorder = (root) => {
  if (!root) {
    return;
  }
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
};
preorder(bt); // 1 2 3 4 5 6 7

```

#### 中序遍历过程：

- 对根节点的左子树进行中序遍历
- 访问根节点
- 对根节点的右子树进行中序遍历

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ce439cd74d242a0bcb5b30d9aca6d73~tplv-k3u1fbpfcp-watermark.awebp)

```
const bt = {
  val: 5,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 6,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

//中序遍历
const inorder = (root) => {
  if (!root) {
    return;
  }
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};
inorder(bt); // 1 2 3 4 5 6 7

```

#### 后序遍历流程：

- 对根节点的左子树进行后序遍历
- 对根节点的右子树进行后序遍历
- 访问根节点

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfc5183e2622414f837432e05e10356d~tplv-k3u1fbpfcp-watermark.awebp)

```
const bt = {
  val: 7,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 6,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};

//后序遍历
const postorder = (root) => {
  if (!root) {
    return;
  }
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
};
postorder(bt); // 1 2 3 4 5 6 7

```

### 二叉树的先中后序遍历（非递归版）

```
//先序遍历
const preorder = (root) => {
  if (!root) {
    return;
  }
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

//中序遍历
const inorder = (root) => {
  if (!root) {
    return;
  }
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};

//后序遍历
const postorder = (root) => {
  if (!root) {
    return;
  }
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};

```

## 图

- 图是`网络结构`的抽象模型,是一组由边连接的节点
- 图可以表示任何二元关系，比如道路、航班
- JS中没有图，但是可以用Object和Array构建图
- 图的表示法：邻接矩阵、邻接表、关联矩阵

### 图的表示法

#### 邻接矩阵

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b41321b4ba8c466b9c1cef7b077f8e6d~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/080d3755b71b4ae5afaf4d34e46a178e~tplv-k3u1fbpfcp-watermark.awebp)

#### 邻接表

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89a7f151d0da4f0d9fcf84b5435cf45c~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/898c5a582c3c4685b79fecad11bbd29b~tplv-k3u1fbpfcp-watermark.awebp)

### 图的常用操作

#### 深度优先遍历：尽可能深的搜索图的分支

#### 深度优先遍历过程：

- 访问根节点
- 对根节点的`没访问过的相邻节点`挨个进行深度优先遍历

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a9bbbc24b254555bf6afc828e8fbd05~tplv-k3u1fbpfcp-watermark.awebp)

```
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};
//图的深度优先遍历
const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

dfs(2); // 2 0 1 3

```

#### 广度优先遍历：先访问离根节点最近的节点

#### 广度优先遍历过程

- 新建一个队列，把根节点入队
- 把队头出队并访问
- 把队头的`没访问过的相邻节点`入队
- 重复二、三步，直到队列为空

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c49039ba21741e5a24cd05324e0b02a~tplv-k3u1fbpfcp-watermark.awebp)

```
//图的广度优先遍历
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};
//图的深度优先遍历
const visited = new Set();
visited.add(2);
const q = [2];
const bfs = (n) => {
  while (q.length) {
    const n = q.shift();
    console.log(n);
    graph[n].forEach((c) => {
      if (!visited.has(c)) {
        q.push(c);
        visited.add(c);
      }
    });
  }
};

bfs(2); // 2 0 3 1

```

## 堆

- 堆是一种特殊的完全二叉树
- 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfc5d9efc1f24f69ab1af94414807fab~tplv-k3u1fbpfcp-watermark.awebp)![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8c71aec0f85d47da8de0de8004492ed3~tplv-k3u1fbpfcp-watermark.awebp)

- JS中通常用数组表示堆
- 左侧子节点的位置是2*index + 1
- 右侧子节点的位置是2*index + 2
- 父节点位置是(index - 2)/2

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/836b0e6d8e0d4ace868c4df4f26b521c~tplv-k3u1fbpfcp-watermark.awebp)

### 堆的应用

- 堆能高效、快速地找出最大值和最小值，时间复杂度：O(1)
- 找出第K个最大（小）元素

#### 找出第K个最大（小）元素

- 构建一个最小堆，并将元素依次插入堆中
- 当堆的容量超过K，就删除堆顶
- 插入结束后，堆顶就是第K个最大元素

## 搜索排序

- 排序：把某个乱序的数组变成升序或者降序的数组
- 搜索：找出数组中某个元素的下标

### JS中的排序和搜素

- JS中的排序：数组的sort方法
- JS中的搜索：数组的indexOf方法

### 常见排序算法

- 冒泡排序
- 选择排序
- 插入排序
- 归并排序
- 快速排序

### 常见搜索算法

- 顺序搜索
- 二分搜索

### JavaScript实现冒泡排序

#### 冒泡排序的思路

- 比较所有相邻元素，如果第一个比第二个大，则交换他们
- 一轮下来，可以保证最后一个数是最大的
- 执行n-1轮，就可以完成排序

#### 冒泡排序代码实现

```
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i += 1) {
    for (let j = 0; j < this.length - 1 - i; j += 1) {
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};

const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();

```

#### 冒泡排序的时间复杂度

- 两个嵌套循环
- 时间复杂度：O(n^2)

### JavaScript实现选择排序

#### 选择排序的思路

- 找到数组中的最小值，选中它并将其放置在第一位
- 接着找到第二小的值，选中它并将其放置在第二位
- 以此类推，执行n-1轮

#### 选择排序代码实现

```
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i += 1) {
    let indexMin = i;
    for (let j = i; j < this.length; j += 1) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      const temp = this[i];
      this[i] = this[indexMin];
      this[indexMin] = temp;
    }
  }
};

const arr = [5, 4, 3, 2, 1];
arr.selectionSort();

```

#### 选择排序的时间复杂度

- 两个嵌套循环
- 时间复杂度：O(n^2)

### JavaScript实现插入排序

> 小型数组插入排序比冒泡排序和选择排序性能好

#### 插入排序的思路

- 从第二个数开始往前比
- 比它大的往后排
- 比此类推进行到最后一个数

#### 插入排序代码实现

```
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i += 1) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j -= 1;
    }
    this[j] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];
arr.insertionSort();

```

#### 插入排序的时间复杂度

- 两个嵌套循环
- 时间复杂度：O(n^2)

### JavaScript实现归并排序

#### 归并排序的思路

- 分：把数组劈成两半，再递归地对子数组进行`分`操作，直到分成一个个单独的树
- 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完成数组

##### 合并两个有序数组

1. 新建一个空数组res,用于存放最终排序后的数组
2. 比较两个有序数组的头部，较小者出队并推入res中
3. 如果两个数组还有值，就重复第二步

#### 归并排序代码实现

```
Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
};

const arr = [5, 4, 3, 2, 1];
arr.mergeSort();

```

#### 归并排序的时间复杂度

- 分的时间复杂度是O(logN)
- 合的时间复杂度是O(n)
- 时间复杂度：O(n*logN)

### JavaScript实现快速排序

#### 快速排序的思路

- 分区：从数组中任意选择一个`基准`，所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面
- 递归：递归地对基准前后的子树组进行分区

#### 快速排序代码实现

```
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
};

const arr = [2, 4, 5, 3, 1];
arr.quickSort();

```

#### 快速排序的时间复杂度

- 递归的时间复杂度是O(logN)
- 分区操作的时间复杂度是O(n)
- 时间复杂度：O(n*logN)

### JavaScript实现顺序搜索

#### 顺序搜索的思路

- 遍历数组
- 找到跟目标值相等的元素，就返回它的下标
- 遍历结束后，如果没有搜索到目标值，就返回-1

#### 顺序搜索代码实现

```
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};
const arr = [2, 4, 5, 3, 1];
const res = arr.sequentialSearch(3);

```

#### 顺序搜索的时间复杂度

- 遍历数组是一个循环操作
- 时间复杂度：O(n)

### JavaScript实现二分搜索

二分搜索前提是数组有序

#### 二分搜索的思路

- 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
- 如果目标值大于或者小于中间元素，则在大于或小于中间元素的那一半数组中搜索

#### 二分搜索代码实现

```
Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
const arr = [1, 2, 3, 4, 5];
const res = arr.binarySearch(3);

```

#### 二分搜索的时间复杂度

- 每一次比较都使搜索范围缩小一半
- 时间复杂度：O(logN)

## 分而治之

- 分而治之是`算法设计`中的一种方法
- 他将一个问题`分`成多个和原问题相似的小问题，`递归解决`小问题，再将结果`合`并已以解决原来的问题

### 场景一：归并排序

- 分：把数组从中间一分为二
- 解：递归地对两个子数组进行归并排序
- 合：合并有序子数组

### 场景二：快速排序

- 分：选基准，按基准把数组分成两个子数组
- 解：递归地对两个子数组进行快速排序
- 合：对两个子数组进行合并

## 动态规划

- 动态规划是`算法设计`中的一种方法
- 它将一个问题分解为`相互重叠`的子问题，通过反复求解子问题，来解决原来的问题

### 斐波那契数列

- 定义子问题：F(n)=F(n-1)+F(n-2)
- 反复执行：从2循环到n,执行上述公式

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbc4bd10de614405b2760819d9e5e473~tplv-k3u1fbpfcp-watermark.awebp)

### 动态规划vs分而治之

- 动态规划->斐波那契
- 分而治之->反转二叉树(反转左右子树，子问题完全独立)

> 动态规划和分而治之算法设计思想最大区别在于子问题是否是独立的，如果他们的子问题是相互重叠的，就是动态规划，如果他们的子问题是相互独立的，就是分而治之

## 贪心算法

- 贪心算法是`算法设计`中的一种方法
- 期盼通过每个阶段的`局部最优`选择，从而达到全局的最优
- 结果并`不一定是最优`

### 零钱兑换问题

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f323e973851a435da081bccd359d741d~tplv-k3u1fbpfcp-watermark.awebp)

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89275cb8c9584e859b24f06c9cf0f184~tplv-k3u1fbpfcp-watermark.awebp)

## 回溯算法

- 回溯算法是`算法设计`中的一种方法
- 回溯算法是一种`渐进式`寻找并构建问题解决方式的策略
- 回溯算法会先从一个可能的动作开始解决问题，如果不行，就回溯并选择另一个动作，直到将问题解决

### 什么问题适合用回溯算法解决？

- 有很多路
- 这些路里，有死路，也有活路
- 通常需要递归来模拟所有的路

### 全排列问题

- 用递归模拟出所有情况
- 遇到包含重复元素的情况，就回溯
- 收集所有到达递归终点的情况，并返回

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bda26541f90e4dc2a3b8e954cd16262e~tplv-k3u1fbpfcp-watermark.awebp)