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
/*  searchIsFreeAction(state, data) {
    state.searchIsFreeList = data;
  },*/
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
  initCourseMainIfo(state, obj) {
    state.courseMainIfoObj = obj
  },
  initCourseContents(state, obj) {
    state.courseContentsList = obj;

  },
  correlation(state, obj) {
    state.courseAboutList = obj;
  },
  orderDetailAction(state, obj) {
    state.orderDet = obj[0];
  },
  initVideoAbout(state, data) {
    state.videoAboutList = data;
  },
  initVideoComment(state, data) {
    state.videoCommentList = data;
  },



}
