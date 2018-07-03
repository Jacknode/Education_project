/**
 * Created by leibo on 18/6/11.
 */
export default {
  setTranstionFalse(state) {
    state.transtionActive = {
      isActive: false,
      isRotateInDownRight: false
    }
  },
  showLoading(state) {
    state.isLoading = true;
  },
  hideLoading(state) {
    state.isLoading = false;
  },
  initHomePicture(state, data) {
    state.homePictureList = data;
  },
  initHomeVideo(state, data) {
    state.homeVideoList = data;
  },
  initHomeRecommend(state, data) {
    state.homeRecommendList = data;
  },
  initHomeClass(state, data) {
    state.homeClassList = data;
  },
  initHomeNav(state, data) {
    state.homeNavList = data;
  },
  initPlayVideo(state, data) {
    state.playVideoList = data;
  },
  initRecommend(state, data) {
    state.recommendDataList = data;
  },
  initVideoDetails(state, data) {
    state.videoDetailsList = data;
  },
  initTypeVideo(state, data) {
    state.typeVideoList = data;
  },
  initVideoDeatils(state, obj) {
    state.videoDeatilsObj = obj;
  },
  initVideoAbout(state, data) {
    state.videoAboutList = data;
  },
  initVideoComment(state, data) {
    state.videoCommentList = data;
  },
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
  }


}
