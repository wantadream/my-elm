import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation";

Vue.use(Vuex);

const state = {
  latitude: "",
  longitude: "",
  geohash: "",
  cartList: {},
};

export default new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions: {},
  modules: {},
});
