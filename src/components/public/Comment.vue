<template>
  <div>
    <header>
      <div id="headerContent" class="clearfix">
        <div class="headerLogo">
          <img src="">
          LOGO
        </div>
        <div class="headerSearch">
          <div class="headerSearchIcon"></div>
          <input type="text">
          <a href="javascript:;">搜索</a>
        </div>
        <div class="positionPlace">
          <i></i>
          <span>四川</span>
        </div>
        <div class="loginAndRegister">
          <router-link to="/Login" class="login">登录</router-link>
          <span></span>
          <router-link to="/Register" class="register">注册</router-link>
        </div>
      </div>
      <!--上导航-->
      <div class="allNavTop">
        <div class="allNavTopContent clearfix">
          <div class="allNavRight">
            <a href="javascript:;" class="active">首页</a>
            <a href="javascript:;">我的课程</a>
            <a href="javascript:;">公开课</a>
            <a href="javascript:;">系统课程</a>
          </div>
        </div>
      </div>
    </header>
    <section>
      <router-view name="User"></router-view>
    </section>
    <footer>
      <div id="footerContent">
        <div class="clearfix">
          <div class="footerLeft">
            <dl>
              <dt>新手指南</dt>
              <dd><a href="javascript:;">如何注册</a></dd>
              <dd><a href="javascript:;">如何选课</a></dd>
              <dd><a href="javascript:;">如何听课</a></dd>
              <dd><a href="javascript:;">如何听录播</a></dd>
              <dd><a href="javascript:;">如何下载资料</a></dd>
            </dl>
            <dl>
              <dt>关于课程</dt>
              <dd><a href="javascript:;">课程有效期</a></dd>
              <dd><a href="javascript:;">课程退费</a></dd>
              <dd><a href="javascript:;">如何兑换</a></dd>
            </dl>
            <dl>
              <dt>常见问题</dt>
              <dd><a href="javascript:;">收不到验证码</a></dd>
              <dd><a href="javascript:;">账号问题</a></dd>
            </dl>
          </div>
          <span class="footerBorder"></span>
          <div class="footerRight">
            <dl class="telWe">
              <dt>联系我们</dt>
              <dd class="phone clearfix"><i></i><strong>TEL : 0830-3632161</strong></dd>
              <dd class="weChat clearfix"><i></i><a href="javascript:;">微信客服</a></dd>
              <dd class="QQservice clearfix"><i></i><a href="javascript:;">QQ客服</a></dd>
            </dl>
            <dl class="aboutWe">
              <dt>关于我们</dt>
            </dl>
          </div>
        </div>
        <div class="footerBottom">
          <strong>Copyright © 2018 Tencent. All Rights Reserved. 版权所有</strong><span>|</span><a
          href="javascript:;">课堂服务协议</a><span>|</span><a href="javascript:;">站点地图</a><span>|</span><a
          href="javascript:;">侵权投诉</a><span>|</span><a
          href="javascript:;">问题反馈</a><span>|</span><a href="javascript:;">帮助</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: '',
    data() {
      return {}
    },
    computed: mapGetters([]),
    created() {
    },
    methods: {},
  }
</script>
<style scoped>
  header {
    width: 100%;
    background-color: #fff;
    padding-top: 24px;
  }

  #headerContent {
    width: 1200px;
    margin: 0 auto 24px;
  }

  #headerContent > div {
    float: left;
  }

  .headerLogo {
    width: 216px;
    height: 56px;
    background-color: #ccc;
    margin-right: 143px;
  }

  .headerSearch {
    width: 481px;
    margin-right: 50px;
    height: 46px;
    border: 3px solid #0461b1;
    box-shadow: 2px 2px 1px #6d6d6d;
    margin-top: 3px;
  }

  .headerSearch > * {
    float: left;
  }

  .headerSearchIcon {
    width: 35px;
    height: 100%;
    background: #f9f8f8 url("../../assets/img/Icon.png") no-repeat 10px -51px;
  }

  .headerSearch > input {
    border: none;
    width: 348px;
    height: 100%;
    font: 16px/24px "微软雅黑";
    padding: 0 9px;
  }

  .headerSearch > a {
    background-color: #0461b1;
    color: #fff;
    font: 17px/40px "微软雅黑";
    width: 92px;
    text-align: center;
  }

  .positionPlace {
    width: 100px;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 14px;
  }

  .positionPlace > i {
    float: left;
    width: 16px;
    height: 19px;
    background: url("../../assets/img/Icon.png") no-repeat;
  }

  .positionPlace > span {
    float: left;
    font: bold 13px/2 "微软雅黑";
    color: #333333;
    margin-left: 5px;
  }

  .loginAndRegister {
    margin-top: 14px;
  }

  .loginAndRegister > .login {
    float: left;
    font: bold 13px/2 "微软雅黑";
    color: #999999;
  }

  .loginAndRegister > span {
    float: left;
    width: 1px;
    height: 12px;
    margin: 6px 10px 0;
    background-color: #999999;
  }

  .loginAndRegister > .register {
    float: left;
    font: bold 13px/2 "微软雅黑";
    color: #999999;
  }

  .allNavTop {
    background-color: #154784;
    width: 100%;
  }

  .allNavTopContent {
    width: 1200px;
    margin: 0 auto;
    font: 17px/45px "微软雅黑";
  }

  .allNavRight {
    float: right;
    margin-right: 50px;
  }

  .allNavRight > a {
    float: left;
    padding: 0 35px;
    color: #fff;
  }

  .allNavRight > a:hover {
    background-color: #0059bd;
    border-bottom: 2px solid #efefef;
    height: 45px;
  }

  .allNavRight > a.active {
    background-color: #0059bd;
    border-bottom: 2px solid #efefef;
    height: 45px;
  }

  /*头部结束*/

  footer {
    background-color: #666;
    padding: 34px 0 18px 0;
  }

  #footerContent {
    width: 1200px;
    margin: 0 auto;
  }

  .footerLeft {
    float: left;
  }

  .footerLeft > dl {
    float: left;
    width: 194px;

  }

  .footerLeft dt,
  .footerRight dt {
    font: 17px/35px "微软雅黑";
    color: #e3e1e4;
  }

  .footerLeft dd > a {
    font: 12px/32px "微软雅黑";
    color: #e3e1e4;
    display: inline;
  }

  .footerBorder {
    float: left;
    width: 2px;
    height: 158px;
    background-color: #e3e1e4;
    margin: 9px 187px 0 74px;
  }

  .footerRight {
    float: left;
    color: #e3e1e4;
  }

  .footerRight dd {
    font: 12px/32px "微软雅黑";
  }

  .footerRight a {
    color: #e3e1e4;
    display: inline;
  }

  .telWe {
    width: 260px;
    float: left;

  }

  .telWe > .phone > a,
  .telWe > .phone > strong {
    float: left;
  }

  .telWe > dd > i {
    float: left;
    margin-top: 5px;
  }

  .telWe > .phone > i {
    width: 21px;
    height: 17px;
    background: url("../../assets/img/Icon.png") no-repeat 0 -123px;
    margin-right: 15px;
  }

  .telWe > .weChat > i {
    width: 21px;
    height: 16px;
    background: url("../../assets/img/Icon.png") no-repeat 0 -180px;
    margin-right: 15px;
  }

  .telWe > .QQservice > i {
    width: 21px;
    height: 23px;
    background: url("../../assets/img/Icon.png") no-repeat 0 -236px;
    margin-right: 15px;
  }

  .aboutWe {
    float: left;
  }

  .footerBottom {
    margin-top: 36px;
    font: 12px/2 "微软雅黑";
    text-align: center;
    color: #dcdadd;
  }

  .footerBottom > * {
    display: inline-block;
  }

  .footerBottom > a {
    color: #dcdadd;
  }

  .footerBottom > span {
    margin: 0 9px;
    font: 12px/2 "微软雅黑";
  }


</style>
