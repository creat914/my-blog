---
title: React笔记
date: 2022-3-30
sidebar: 'auto'
tags:
 - 框架
categories: 
 - theFramework
---

# React

## 生命周期

```js
//安装,当组件的实例被创建并插入到 DOM 中时，这些方法按以下顺序调用：
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
//更新中,更新可能由道具或状态的更改引起。当重新渲染组件时，这些方法按以下顺序调用：
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
//卸载,当组件从 DOM 中移除时调用此方法：
componentWillUnmount()
```

## 异步组件

```js
// 异步懒加载
const Box = lazy(() => import("./components/Box"));
// 使用组件的时候要用suspense进行包裹
<Suspense fallback={<div>loading...</div>}>{show && <Box />}</Suspense>;
```

## hook的使用

### useState

定义响应式数据以及对应的修改数据的方法

```js
const [state,setState] = useState()
```

### useEffect

定义副作用

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

定义跨组件获取数据的方法

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

全局状态管理

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

定义缓存方法

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

定义缓存数据类似计算属性

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

把“创建”函数和依赖项数组作为参数传入 `useMemo`，它仅会在某个依赖项改变时才重新计算 memoized 值。

### useRef

存储组件对象，或者存储内容，方便在闭包内使用

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



## react-redux使用

### 定义store

```js
import { createStore , combineReducers} from 'redux'
// 定义动作
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'changeGolState':
      state = { ...state, ...action.value }
      return state
    default:
      state = { ...state, ...action.value }
      return state
  }
}
// 初始值
const initialVal = {}
// 合并reduecr
const allReducer = combineReducers({
  [key]: reducer
})
// 创建store
const store = createStore(allReducer,initialVal)

// 监听redux数据变化
const unsubscribe = store.store.subscribe(() => {
 
})
// 取消监听
unsubscribe()
```

### 关联全局

```js
import { Provider } from 'react-redux' // 导出链接桥
import store from './redux/index' // 导出定义的store

 <Provider store={store.store}>
   <component></component>
 </Provider>
```

### 使用conect写法

```js
import { connect } from 'react-redux'
//需要渲染什么数据
function mapStateToProps(state) {
  // 上面合并的模块名
  return state[key]
}
//需要触发什么行为 type对应哪个模块的redecur就会更新哪个模块的state
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({ type: 'changeGolState', value: { name: '王五' } }),
    PayDecrease: () => dispatch({ type: '扣工资', value: { name: '王五' } })
  }
}
function component(){}
export default connect(mapStateToProps, mapDispatchToProps)(component)
```

### 使用hook写法

```js
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// 返回获取的值
function getIptValue(state){
  // key是dispatch派发的模块
  return  state[key].iptValue
}
function component() {
   const iptValue = useSelector(getIptValue, shallowEqual)
   const dispatch = useDispatch()
   return (
    <div>
      <div>{iptValue}</div>
      <div onClick={() => dispatch({ type: '扣工资', value: { name: '王五' } })}>涨工资</div>
      <div onClick={() => dispatch({ type: '扣工资', value: { name: '王五' } })}>降工资</div>
    </div>
  )
}
```

