<template>
  <div>
    <div id="wrapBox"></div>
    <div id="wrap">
      <header class="clearfix">
        <div class="logoBox">
          <div>logo</div>
          <strong>通行证</strong>
        </div>
        <div class="goHome">
          <span>已有账号,</span>
          <a href="javascript:;">马上登录</a>
          <em></em>
          <router-link to="Home">返回首页</router-link>
        </div>
      </header>
      <section>
        <h2>注册会员</h2>
        <div>
          <div class="formBox">
            <input placeholder="手机号"/>
            <div id="slider">
              <span unselectable="on">请按住滑块，拖动到最右侧</span>
              <div></div>
            </div>
          </div>
          <div class="userFont">
            <el-checkbox v-model="checked"></el-checkbox>
            <span>我已阅读并接受用户协议</span>
          </div>
          <div class="registerSub">
            <button>注册</button>
          </div>
          <div class="otherRegister clearfix">
            <strong>使用社交账号注册</strong>
            <a href="javascript:;" class="weChat"></a>
            <a href="javascript:;" class="microBlog"></a>
            <a href="javascript:;" class="QQCode"></a>
          </div>
        </div>
      </section>
      <footer>
        <strong>Copyright © 2018 Tencent. All Rights Reserved. 版权所有</strong><span>|</span><a
        href="javascript:;">课堂服务协议</a><span>|</span><a href="javascript:;">站点地图</a><span>|</span><a href="javascript:;">侵权投诉</a><span>|</span><a
        href="javascript:;">问题反馈</a><span>|</span><a href="javascript:;">帮助</a>
      </footer>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        checked: true,
      }
    },
    methods: {
      initData(){
        console.log(1)
      }
    },
    mounted() {
      //拖动滑块
      let slider = document.getElementById('slider');
      let sliderC = slider.children[1];
      let sliderCW = sliderC.offsetWidth;
      let sliderLeft = slider.offsetLeft;
      let sliderRight = slider.offsetWidth - sliderCW;
      let sliderCLeft = 0;
      sliderC.onmousedown = (e) => {
        let X = e.offsetX;
        document.onmousemove = (e) => {
          let sliderCL = e.clientX;
          sliderCLeft = sliderCL - sliderLeft - X;
          if (sliderCLeft < 0) {
            sliderCLeft = 0;
          }
          if (sliderCLeft > sliderRight) {
            sliderCLeft = sliderRight;
          }
          sliderC.style.left = sliderCLeft + 'px'
        }
      }
      sliderC.onmouseup = document.onmouseup = () => {
        document.onmousemove = null;
        if( sliderCLeft == sliderRight ){

        }
      }

      //拖动滑块结束

    },
  }
</script>
<style scoped>
  #wrapBox {
    position: fixed;
    z-index: -1;
    background-color: #f9f9f9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  #wrap {
    width: 900px;
    margin: 90px auto 0;
  }

  header > .logoBox {
    float: left;
    font: 20px/27px "微软雅黑";
  }

  .logoBox > div {
    float: left;
  }

  .logoBox > strong {
    float: left;
    border-left: 2px solid #333333;
    padding-left: 5px;
  }

  header {
    margin-bottom: 35px;
  }

  header > .goHome {
    float: right;
    font: 12px/2 "微软雅黑";
    color: #333333;
  }

  .goHome > a {
    color: #437bbc;
  }

  .goHome > em {
    width: 1px;
    height: 13px;
    background-color: #5b5b5b;
    margin: 5px 18px 0;
  }

  .goHome > * {
    float: left;
  }

  section {
    background-color: #fff;
    box-shadow: 0 0 20px #ccc;
  }

  section > h2 {
    font: 24px/60px "微软雅黑";
    color: #fff;
    background-color: #0461b1;
    text-align: center;
  }

  section > div {
    width: 336px;
    margin: 40px auto 70px;
    padding-bottom: 44px;
  }

  .formBox input {
    width: 100%;
    border: 1px solid #dddddd;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    background-color: #f4f4f4;
    font: 14px/40px "微软雅黑";
    padding-left: 30px;
    margin-bottom: 20px;
  }

  .formBox > div {
    background-color: #e8e8e8;
    height: 34px;
    font: 12px/34px "微软雅黑";
    color: #808080;
    text-align: center;
    position: relative;
  }

  .formBox > div > span {
    -moz-user-select: none;
    -webkit-user-select: none;
  }

  .formBox > div > div {
    width: 42px;
    height: 34px;
    background: url("../../assets/img/Icon.png") no-repeat -173px -339px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .userFont {
    margin: 20px 0 30px;
  }

  .userFont > span {
    padding-left: 10px;
    color: #999;
  }

  .registerSub > button {
    border: none;
    background-color: #f4f4f4;
    width: 100%;
    font: 16px/44px "微软雅黑";
    color: #b3b3b3;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  .otherRegister {
    font: 14px/42px "微软雅黑";
  }

  .otherRegister > strong {
    marin-right: 20px;
    float: left;
    color: #333333;
  }

  .otherRegister a:hover {
    -ms-background-position-x: -303px;
    background-position-x: -303px;
  }

  .otherRegister > a {
    float: left;
    width: 42px;
    height: 42px;
    background-image: url('../../assets/img/Icon.png');
    margin: 0 16px;
  }

  .weChat {
    -ms-background-position-x: -233px;
    background-position-x: -233px;
  }

  .microBlog {
    -ms-background-position: -233px -82px;
    background-position: -233px -82px;
  }

  .QQCode {
    -ms-background-position: -233px -164px;
    background-position: -233px -164px;
  }

  footer {
    width: 550px;
    text-align: center;
    font: 12px/32px "微软雅黑";
    margin: 0 auto;
  }

  footer > * {
    display: inline-block;
    color: #d2d0d2;
  }

  footer > span {
    margin: 0 5px;
  }

</style>
