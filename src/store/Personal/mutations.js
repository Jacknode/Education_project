export default {
  initUserInformation(state, obj) {
    state.userInformationObj = obj;
  },
  initOccupation(state, data) {
    state.occupationList = data;
  },
  initEducation(state, data) {
    state.educationList = data;
  },
  initProvince(state, data) {
    state.provinceList = data;
  },
  initCity(state, data) {
    state.cityList = data;
  },
  initMoney(state, obj){
    state.moneyObj = obj;
  },
  initMyOrderAction(state, data){
    state.myOrderList = data;
  },
  initMoneyBadDetails(state, data) {
    state.moneyBadDetailsList = data;
  },
  initIntegral(state, data) {
    state.integralList = data;
  } ,
  courseRecommendAction(state, data) {
    state.courseRecommendList = data;
  }

}
