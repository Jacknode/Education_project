// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/reset.css'
import store from './store/'
import App from './App'
import router from './router'
import * as filters from './filters'


Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})


import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:'../static/img/error.jpg',
  loading:'../static/img/loading.gif'
});

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.commit('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.commit('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

Vue.use(ELEMENT)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  filters,
  store,
  router,
  components: { App },
  template: '<App/>'
})
