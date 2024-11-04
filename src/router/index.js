// router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import Register from '@/views/RegisterPage.vue';

//import UserProfilePage from '@/views/UserProfilePage.vue';
import FriendList from '@/views/FriendList.vue';
import UserSearch from '@/views/UserSearch.vue';
import DirectMessage from '@/views/DirectMessage.vue';
import HistoryRecords from '@/views/HistoryRecords.vue';

Vue.use(Router);

const routes = [
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'Register', component: Register },
 // { path: '/profile', name: 'UserProfilePage', component: UserProfilePage, meta: { requiresAuth: true } },
  { path: '/friends', name: 'FriendList', component: FriendList, meta: { requiresAuth: true } },
  { path: '/search', name: 'UserSearch', component: UserSearch, meta: { requiresAuth: true } },
  { path: '/messages/:userId', name: 'DirectMessage', component: DirectMessage, meta: { requiresAuth: true }, props: true },
  { path: '/history', name: 'HistoryRecords', component: HistoryRecords, meta: { requiresAuth: true } }
];

const router = new Router({
  mode: 'history',
  routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('token');
  
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;


