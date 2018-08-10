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
<!--      <div class="payTypeList clearfix">
        <a href="javascript:;" class="active">微信扫码</a>
      </div>-->
<!--      <div class="QRCodePay">
        <div class="QRCodeBox">
          &lt;!&ndash;<img src="" width="198" height="198">&ndash;&gt;
        </div>
      </div>-->
      <div class="sweepQRCodeBoxWrap">
        <div class="sweepQRCodeBox">
          <div class="QRCode" ref="ewm"></div>
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
        orderInfo:{},
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
      }
    },
    created(){

    },
    methods: {
      //初始化支付
      initPay(){
        let payOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "token":"",
          "operateUserID": "",       //下单的用户编码
          "orderID": "",                   //支付的订单编码
          "payWay": "微信"                   //付款方式
        };
        return this.$store.dispatch('payAction', payOptions)
          .then((suc)=>{
          },(err)=>{
          this.$notify({
            type:err,
            message:'error'
          });
          })
      },
      //初始化数据
      initData() {

      },
      //选择其他方式支付
      changePay(){
        this.$router.push({name:'PayOrder'})
        window.location.reload()
      },
    },
    mounted(){
      this.userInfo=JSON.parse(sessionStorage.getItem('userInfo'));
      this.account=this.userInfo.sm_ui_Name;
/*      if(this.userInfo.sm_ui_Name){
        let date = new Date();
        this.timer1 = setInterval(()=>{
          leftTimer(this,date.getFullYear(),date.getMonth()+1,date.getDate(),date.getHours(),date.getMinutes()+20,0,0).then(()=>{
            clearInterval(this.timer1)
          })
        },1000)
      }*/
      var qrcode = new QRCode(this.$refs.ewm, {
        width: 200,
        height: 200
      });
      //订单编号
      let orderID = '';
      let orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
//      orderInfo.oi_SellMoney = parseInt(orderInfo.oi_SellMoney)
//      orderInfo.adultPrice = parseInt(orderInfo.adultPrice)
//      orderInfo.childPrice = parseInt(orderInfo.childPrice)
//      this.type = orderInfo.type;
/*      if(orderInfo){
        this.orderInfo = orderInfo;
        if(orderInfo.orderID){
          orderID = orderInfo.orderID
        }else{
          orderID = orderInfo.oi_OrderID
        }
      }*/

      if (this.i == false) {
        setTimeout(()=>{
          this.initPay().then(data => {
            qrcode.makeCode(data);
            if (this.isLoad > 0) {
              return;
            }
            clearInterval(this.timer);
            this.timer = setInterval(() => {
              console.log(111,data)
              let options = {
                "userID": "qianke",
                "password": "qianke123",
                "stationID": "qianlidagzh",
                "orderNo": data
              };
              this.$store.dispatch('getOrderStatus', options)
                .then(resulte => {
                  if (this.isLoad > 0) {
                    return;
                  }
                  if (resulte == "SUCCESS") {
                    clearInterval(this.timer);
                    this.isLoad++;
                    //旅行社订单支付
                    switch (data){
                      case 0:
                        sessionStorage.setItem('orderTypeID',0)
                        let wOptions = {
                          "loginUserID": "huileyou",
                          "loginUserPass": "123",
                          "operateUserID": this.user.sm_ui_ID,
                          "operateUserName": "",
                          "pcName": "",
                          token:JSON.parse(sessionStorage.getItem('user')).token,
                          "orderID":  orderInfo.OrderID,
                          "payWay": "微信支付",
                        }
                        this.$store.dispatch('wechatPayWay',wOptions)
                          .then(()=>{
                            //支付成功
                            this.$router.push({name:'MyTourOrder'});
                            clearInterval(this.timer);
                          },err=>{
                            this.$notify({
                              message: err,
                              type: 'error'
                            });
                          })
                        break;
                      case 2:
                        sessionStorage.setItem('orderTypeID',2)
                        let tOptions = {
                          "loginUserID": "huileyou",
                          "loginUserPass": "123",
                          "operateUserID": this.user.sm_ui_ID,
                          "operateUserName": "",
                          "pcName": "",
                          token:JSON.parse(sessionStorage.getItem('user')).token,
                          "orderID": orderInfo.OrderID,
                          "payWay": "微信支付",
                        };
                        this.$store.dispatch('ticketWechatPayWay',tOptions)
                          .then(()=>{
                            //支付成功
                            this.$router.push({name:'MyTourOrder'});
                            clearInterval(this.timer);
                          },err=>{
                            this.$notify({
                              message: err,
                              type: 'error'
                            });
                          })
                        break;
                      case 3:
                        sessionStorage.setItem('orderTypeID',3);
                        //美食
                        let mOptions = {
                          "loginUserID": "huileyou",
                          "loginUserPass": "123",
                          "operateUserID": this.user.sm_ui_ID,
                          "operateUserName": "",
                          "pcName": "",
                          token:JSON.parse(sessionStorage.getItem('user')).token,
                          "fd_or_OrderID": orderInfo.OrderID,
                          "fd_or_PayWay": "微信支付",
                        };
                        this.$store.dispatch('foodWechatPayWay',mOptions)
                          .then(()=>{
                            //支付成功
                            this.$router.push({name:'MyTourOrder'});
                            clearInterval(this.timer);
                          },err=>{
                            this.$notify({
                              message: err,
                              type: 'error'
                            });
                          });
                        break;
                      case 4:
                        sessionStorage.setItem('orderTypeID',4);
                        //酒店
                        let hOptions = {
                          "loginUserID": "huileyou",
                          "loginUserPass": "123",
                          "operateUserID": this.user.sm_ui_ID,
                          "operateUserName": "",
                          "pcName": "",
                          token:JSON.parse(sessionStorage.getItem('user')).token,
                          "ht_or_OrderID": orderInfo.OrderID,
                          "ht_or_PayWay": "微信支付",
                        };
                        this.$store.dispatch('hotelWechatPayWay',hOptions)
                          .then(()=>{
                            //支付成功
                            this.$router.push({name:'MyTourOrder'});
                            clearInterval(this.timer);
                          },err=>{
                            this.$notify({
                              message: err,
                              type: 'error'
                            });
                          });
                        break;
                      case 5:
                        sessionStorage.setItem('orderTypeID',5);
                        //租车
                        let cOptions = {
                          "loginUserID": "huileyou",
                          "loginUserPass": "123",
                          "operateUserID": this.user.sm_ui_ID,
                          "operateUserName": "操作员名称",
                          "pcName": "",
                          token:JSON.parse(sessionStorage.getItem('user')).token,
                          "OrderId": orderInfo.cr_cro_Id,//订单编号
                          "ht_or_PayWay":"微信支付",//支付方式
                          "ht_or_PayParam":"",//支付参数
                        };
                        this.$store.dispatch('carWechatPayWay',cOptions)
                          .then(()=>{
                            //支付成功
                            this.$router.push({name:'MyTourOrder'});
                            clearInterval(this.timer);
                          },err=>{
                            this.$notify({
                              message: err,
                              type: 'error'
                            });
                          });
                        break;
                    }
                  }
                })
            }, 300)
          })
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
