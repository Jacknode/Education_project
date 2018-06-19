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
            <a href="javascript:;" class="active">密码登录</a>
            <a href="javascript:;">短信登录</a>
          </div>
          <div class="loginForm">
            <input type="text" placeholder="手机号/邮箱">
            <input type="password" placeholder="密码">
            <input type="button" value="登录">
          </div>
          <div class="loginTo clearfix">
            <strong>
              <el-checkbox v-model="checked">下次自动登录</el-checkbox>
            </strong>
            <span>
            <a href="javascript:;">忘记密码</a>
            <em></em>
            <a href="javascript:;">注册</a>
          </span>
          </div>
          <div class="otherLogin">
            <p>第三方账号登录</p>
            <div>
              <a href="javascript:;" class="weChat"></a><a href="javascript:;" class="microBlog"></a><a
              href="javascript:;" class="QQCode"></a>
            </div>
          </div>
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

  export default {
    computed: mapGetters([]),
    data() {
      return {
        checked: false
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      }
    },
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
