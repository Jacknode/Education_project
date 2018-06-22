<template>
  <div>
    <div id="wrap">
      <div id="wrapBox">
        <nav class="clearfix">
          <a href="javascript:;">全部课程</a>
          <span>&gt;</span>
          <a href="javascript:;">软件技术</a>
        </nav>
        <dl class="classType clearfix">
          <dt>课程分类</dt>
          <dd v-for="item,index in 11">互联网产品</dd>
        </dl>
        <ul class="screenCondition clearfix">
          <li><a href="javascript:;">综合排序</a></li>
          <li><a href="javascript:;">好评率</a><i></i></li>
          <li><a href="javascript:;">人气</a><i></i></li>
          <li><a href="javascript:;">最新</a><i></i></li>
          <li><a href="javascript:;">价格</a><i></i></li>
          <li><a href="javascript:;">价格区间</a></li>
          <li><a href="javascript:;">全部</a></li>
          <li><a href="javascript:;">免费</a></li>
          <li><a href="javascript:;">付费</a></li>
        </ul>
        <ul class="classList clearfix">
          <li v-for="item,index in 12">
            <img src="../assets/img/video.png" width=" 260px" height="193">
            <strong>高考语文高分复习指导</strong>
            <div class="clearfix">
              <span>¥18:00</span>
              <a href="javascript:;">我要报名</a>
            </div>
          </li>
        </ul>
        <div class="paging">
          <el-pagination
            background
            :page-size="5"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :total="total">
          </el-pagination>
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
      return {
        total: 1000,
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },
  }
</script>
<style scoped>
  #wrap {
    background-color: #fafafa;
    padding-bottom: 60px;
  }

  #wrapBox {
    width: 1200px;
    margin: 0 auto;
  }

  nav {
    font: 14px/40px "微软雅黑";
    color: #454545;
  }

  nav > a {
    float: left;
    color: #808080;
  }

  nav > span {
    float: left;
    margin: 0 10px;
  }

  .classType {
    border: 1px solid #d9d9d9;
    background-color: #f7f7f7;
  }

  .classType > dt {
    float: left;
    width: 56px;
    height: 50px;
    margin: -1px 0 -1px -1px;
    font: 14px/18px "微软雅黑";
    color: #ffffff;
    background-color: #2693e0;
    padding: 5px 12px 0;
    margin-right: 22px;
  }

  .classType > dd {
    float: left;
    margin: 0 16px;
    font: 13px/48px "微软雅黑";
  }

  .classType > dd:hover,
  .classType > dd.active {
    color: #2693e0;
  }

  .classType > dd:hover {
    cursor: pointer;
  }

  .screenCondition {
    margin-top: 17px;
    width: 601px;
    border: 1px solid #e6e6e6;
  }

  .screenCondition li {
    float: left;
    font: 14px/33px "微软雅黑";
    width: 100px;
    text-align: center;
    position: relative;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: -1px;
  }

  .screenCondition li:hover a,
  .screenCondition li:hover a.active {
    color: #0461b1;
  }

  .screenCondition li:nth-of-type(6) {
    margin-right: -1px;
  }

  .screenCondition li i {
    position: absolute;
    width: 8px;
    height: 11px;
    background: url("../assets/img/Icon.png") no-repeat -60px -762px;
    top: 10px;
    right: 15px;
  }

  .classList {
    margin-top: 25px;
  }

  .classList > li {
    float: left;
    width: 300px;
    padding: 16px 20px 15px;
    margin-top: 30px;
  }

  .classList > li:hover {
    cursor: pointer;
    background-color: #ffffff;
    box-shadow: 0 0 5px #ccc;
  }

  .classList > li:hover strong {
    color: #0461b1;
    text-decoration: underline;
  }

  .classList strong {
    font: 14px/39px "微软雅黑";
    color: #333333;
  }

  .classList div {
    margin-top: 10px;
  }

  .classList span {
    float: left;
    font: 15px/27px "微软雅黑";
    color: #f43232;
  }

  .classList a {
    float: right;
    color: #e4e9f1;
    font: 15px/27px "微软雅黑";
    padding: 0 10px;
    background-color: #0461b1;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .paging {
    text-align: center;
    margin-top: 20px;
  }

</style>
