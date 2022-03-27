---
title: flutter入门
date: 2022-3-27
sidebar: 'auto'
tags:
 - flutter
categories: 
 - flutter
---

# Flutter

### 基本目录结构

android存放android平台相关的代码

ios存放ios平台相关代码

lib 存放项目代码

test 测试代码

pubspec.yarl 配置文件存放相关依赖

### 第一个Hello World

```
void main() {
  runApp(
    const Center(
      child: Text('hello world',
          textDirection: TextDirection.ltr,
          style: TextStyle(
            fontSize: 40.0,
            fontWeight: FontWeight.bold,
            color: Colors.yellow,
          )),
    ),
  );
}

Center 水平居中容器
Text 文本容器 textDirection 文本方向
style 设置文本样式

```



### 库引入规范

```
dart 库

package库

自定义方法 / 组件库
```


### 自定义组件

```
void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return const Center(
      child: Text('hello world',
          textDirection: TextDirection.ltr,
          style: TextStyle(
            fontSize: 40.0,
            fontWeight: FontWeight.bold,
            color: Colors.yellow,
          )),
    );
  }
}
StatelessWidget 无状态组件
StatefulWidget 状态组件
```

### 基本组件

#### MaterialApp 

```dart
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(home: Scaffold(
      appBar: AppBar(title: const Text("flutter demo")),
      body: const Center(
        child: Text("helloWorld"),
      ),
    ));
  }
}
MaterialApp是一个方便的Widget，它封装了应用程序实现Material Design所需要的一些Widget。
Scaffold组件是Material Design布局结构的基本实现。此类提供了用于显示drawer、snackbar和底部sheet的API。MaterialApp 的 child 是 Scaffold Widget。
```



#### Center、 Text、Container组件

```dart
void main() {
  runApp(
    const Center(
      child: Text('hello world',
          textDirection: TextDirection.ltr,
          style: TextStyle(
            fontSize: 40.0,
            fontWeight: FontWeight.bold,
            color: Colors.yellow,
          )),
    ),
  );
}

Center 定义一个居中布局
Text 定义一个文本区域
Text(
    String this.data, {
    Key? key,
    this.style, // 文本样式
    this.strutStyle,
    this.textAlign, 
    this.textDirection, // 文本方向
    this.locale,
    this.softWrap,
    this.overflow, // 溢出处理
    this.textScaleFactor,
    this.maxLines, //最大行数
    this.semanticsLabel,
    this.textWidthBasis,
    this.textHeightBehavior,
}) 
Container 容器组件
  Container({
    Key key,
    this.alignment,
    this.padding,
    Color color,
    Decoration decoration,
    this.foregroundDecoration,
    double width,
    double height,
    BoxConstraints constraints,
    this.margin,
    this.transform,
    this.child,
})
```

### 路由

```
runApp(MaterialApp(
  initialRoute: '/home',默认路由
  routes:{
    path: (context)=>组件/页面
  }
))

路由跳转
Navigator.pushNamed(context,path,arguments:{});
ModalRoute.of(context).settings.arguments;//获取路由参数
```

### 生命周期

无状态Widget

1.整个周期所定义的状态不会发生改变

2.所创的函数只会运行一次

有状态的Widget

1.整个周期所定义的状态可以发生改变

2.可以通过setState实现状态更新

```
initState() // widget被创建时执行
Build() //构建渲染Widget,一旦使用setState 会再次构建
Dispose() // Widget被删除触发
```

### 异步操作

```
// 延迟函数
Future.delayed(Duration(seconds:timer),() {
  
})
// await async 同步代码
```


