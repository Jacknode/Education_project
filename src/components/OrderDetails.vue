<template>
  <div id="wrap">
    <div id="wrapContent">
      <strong>核对订单</strong>
      <div class="orderContent">
        <div class="orderInformation">
          <div class="payType">
            <strong>支付方式</strong>
            <div class="payTypeList clearfix">
              <a href="JavaScript:;">在线支付<i></i></a>
            </div>
          </div>
          <div class="payMenu">
            <strong>课程清单</strong>
            <ul class="payList">
              <li class="clearfix">
                <strong>电商运营实操在线系统网课 玩转2017淘宝新规</strong>
                <span> ¥1800.00</span>
              </li>
            </ul>
            <div class="payDetails clearfix">
              <div class="payDiscount">
                <a href="javascript:;" class="clearfix"><i></i><span>使用优惠券</span></a>
              </div>
              <div class="payMoneyDetails clearfix">
                <div>
                  <strong>1个课程 :</strong>
                  <span> ¥1800.00</span>
                </div>
                <div>
                  <strong>优惠 :</strong>
                  <span> -¥0.00</span>
                </div>
                <div>
                  <strong>应付金额 :</strong>
                  <span> ¥1800.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="orderSubmit">
          <div><span>当前账号为：</span><strong>18380900462</strong><em>下单后订单将与该账号绑定</em></div>
          <a href="javascript:;">提交订单</a>
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
    background-color: #f4f4f4;
    padding: 10px 0 90px;
  }

  #wrapContent {
    width: 1200px;
    margin: 0 auto;
  }

  #wrapContent > strong {
    font: 18px/3 "微软雅黑";
    color: #333333;
  }

  .orderContent {
    border: 1px solid #aaaaaa;
    background-color: #fff;
  }

  .payType > strong {
    display: block;
    background-color: #fafafa;
    font: 14px/40px "微软雅黑";
    padding-left: 15px;
  }

  .payTypeList {
    padding: 30px 35px;
    font: 14px/26px "微软雅黑";
  }

  .payTypeList > a {
    float: left;
    padding: 0 24px;
    border: 1px solid transparent;
    color: #333333;
    position: relative;
  }

  .payTypeList > a:hover,
  .payTypeList > a.active {
    border: 1px solid #188eee;
  }

  .payTypeList > a:hover i,
  .payTypeList > a.active i {
    display: block;
  }

  .payTypeList i {
    display: none;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #188eee;
    clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
    right: -1px;
    bottom: -1px;
  }

  .payTypeList i:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 6px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    top: 3px;
    left: 5px;
    transform: rotate(35deg);
  }

  .payMenu > strong {
    display: block;
    background-color: #fafafa;
    font: 14px/40px "微软雅黑";
    padding-left: 15px;
  }

  .payList {
    width: 1158px;
    border-bottom: 1px solid #f4f4f4;
    margin: 0 auto;
    font: 14px/2 "微软雅黑";
    color: #333333;
    padding: 15px 0;
  }

  .payList > li {
    padding-left: 20px;
  }

  .payList strong {
    float: left;
  }

  .payList span {
    float: right;
    color: #f43232;
  }

  .payDetails {
    padding: 20px 25px 15px 15px;
    border-bottom: 1px solid #e6e6e6;
  }

  .payDiscount {
    float: left;
  }

  .payDiscount > a {
    display: block;
    font: 13px/19px "微软雅黑";
    margin-left: 20px;
  }

  .payDiscount > a i {
    float: left;
    margin-right: 8px;
    width: 19px;
    height: 19px;
    background: url("../assets/img/Icon.png") no-repeat -173px -673px;
  }

  .payDiscount > a span {
    float: left;
    color: #1a1a1a;
  }

  .payMoneyDetails {
    float: right;
    font: 16px/36px "微软雅黑";
    width: 300px;
  }

  .payMoneyDetails > div {
    float: left;
    width: 100%;
  }

  .payMoneyDetails strong {
    float: left;
    color: #333333;
  }

  .payMoneyDetails span {
    float: right;
    color: #f43232;
  }

  .orderSubmit {
    text-align: right;
    padding: 25px;
  }

  .orderSubmit > div {
    font: 14px/32px "微软雅黑";
    color: #333;
  }

  .orderSubmit > div > strong {
    font-size: 20px;
    color: #f43232;
    padding-right: 16px;
  }

  .orderSubmit > a {
    display: inline-block;
    margin: 55px 15px 0 0;
    font: 18px/42px "微软雅黑";
    background-color: #0461b1;
    padding: 0 48px;
    color: #fff;
  }


</style>
