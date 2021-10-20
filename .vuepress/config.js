const audioList = require("./config/audio");
module.exports = {
    "title": "林深见鹿",
    "description": "",
    "dest": "docs",
    "base": '/my-blog/',
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/my-blog/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    "theme": "reco",
    "themeConfig": {
        locales: {
            '/': {
                recoLocales: {
                    all: '全部',
                    article: '文章',
                    tag: '标签',
                    category: '文章类别',
                    friendLink: '友情链接',
                    timeLine: '时间轴',
                    timeLineMsg: '昨日重现！',
                    pagation: {
                        prev: '上一页',
                        next: '下一页',
                        go: '前往',
                        jump: '跳转至'
                    }
                }
            }
        },
        "nav": [
            {
                "text": "首页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "文章发表历程",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            // {
            //     "text": "在线编辑",
            //     "link": "/Units/",
            //     "icon": "reco-date"
            // },
            // {
            //   "text": "Docs",
            //   "icon": "reco-message",
            //   "items": [
            //     {
            //       "text": "vuepress-reco",
            //       "link": "/docs/theme-reco/"
            //     }
            //   ]
            // },
            // {
            //   "text": "Contact",
            //   "icon": "reco-message",
            //   "items": [
            //     {
            //       "text": "GitHub",
            //       "link": "https://github.com/recoluan",
            //       "icon": "reco-github"
            //     }
            //   ]
            // }
        ],
        "sidebar": {
            "/blogs/javascript/": [
                "utils",
                "DataStructure",
                "knowledge",
                "es6",
                "package.json",
                "VueRouter",
                "window",
                "arrayOption"
            ],
            "/blogs/typescript/": [
                "",
                "heightUse",
                "tsMore"
            ],
            "/blogs/utils/": [
                "npmPage"
            ]
        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "文章"
            }
            // ,
            // "tag": {
            //   "location": 4,
            //   "text": "类别"
            // }
        },
        // "friendLink": [
        //   {
        //     "title": "午后南杂",
        //     "desc": "Enjoy when you can, and endure when you must.",
        //     "email": "1156743527@qq.com",
        //     "link": "https://www.recoluan.com"
        //   },
        //   {
        //     "title": "vuepress-theme-reco",
        //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        //     "link": "https://vuepress-theme-reco.recoluan.com"
        //   }
        // ],
        "logo": "/avatar.jpeg",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "上次更新时间",
        "author": "司",
        "authorAvatar": "/avatar.jpg",
        "startYear": "2021",
    },
    plugins: [
        ["run", {
            jsLabs: ['https://unpkg.com/element-ui/lib/index.js'],
            cssLabs: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
        }],
        ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
            theme: ['z16'],
            messages: {
                welcome: '随便看看吧',
                close: '期待下次相见'
            },
            // Buttons: ['home','message','close'],
            // modelStyle: { left: '30px', bottom: '-10px', opacity: '0.9' },
            // messageStyle: { left: '110px', bottom: '170px' },
            // btnStyle: { left: '20px', bottom: '40px' }
        },
        ],
        ["@vuepress-reco/vuepress-plugin-bgm-player", {
            audios: audioList,
            autoplay: false,
            position: { left: '20px', bottom: '30px', 'z-index': '999999' }
        }],
        ['ribbon'],
        [
            "sakura", {
                num: 20,
                show: true,
                zIndex: 99
            }
        ],
        [
            'dynamic-title',
            {
                showIcon: '/favicon.ico',
                showText: '欢迎回来',
                hideIcon: '/failure.ico',
                hideText: '慢走不送',
                recoverTime: 2000,
            },
        ]
    ],
    "markdown": {
        "lineNumbers": true
    }
}