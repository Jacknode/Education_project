<template>
  <div>
    <div id="header">
      <!--头部-->
      <div class="headerContent clearfix">
        <router-link to="/AgenciesHome" class="goHomePageImage">
          <img src="../assets/img/huileyouLogo.jpg" width="230" height="60">
        </router-link>
        <router-link to="/AgenciesHome" class="goHomePageWords">返回首页</router-link>
      </div>
      <!--错误内容-->
      <div class="errorContent">
        <div>

        </div>
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
    created(){
      document.title="404"
    },
    methods: {
    },
  }
</script>
<style scoped>
  #header {
    width: 100%;
    background-color: #fff;
    padding: 10px 0;
    border-bottom: 2px solid #ccc;
  }

  .headerContent {
    width:1200px;
    margin:0 auto;
  }

  .goHomePageImage {
    float: left;
  }

  .goHomePageWords {
    float: right;
    font: 16px/2 "微软雅黑";
    padding:0 20px;
    border: 1px solid #000;
    -webkit-border-radius: 16px;
    -moz-border-radius: 16px;
    border-radius: 16px;
    margin-top: 15px;
    color: #000;
  }

  .goHomePageWords:hover {
    border-color: #f80;
    color: #f80;
  }

  .errorContent {
    position: absolute;
    top: 80px;
    left:0;
    right:0;
    bottom:0;
    background: url("../assets/img/of404.png") no-repeat center;
  }


</style>
