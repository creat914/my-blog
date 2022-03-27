---
title: Mock的基本使用
date: 2021-10-17
sidebar: 'auto'
tags:
 - mock
categories: 
-  mock数据
---

# mockjs介绍

[https://github.com/nuysoft/Mock/wiki/Getting-Started](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fnuysoft%2FMock%2Fwiki%2FGetting-Started)

## 一、为什么使用mockjs

在做开发时，当后端的接口还未完成，前端为了不影响工作效率，手动模拟后端接口，

> 1.我们可以使用json文件来模拟后台数据，但比较局限，无法模拟数据的增删改查
> 2.使用json-server模拟，但不能随机生成所需数据
> 3.使用mockjs模拟后端接口，可随机生成所需数据，可模拟对数据的增删改查

## 二、mock优点

> 1.前后端分离，
> 2.可随机生成大量的数据
> 3.用法简单
> 4.数据类型丰富
> 5.可扩展数据类型
> 6.在已有接口文档的情况下，我们可以直接按照接口文档来开发，将相应的字段写好，在接口完成 之后，只需要改变url地址即可。

## 三、mock使用



```jsx
npm install mockjs --save-dev
// 引入 Mock
var Mock = require('mockjs')

// 定义数据类型
var data = Mock.mock({
  // 20条数据
  "data|20": [{
    // 商品种类
    "goodsClass": "女装",
    // 商品Id
    "goodsId|+1": 1,
    //商品名称
    "goodsName": "@ctitle(10)",
    //商品地址
    "goodsAddress": "@county(true)",
    //商品等级评价★
    "goodsStar|1-5": "★",
    //商品图片
    "goodsImg": "@Image('100x100','@color','小甜甜')",
    //商品售价
    "goodsSale|30-500": 30

  }]
})
// 输出结果随机生成的数据（node index.js）
 console.log(data);
```

## 四、mockjs的数据类型 及 语法规范

**1、Mock.Random**

> Mock.Random是一个工具类，用于生成各种随机数据。
> Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 @占位符(参数 [, 参数])

**2Mock.Random 提供的完整方法（占位符）如下**

| 类型          | 方法                                                         |
| ------------- | ------------------------------------------------------------ |
| Basic         | boolean, natural, integer, float, character, string, range, date, time, datetime, now |
| Image         | image, dataImage                                             |
| Color         | color                                                        |
| Text          | paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle |
| Name          | first, last, name, cfirst, clast, cname                      |
| Web           | url, domain, email, ip, tld                                  |
| Address       | area, region                                                 |
| Helper        | capitalize, upper, lower, pick, shuffle                      |
| Miscellaneous | guid, id                                                     |

**3.定义数据类型，详情见官方文档**



```jsx
// 引入 Mock
var Mock = require('mockjs')

// 定义数据类型
var data = Mock.mock({
  // 20条数据
  "data|3": [{
    // 商品种类
    "goodsClass": "女装",
    // 商品Id
    "goodsId|+1": 1,
    //商品名称
    "goodsName": "@ctitle(10)",
    //商品地址
    "goodsAddress": "@county(true)",
    //商品等级评价★
    "goodsStar|1-5": "★",
    //商品图片
    "goodsImg": "@Image('100x100','@color','小甜甜')",
    //商品售价
    "goodsSale|30-500": 30,

    // 邮箱：
    "email": "@email",
    // 颜色
    "color": "@color",

    // name
    "name": "@name",

    //img,参数1：背景色，参2：前景色，参3：图片的格式，默认png，参4：图片上的文字

    "img": "@image('100*100','@color')",
    //英文文本(句子)参1：句子的个数，参2：句子的最小个数  参3：句子的最大个数，没有参1时，参2参3才会生效
    "Etext":"@paragraph(1,1,3)",

    //中文文本(句子)参1：句子的个数，参2：句子的最小个数  参3：句子的最大个数，没有参1时，参2参3才会生效
    "Ctext":"@cparagraph(1,1,3)",

    //中国大区
    "cregion":"@region",
    // 省
    "cprovince":"@province",
    //市
    "ccity":"@city",
    //省 + 市
    "ss":"@city(true)",
    //县
    "country":"@county",
    //省市县
    "countrysx":"@county(true)",
    //邮政编码
    "code":"@zip"

  }]
})

// 输出结果
// console.log(data);
```

**4.mockjs语法规范**



```csharp
数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value

注意：
属性名 和 生成规则 之间用竖线 | 分隔。 
生成规则 是可选的。 
生成规则 有 7 种格式： 'name|min-max': value 'name|count': value 'name|min-max.dmin-dmax': value 'name|min-max.dcount': value 'name|count.dmin-dmax': value 'name|count.dcount': value
//属性值自动加 1，初始值为 `number` 'name|+step': value    

生成规则 的 含义 需要依赖 属性值的类型 才能确定。
属性值 中可以含有 @占位符。
属性值 还指定了最终值的初始值和类型。
--------------------------------------------- 
```

### 1. 属性值是字符串 String

1. `'name|min-max': string`

   通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

2. `'name|count': string`

   通过重复 `string` 生成一个字符串，重复次数等于 `count`。

### 2. 属性值是数字 Number

1. `'name|+1': number`

   属性值自动加 1，初始值为 `number`。

2. `'name|min-max': number`

   生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型。

3. `'name|min-max.dmin-dmax': number`

   生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位。

### 3. 属性值是布尔型 Boolean

1. `'name|1': boolean`

   随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

2. `'name|min-max': value`

   随机生成一个布尔值，值为 `value` 的概率是 `min / (min + max)`，值为 `!value` 的概率是 `max / (min + max)`。

### 4. 属性值是对象 Object

1. `'name|count': object`

   从属性值 `object` 中随机选取 `count` 个属性。

2. `'name|min-max': object`

   从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

### 5. 属性值是数组 Array

1. `'name|1': array`

   从属性值 `array` 中随机选取 1 个元素，作为最终值。

2. `'name|+1': array`

   从属性值 `array` 中顺序选取 1 个元素，作为最终值。

3. `'name|min-max': array`

   通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

4. `'name|count': array`

   通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

### 6. 属性值是函数 Function

1. `'name': function`

   执行函数 `function`，取其返回值作为最终的属性值，函数的上下文为属性 `'name'` 所在的对象。

### 7. 属性值是正则表达式 RegExp

1. `'name': regexp`

   根据正则表达式 `regexp` 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。

   

   ```source-js
   Mock.mock({
       'regexp1': /[a-z][A-Z][0-9]/,
       'regexp2': /\w\W\s\S\d\D/,
       'regexp3': /\d{5,10}/
   })
   // =>
   {
       "regexp1": "pJ7",
       "regexp2": "F)\fp1G",
       "regexp3": "561659409"
   }
   ```

## 四、 Mock.setup()

Mock.setup( settings )

配置拦截 Ajax 请求时的行为。支持的配置项有：timeout
指定被拦截的 Ajax 请求的响应时间，单位是毫秒。
值可以是正整数，例如 400，表示 400 毫秒 后才会返回响应内容；
也可以是横杠 '-' 风格的字符串，例如 '200-600'，表示响应时间介于 200 和 600 毫秒之间。默认值是'10-100'。



```css
  Mock.setup({
    timeout: 400
})
Mock.setup({
    timeout: '200-600'
})
目前，接口 Mock.setup( settings ) 仅用于配置 Ajax 请求，将来可能用于配置 Mock 的其他行为。
```

## 五、Mock.Random 扩展方法



```tsx
// 引入 Mock
var Mock = require('mockjs')

var random = Mock.Random;

//扩展数据模板
random.extend({
  type: function (index:number) {
    const types = ['products', 'industryApp', 'solution', 'experts'];
    return this.pick(types[index])
  }
});

// 定义数据类型
const  menuSource:Array<any> = [];
 menuSource[0] = Mock.mock({
  "type": "@type(0)",
   'data|3-4':[{
     'id|+1': 1,
     name: "@ctitle( 4,6)",
     "childs|5-10": [{
       'id|+1': 1,
       name: "@ctitle(4,6)",
     }]
   }]
});
// 输出结果
 console.log(data);
```

## 六、mockjs获取前端传递的数据



```kotlin
// mock.js

// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
const produceNewsData = function () {
  let newsList = []
  for (let i = 0; i < 20; i++) {
    let newNewsObject = {
      title: Random.ctitle(), //  Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
      content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
      createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
    }
    newsList.push(newNewsObject)
  }

  return newList
}
// 请求该url，就可以返回newsList
Mock.mock('/mock/news', produceNewsData) // 后面讲这个api的使用细节

axios({
      method: "get",
      url: "/mock/news",
      data: {
        id:2
      }
    }).then(data => {
      //成功的回调函数，返回的是增加的数据
      console.log(data.data.data);
      this.url = data.data.data[0].goodsImg
    });
  }

  Mock.mock("/getGoods", "get", (config) => {
  console.log(config);
  return data;
})

###mockjs可以通过option.body获取前端传递的数据
```

Mock.mock()

```
Mock.mock( rurl, rtype, template|function( options ) )
rurl
可选。
表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 '/domian/list.json'。

rtype
可选。
表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。

template
可选。
表示数据模板，可以是对象或字符串。
数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
例如：'name|1-10':1 会产生一个1-10之间的整数，详细规则参见官方文档

function(options)
可选。
表示用于生成响应数据的函数。
options
指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
```

# 数组29个方法