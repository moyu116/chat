<template>
    <div class="login-page">
      <h2>登录</h2>
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="邮箱" required />
        <input type="password" v-model="password" placeholder="密码" required />
        <button type="submit">登录</button>
      </form>
      <p v-if="authError" class="error">{{ authError }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    computed: {
      ...mapGetters(['getAuthError'])
    },
    methods: {
      ...mapActions(['login']),
      async handleLogin() {
        await this.login({ email: this.email, password: this.password });
        if (this.$store.getters.isAuthenticated) {
          this.$router.push('/dashboard'); // 登录后跳转到主页或用户页面
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 在这里添加你的 CSS 样式 */
  </style>
  