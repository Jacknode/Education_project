<template>
  <div>
    <div id="wrap">
      <div class="titleNav clearfix">
        <div>
          <a href="javascript:;" class="active">我的余额</a>
          <a href="javascript:;">我的积分</a>
        </div>
        <a href="javascript:;">余额说明</a>
      </div>
      <div class="money clearfix">
        <div class="balance">
          <i></i>
          <strong>800.00</strong>
        </div>
        <div class="balanceOperation">
          <a href="javascript:;" class="recharge">充值</a>
          <a href="javascript:;" class="putForward">提现</a>
        </div>
      </div>
      <dl class="balanceDetails">
        <dt>余额明细</dt>
        <dd class="clearfix" v-for="item,index in 4">
          <div class="left">
            <strong>充值</strong>
            <span>余额: 180.00</span>
          </div>
          <div class="right">
            <strong>2018-06-11</strong>
            <span>+100.00</span>
          </div>
        </dd>
      </dl>
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
    padding-bottom: 30px;
  }

  .titleNav {
    padding: 24px 30px 12px 45px;
    border-bottom: 1px solid #f4f4f4;
    margin-bottom: 24px;
  }

  .titleNav > div {
    float: left;
    font: 15px/28px "微软雅黑";
  }

  .titleNav > div > a {
    float: left;
    width: 120px;
    text-align: center;
    border: 1px solid #b3b3b3;
    color: #333;
  }

  .titleNav > div > a:hover,
  .titleNav > div > a.active {
    background-color: #0461b1;
    color: #fff;
    border-color: #0461b1;
  }

  .titleNav > a {
    float: right;
    font: 14px/30px "微软雅黑";
    color: #a1a1a1;
  }

  .money {
    padding-left: 45px;
    padding-right: 30px;
  }

  .balance {
    float: left;
  }

  .balance i {
    float: left;
    width: 52px;
    height: 52px;
    background: url("../assets/img/Icon.png") no-repeat -173px -581px;
    margin-right: 35px;
  }

  .balance strong {
    float: left;
    font: bold 30px/52px "微软雅黑";
    color: #f43232;

  }

  .balanceOperation {
    float: right;
    font: 14px/2 '微软雅黑';
    margin-top: 10px;
  }

  .balanceOperation a {
    width: 100px;
    float: left;
    margin-left: 15px;
    text-align: center;
  }

  .recharge {
    background-color: #0461b1;
    color: #fff;
    border: 1px solid #0461b1;
  }

  .putForward {
    color: #0461b1;
    border: 1px solid #0461b1;
  }

  .balanceDetails {
    margin-top: 22px;
    padding-bottom: 20px;
  }

  .balanceDetails dt {
    font: 15px/40px "微软雅黑";
    border-bottom: 1px solid #f4f4f4;
    padding-left: 45px;
    color: #333;
    margin-bottom: 10px;
  }

  .balanceDetails dd {
    padding: 5px 30px 5px 45px;
    color: #333;
  }

  .balanceDetails dd:hover {
    background-color: #f1f1f1;
  }

  .balanceDetails .left {
    float: left;
  }

  .balanceDetails .left strong {
    display: block;
    font: 14px/24px "微软雅黑";
  }

  .balanceDetails .left span {
    display: block;
    font: 12px/22px "微软雅黑";
  }

  .balanceDetails .right {
    float: right;
  }

  .balanceDetails .right strong {
    display: block;
    font: 12px/22px "微软雅黑";
    color: #808080;
  }

  .balanceDetails .right span {
    display: block;
    font: 14px/24px "微软雅黑";
  }

  .paging {
    text-align: right;
    margin-right: 30px;
  }

</style>
