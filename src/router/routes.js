/**
 * Created by leibo on 18/6/11.
 */
export default [
  //公用页面
  {
    path: '/Comment',
    name: 'Comment',
    component: (resolve) => require(['@/components/public/Comment'], resolve),
    children:[
      //首页
      {
        path: 'home',
        components: {
          default: (resolve) => require(['@/components/public/Comment'], resolve),
          User: (resolve) => require(['@/components/public/Home'], resolve),
        },
        name: 'Home'
      },
      //个人中心
      {
        path: 'personalCenter',
        components: {
          default: (resolve) => require(['@/components/Personal/PersonalCenter'], resolve),
          User: (resolve) => require(['@/components/Personal/PersonalCenter'], resolve),
        },
        name: 'PersonalCenter',
        children:[
          //基本信息
          {
            path: 'userInformation',
            components: {
              default: (resolve) => require(['@/components/Personal/UserInformation'], resolve),
              Center: (resolve) => require(['@/components/Personal/UserInformation'], resolve),
            },
            name: 'UserInformation'
          },
          //我的课程
          {
            path: 'myClass',
            components: {
              default: (resolve) => require(['@/components/Personal/MyClass'], resolve),
              Center: (resolve) => require(['@/components/Personal/MyClass'], resolve),
            },
            name: 'MyClass'
          },
          //修改密码
          {
            path: 'updatePassword',
            components: {
              default: (resolve) => require(['@/components/Personal/UpdatePassword'], resolve),
              Center: (resolve) => require(['@/components/Personal/UpdatePassword'], resolve),
            },
            name: 'UpdatePassword'
          },
          //我的余额
          {
            path: 'myBalance',
            components: {
              default: (resolve) => require(['@/components/Personal/MyBalance'], resolve),
              Center: (resolve) => require(['@/components/Personal/MyBalance'], resolve),
            },
            name: 'MyBalance'
          },
        ]
      },
      //查看视频
      {
        path: 'videoSearch',
        components: {
          default: (resolve) => require(['@/components/VideoSearch'], resolve),
          User: (resolve) => require(['@/components/VideoSearch'], resolve),
        },
        name: 'VideoSearch'
      },
      //播放视频
      {
        path: 'playVideo',
        components: {
          default: (resolve) => require(['@/components/PlayVideo'], resolve),
          User: (resolve) => require(['@/components/PlayVideo'], resolve),
        },
        name: 'PlayVideo'
      },
      //视频详情页
      {
        path: 'videoDetails',
        components: {
          default: (resolve) => require(['@/components/VideoDetails'], resolve),
          User: (resolve) => require(['@/components/VideoDetails'], resolve),
        },
        name: 'VideoDetails'
      },
      //订单详情页
      {
        path: 'orderDetails',
        components: {
          default: (resolve) => require(['@/components/OrderDetails'], resolve),
          User: (resolve) => require(['@/components/OrderDetails'], resolve),
        },
        name: 'OrderDetails'
      },
      //支付订单
      {
        path: 'payOrder',
        components: {
          default: (resolve) => require(['@/components/PayOrder'], resolve),
          User: (resolve) => require(['@/components/PayOrder'], resolve),
        },
        name: 'PayOrder'
      }

    ]
  },
  {
    path: '/',
    hidden: true,
    redirect: {name: 'Home'}
  },
  {
    path: '/404',
    name: '404',
    component: (reslove) => require(['@/components/404'], reslove)
  },
  {
    path: '/login',
    name: 'Login',
    component: (reslove) => require(['@/components/public/Login'], reslove)
  },
  {
    path: '/register',
    name: 'Register',
    component: (reslove) => require(['@/components/public/Register'], reslove)
  },
  {
    path: '*',
    hidden: true,
    redirect: {name: '404'}
  },
]
