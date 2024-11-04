<template>
    <div class="user-profile-view">
      <h3>{{ user.name }}</h3>
      <p>邮箱: {{ user.email }}</p>
      <p v-if="user.bio">简介: {{ user.bio }}</p>
    </div>
  </template>     
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  };
      //用于展示用户的公开资料
  </script>
  
  <style scoped>
  .user-profile-view {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
  }
  h3 {
    margin: 0;
    font-size: 1.2em;
  }
  p {
    margin: 5px 0;
  }
  </style>
