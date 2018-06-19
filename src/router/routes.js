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
          default: (resolve) => require(['@/components/PersonalCenter'], resolve),
          User: (resolve) => require(['@/components/PersonalCenter'], resolve),
        },
        name: 'PersonalCenter'
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
    redirect: {name: 'Home'}
  },
]
