const state = {
  user: undefined,
  token: undefined,
};

const mutations = {
  logout(state) {
    state.user = undefined;
    state.token = undefined;
  },
  login(state, user) {
    state.user = { ...state.user, ...user };
    state.token = { ...state.user, ...user.token };
  },
};

const actions = {
  loginUser({ commit }, userData) {
    commit("login", userData);
  },
  logoutUser({ commit }) {
    commit("logout");
  },
};

const getters = {
  getUser: (state) => state.user,
  isLoggedIn: (state) => !!state.token,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
