/**
 * Created by leibo on 18/6/11.
 */

import {getNewStr, postPromise} from '@/assets/js/public'

export default {
  //登录提交
  loginSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserInfo/Login', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            relove(data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取动态密码
  sendMessageLogin({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserInfo/SendMessage', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //动态密码登录
  messageLoginSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserInfo/AutoPasswordLogin', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            relove(data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取注册验证码
  sendRegisterMessage({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserInfo/SendMessage', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //注册提交
  registerSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserInfo/RegByCode', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化首页数据
  initHomeData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/HomeShow/Home', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initHomePicture', data.recommend)
            commit('initHomeVideo', data.recommend)
             commit('initHomeRecommend', data.recommendSeries)
            console.log('show:',data.show)
            commit('initHomeClass', data.show)
            commit('initHomeNav', data.totalRows)
            relove();
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },



  //根据课程查视频
  initCourseMainIfo({commit}, data) {

    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/EWebPage/selectBroadcast', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            // commit('initCourseMainIfo', data.video[0]);
            commit('initCourseContents', data.data);
            relove(data.totalRows);
          } else {
            reject(data.resultcontent);
          }
        })
    })



  },

  //初始化视频
  initPlayVideo({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EWebPage/selectVideo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log('data:',data);
          if (Number(data.resultcode) == 200) {
            commit('initPlayVideo', data.directory
            )
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化评论
  initRecommend({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdScore/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initRecommend', data.data)
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加评论
  addRecommend({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdScore/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化教育详情页
  initVideoDetails({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/HomeShow/SecondaryPage', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            let arr = data.totalRows;
            if(arr.length){
              arr.unshift({
                ed_te_ID:'',
                ed_te_Name:'全部'
              })
            }
            commit('initVideoDetails', arr)
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化教育详情视频
  initTypeVideo({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/HomeShow/SecondaryVode', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            commit('initTypeVideo', data.data)
            relove(data.totalRows);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化订单详情
  orderDetailAction({commit}, data){
    axios.post(getNewStr + '/EdOrderInfo/SelectS', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(data => {
        var data = data.data;

        if (Number(data.resultcode) == 200) {
          commit('orderDetailAction', data.data);
          // relove(data.totalrows);
        } else {
          reject(data.resultcontent);
        }
      })
  },
  //初始化课程信息
  initCourseIfo({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/EWebPage/selectBroadcast', data)
        .then(data => {
          var data = JSON.parse(data)
          if (Number(data.resultcode) == 200) {
            //课程主体信息
            commit('initCourseMainIfo', data.video[0]);
            //课程目录
            commit('initCourseContents', data.data);
            //课程相关
            commit('correlation', data.correlation);


            relove(data.totalRows);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //查询当前视频评论
  initVideoComment({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdScore/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initVideoComment', data.data);
            relove(data.totalrows);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },


}
