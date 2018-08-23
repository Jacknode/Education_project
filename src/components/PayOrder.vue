<template>
  <div id="wrap">
    <div id="wrapContent">
      <strong>订单支付</strong>
      <div class="payOrder">
        <strong><i></i>订单提交成功！请您尽快支付！</strong>
        <div class="clearfix">
          <span>当前账号为: </span>
          <strong>{{account}}</strong>
          <!--<a href="javascript:;">查看我的订单</a>-->
          <!--<router-link to="OrderDetails">查看我的订单</router-link>-->
          <router-link  :to="{path:'orderDetails', query:{seriesId:seriesId}}">查看我的订单</router-link>
        </div>
      </div>

      <!--二维码-->
      <div class="sweepQRCodeBoxWrap">
        <div class="sweepQRCodeBox">
          <div id="QRCode" ref="ewm"></div>
        </div>
        <a href="javascript:;" @click="changePay">>择其他支付方式</a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
//  import {leftTimer} from '../assets/public'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        centerDialogVisible:false,
        text:'',

        timer: null,
        hide: false,
        user:{},
        type:'',
        i: false,
        isLoad: 0,
        timer1:null,
        //系列编号
        seriesId:'2',
        //订单编号
        orderId:'2',
        //当前账号
        account:'',
        //用户信息
        userInfo:'',
        orderInfo:'',
      }
    },
    created(){
      if(sessionStorage.getItem('orderInfo')){
        this.orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
      }
      if(sessionStorage.getItem('userInfo')){
        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      }
    },
    methods: {
      //初始化支付
      initPay(){
        console.log('orderInfo:',this.orderInfo)
        let payOptions = {
          "userID": "qianke",
          "password": "qianke123",
          "stationID": "qianlidagzh",
          "money": this.orderInfo.ed_oi_Price      //付款方式
//          "money": 1     //付款方式
        };
        return this.$store.dispatch('payAction', payOptions)
      },
      //选择其他方式支付
      changePay(){
        this.$router.push({name:'PayOrder'});
        window.location.reload()
      },
    },
    mounted(){
      this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
      this.account=this.userInfo.sm_ui_Name;
      var qrcode = new QRCode(this.$refs.ewm, {
        width: 200,
        height: 200
      });

 //订单编号
      let orderID = '';
      let orderInfo = this.orderInfo;
      orderInfo.ed_oi_Price = parseInt(orderInfo.ed_oi_Price)
//     this.type = orderInfo.type;

      if(orderInfo){
        this.orderInfo = orderInfo;
        if(orderInfo.ed_oi_Number){
          orderID = orderInfo.ed_oi_Number
        }else{
          orderID = orderInfo.ed_oi_Number
        }
      }
      if (this.i == false) {
        setTimeout(()=>{
          if(orderInfo.ed_oi_PayState==0){
            this.initPay()
              .then(data => {
                qrcode.makeCode(data.list);
                if (this.isLoad > 0) {
                  return;
                }
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                  let options = {
                    "userID": "qianke",
                    "password": "qianke123",
                    "stationID": "qianlidagzh",
                    "orderNo": data.backstring
                  }
                  this.$store.dispatch('getOrderStatus', options)
                    .then(resulte => {
                      if (this.isLoad > 0) {
                        return;
                      }
                      if (resulte.list == "SUCCESS") {
                        clearInterval(this.timer);
                        this.isLoad++;
                        //支付订单
                        let wOptions = {

                          "loginUserID": "huileyou",
                          "loginUserPass": "123",

                          "operateUserName": "",
                          "pcName": "",
                          "token":this.userInfo.token,
                          "operateUserID": this.orderInfo.ed_oi_ID,         //下单用户账号
                          "ed_oi_Number": this.orderInfo.ed_oi_Number,                   //支付的订单号
                          "payWay": "微信支付"                   //付款方式

                        }
                        this.$store.dispatch('wechatPayWay',wOptions)
                          .then(suc => {
                            this.$notify({
                              message: suc,
                              type: 'success'
                            });

                            this.$router.push({name:'PlayVideo',query:{id:this.orderInfo.ed_oi_ID}});
                            clearInterval(this.timer);
                          },err=>{

                            this.$notify({
                              message: err,
                              type: 'error'
                            });
                          })

                      }
                    })
                }, 300)
              })
          }else{
            this.$notify({
              title: '警告',
              message: '订单已支付！',
              type: 'warning'
            });
          }

        },30)
      }
      this.i = true;
    }
  }
</script>
<style scoped>
  .sweepQRCodeBoxWrap {
    margin-top:20px;
    padding:100px 20px 20px 20px;
    background-color: #fff;
  }

  .sweepQRCodeBox {
    width: 427px;
    height: 324px;
    margin: 0 auto;
    background: url("../assets/img/scanning.png") no-repeat;
  }

  .sweepQRCodeBox .QRCode {
    width:200px;
    height:200px;
    border:1px solid #ccc;
  }

  .sweepQRCodeBoxWrap>a {
    color: #818380;
    font-size:14px;
  }

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
