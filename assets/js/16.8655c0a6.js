(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{557:function(s,e,a){"use strict";a.r(e);var n=a(4),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-router属性解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router属性解析"}},[s._v("#")]),s._v(" Vue-Router属性解析")]),s._v(" "),a("p",[a("strong",[s._v("前言")])]),s._v(" "),a("p",[s._v("Vue Router 是 Vue.js 官方的路由管理器。")]),s._v(" "),a("p",[s._v("它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。")]),s._v(" "),a("p",[s._v("包含的功能有：")]),s._v(" "),a("ul",[a("li",[s._v("嵌套的路由/视图表")]),s._v(" "),a("li",[s._v("模块化的、基于组件的路由配置")]),s._v(" "),a("li",[s._v("路由参数、查询、通配符")]),s._v(" "),a("li",[s._v("基于 Vue.js 过渡系统的视图过渡效果")]),s._v(" "),a("li",[s._v("细粒度的导航控制")]),s._v(" "),a("li",[s._v("带有自动激活的 CSS class 的链接")]),s._v(" "),a("li",[s._v("HTML5 历史模式或 hash 模式，在 IE9 中自动降级")]),s._v(" "),a("li",[s._v("自定义的滚动条行为")])]),s._v(" "),a("p",[s._v("本文是作者是实际项目中遇到的一些总结，主要包括：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("响应路由参数变化")])]),s._v(" "),a("li",[a("code",[s._v("路由匹配")])]),s._v(" "),a("li",[a("code",[s._v("高级匹配模式")])]),s._v(" "),a("li",[a("code",[s._v("匹配优先级")])]),s._v(" "),a("li",[a("code",[s._v("push和replace的第二个第三个参数")])]),s._v(" "),a("li",[a("code",[s._v("路由视图")])]),s._v(" "),a("li",[a("code",[s._v("重定向")])]),s._v(" "),a("li",[a("code",[s._v("使用props解耦$route")])]),s._v(" "),a("li",[a("code",[s._v("导航守卫")])]),s._v(" "),a("li",[a("code",[s._v("守卫的next方法")])])]),s._v(" "),a("p",[s._v("希望本文对你有所帮助。")]),s._v(" "),a("h2",{attrs:{id:"_1-响应路由参数变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-响应路由参数变化"}},[s._v("#")]),s._v(" 1. 响应路由参数变化")]),s._v(" "),a("p",[s._v("针对复用组件（只是路由参数发生改变），生命周期函数钩子不会被调用，如何能刷新组件了？")]),s._v(" "),a("ul",[a("li",[s._v("watch监听")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("watch: {\n    '$route' (to, from) {\n    // 对路由变化作出响应...\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("beforeRouteUpdate")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("beforeRouteUpdate (to, from, next) {\n  // react to route changes...\n/ / don't forget to call next()\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2-路由匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-路由匹配"}},[s._v("#")]),s._v(" 2. 路由匹配")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{\n  // 会匹配所有路径\n  path: '*'\n}\n{\n  // 会匹配以 `/user-` 开头的任意路径\n  path: '/user-*'\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("注意：当使用通配符路由时，请确保路由的顺序是正确的，也就是说含有通配符的路由应该放在最后。路由 { path: '*' } 通常用于客户端 404 错误。")]),s._v(" "),a("p",[s._v("如果你使用了History 模式，请确保正确配置你的服务器。")]),s._v(" "),a("p",[s._v("当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。")]),s._v(" "),a("p",[s._v("它包含了 URL 通过通配符被匹配的部分：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 给出一个路由 { path: '/user-*' }\nthis.$router.push('/user-admin')\nthis.$route.params.pathMatch // 'admin'\n// 给出一个路由 { path: '*' }\nthis.$router.push('/non-existing')\nthis.$route.params.pathMatch // '/non-existing'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_3-高级匹配模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-高级匹配模式"}},[s._v("#")]),s._v(" 3. 高级匹配模式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 命名参数必须有"单个字符"[A-Za-z09]组成\n \n// ?可选参数\n{ path: \'/optional-params/:foo?\' }\n// 路由跳转是可以设置或者不设置foo参数，可选\n<router-link to="/optional-params">/optional-params</router-link>\n<router-link to="/optional-params/foo">/optional-params/foo</router-link>\n \n// 零个或多个参数\n{ path: \'/optional-params/*\' }\n<router-link to="/number">没有参数</router-link>\n<router-link to="/number/foo000">一个参数</router-link>\n<router-link to="/number/foo111/fff222">多个参数</router-link>\n \n \n// 一个或多个参数\n{ path: \'/optional-params/:foo+\' }\n<router-link to="/number/foo">一个参数</router-link>\n<router-link to="/number/foo/foo111/fff222">多个参数</router-link>\n \n// 自定义匹配参数\n// 可以为所有参数提供一个自定义的regexp，它将覆盖默认值（[^\\/]+）\n{ path: \'/optional-params/:id(\\\\d+)\' }\n{ path: \'/optional-params/(foo/)?bar\' }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"_4-匹配优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-匹配优先级"}},[s._v("#")]),s._v(" 4. 匹配优先级")]),s._v(" "),a("p",[s._v("有时候一个路径可能匹配多个路由。")]),s._v(" "),a("p",[s._v("此时，匹配的优先级就是按照路由的定义顺序：先定义，优先级最高。")]),s._v(" "),a("h2",{attrs:{id:"_5-push和replace的第二个第三个参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-push和replace的第二个第三个参数"}},[s._v("#")]),s._v(" 5. push和replace的第二个第三个参数")]),s._v(" "),a("p",[s._v("在 2.2.0+版本，可选的在 router.push 或 router.replace 中提供 onComplete 和 onAbort 回调作为第二个和第三个参数。")]),s._v(" "),a("p",[s._v("这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，router.push 或 router.replace 将返回一个 Promise。")]),s._v(" "),a("p",[s._v("接下来看几个例子来看看第二个第三个参数的调用时机：")]),s._v(" "),a("h4",{attrs:{id:"_1-组件1跳转组件2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-组件1跳转组件2"}},[s._v("#")]),s._v(" 1. 组件1跳转组件2")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 组件1\nthis.$router.push({ name: 'number' }, () => {\n  console.log('组件1：onComplete回调');\n}, () => {\n  console.log('组件1：onAbort回调');\n});\n// 组件2\nbeforeRouteEnter(to, from, next) {\n  console.log('组件2：beforeRouteEnter');\n  next();\n},\nbeforeCreate() {\n  console.log('组件2：beforeCreate');\n},\ncreated() {\n  console.log('组件2：created');\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("组件之间跳转触发onComplete回调。")]),s._v(" "),a("h4",{attrs:{id:"_2-组件2跳转组件2-不带参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件2跳转组件2-不带参数"}},[s._v("#")]),s._v(" 2. 组件2跳转组件2（不带参数）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("this.$router.push({ name: 'number'}, () => {\n  console.log('组件2：onComplete回调');\n}, () => {\n  console.log('组件2,自我跳转：onAbort回调');\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("组件自我跳转当不带参数时触发onAbort回调。但是当自我跳转带参数时可能情况就有点不一样。")]),s._v(" "),a("h4",{attrs:{id:"_3-组件2跳转组件2-带参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件2跳转组件2-带参数"}},[s._v("#")]),s._v(" 3. 组件2跳转组件2（带参数）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("this.$router.push({ name: 'number', params: { foo: this.number}}, () => {\n    console.log('组件2：onComplete回调');\n}, () => {\n    console.log('组件2,自我跳转：onAbort回调');\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("组件自我带参数跳转，onComplete回调、onAbort回调回调都不会触发。")]),s._v(" "),a("h2",{attrs:{id:"_6-路由视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-路由视图"}},[s._v("#")]),s._v(" 6. 路由视图")]),s._v(" "),a("p",[s._v("有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了。")]),s._v(" "),a("p",[s._v("你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。")]),s._v(" "),a("p",[s._v("如果 router-view 没有设置名字，那么默认为 default。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<router-view class="view one"></router-view>\n<router-view class="view two" name="a"></router-view>\n<router-view class="view three" name="b"></router-view>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。")]),s._v(" "),a("p",[s._v("确保正确使用 components 配置 (带上 s)：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const router = new VueRouter({\nroutes: [\n  {\n    path: '/',\n    components: {\n        default: Foo,\n        a: Bar,\n        b: Baz\n    }\n    }\n  ]\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"_7-重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-重定向"}},[s._v("#")]),s._v(" 7. 重定向")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{ path: '/a', redirect: '/b' }\n{ path: '/a', redirect: { name: 'foo' }}\n{ path: '/a', redirect: to => {\n  // 方法接收 目标路由 作为参数\n  // return 重定向的 字符串路径/路径对象\n}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("注意：导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。")]),s._v(" "),a("p",[s._v("在上面这个例子中，为 /a 路由添加一个 beforeEach 或 beforeLeave 守卫并不会有任何效果。")]),s._v(" "),a("h2",{attrs:{id:"_8-使用props解耦-route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-使用props解耦-route"}},[s._v("#")]),s._v(" 8. 使用props解耦$route")]),s._v(" "),a("p",[s._v("在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// router文件\n// 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：\n{\n  path: '/number/:name',\n  props: true,\n  // 对象模式 props: { newsletterPopup: false }\n  // 函数模式 props: (route) => ({ query: route.parmas.name })\n  name: 'number',\n  component: () => import( /* webpackChunkName: \"number\" */ './views/Number.vue')\n}\n// 组件获取\nexport default{\n  props: ['name']\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"_9-导航守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-导航守卫"}},[s._v("#")]),s._v(" 9. 导航守卫")]),s._v(" "),a("h4",{attrs:{id:"_1-三种全局守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-三种全局守卫"}},[s._v("#")]),s._v(" 1. 三种全局守卫")]),s._v(" "),a("ul",[a("li",[s._v("router.beforeEach 全局前置守卫 进入路由之前。")]),s._v(" "),a("li",[s._v("router.beforeResolve 全局解析守卫2.5.0新增。在beforeRouteEnter调用之后调用。")]),s._v(" "),a("li",[s._v("router.afterEach 全局后置钩子 进入路由之后。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 入口文件\nimport router from './router'\n \n// 全局前置守卫\nrouter.beforeEach((to, from, next) => {\n  console.log('beforeEach 全局前置守卫');\nnext();\n});\n// 全局解析守卫\nrouter.beforeResolve((to, from, next) => {\n  console.log('beforeResolve 全局解析守卫');\nnext();\n});\n// 全局后置守卫\nrouter.afterEach((to, from) => {\n  console.log('afterEach 全局后置守卫');\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h4",{attrs:{id:"_2-路由独享守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-路由独享守卫"}},[s._v("#")]),s._v(" 2. 路由独享守卫")]),s._v(" "),a("ul",[a("li",[s._v("beforeEnter全局前置守卫进入路由之前。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{\n    path: '/number/:name',\n    props: true,\n    name: 'number',\n    // 路由独享守卫\n    beforeEnter: (to, from, next) => {\n        console.log('beforeEnter 路由独享守卫');\n        next();\n    },\n    component: () => import( /* webpackChunkName: \"number\" */ './views/Number.vue')\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"_3-组件内守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件内守卫"}},[s._v("#")]),s._v(" 3. 组件内守卫")]),s._v(" "),a("ul",[a("li",[s._v("beforeRouteEnter")]),s._v(" "),a("li",[s._v("beforeRouteUpdate(2.2新增)")]),s._v(" "),a("li",[s._v("beforeRouteLeave")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("beforeRouteEnter(to, from, next) {\n    // 在渲染该组件的对应路由被 confirm 前调用\n    // 不！能！获取组件实例 `this`\n    // 因为当守卫执行前，组件实例还没被创建\n    console.log('beforeRouteEnter 组件内进入守卫');\n    next();\n},\nbeforeRouteUpdate(to, from, next) {\n    // 在当前路由改变，但是该组件被复用时调用\n    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，\n    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。\n    // 可以访问组件实例 `this`\n    console.log('beforeRouteUpdate 组件内更新守卫');\n    next();\n},\nbeforeRouteLeave(to, from, next) {\n    // 导航离开该组件的对应路由时调用\n    // 可以访问组件实例 `this`\n    console.log('beforeRouteLeave 组件内离开守卫');\n    next();\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h2",{attrs:{id:"_10-守卫的-next-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-守卫的-next-方法"}},[s._v("#")]),s._v(" 10. 守卫的 next 方法")]),s._v(" "),a("p",[s._v("next: 调用该方法 resolve 钩子。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。")])]),s._v(" "),a("li",[a("p",[s._v("next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。")])]),s._v(" "),a("li",[a("p",[s._v("next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。")])]),s._v(" "),a("li",[a("p",[s._v("next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。")]),s._v(" "),a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])]),s._v(" "),a("h1",{attrs:{id:"强大-html-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强大-html-属性"}},[s._v("#")]),s._v(" 强大 HTML 属性")])])}),[],!1,null,null,null);e.default=t.exports}}]);