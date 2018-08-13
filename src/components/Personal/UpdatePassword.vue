<template>
  <div>
    <div class="title">修改密码</div>
    <ul class="passwordBox">
      <li class="clearfix">
        <strong>原密码 :</strong>
        <input type="password" v-model="oldPassword">
        <i>*</i>
      </li>
      <li class="clearfix">
        <strong>新密码 :</strong>
        <input type="password" v-model="newPassword">
        <i>*</i>
      </li>
      <li class="clearfix">
        <strong>确认新密码 :</strong>
        <input type="password" v-model="repeatPassword">
        <i>*</i>
      </li>
      <li>
        <button @click="update">保存</button>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        repeatPassword: '',
        userInfo: {},
      }
    },
    created() {
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    },
    methods: {
      update() {
        if (this.repeatPassword != this.newPassword) {
          this.$notify({
            message: '两次输入的密码不一致!!',
            type: 'error'
          })
          return
        }
        let UpdatePassword = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          token:this.userInfo.token,
          "userCode": this.userInfo.sm_ui_UserCode,//当前用户的账号
          "oldPassword": this.oldPassword,//原来密码
          "newPassword": this.newPassword,//新密码
        }
        this.$store.dispatch('updateLoginPassword', UpdatePassword)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.oldPassword = '';
            this.newPassword = '';
            this.repeatPassword = '';
            sessionStorage.removeItem('userInfo');
            this.$router.push({name: 'Login'})
            this.$notify({
              message: '请重新登录!!',
              type: 'success'
            })
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      }
    },
  }
</script>
<style scoped>

  .title {
    font: 16px/66px "微软雅黑";
    text-indent: 45px;
    color: #333;
    border-bottom: 1px solid #f4f4f4;
  }

  .passwordBox {
    padding: 100px 0 200px 290px;
    font: 14px/2 "微软雅黑";
  }

  .passwordBox li {
    margin-bottom: 30px;
  }

  .passwordBox strong {
    float: left;
    width: 87px;
  }

  .passwordBox input {
    height: 30px;
    width: 240px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    padding: 0 5px;
  }

  .passwordBox button {
    margin-top: 18px;
    margin-left: 160px;
    font: 14px/30px "微软雅黑";
    width: 100px;
    text-align: center;
    background-color: #0461b1;
    border: none;
    color: #fff;
  }

</style>
