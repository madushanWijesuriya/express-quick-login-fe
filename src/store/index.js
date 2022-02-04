import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import createPersistedState from "vuex-persistedstate";
// import * as Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: user,
  },
  plugins: [createPersistedState()],
});
