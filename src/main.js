import "normalcss/reset.css";
import './style/app.css'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from "vant";
import { cityGuess } from "./service/getData";

Vue.config.productionTip = false;
Vue.use(Icon);

new Vue({
  router,
  store,
  Icon,
  render: (h) => h(App),
}).$mount("#app");
