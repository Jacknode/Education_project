<template>
  <div>
    <header>
      <div id="headerContent" class="clearfix">
        <div class="headerLogo">
          <img src="../../assets/img/logo.jpg" style="width: 216px;height:56px">
          <!--LOGO-->
        </div>
        <div class="headerSearch">
          <div class="headerSearchIcon"></div>
          <input type="text" v-model="searchValue">
          <a href="javascript:;" @click="search">搜索</a>
        </div>
        <div class="positionPlace">
          <i></i>
          <span>{{currentLocaltion}}</span>
        </div>
        <div class="loginAndRegister" v-show="!showLogin">
          <a href="javascript:;" class="login" @click="goLogin">登录</a>
          <span></span>
          <router-link to="/Register" class="register">注册</router-link>
        </div>
        <div class="loginBox" v-show="showLogin">
          <strong class="clearfix"><em></em><span>{{userName}}</span><i></i></strong>
          <div>
            <a href="javascript:;" @click="goPersonalCenter">个人中心</a>
            <a href="JavaScript:;" @click="outLogin">退出</a>
          </div>
        </div>
      </div>
      <!--上导航-->
      <div class="allNavTop">
        <div class="allNavTopContent clearfix">
          <div class="allNavRight">
            <!--<router-link to="/" class="active">首页</router-link>-->
            <!--<a href="javascript:;" @click="goPersonalCenter">我的课程</a>-->
            <!--<a href="javascript:;">我的课程</a>-->

           <ul>
             <li  @click="toBack(index)"   v-for="item,index in urlList"  :class="{active:index==n}">
               <router-link :to="item.to" :key="index">{{item.name}}</router-link>
             </li>
           </ul>

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
  import {Decrypt} from '@/assets/js/crypto'

  export default {
    name: '',
    computed: mapGetters([]),
    data() {
      return {
        n:0,
        urlList:[
          {
            name:'首页',
            to:'/'
          },
          {
            name:'我的课程',
            to:'/Comment/personalCenter/userInformation'
          }
        ],
        userName: '',
        userInfo: {},
        searchValue:'',//搜索
        showLogin: false,
        userID: '',
        password: '',
        currentLocaltion:"",//当前位置
      }
    },
    created() {
      document.title="教育网站"
      if (localStorage.getItem('userName') && localStorage.getItem('userPassword')) {
        this.userID = Decrypt(localStorage.getItem('userName'))
        this.password = Decrypt(localStorage.getItem('userPassword'))
        this.loginSubmit();
      }
      if (sessionStorage.getItem('userInfo')) {
        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        this.userName = this.userInfo.sm_ui_Name;
        this.showLogin = true;
      }
      //获取当前位置
      this.getCurrentLocation();
    },
    methods: {
      toTab(index){
        let commentNavNum = JSON.parse(sessionStorage.getItem('indexNumber'));
        sessionStorage.setItem('commentNavNum', index);
        this.n = JSON.parse(sessionStorage.getItem('commentNavNum'));
      },
      toBack(index){
        this.toTab(index)
      },
      //搜索
      search(){
        const {href} = this.$router.resolve({
          name: 'VideoDetails',
          query:{keyword:this.searchValue,id:0}
        });
        window.open(href, '_blank')
      },
      //获取当前位置
      getCurrentLocation(){
        this.currentLocaltion=JSON.parse(sessionStorage.getItem('addComp')).province+','+JSON.parse(sessionStorage.getItem('addComp')).city;
      },
      goLogin() {
        const {href} = this.$router.resolve({
          name: 'Login',
        });
        window.open(href, '_blank')
      },
      outLogin() {
        sessionStorage.removeItem('userInfo');
        window.close()
        const {href} = this.$router.resolve({
          name: 'Home',
        });
        window.open(href, '_blank')
      },
      goPersonalCenter() {
        const {href} = this.$router.resolve({
          name: 'UserInformation',
        });
        window.open(href, '_blank')
      },
      //登录提交
      loginSubmit() {
        let userLogin = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "userID": this.userID,//用户编码
          "password": this.password//密码
        }
        this.$store.dispatch('loginSubmit', userLogin)
          .then(data => {
//            this.$notify({
//              message: data.resultcontent,
//              type: 'success'
//            })
            this.userInfo = data.data;
            this.userName = this.userInfo.sm_ui_Name;
            this.showLogin = true;
            sessionStorage.setItem('userInfo', JSON.stringify(data.data))
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
    },
    mounted() {

    }
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

  .allNavRight ul li {
    float: left;
    padding: 0 35px;
    color: #fff;
  }

  .allNavRight  ul li:hover {
    background-color: #0059bd;
    border-bottom: 2px solid #efefef;
    height: 45px;
  }

  .allNavRight  ul li.active {
    background-color: #0059bd;
    border-bottom: 2px solid #efefef;
    height: 45px;
  }
  .allNavRight ul li>a{
    color: #fff;
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

  .loginBox {
    font: 14px/2 "微软雅黑";
    margin-top: 12px;
    position: relative;
  }

  .loginBox > strong > * {
    float: left;
  }

  .loginBox > strong:hover {
    cursor: pointer;
  }

  .loginBox > strong:hover + div {
    display: block;
  }

  .loginBox span {
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .loginBox em {
    width: 19px;
    height: 15px;
    background: url(../../assets/img/Icon.png) no-repeat 0 -180px;;
    margin: 8px 13px 0 0;
  }

  .loginBox i {
    border: 5px solid transparent;
    border-width: 7px 3px;
    border-top-color: #999;
    margin: 10px 0 0 5px;
  }

  .loginBox > div {
    position: absolute;
    top: 28px;
    left: 0;
    min-width: 200px;
    padding: 2px 0;
    background-color: #fff;
    box-shadow: 0 0 10px #ccc;
    display: none;
    z-index: 9;
  }

  .loginBox > div:hover {
    display: block;
  }

  .loginBox > div > a {
    display: block;
    padding: 2px 20px;
    color: #333;
  }

  .loginBox > div > a:hover {
    background-color: #0461b1;
    color: #fff;
  }


</style>
