<template>
  <div id="wrap">
    <div class="clearfix">
      <div class="leftNav">
        <ul>
          <li>
            <a href="javascript:;" class="active">基本信息</a>
          </li>
          <li>
            <a href="javascript:;">我的课程</a>
          </li>
          <li>
            <a href="javascript:;">设置昵称</a>
          </li>
          <li>
            <a href="javascript:;">修改密码</a>
          </li>
          <li>
            <a href="javascript:;">我的余额</a>
          </li>
        </ul>
      </div>
      <div class="userInformation">
        <router-view name="User"></router-view>
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

  #wrap {
    padding: 40px 0;
    background-color: #f4f4f4;
  }

  #wrap > div {
    width: 1200px;
    margin: 0 auto;
  }

  .leftNav {
    float: left;
    width: 200px;
    margin-right: 50px;
    background-color: #fff;
    border: 1px solid #d2d2d2;
    padding: 23px 0;
    font: 14px/48px "微软雅黑";
  }

  .leftNav a {
    color: #333333;
    display: block;
    padding-left: 20px;
    border-left: 3px solid transparent;
  }

  .leftNav a:hover,
  .leftNav a.active {
    border-left: 3px solid #0461b1;
    box-shadow: 0 0 1px 1px #d2d2d2;
    background-color: #f4f4f4;
  }

  .userInformation {
    float: right;
    width: 950px;
    background-color: #fff;
  }



</style>
