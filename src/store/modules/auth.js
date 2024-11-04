// store/modules/auth.js
//

import axios from 'axios';

const state = {
  user: null,
  token: localStorage.getItem('token') || null,
  authError: null,
};

const getters = {
  isAuthenticated: state => !!state.token,
  getUser: state => state.user,
  getAuthError: state => state.authError,
};

const actions = {
  async register({ commit }, userData) {
    try {
      const response = await axios.post('/api/register', userData);
      commit('setUserData', response.data);
    } catch (error) {
      commit('setAuthError', error.response.data.message);
    }
  },

  async login({ commit }, credentials) {
    try {
      const response = await axios.post('/api/login', credentials);
      commit('setUserData', response.data);
    } catch (error) {
      commit('setAuthError', error.response.data.message);
    }
  },

  logout({ commit }) {
    commit('clearUserData');
  }
};

const mutations = {
  setUserData(state, userData) {
    state.user = userData.user;
    state.token = userData.token;
    state.authError = null;
    localStorage.setItem('token', userData.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
  },

  setAuthError(state, error) {
    state.authError = error;
  },

  clearUserData(state) {
    state.user = null;
    state.token = null;
    state.authError = null;
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
