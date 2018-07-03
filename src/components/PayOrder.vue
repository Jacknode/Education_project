<template>
  <div id="wrap">
    <div id="wrapContent">
      <strong>订单支付</strong>
      <div class="payOrder">
        <strong><i></i>订单提交成功！请您尽快支付！</strong>
        <div class="clearfix">
          <span>当前账号为: </span>
          <strong>18380900462</strong>
          <a href="javascript:;">查看我的订单</a>
        </div>
      </div>
      <div class="payTypeList clearfix">
        <a href="javascript:;" class="active">微信扫码</a>
      </div>
      <div class="QRCodePay">
        <div class="QRCodeBox">
          <!--<img src="" width="198" height="198">-->
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
    background-color: #fff;
    padding: 5px 0 140px 0;
  }

  #wrapContent {
    width: 1200px;
    margin: 0 auto;
  }

  #wrapContent > strong {
    font: 18px/3 "微软雅黑";
    color: #333333;
  }

  .payOrder {
    border: 1px solid #aaaaaa;
    text-align: center;
    padding: 15px 0 33px 0;
  }

  .payOrder > strong {
    position: relative;
    font: 16px/50px "微软雅黑";
    color: #1a1a1a;
  }

  .payOrder > strong > i {
    position: absolute;
    width: 8px;
    height:15px;
    border-right: 1px solid #188eee;
    border-bottom: 1px solid #188eee;
    left: -15px;
    top: 3px;
    transform: rotate(45deg);
  }

  .payOrder > div > span {
    font: 16px/50px "微软雅黑";
    color: #1a1a1a;
  }

  .payOrder > div > strong {
    font: 20px/50px "微软雅黑";
    color: #f43232;
  }

  .payOrder > div > a {
    font: 12px/50px "微软雅黑";
    display: inline;
    color: #ff2e2e;
    margin-left: 22px;
    text-decoration: underline;
  }

  .payTypeList {
    font: 12px/34px "微软雅黑";
    margin-top: 23px;
    padding-bottom: 36px;
    border-bottom: 1px solid #aaaaaa;
  }

  .payTypeList > a {
    float: left;
    padding: 0 34px;
    border: 1px solid #d2d2d2;
  }

  .payTypeList > a:hover,
  .payTypeList > a.active{
    background-color: #188eee;
    color: #fff;
    border-color: #188eee;
  }

  .QRCodePay {
    margin-top: 50px;
  }

  .QRCodeBox {
    width: 200px;
    height:200px;
    border: 1px solid #ccc;
    margin: 0 auto;
  }

</style>
