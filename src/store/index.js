// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import friends from './modules/friends';
import history from './modules/history';
import message from './modules/message';
import user from './modules/user';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    friends,
    history,
    message,
    user,
    users
  }
});
