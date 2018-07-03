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
            commit('initHomeVideo', data.recommendVedio)
            commit('initHomeRecommend', data.recommendSeries)
            commit('initHomeClass', data.show)
            commit('initHomeNav', data.totalRows)
            relove();
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化视频
  initPlayVideo({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/EdVedio/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initPlayVideo', data.data)
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
      axios.post(getNewStr + '/HomeShow/SecondaryPage', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initVideoDetails',data.totalRows)
            relove();
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化教育详情视频
  initTypeVideo({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/HomeShow/SecondaryVode', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initTypeVideo',data.data)
            relove(data.totalRows);
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化视频详情
  initVideoDeatils({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/HomeShow/SecondaryVodeDetails', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initVideoDeatils',data.totalRows[0]);
            commit('initVideoAbout',data.FilmSeries);
            relove();
          }else {
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
            commit('initVideoComment',data.data);
            relove(data.totalrows);
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化用户信息
  initUserInformation({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/UserInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initUserInformation',data.data[0]);
            relove();
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化职业数据
  initOccupation({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/Job/SelectGroupJob', data)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            commit('initOccupation',data.data);
            relove();
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化学历
  initEducation({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/Job/Select', data)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            commit('initEducation',data.data);
            relove();
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化省
  initProvince({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/AreaFull/SelectProvice', data)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            commit('initProvince',data.data);
            relove();
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化城市列表
  initCity({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/AreaFull/SelectProvice', data)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            commit('initCity',data.data);
            relove();
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改用户信息提交
  updateUserInfoSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserInfo/Update', data)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改登录密码
  updateLoginPassword({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserInfo/UpdatePassword', data)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          }else {
            reject(data.resultcontent);
          }
        })
    })
  },

}
