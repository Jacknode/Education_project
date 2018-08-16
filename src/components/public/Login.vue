<template>
  <div>
    <div id="wrap"></div>
    <div id="contentBox">
      <div id="content">
        <header class="clearfix">
          <div class="logo">LOGO</div>
          <span></span>
          <strong>通行证</strong>
        </header>
        <section>
          <div class="qrCode"></div>
          <div class="loginType clearfix">
            <a href="javascript:;"
               v-for="item,index in loginType"
               :class="{active: loginTypeId == index}"
               @click="changeLoginTyle(index)"
            >{{item}}</a>
          </div>
          <div class="loginForm" v-show="showPassworld">
            <input type="text" v-model="userID" placeholder="手机号/邮箱">
            <input type="password" v-model="password" placeholder="密码">
            <input type="button" value="登录" @click="loginSubmit">
          </div>
          <!--验证码登录-->
          <div class="messageLogin" v-show="!showPassworld">
            <input type="text" v-model="telePhone" placeholder="请输入手机号">
            <div class="messageNum clearfix">
              <input type="text" v-model="messageNum" placeholder="请输入验证码">
              <button @click="sendMessage">{{sendOut}}</button>
            </div>
            <button @click="messageLoginSubmit">登录</button>
          </div>
          <div class="loginTo clearfix">
            <strong>
              <el-checkbox v-model="checked">下次自动登录</el-checkbox>
            </strong>
            <span>
            <!--<a href="javascript:;">忘记密码</a>-->
              <!--<em></em>-->
            <router-link to="Register">注册</router-link>
          </span>
          </div>
          <!--<div class="otherLogin">-->
          <!--<p>第三方账号登录</p>-->
          <!--<div>-->
          <!--<a href="javascript:;" class="weChat"></a><a href="javascript:;" class="microBlog"></a><a-->
          <!--href="javascript:;" class="QQCode"></a>-->
          <!--</div>-->
          <!--</div>-->
        </section>
        <footer>
          <strong>Copyright © 2018 Tencent. All Rights Reserved. 版权所有</strong><span>|</span><a
          href="javascript:;">课堂服务协议</a><span>|</span><a href="javascript:;">站点地图</a><span>|</span><a
          href="javascript:;">侵权投诉</a><span>|</span><a
          href="javascript:;">问题反馈</a><span>|</span><a href="javascript:;">帮助</a>
        </footer>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapGetters} from 'vuex'
  import {Encrypt} from '@/assets/js/crypto'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        checked: true,
        userID: '',
        password: '',
        loginType: [
          '密码登录',
          '短信登录'
        ],
        loginTypeId: 0,
        showPassworld: true,
        telePhone: '',
        messageNum: '',
        sendOut: '发送验证码',
        isTrue: false,
      }
    },
    methods: {
      //登录提交
      loginSubmit() {
        if (!this.userID) {
          this.$notify({
            message: '请输入账号!!',
            type: 'error'
          })
          return
        }
        if (!this.password) {
          this.$notify({
            message: '请输入密码!!',
            type: 'error'
          })
          return
        }
        if (this.checked) {
          localStorage.setItem('userName', Encrypt(this.userID));
          localStorage.setItem('userPassword', Encrypt(this.password));
        }else{
          if( localStorage.getItem('userName') && localStorage.getItem('userPassword') ){
            localStorage.removeItem('userName');
            localStorage.removeItem('userPassword');
          }
        }
        let userLogin = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "userID": this.userID,//用户编码
          "password": this.password//密码
        };
        this.$store.dispatch('loginSubmit', userLogin)
          .then(data => {
            this.$notify({
              message: data.resultcontent,
              type: 'success'
            });
            this.userID = '';
            this.password = '';
            sessionStorage.setItem('userInfo', JSON.stringify(data.data));
            this.$router.push({name: 'Home'})
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //切换登录状态
      changeLoginTyle(index) {
        this.loginTypeId = index;
        if (index) {
          this.showPassworld = false;
        } else {
          this.showPassworld = true;
        }
      },
      //发送短信
      sendMessage() {
        if (this.isTrue) {
          return
        }
        if (!this.telePhone) {
          this.$notify({
            message: '请输入手机号!!',
            type: 'error'
          })
          return
        }
        let userSendMessage = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "phone": this.telePhone,//用户编码
          "sendType": "2",//0注册发送短信 1 找回密码发送短信 2 动态密码
        }
        this.isTrue = true;
        let num = 60;
        let timer = setInterval(() => {
          num--;
          this.sendOut = '重新发送(' + num + 's)';
          if (num == 0) {
            this.sendOut = '重新发送'
            this.isTrue = false;
            clearInterval(timer)
          }
        }, 1000)

        this.$store.dispatch('sendMessageLogin', userSendMessage)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })


      },
      //短信登录
      messageLoginSubmit() {
        if (!this.telePhone) {
          this.$notify({
            message: '请输入手机号!!',
            type: 'error'
          })
          return
        }
        if (!this.messageNum) {
          this.$notify({
            message: '请输入动态密码!!',
            type: 'error'
          })
          return
        }
        let autoPasswordLogin = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "phone": this.telePhone,
          "validateNo": this.messageNum,//验证码
        }
        this.$store.dispatch('messageLoginSubmit', autoPasswordLogin)
          .then(data => {
            this.$notify({
              message: data.resultcontent,
              type: 'success'
            })
            this.telePhone = '';
            this.messageNum = '';
            sessionStorage.setItem('userInfo', JSON.stringify(data.data))
            this.$router.push({name: 'Home'})
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
    },
    mounted() {
      document.addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
          if (this.loginTypeId == 0) {
            this.loginSubmit();
          } else {
            this.messageLoginSubmit();
          }

        }
      })
    }
  }
</script>
<style scoped>
  #wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("../../assets/img/loginBg.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  #contentBox {
    position: relative;
  }

  #content {
    width: 550px;
    margin: 3% auto 0;
  }

  header {
    width: 300px;
    margin: 0 auto;
  }

  header .logo {
    float: left;
  }

  header span {
    float: left;
    width: 2px;
    height: 27px;
    background-color: #fff;
    margin: 0 5px 0 38px;
  }

  header strong {
    float: left;
    font: 20px/27px "微软雅黑";
    color: #fff;
  }

  section {
    width: 400px;
    padding: 6px 30px 24px;
    margin: 50px auto 0;
    background-color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    position: relative;
  }

  .qrCode {
    position: absolute;
    width: 52px;
    height: 52px;
    background: url("../../assets/img/Icon.png") no-repeat -173px -247px;
    top: 10px;
    right: 10px;
  }

  .loginType {
    font: 16px/64px "微软雅黑";
    border-bottom: 1px solid #f4f4f4;
  }

  .loginType > a {
    float: left;
    margin-right: 40px;
    color: #282828;
  }

  .loginType > a.active {
    border-bottom: 2px solid #282828;
  }

  .loginForm {
    margin-top: 25px;
  }

  .loginForm > input {
    width: 100%;
    font: 12px/40px "微软雅黑";
    border: 2px solid #e9e9e9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 0 30px;
    margin-top: 20px;
    background-color: #f4f4f4;
    color: #999999;
  }

  .loginForm > input:last-of-type {
    border: none;
  }

  .loginForm > input:last-of-type:hover {
    color: #fff;
    background-color: #409ECF;
  }

  .loginTo {
    font: 14px/2 "微软雅黑";
    margin: 16px 0;
    color: #999;
  }

  .loginTo > strong {
    float: left;
  }

  .loginTo > span {
    float: right;
  }

  .loginTo > span * {
    float: left;
  }

  .loginTo > span em {
    width: 1px;
    height: 16px;
    background-color: #999;
    margin: 5px 7px 0;
  }

  .loginTo > span a {
    color: #999;
  }

  .messageLogin {
    margin-top: 25px;
  }

  .messageLogin input,
  .messageLogin > button {
    width: 100%;
    font: 12px/40px "微软雅黑";
    border: 2px solid #e9e9e9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 0 30px;
    margin-top: 20px;
    background-color: #f4f4f4;
    color: #999999;
  }

  .messageLogin > button {
    border: none;
  }

  .messageLogin > button:hover {
    color: #fff;
  }

  .messageNum {
    margin-top: 20px;
  }

  .messageNum > input {
    float: left;
    width: 50%;
    margin: 0;
  }

  .messageNum > button {
    float: right;
    width: 40%;
    font: 12px/40px "微软雅黑";
    border: none;
    background-color: #f4f4f4;
    color: #999999;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .otherLogin {
    margin-top: 27px;
  }

  .otherLogin > p {
    font: 16px/2 "微软雅黑";
    color: #999999;
    text-align: center;
    margin-bottom: 22px;
  }

  .otherLogin > div {
    text-align: center;
  }

  .otherLogin > div a {
    display: inline-block;
    width: 42px;
    height: 42px;
    background-image: url('../../assets/img/Icon.png');
    margin: 0 16px;
  }

  .otherLogin > div a:hover {
    -ms-background-position-x: -303px;
    background-position-x: -303px;
  }

  .otherLogin > div .weChat {
    -ms-background-position-x: -233px;
    background-position-x: -233px;
  }

  .otherLogin > div .microBlog {
    -ms-background-position: -233px -82px;
    background-position: -233px -82px;
  }

  .otherLogin > div .QQCode {
    -ms-background-position: -233px -164px;
    background-position: -233px -164px;
  }

  footer {
    text-align: center;
    font: 12px/32px "微软雅黑";
    margin-top: 50px;
  }

  footer > * {
    display: inline-block;
    color: #d2d0d2;
  }

  footer > span {
    margin: 0 5px;
  }


</style>
