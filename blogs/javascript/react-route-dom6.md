---
title: react-router-dom6 使用
date: 2022-3-28
sidebar: 'auto'
tags:
 - react
categories: 
 - javascript
---


# react-router-dom6 使用

菜单的json如下

```
[
  {
    id: '1',     // 唯一的id
    name: "模块一",  // 菜单名称 
    path: "/model1/dashboard",    // 菜单路径
    children: [                   // 子菜单
      {
        id: '2',
        name: "首页",
        path: "/model1/dashboard",
        icon: "",
      },
      {
        id: '3',
        name: "二级菜单",
        path: "/model1",
        icon: "",
        children: [
          {
            id: '6',
            name: "2-1-home",
            path: "/model1/home",
            icon: "",
          }
        ]
      },
    ],
  },
  {
    id: '4',
    name: "模块二",
    path: "/model2",
  },
  {
    id: '5',
    name: "模块三",
    path: "/model3",
  },
]
复制代码
```

根据这个 json 动态生成路由和菜单信息

## 安装方法

```
$ yarn add react-router-dom
复制代码
```

### 使用方法

这个deme采用的 `vite`搭建的本地环境。并添加 路由库。

```
$ yarn create vite react-router6-dom-study --template react
复制代码
```

哦，对了本来不想使用组件库的，只想简单的使用一下，后面想着能不能做一个动态生成路由和菜单的功能，简单实现一下呢。于是就添加了 `antd`这个组件库

```
$ yarn add antd
复制代码
```

启用全局模式 HashRouter和BrowserRouter 两种模式，

区分

- HashRouter:URL中采用的是hash(#)部分去创建路由，类似[www.example.com/#/](https://link.juejin.cn/?target=http%3A%2F%2Fwww.example.com%2F%23%2F)
- BrowserRouter：URL采用真实的URL资源 后续有文章会详细讲HashRouter的原理和实现，这里我们采用BrowserRouter来创建路由

main.jsx如下

```
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import zhCN from "antd/lib/locale/zh_CN";
import "antd/dist/antd.css";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
);

复制代码
```

这样运行 `yarn dev`的时候在访问/的时候就可以看见这个组件了。

## 路由组件

| 组件名         | 作用      | 说明                                       |
| ----------- | ------- | ---------------------------------------- |
| `<Routers>` | 一组路由    | 代替原有`<Switch>`，所有子路由都用基础的Router children来表示 |
| `<Router>`  | 基础路由    | Router是可以嵌套的，解决原有V5中严格模式，后面与V5区别会详细介绍    |
| `<Link>`    | 导航组件    | 在实际页面中跳转使用                               |
| `<Outlet/>` | 自适应渲染组件 | 根据实际路由url自动选择组件, 一般用来实现嵌套路由。             |

## hooks

| hooks名            | 作用                      | 说明                                       |
| ----------------- | ----------------------- | ---------------------------------------- |
| `useParams`       | 返回当前参数                  | 根据路径读取参数                                 |
| `useNavigate`     | 返回当前路由                  | 代替原有V5中的 useHistor, 一般用来跳转页面和            |
| `useOutlet`       | 返回根据路由生成的element        | 还没使用，有机会试试                               |
| `useLocation`     | 返回当前的location 对象        | 可以获取 useNavigate('', {state: {id}})  里面的id参数 |
| `useRoutes`       | 同Routers组件一样，只不过是在js中使用 | 可用作配置路由                                  |
| `useSearchParams` | 用来匹配URL中?后面的搜索参数        | 用来获取  ?x=1&y=100 这样的参数                   |

### Routes Route Link 使用

```
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </header>
    </div>
  );
}
function Home() {
  return <div>
    <main>
      <h2>Welcome to the homepage</h2>
    </main>
    <nav>
      <Link to="/about">about</Link>
    </nav>
  </div>
}
function About() {
  return <div>
    <main>
      <h2>Welcome to the about page</h2>
    </main>
    <nav>
      <ol>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </ol>

    </nav>
  </div>
}
export default App;

复制代码
```

### 嵌套路由

```
function App() {
  return (
    <Routes>
      <Route path="user" element={<Users />}>
        <Route path=":id" element={<UserDetail />} />
        <Route path="create" element={<NewUser />} />
      </Route>
    </Routes>
  );
}
复制代码
```

当访问 /user/123 的时候，组件树将会变成这样

```
<App>
    <Users>
        <UserDetail/>
    </Users>
</App>
复制代码
```

如果只是内部组件修改，也可以采用`<Outlet/>`来直接实现，如下所示

```
function App() {
  return (
    <Routes>
      <Route path="user" element={<Users />}>
        <Route path=":id" element={<UserDetail />} />
        <Route path="create" element={<NewUser />} />
      </Route>
    </Routes>
  );
}
function Users() {
  return (
    <div>
      <h1>Users</h1>
      <Outlet />
    </div>
  );
}

复制代码
```

### index路由

index属性解决当嵌套路由有多个子路由但本身无法确认默认渲染哪个子路由的时候，可以增加index属性来指定默认路由

```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="user" element={<User />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
复制代码
```

这样当访问/的时候`<Outlet/>`会默认渲染About组件

### 路由通配符

整个react-router支持以下几种通配符

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
复制代码
```

这里的`*`只能用在/后面，不能用在实际路径中间

关于NotFound类路由，可以用`*`来代替

```
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

复制代码
```

### 获取参数 useParams 和useSearchParams

假设现有App路由

```
function App() {
 return (
   <Routes>
     <Route path="user" element={<Users />}>
       <Route path=":id" element={<UserDetail />} />
       <Route path="create" element={<NewUser />} />
     </Route>
   </Routes>
 );
}
复制代码
```

那么在UserDetail内部需要用useParams来获取对应的参数

```
import { useParams } from "react-router-dom";

export default function UserDetail() {
  let params = useParams();
  return <h2>User: {params.id}</h2>;
}
复制代码
```

useSearchParams相对复杂，他返回的是一个当前值和set方法

```
 let [searchParams, setSearchParams] = useSearchParams();
复制代码
```

使用时可以用`searchParams.get("id")`来获取参数，同时页面内也可以setSearchParams({"id":2})来改变路由，这样当访问 [http://URL/user?id=111](https://link.juejin.cn?target=http%3A%2F%2FURL%2Fuser%3Fid%3D111) 时就可以获取和设置路径

### useNavigate

useNavigate是替代原有V5中的useHistory的新hooks，其用法和useHistory类似，整体使用起来更轻量，他的声明方式如下：

```
declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (
    to: To,
    options?: { replace?: boolean; state?: State }
  ): void;
  (delta: number): void;
}
复制代码
  //js写法
  let navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }
  //组件写法
  function App() {
     return <Navigate to="/home" replace state={state} />;
  }
  //替代原有的go goBack和goForward
 <button onClick={() => navigate(-2)}>
    Go 2 pages back
  </button>
  <button onClick={() => navigate(-1)}>Go back</button>
  <button onClick={() => navigate(1)}>
    Go forward
  </button>
  <button onClick={() => navigate(2)}>
    Go 2 pages forward
  </button>
复制代码
```

嗨，中途床图 gitee还坏了，不得不换阿里的 oss 了。

## 闪屏问题

中途采用了 lazy 加载页面，所以就会造成闪屏，在代码中也有体现，最后决定采用局部加载的方式，来渲染二级路由，具体可以参见代码仓库，简单来说就是 `LayoutPage`（公共布局组件不使用懒加载的方式）。

## 权限思路

### 动态菜单

```
function genMenu(menuConfig) {
  return menuConfig.map(menuItem => {
    if (menuItem.children) {
      return <SubMenu
        key={menuItem.id}
        icon={<NotificationOutlined/>}
        title={menuItem.name}
      >
        {genMenu(menuItem.children)}
      </SubMenu>
    } else {
      return <Menu.Item key={menuItem.id} path={menuItem.path}>{menuItem.name}</Menu.Item>
    }
  })
}
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              onSelect={handleSelect}
              style={{height: "100%", borderRight: 0}}
            >
              {genMenu(menu[0].children)}
            </Menu>
复制代码
```

### 动态路由

```
// 经过分析发现  菜单是有父子关系的 ， 而路由没有子路由都属于 LayoutPage 的子路由

// path 命名采用 驼峰命名法 helloWorld
// 组件的目录命名采用 HelloWorld 命名方式
// 所以就需要编写一个函数  将 path /helloWorld 转换成 /HelloWorld ，也就是/后面的第一个字符准换成大写的

function convertPath (path) {
  let arr = path.split('/')
  //  forEach 调用的时候 item 如果普通类型如果给 item 重新赋值 则不会修改原始值
  //  如果是引用类型  直接改变指针的指向则原始值不会被修改
  //  如果是引用类型  在原来引用的基础上修改会修改原始值
  return arr.map(item => {
    if (item) {
      return item[0].toUpperCase() + item.substring(1)
    }else {
      return item
    }
  }).join('/')
}

let router = [
  {
    path: "/login",
    element: LazyWrapper('Login'),
  },
  {
    path: "/",
    element: <LayoutPage/>,
    children: [],
  },
];

// 包装 React.lazy函数
function LazyWrapper(path) {
  const Component = lazy(() => import(`../pages${path}`))
  return (
    <Suspense fallback={<div>loading</div>}>
      <Component/>
    </Suspense>
  );
}

// 收集所有的叶子节点，生成路由信息
function genRouter(menuConfig, router) {
  menuConfig.forEach(menuItem => {
    if(!menuItem.children) {
      router.push({
        path: menuItem.path,
        element: LazyWrapper(convertPath(menuItem.path))
      })
    }else {
      genRouter(menuItem.children, router)
    }
  })
}
genRouter(menu[0].children, router[1].children)
```