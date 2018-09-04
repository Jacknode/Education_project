<template>
  <div>
    <div class="userInformation">
      <strong>基本信息</strong>
      <!--<div class="binding clearfix">-->
      <!--<div class="phoneBinding">-->
      <!--<i></i>-->
      <!--<strong class="clearfix">-->
      <!--<span>手机未绑定</span>-->
      <!--<a href="javascript:;">立即绑定</a>-->
      <!--</strong>-->
      <!--<span>您可以享受手机相关的登录、安全及提醒服务</span>-->
      <!--</div>-->
      <!--<div class="emailBinding">-->
      <!--<i></i>-->
      <!--<strong class="clearfix">-->
      <!--<span>邮箱未绑定</span>-->
      <!--<a href="javascript:;">立即绑定</a>-->
      <!--</strong>-->
      <!--<span>绑定后，您可以使用绑定的邮箱安全登录</span>-->
      <!--</div>-->
      <!--</div>-->
      <div class="information">
        <ul class="informationList">
          <li class="headImage"><strong class="lettor">头像</strong><em> :</em><span>
            <img v-lazy="userInformationObj.sm_ui_HeadImage" width="100" height="100">
          </span></li>
          <li><strong class="lettor">昵称</strong><em> :</em><span>{{userInformationObj.sm_ui_Name}}</span></li>
          <li><strong class="lettor">性别</strong><em> :</em><span>{{userInformationObj.sm_ui_SexName}}</span></li>
          <li><strong class="lettor">生日</strong><em> :</em><span>{{userInformationObj.sm_ui_Birthday}}</span></li>
          <li><strong>所 在 省 :</strong><span>{{userInformationObj.sm_ui_ProviceName}}</span></li>
          <li><strong>所 在 市 :</strong><span>{{userInformationObj.sm_ui_CityName}}</span></li>
          <li><strong>详细地址 :</strong><span>{{userInformationObj.sm_ui_Address}}</span></li>
          <li><strong class="lettor">学历</strong><em> :</em><span>{{userInformationObj.sm_ui_EducationName}}</span></li>
          <li><strong>婚姻状况 :</strong><span>{{userInformationObj.sm_ui_Marray}}</span></li>
          <li><strong class="lettor">职业</strong><em> :</em><span>{{userInformationObj.sm_ui_JobName}}</span></li>
          <li><strong>电话号码 :</strong><span>{{userInformationObj.sm_ui_Phone}}</span></li>
          <li><strong>电子邮箱 :</strong><span>{{userInformationObj.sm_ui_Email}}</span></li>
          <li><strong>身份证号 :</strong><span>{{userInformationObj.sm_ui_CertNo}}</span></li>
        </ul>
        <a href="javascript:;" @click="update">修改</a>
        <ul class="updateInformation" v-show="showUpdate">
          <li class="showTopPic">
            <strong>上传头像 :</strong>
            <span>
              <a href="javascript:;" class="file">上传图片
                <input type="file" name="" ref="upload" accept="image/*">
              </a>
              <img v-lazy="headImg" v-show="headImg" width="100" height="100">
            </span>

          </li>
          <li><strong class="lettor">昵称</strong><em> :</em><span>
            <el-input size="mini" v-model="userInfo.sm_ui_Name" placeholder="请输入昵称"></el-input>
          </span></li>
          <li><strong class="lettor">性别</strong><em> :</em><span>
            <el-radio v-model="sexId" label="0">女</el-radio>
            <el-radio v-model="sexId" label="1">男</el-radio>
          </span></li>
          <li><strong class="lettor">生日</strong><em> :</em><span>
            <div class="block" style="width: 170px">
              <el-date-picker
                v-model="userInfo.sm_ui_Birthday"
                type="date"
                size="mini"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </span></li>
          <li><strong>所 在 省 :</strong><span>
            <el-select
              v-model="userInfo.sm_ui_Provice"
              placeholder="请选择省"
              size="mini"
              @change="changeProvince">
              <el-option
                v-for="item in provinceList"
                :key="item.sm_af_AreaID"
                :label="item.sm_af_AreaName"
                :value="item.sm_af_AreaID">
              </el-option>
            </el-select>
          </span></li>
          <li><strong>所 在 市 :</strong><span>
            <el-select
              v-model="userInfo.sm_ui_City"
              placeholder="请选择市"
              size="mini">
              <el-option
                v-for="item in cityList"
                :key="item.sm_af_AreaID"
                :label="item.sm_af_AreaName"
                :value="item.sm_af_AreaID">
              </el-option>
            </el-select>
          </span></li>
          <li><strong>详细地址 :</strong><span>
            <el-input size="mini" v-model="userInfo.sm_ui_Address" placeholder="请输入详细地址"></el-input></span></li>
          <li><strong class="lettor">学历</strong><em> :</em><span>
            <el-select v-model="userInfo.sm_ui_EducationID" placeholder="请选择学历" size="mini">
              <el-option
                v-for="item in educationList"
                :key="item.ts_jb_ID"
                :label="item.ts_jb_Name"
                :value="item.ts_jb_ID">
              </el-option>
            </el-select>
          </span></li>
          <li><strong>婚姻状况 :</strong><span>
            <el-radio v-model="marriageId" label="0">未婚</el-radio>
            <el-radio v-model="marriageId" label="1">已婚</el-radio>
          </span></li>
          <li><strong class="lettor">职业</strong><em> :</em><span>
            <el-cascader
              size="mini"
              :show-all-levels="false"
              :options="occupationList"
              v-model="occupationOptions">
            </el-cascader>
          </span></li>
          <li><strong>电话号码 :</strong><span>
            <el-input size="mini" v-model="userInfo.sm_ui_Phone" placeholder="请输入手机号"></el-input>
          </span></li>
          <li><strong>电子邮箱 :</strong><span>
            <el-input size="mini" v-model="userInfo.sm_ui_Email" placeholder="请输入电子邮箱"></el-input>
          </span></li>
          <li><strong>身份证号 :</strong><span>
            <el-input size="mini" v-model="userInfo.sm_ui_CertNo" placeholder="请输入身份证号"></el-input>
          </span></li>
          <li class="updateSubmit">
            <button @click="updateSubmit">提交</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getNewStr} from '@/assets/js/public'

  export default {
    computed: mapGetters([
      'userInformationObj',
      'occupationList',
      'educationList',
      'provinceList',
      'cityList'
    ]),
    data() {
      return {
        marriageId: '0',
        sexId: '0',
        userInfo: {},
        occupationOptions: [],
        showUpdate: false,
        provinceId: '',
        headImg:'',
      }
    },
    created() {
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
      if(this.userInfo){
        this.initUserInformation();
      }

    },
    methods: {
      //登录的个人信息
      initUserInformation() {
        let selectUser = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          token:this.userInfo.token,
          "sm_ui_ID": this.userInfo.sm_ui_ID,
        }
        this.$store.dispatch('initUserInformation', selectUser)
          .then(() => {
//            sessionStorage.setItem('userInfo', JSON.stringify(this.userInformationObj))
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //修改
      update() {
        if(this.showUpdate){
          return
        }
        this.uploaNode();
        this.showUpdate = true;
        this.initOccupation();
        this.initEducation();
        this.initProvince();
        this.initCity(this.userInfo.sm_ui_Provice);
        this.marriageId = this.userInfo.sm_ui_MarryStatus + '';
        this.sexId = this.userInfo.sm_ui_Sex + ''
      },
      //职业数据
      initOccupation() {
        let selectGroupJob = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "parentID": "38",//38返回职业
        };
        this.$store.dispatch('initOccupation', selectGroupJob)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //学历
      initEducation() {
        let selectJob = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ui_jb_ParentID": "39",//38返回职业  39返回学历 45结算币种 46公司规模 70经营范围 82评分类型 87维护app
        };
        this.$store.dispatch('initEducation', selectJob)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //省
      initProvince() {
        let SelectProvice = {
          "areaPid": 3337
        };
        this.$store.dispatch('initProvince', SelectProvice)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //选择省
      changeProvince(val) {
        this.provinceId = val;
        this.initCity(val);
      },
      //选择市
      initCity(id) {
        let SelectProvice = {
          "areaPid": id
        };
        this.$store.dispatch('initCity', SelectProvice)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //修改提交
      updateSubmit() {
        this.userInfo.sm_ui_MarryStatus = this.marriageId;
        this.userInfo.sm_ui_Sex = this.sexId;
        this.userInfo.sm_ui_JobID = this.occupationOptions.length ? this.occupationOptions[this.occupationOptions.length - 1] : this.userInfo.sm_ui_JobID;
        if( this.headImg ){
          this.userInfo.sm_ui_HeadImage = this.headImg;
        }else {
          this.userInfo.sm_ui_HeadImage = this.userInfo.sm_ui_HeadImage;
        }

        let updateUser = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          token:this.userInfo.token,
          "data": this.userInfo
        }
        this.$store.dispatch('updateUserInfoSubmit', updateUser)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            location.reload()
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },

      uploadToOSS(file) {
        return new Promise((relove, reject) => {
          var fd = new FormData();
          fd.append("fileToUpload", file);
          var xhr = new XMLHttpRequest();
          xhr.open("POST", getNewStr + "/OSSFile/PostToOSS");
          xhr.send(fd);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
              if (xhr.responseText) {
                var data = xhr.responseText
                relove(JSON.parse(data))
              }
            } else {
//               if (xhr.responseText) {
//                 var data = xhr.responseText;
//                 reject(JSON.parse(data).resultcontent)
//               }
            }
          }
        })
      },
      uploaNode() {
        this.headImg = '';
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadToOSS(this.$refs.upload.files[i])
                  .then(data => {
                    if (data) {
                      this.headImg = data.data;
                    } else {
                      this.$notify({
                        message: '图片地址不存在!',
                        type: 'error'
                      });
                    }
                  })
                //})
              }
            })
          }
        }, 30)
      },

    },
  }
</script>
<style scoped>

  .el-date-editor.el-input {
    width: 100% !important;

  }

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
    background: url("../../assets/img/Icon.png") no-repeat -173px -413px;
  }

  .emailBinding > i {
    width: 52px;
    height: 39px;
    position: absolute;
    left: 24px;
    top: 0px;
    background: url("../../assets/img/Icon.png") no-repeat -173px -502px;
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

  .lettor + em {
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

  .updateInformation {
    float: right;
    margin-right: 100px;
    width: 300px;
    font: 13px/49px "微软雅黑";
  }

  .updateInformation > li {
    height: 49px;

  }

  .updateInformation > li > span {
    margin-left: 70px;
    display: inline-block;
    max-width: 170px;
    vertical-align: top;
    font: 13px/2 "微软雅黑";
    padding: 12px 0;
  }

  .updateSubmit {
    text-align: center;
  }

  .updateSubmit > button {
    border: 1px solid #ccc;
    background-color: #fff;
    font: 14px/2 "微软雅黑";
    padding: 0 30px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #333;
  }

  .updateSubmit > button:hover {
    color: #0461b1;
    border-color: #0461b1;
  }

  .updateInformation > .showTopPic {
    height: 100%;
  }

  .updateInformation > .showTopPic > span{
    max-width: 163px;
  }
</style>
