import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutation";

Vue.use(Vuex);
const RECORD_ADDRESS = "RECORD_ADDRESS";
export default new Vuex.Store({
  state: {
    latitude: "",
    longitude: "",
    geohash: "",
  },
  getters: {},
  mutations,
  actions: {},
  modules: {},
});
