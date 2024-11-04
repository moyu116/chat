<template>
    <div class="user-search">
      <h2>用户搜索</h2>
      <input
        type="text"
        v-model="searchTerm"
        placeholder="输入用户名进行搜索"
        @input="handleSearch"
      />
      <div v-if="fetchError" class="error">{{ fetchError }}</div>
      <div v-if="searchResults.length === 0 && searchTerm">
        <p>没有找到匹配的用户。</p>
      </div>
      <div v-for="user in searchResults" :key="user.id">
        <UserProfileView :user="user" />
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import UserProfileView from '../components/UserProfileView.vue';
  
  export default {
    components: {
      UserProfileView
    },
    data() {
      return {
        searchTerm: ''
      };
    },
    computed: {
      ...mapGetters(['searchResults', 'fetchError'])
    },
    methods: {
      ...mapActions(['searchUsers']),
      handleSearch() {
        if (this.searchTerm) {
          this.searchUsers(this.searchTerm);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  