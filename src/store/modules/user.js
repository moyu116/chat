// store/modules/user.js
//管理用户数据和更新用户信息

import axios from 'axios';

const state = {
  user: null,
  updateError: null,
};

const getters = {
  getUser: state => state.user,
  getUpdateError: state => state.updateError,
};

const actions = {
  async fetchUserData({ commit }) {
    try {
      const response = await axios.get('/api/user');
      commit('setUser', response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },

  async updateUser({ commit }, updatedData) {
    try {
      const response = await axios.put('/api/user', updatedData);
      commit('setUser', response.data);
    } catch (error) {
      commit('setUpdateError', error.response.data.message);
    }
  }
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.updateError = null;
  },

  setUpdateError(state, error) {
    state.updateError = error;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
