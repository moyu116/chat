// store/modules/history.js
//查询历史记录

import axios from 'axios';

const state = {
  historyRecords: [], // 用户的查询历史记录
};

const getters = {
  getHistoryRecords: (state) => state.historyRecords,
};

const actions = {
  async fetchHistoryRecords({ commit }) {
    try {
      const response = await axios.get('/api/history');
      commit('setHistoryRecords', response.data);
    } catch (error) {
      console.error("Error fetching history records:", error);
    }
  },

  async clearHistoryRecords({ commit }) {
    try {
      await axios.delete('/api/history/clear');
      commit('clearHistory');
    } catch (error) {
      console.error("Error clearing history records:", error);
    }
  },
};

const mutations = {
  setHistoryRecords(state, records) {
    state.historyRecords = records;
  },
  clearHistory(state) {
    state.historyRecords = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
