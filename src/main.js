import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Toast from "./config/vue-toastification";
import Vuex from "vuex";
import Axios from "axios";
import store from "./store";

Vue.prototype.$http = Axios;
Vue.prototype.$log = console.log;

const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

const options = {
  // You can set your default options here
};
Vue.config.productionTip = false;

Vue.use(Toast, options);
Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  Toast,
  store,
  render: (h) => h(App),
}).$mount("#app");
