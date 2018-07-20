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
                <strong>{{addOption.data.ed_ss_IDName}}</strong>
                <!--<span> ¥1800.00</span>-->
                <span>{{addOption.data.ed_oi_Price}}</span>
              </li>
            </ul>
            <div class="payDetails clearfix">
              <div class="payDiscount">
                <a href="javascript:;" class="clearfix"><i></i><span>使用优惠券</span></a>
              </div>
              <div class="payMoneyDetails clearfix">
                <div>
                  <strong>1个课程 :</strong>
                  <!--<span> ¥1800.00</span>-->
                  <span>{{addOption.data.ed_oi_Price}}</span>
                </div>
                <div>
                  <strong>优惠 :</strong>
                  <span> -¥0.00</span>
                </div>
                <div>
                  <strong>应付金额 :</strong>
                  <!--<span> ¥1800.00</span>-->
                  <span>{{addOption.data.ed_oi_Price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="orderSubmit">
          <div><span>当前账号为：</span><strong>{{supplierId}}</strong><em>下单后订单将与该账号绑定</em></div>
          <a href="javascript:;" @click="submitOrder">提交订单</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getNewStr,postPromise} from '@/assets/js/public'
  export default {
    computed: mapGetters([]),
    data() {
      return {
        //供应商编码
        supplierId:'',
        //用户信息
        userInfo:'',
        //用户编号
        orderUserId:'',
        //系列编号
        seriesId:'',
        //作者编号
        authorId:'',
        addOption:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_ss_ID": "",                  //添加订单的系列编码
            "ed_ss_IDName": "",        //添加订单的产品名称
            "ed_oi_UserIF": "",          //用户编码
            "ed_oi_AgentID": "",        //供应商编码
            "ed_oi_Price": "",             //订单价格
            // "ed_oi_Difference": "1",     //视频和系列的区分（0视频，1系列）
          }
        },
        addOption1:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_ss_ID": "",                  //添加订单的系列编码
            "ed_ss_IDName": "测试添加订单的产品名称",        //添加订单的产品名称
            "ed_oi_UserIF": "14",          //用户编码
            "ed_oi_AgentID": "1",        //供应商编码
            "ed_oi_Price": "100",             //订单价格
            // "ed_oi_Difference": "1",     //视频和系列的区分（0视频，1系列）
          }
        },
      }
    },
    methods: {
      //初始化订单
      initData() {
        this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
        //初始化供应商编码
        this.supplierId=this.userInfo.sm_ui_UserCode;
        //用户编码
        this.orderUserId=this.userInfo.sm_ui_ID;
       let option={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
//          "page": "1",
//          "rows": "10",
          "ed_ss_ID": this.$route.query.seriesId?this.$route.query.seriesId:"",//系列编号
//          "ed_ss_ID": "20",//系列编号
          "ed_oi_UserID": this.userInfo.sm_ui_ID?this.userInfo.sm_ui_ID:"",//用户编码
//          "ed_oi_UserID": "14",//用户编码
          "ed_oi_PayState": '',//支付状态（0未支付，1已支付)
          "ed_oi_Confirm": '',      //是否确认订单   （0未确认 ， 1已确认）
        };
       console.log("查询订单option:",option)
        postPromise(getNewStr + '/EdOrderInfo/SelectS',option)
          .then(data => {
            var data = JSON.parse(data);
            let orderObj=data.data[0];
            if (Number(data.resultcode) == 200) {
              console.log("查询订单返回结果 orderObj:",orderObj)
              this.addOption.data.ed_ss_ID=orderObj.ed_ss_ID;
              this.addOption.data.ed_ss_IDName=orderObj.ed_ss_IDName;
              this.addOption.data.ed_oi_UserIF=this.orderUserId;
              this.addOption.data.ed_oi_AgentID=orderObj.ed_oi_UserIF;
              this.addOption.data.ed_oi_Price=orderObj.ed_oi_Price;
//              alert(data.resultcontent)
            } else {
              alert(data.resultcontent)
            }
          })
      },
      //提交订单
      submitOrder(){
        postPromise(getNewStr + '/EdOrderInfo/Insert', this.addOption)
          .then(data => {
            var data = JSON.parse(data);
            if (Number(data.resultcode) == 200) {
              alert(data.resultcontent)
              this.$router.push({name:'PayOrder',query:{seriesId:20}})

//              const {href} = this.$router.resolve({
//                name:"PayOrder",
//                query:{seriesId:20},
//              });
//              window.open(href,"_blank");
            } else {
              alert(data.resultcontent)
              this.delete("28");
            }
          })
      },
      //删除订单
      delete(id){
        let deleteOption = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ed_oi_ID": id,//标识
          }
        };
        postPromise(getNewStr + '/EdOrderInfo/Delete', deleteOption)
          .then(data => {
            var data = JSON.parse(data);
            if (Number(data.resultcode) == 200) {
              alert(data.resultcontent)
            } else {
              alert(data.resultcontent)
            }
          })
      },
    },
    created(){
      this.initData()
    },
    mounted(){
      this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
      this.seriesId=this.$route.query.seriesId;
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
