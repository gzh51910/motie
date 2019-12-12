[TOC]

# react 项目 《磨铁中文网》
### 项目类型 阅读App
## 项目分工 
* 邢海龙(组长)
    - 负责主页，发现页，搜索页，书架页，和部分数据爬取
* 吴诗雯
    - 负责后台，分类，排行，全本，免费界面制作
* 罗涛 
    - 负责登陆界面，注册界面的制作，我的商品的界面的制作，个人信息。
* 李浩明
    - 负责详情，阅读页, 打赏页，接口编写
#### 项目地址
- 演示地址
    - 项目原地址 http://m.motie.com/channel/106?siteId=99/
    - 项目地址为云服务器地址
        - 项目地址 
            * >项目地址 http://118.31.77.168:3009/
        - 后台地址
            * >后台地址 http://118.31.77.168:3008/
        - github地址   git@github.com:gzh51910/bestCake.git
	        * >https://github.com/gzh51910/motie.git
        - github 地址
            - git@github.com:gzh51910/motie.git
    ### 后台登陆 manager  123456


* 本项目来自于磨铁中文网手机端官网，使用 React 对官网进行开发。

    >主要开发内容为：React 框架的搭建，数据的获取与渲染，利用路由来实现各个界面的相互的转换并实现信息的相互的传递

    >使用的插件主要为antd插件 

### 项目（贝思客）的设计思路级实现步骤

1. 首先对各个界面的数据传递来进行分析，由于项目是一个电商类的网站，所以我们决定来确定使用商品的名字和随机生成的 id 来进行各个界面的数据传递。

2. 明确的数据的传递的方式，来进行后台数据的初步搭建。

3. 进行分工制作界面

4. 基本界面完成后来进行各个界面的数据传递和信息的交互，由与每个数据都有固定的 id 和商品名字，只需要进行改动一下信息传递时的 id 和传输的内容就可以了

5. 来解决各个界面的数据不同步和信息更改时存在的问题

6. 把项目整体挪到阿里云服务器中，并且对数据的接口更改实现上线的实现


### 分工内容的详解

## 邢海龙（组长）
* 制作界面 
    ### Home  主页内容（男生）
    -   ![react](./src/img/home.png "Optional title")
    ### homenv 女生内容     根据后台数据渲染
    -   ![react](./src/img/homenv.png "Optional title")
    ### homecb 出版内容     根据后台数据渲染
    -   ![react](./src/img/chuban.png "Optional title")
    ### Home 旗下书网       根据合作产商进行页面渲染
    -   ![react](./src/img/旗下.png "Optional title")
    ### bookshelf 书架效果  根据从详情页点击添加到书架的效果来实先书架效果，类似于购物车
    -   ![react](./src/img/书架效果.png "Optional title")
    ### sou 搜索    根据模糊搜索实现从数据库中获取全部书本并且根据输入的内容对书本匹配并且返还会符合标准的书籍
    -   ![react](./src/img/搜索1.png "Optional title")
        ![react](./src/img/搜索2.png "Optional title")
    ### Foundmore 发现界面      根据最近的阅读量为之提供一个最火的图书界面
    -   ![react](./src/img/书架效果.png "Optional title")
## 罗涛
* 制作界面 
    ### Reg 注册
    -   ![react](./src/img/注册.png "Optional title")
    ### Login 登陆
    -   ![react](./src/img/登陆.png "Optional title")
    ### main 个人   个人信息界面 有着各种的数据在里面存储可以根据自己喜好更改
    -   ![react](./src/img/个人.png "Optional title")
## 李浩明
* 制作界面 
    ### 打赏    可以根据自己的喜好为书本投币
    -   ![react](./src/img/打赏.png "Optional title")
    ### 目录效果    根据书本数据将目录渲染到目录中
    -   ![react](./src/img/目录效果.png "Optional title")
    ### 详情    接受数据并且渲染到界面
    -   ![react](./src/img/详情.png "Optional title")
    ### 阅读    具有下一页，放大，关灯的阅读效果
    -   ![react](./src/img/阅读.png "Optional title")
## 吴诗雯
* 制作界面 
    ### 排行    根据点击的不同请求回来不同的值
    -   ![react](./src/img/排行.png "Optional title")
    ### 分类     根据点击的不同请求回来不同的值
    -   ![react](./src/img/分类.png "Optional title")
    ### 全本     从后台获取数据渲染
    -   ![react](./src/img/全本.png "Optional title")
    ### 免费    从后台获取数据渲染
    -   ![react](./src/img/免费.png "Optional title")
    ### 后台    对数据库的数据实行增删改查
    -   ![react](./src/img/后台.png "Optional title")



### src 目录内容
- >│  App.css
│  App.js
│  App.min.css
│  App.scss
│  main.js
│
├─api
│      index.js
│      my.js
│      nsg.js
│
├─components
│      CompleteFreeOne.js
│      CompleteFreeTow.js
│      Detailtop.js
│      FooterPart.js
│      FooterQr.js
│      GetList.js
│      GetListMenu.js
│      HeadPart.js
│      NoTimeContent.js
│      Pagelist.js
│      RankLeft.js
│      RankTop.js
│
├─css
│      allbooks.css
│      Bookshelf.css
│      Bookshelf.min.css
│      Bookshelf.scss
│      CompleteFreeOne.css
│      CompleteFreeTow.css
│      detail.css
│      FooterPart.css
│      FooterQr.css
│      found.css
│      GetList1.css
│      GetList2.css
│      home.css
│      Inf.css
│      Inf.min.css
│      Inf.scss
│      jieshao.css
│      jieshao.min.css
│      jieshao.scss
│      List.css
│      Log.css
│      Log.min.css
│      Log.scss
│      Mine.css
│      Mine.min.css
│      Mine.scss
│      pagelist.css
│      RankLeft.css
│      RankTop.css
│      read.css
│      reg.css
│      reg.min.css
│      reg.scss
│      sou.css
│
├─img
│      footer1-99d24.jpg
│      footer2-g.jpg
│      footer3-2d5.jpg
│      footer4-5d2.jpg
│      footer5-4d5.jpg
│      footer6-6d5.jpg
│
├─pages
│      AllBooks.js
│      Bookshelf.js
│      chongzhi.js
│      detail.js
│      dingyue.js
│      Foundmore.js
│      Free.js
│      Goods.js
│      Home.js
│      homecb.js
│      homenv.js
│      huodong.js
│      Inf.js
│      Invest.js
│      jieshao.js
│      List.js
│      Login.js
│      Mine.js
│      mydu.js
│      Rank.js
│      RankNv.js
│      Read.js
│      Reg.js
│      Reward.js
│      sou.js
│      Test.js
│      xiaofei.js
│
├─store
│  │  index.js
│  │
│  ├─action
│  │      cart.js
│  │      common.js
│  │
│  ├─reducer
│  │      cart.js
│  │      common.js
│  │      index.js
│  │
│  └─saga
│          index.js
│
└─utils
        hoc.js
### 后台
- >│  App.css
│  App.js
│  App.min.css
│  App.scss
│  main.js
│
├─api
│      index.js
│      my.js
│      nsg.js
│
├─components
│      HeadPart.js
│      Login.js
│      ManageBook.js
│      ManageBrank.js
│      ManageUser.js
│
├─css
│      Home.css
│      Login.css
│      ManageBook.css
│      ManageUser.css
│
├─img
├─pages
│      Home.js
│
├─store
│  │  index.js
│  │
│  ├─action
│  │      cart.js
│  │      common.js
│  │
│  ├─reducer
│  │      cart.js
│  │      common.js
│  │      index.js
│  │
│  └─saga
│          index.js
│
└─utils
        hoc.js