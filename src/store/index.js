import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const RECORD_ADDRESS = "RECORD_ADDRESS";
export default new Vuex.Store({
  state: {
    latitude: "",
    longitude: "",
  },
  getters: {},
  mutations: {
    [RECORD_ADDRESS](state,  {latitude, longitude} ) {
      state.latitude = latitude;
			state.longitude = longitude;
			
    },
  },
  actions: {},
  modules: {},
});
