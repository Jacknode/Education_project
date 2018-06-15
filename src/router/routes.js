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
    path: '*',
    hidden: true,
    redirect: {name: 'Home'}
  },
]
