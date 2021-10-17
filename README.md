---
home: true
heroText: めぐみん
heroImage: /avatar.jpeg
heroImageStyle: {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  display: block,
  margin: '14rem auto 2rem',
  background: '#fff',
  objectFit: 'cover'
}
bgImage: bg.jpeg
bgImageStyle: {
  height: '800px',
  color: '#FFFFFF'
}
isShowTitleInHome: false
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---

<style>
@-webkit-keyframes play{
  from{opacity: 0}
  to{opacity: 1}
}
.description{
   position: relative;
   display: inline-block;
}
.description:after{
  content: '';
  width: 1px;
  height: 28px;
  background: #FFFFFF;
  display: inline-block;
  animation: play 1s linear infinite;
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translateY(-50%);
}
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s  linear infinite;
  position: absolute;
  left: 50%;
  bottom: 30px;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
    // this.$nextTick(()=>{
    //  const des = document.querySelector('.hero .description');
    //     let textList = [
    //     "喜欢二次元",
    //     "喜欢小萝莉",
    //     "拥抱今天，期待明天"
    //     ];
    //     let textSpan = ''
    //     let listIndex = 0
    //     const depth = () => {
    //            listIndex === textList.length && (listIndex = 0);
    //            textSpan = (textList[listIndex++]).split('');
    //            let i = 1;
    //            let timer = setInterval(()=>{
    //            if(i === textSpan.length){
    //                clearInterval(timer)
    //                setTimeout(()=>{
    //                  depth()
    //                },2000)
    //            }
    //            des.innerText = textSpan.slice(0,i).join('');
    //               i++;
    //            },100)
    //     }
    //     depth()
    // })
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }
}
</script>