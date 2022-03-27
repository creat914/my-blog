---
title: ReactNative入门
date: 2022-3-27
sidebar: 'auto'
tags:
 - reactnative
categories: 
-  reactNative
---

# ReactNative入门

## 前置知识 

## react 的基本使用（Hook篇）

### useState

``` js
const [state,setState] = useState()
```

### useEffect

```js
//页面数据发生改变都会渲染
useEffect(()=>{});
//只在挂载时执行
useEffect(()=>{},[]);
//依赖的数据发生改变时触发
useEffect(()=>{},[state])；
//销毁时需要执行操作
useEffect(()=>{return {}},[]);
```

### useContext 搭配createContext使用

```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

接收一个 context 对象（`React.createContext` 的返回值）并返回该 context 的当前值

### useReducer

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
function Counter() {
  // 定义一个useReducer 绑定需要触发的事件
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

[`useState`](https://react.docschina.org/docs/hooks-reference.html#usestate) 的替代方案。它接收一个形如 `(state, action) => newState` 的 reducer，并返回当前的 state 以及与其配套的 `dispatch` 方法。

### useCallback 

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

把内联回调函数及依赖项数组作为参数传入 `useCallback`，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。

### useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。

### useRef

```js
const refContainer = useRef(initialValue);
```

`useRef` 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 ref 对象在组件的整个生命周期内保持不变。

一个常见的用例便是命令式地访问子组件：

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```
## 项目搭建

#### 安装依赖

必须安装的依赖有：Node、JDK 和 Android Studio。

#### 配置 ANDROID_HOME 环境变量

打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量 -> 新建，创建一个名为ANDROID_HOME的环境变量（系统或用户变量均可），指向你的 Android SDK 所在的目录

把一些工具目录添加到环境变量 Path

打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量，选中Path变量，然后点击编辑。点击新建然后把这些工具目录路径添加进去：platform-tools、emulator、tools、tools/bin

```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

#### 下载必要的sdk

运行android studio → Appearance & Behavior → System Settings → Android SDK

1. Android SDK Platform 29
2. Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件)
3. 然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的29.0.2版本。
4. 然后还是在"SDK Tools"选项卡，点击"NDK (Side by side)"，同样勾中右下角的"Show Package Details"，选择20.1.5948944版本进行安装，最后点击"Apply"来下载和安装这些组件。

#### 创建项目

```js
未安装react-native
npm init -y & npm install react-native or npm install react-native -g
默认模板
npx react-native init AwesomeProject
初始化ts模板的react-native项目
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

1. 编译并运行 React Native 应用

   ```js
   yarn android/yarn react-native run-android
   ```

2. 打开vscode 导入项目 运行yarn start 

3. 在studio中创建一个模拟器

4. studio依赖安装完成后运行项目

## [样式](https://reactnative.cn/docs/style)

react-native组件支持style={}的写法，与css样式无异，但是需要写成驼峰写法

### 1.对象写法

```js
 const backgroundStyle = {
   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
 };
```

### 2.适用StyleSheet.create管理

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
```

### 高度与宽度

```js
import React from 'react';
import { View } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
    </View>
  );
};

export default FixedDimensionsBasics;
```



## 核心组件

React Native 具有许多核心组件，从表单控件到活动指示器，应有尽有。

| REACT NATIVE UI 组件 | 安卓视图           | IOS 视图           | WEB                   | 说明                                    |
| ------------------ | -------------- | ---------------- | --------------------- | ------------------------------------- |
| `<View>`           | `<ViewGroup>`  | `<UIView>        | `<div>`               | 一个支持带有 flexbox、样式、一些触摸处理和可访问性控件的布局的容器 |
| `<Text>`           | `<TextView>`   | `<UITextView>`   | `<p>`                 | 显示、样式和嵌套文本字符串，甚至处理触摸事件                |
| `<Image>`          | `<ImageView>`  | `<UIImageView>`  | `<img>`               | 显示不同类型的图像                             |
| `<ScrollView>`     | `<ScrollView>` | `<UIScrollView>` | `<div>`               | 可以包含多个组件和视图的通用滚动容器                    |
| `<TextInput>`      | `<EditText>`   | `<UITextField>`  | `<input type="text">` | 允许用户输入文本                              |

### 基本使用，处理文本输入

```js
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  );
}
export default PizzaTranslator;
```

### 滚动视图

#### ScrollViews 

`ScrollView`适合用来显示数量不多的滚动元素。放置在`ScrollView`中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出了屏幕外

```js
import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

export default App = () => (
  <ScrollView>
    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
  </ScrollView>
);
```

#### FlatList

`FlatList`更适于长列表数据，且元素个数可以增删。和[`ScrollView`](https://reactnative.cn/docs/using-a-scrollview)不同的是，`FlatList`并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。

`FlatList`组件必须的两个属性是`data`和`renderItem`。`data`是列表的数据源，而`renderItem`则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。

```js
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;
```

#### SectionList

需要分组的数据，也许还带有分组标签的时候可以适用

```js
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

export default SectionListBasics;
```

## 处理触摸事件

### onPress 点击事件

```js
<Button
  onPress={() => {
    Alert.alert('你点击了按钮！');
  }}
  title="点我！"
/>
```



## 检测运行平台

### Platform 模块

React Native 提供了一个检测当前运行平台的模块。如果组件只有一小部分代码需要依据平台定制，那么这个模块就可以派上用场。

#### Platform.OS

```js
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});
```

#### Platform.select()

以 Platform.OS 为 key，从传入的对象中返回对应平台的值

```js
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'blue'
      }
    })
  }
});
```

#### Platform.Version

1. ###### 检测 Android 版本

   在 Android 上，`Version`属性是一个数字

   ```
   import { Platform } from 'react-native';

   if (Platform.Version === 25) {
     console.log('Running on Nougat!');
   }
   ```

2. ###### 检测 iOS 版本

   在 iOS 上，`Version`属性是`-[UIDevice systemVersion]`的返回值，具体形式为一个表示当前系统版本的字符串

   ```js
   import { Platform } from 'react-native';

   const majorVersionIOS = parseInt(Platform.Version, 10);
   if (majorVersionIOS <= 9) {
     console.log('Work around a change in behavior');
   }
   ```

## 发起请求

### [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Request)

```
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue'
  })
});
```

## [链接第三方库](https://reactnative.directory/)

### [使用导航器跳转页面](https://reactnavigation.org/)(https://juejin.cn/post/7009526375606386718)

```js
npm install @react-navigation/native react-native-screens react-native-safe-area-context
```

iOS 还需要运行`pod install`
Android需要一些额外的配置才能正常使用，在`MainActivity`类添加代码：

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

并且保证导入头文件

```
import android.os.Bundle;
```

#### createNativeStackNavigator

最常用的导航控制器，首先要安装`stack navigator`库

```
npm install @react-navigation/native-stack
```

`createNativeStackNavigator`是一个函数，它返回一个包含了`Screen`和`Navigator`这两个属性的一个对象。它们俩是`React`的组件用来配置导航器.`Navigator`应该包裹`Screen`作为 其子元素用来定义路由的一些配置。

`NavigationContainer`是用来管理我们导航树并且包含了导航状态的组件。这个控件必须包括所有的导航控制器构造。通常，在我们app的最顶端去渲染这个组件。

```js

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('About')}>Home Screen</Text>
    </View>
  );
}
function AboutScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('Home')}> About Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```