/**
 * Created by leibo on 18/6/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './Agencies/actions'
// import mutations from './Agencies/mutations'

import home from './Home'
import personal from './Personal'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules:{
    home,
    personal
  },
  strict: debug,
})
