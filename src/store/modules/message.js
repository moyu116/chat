// store/modules/messages.js
//消息

import axios from 'axios';

const state = {
  conversations: {}, // 以用户 ID 为键，存储不同用户的对话
  sendError: null
};

const getters = {
  getConversations: state => state.conversations,
  getConversationByUser: (state) => (userId) => state.conversations[userId] || [],
  getSendError: state => state.sendError
};

const actions = {
  async fetchConversation({ commit }, userId) {
    try {
      const response = await axios.get(`/api/messages/${userId}`);
      commit('setConversation', { userId, messages: response.data });
    } catch (error) {
      console.error("Error fetching conversation:", error);
    }
  },

  async sendMessage({ commit }, { userId, message }) {
    try {
      const response = await axios.post(`/api/messages/${userId}`, { content: message });
      commit('addMessage', { userId, message: response.data });
    } catch (error) {
      commit('setSendError', error.response?.data?.message || "Failed to send message");
    }
  }
};

const mutations = {
  setConversation(state, { userId, messages }) {
    state.conversations = { ...state.conversations, [userId]: messages };
  },
  
  addMessage(state, { userId, message }) {
    if (!state.conversations[userId]) {
      state.conversations[userId] = [];
    }
    state.conversations[userId].push(message);
    state.sendError = null;
  },

  setSendError(state, error) {
    state.sendError = error;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
