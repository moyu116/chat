// store/modules/users.js
//在好友列表或搜索功能中展示用户的公开信息，用来管理获取的用户列表

import axios from 'axios';

const state = {
  users: [],
  searchResults: [],
  fetchError: null
};

const getters = {
  allUsers: state => state.users,
  searchResults: state => state.searchResults,
  fetchError: state => state.fetchError,
};

const actions = {
  async fetchFriends({ commit }) {
    try {
      const response = await axios.get('/api/friends');
      commit('setUsers', response.data);
    } catch (error) {
      commit('setFetchError', error.response.data.message);
    }
  },

  async searchUsers({ commit }, searchTerm) {
    try {
      const response = await axios.get(`/api/users/search?query=${searchTerm}`);
      commit('setSearchResults', response.data);
    } catch (error) {
      commit('setFetchError', error.response.data.message);
    }
  }
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
    state.fetchError = null;
  },

  setSearchResults(state, results) {
    state.searchResults = results;
    state.fetchError = null;
  },

  setFetchError(state, error) {
    state.fetchError = error;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
