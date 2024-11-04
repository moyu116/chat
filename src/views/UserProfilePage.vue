<template>
    <div class="user-profile">
      <h2>用户资料</h2>
      <form @submit.prevent="handleUpdate">
        <label for="name">用户名</label>
        <input type="text" v-model="name" id="name" required />
  
        <label for="email">邮箱</label>
        <input type="email" v-model="email" id="email" required />
  
        <label for="password">新密码</label>
        <input type="password" v-model="password" id="password" placeholder="留空则不更改" />
  
        <button type="submit">更新资料</button>
      </form>
  
      <p v-if="updateError" class="error">{{ updateError }}</p>
      <p v-if="updateSuccess" class="success">资料更新成功！</p>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        updateSuccess: false
      };
    },
    computed: {
      ...mapGetters(['getUser', 'getUpdateError']),
      updateError() {
        return this.getUpdateError;
      }
    },
    methods: {
      ...mapActions(['updateUser', 'fetchUserData']),
      async handleUpdate() {
        const updatedData = {
          name: this.name,
          email: this.email,
          ...(this.password ? { password: this.password } : {}) // 如果有输入密码，则添加
        };
  
        await this.updateUser(updatedData);
        if (!this.updateError) {
          this.updateSuccess = true;
          setTimeout(() => (this.updateSuccess = false), 3000);
        }
      }
    },
    mounted() {
      this.fetchUserData().then(() => {
        const user = this.getUser;
        if (user) {
          this.name = user.name;
          this.email = user.email;
        }
      });
    }
  };
  </script>
  
  <style scoped>
  /* 在这里添加你的 CSS 样式 */
  .error {
    color: red;
  }
  .success {
    color: green;
  }
  </style>
  