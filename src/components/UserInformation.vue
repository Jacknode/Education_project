<template>
  <div>
    <div class="userInformation">
      <strong>基本信息</strong>
      <div class="binding clearfix">
        <div class="phoneBinding">
          <i></i>
          <strong class="clearfix">
            <span>手机未绑定</span>
            <a href="javascript:;">立即绑定</a>
          </strong>
          <span>您可以享受手机相关的登录、安全及提醒服务</span>
        </div>
        <div class="emailBinding">
          <i></i>
          <strong class="clearfix">
            <span>邮箱未绑定</span>
            <a href="javascript:;">立即绑定</a>
          </strong>
          <span>绑定后，您可以使用绑定的邮箱安全登录</span>
        </div>
      </div>
      <div class="information">
        <ul class="informationList">
          <li><strong class="lettor">昵称</strong><em> :</em><span></span></li>
          <li><strong>真实姓名 :</strong><span></span></li>
          <li><strong class="lettor">性别</strong><em> :</em><span></span></li>
          <li><strong class="lettor">生日</strong><em> :</em><span></span></li>
          <li><strong>所在城市 :</strong><span></span></li>
          <li><strong>是否在职 :</strong><span></span></li>
          <li><strong>毕业院校 :</strong><span></span></li>
          <li><strong>个人说明 :</strong><span></span></li>
        </ul>
        <a href="javascript:;">修改</a>

      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {}
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

  .userInformation {
    padding-bottom: 50px;
  }

  .userInformation > strong {
    font: 16px/2 "微软雅黑";
    display: block;
    padding: 17px 0 18px 45px;
    border-bottom: 1px solid #f4f4f4;
  }

  .binding {
    border-bottom: 1px solid #f4f4f4;
    padding: 20px 0;
  }

  .binding > div {
    padding-left: 100px;
    float: left;
    position: relative;
    width: 460px;
  }

  .phoneBinding > strong,
  .emailBinding > strong {
    display: block;
    font: 12px/20px "微软雅黑";
  }

  .phoneBinding > strong > span,
  .emailBinding > strong > span {
    float: left;
    margin-right: 20px;
    color: #333333;
  }

  .phoneBinding > strong > a,
  .emailBinding > strong > a {
    float: left;
    color: #0461b1;
    text-decoration: underline;
  }

  .phoneBinding > span,
  .emailBinding > span {
    display: block;
    margin-top: 26px;
    font: 12px/2 "微软雅黑";
    color: #666666;
  }

  .phoneBinding > i {
    width: 31px;
    height: 49px;
    position: absolute;
    left: 45px;
    top: 0px;
    background: url("../assets/img/Icon.png") no-repeat -173px -413px;
  }

  .emailBinding > i {
    width: 52px;
    height: 39px;
    position: absolute;
    left: 24px;
    top: 0px;
    background: url("../assets/img/Icon.png") no-repeat -173px -502px;
  }

  .information {
    padding: 19px 0 50px 45px;
  }

  .lettor {
    letter-spacing: 25px;
  }

  .informationList {
    font: 13px/49px "微软雅黑";
    float: left;
    width: 300px;
  }

  .informationList em {
    margin-left: -24px;
  }

  .information > a {
    float: left;
    font: 13px/49px "微软雅黑";
    color: #0461b1;
  }

  .informationList span {
    margin-left: 70px;
    display: inline-block;
    max-width: 170px;
    vertical-align: top;
    font: 13px/2 "微软雅黑";
    padding: 12px 0;
  }
</style>
