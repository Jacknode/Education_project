import {getNewStr, postPromise} from '@/assets/js/public'

export default {
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
            commit('initUserInformation', data.data[0]);
            relove();
          } else {
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
            commit('initOccupation', data.data);
            relove();
          } else {
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
            commit('initEducation', data.data);
            relove();
          } else {
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
            commit('initProvince', data.data);
            relove();
          } else {
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
            commit('initCity', data.data);
            relove();
          } else {
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
          } else {
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
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化钱包余额
  initMoney({commit}, data) {
    return new Promise(function (relove, reject) {
      postPromise(getNewStr + '/UserPot/Select', data)
        .then(data => {
          var data = JSON.parse(data);
          if (Number(data.resultcode) == 200) {
            commit('initMoney', data.data[0])
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化钱包消费明细
  initMoneyBadDetails({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/PotDetail/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initMoneyBadDetails', data.data)
            relove(data.totalrows);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化积分
  initIntegral({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/UseScoreDetail/SelectTotal', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initIntegral', data.data)
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //初始化课程推荐
  courseRecommendAction({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr + '/Recommend/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('courseRecommendAction', data.data)
            relove(data.totalrows);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },

}
