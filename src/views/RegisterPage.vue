<template>
    <div class="register-page">
      <h2>注册</h2>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="name" placeholder="用户名" required />
        <input type="email" v-model="email" placeholder="邮箱" required />
        <input type="password" v-model="password" placeholder="密码" required />
        <button type="submit">注册</button>
      </form>
      <p v-if="authError" class="error">{{ authError }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    computed: {
      ...mapGetters(['getAuthError'])
    },
    methods: {
      ...mapActions(['register']),
      async handleRegister() {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password
        });
        if (this.$store.getters.isAuthenticated) {
          this.$router.push('/dashboard'); // 注册后跳转到主页或用户页面
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 在这里添加你的 CSS 样式 */
  </style>
  