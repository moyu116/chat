// store/modules/friends.js
//好友列表

import axios from 'axios';

const state = {
  friends: [], // 当前好友列表
  addFriendError: null,
};

const getters = {
  getFriends: (state) => state.friends,
  getAddFriendError: (state) => state.addFriendError,
};

const actions = {
  async fetchFriends({ commit }) {
    try {
      const response = await axios.get('/api/friends');
      commit('setFriends', response.data);
    } catch (error) {
      console.error("Error fetching friends:", error);
    }
  },

  async addFriend({ commit, dispatch }, friendId) {
    try {
      await axios.post(`/api/friends/add`, { friendId });
      // 重新获取好友列表以确保列表是最新的
      await dispatch('fetchFriends');
    } catch (error) {
      commit('setAddFriendError', error.response?.data?.message || "Failed to add friend");
    }
  },
};

const mutations = {
  setFriends(state, friends) {
    state.friends = friends;
    state.addFriendError = null;
  },
  setAddFriendError(state, error) {
    state.addFriendError = error;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
