<template>
    <div class="friend-list">
      <h2>好友列表</h2>
      <p v-if="fetchError" class="error">{{ fetchError }}</p>
      <div v-for="friend in friends" :key="friend.id">
        <UserProfileView :user="friend" />
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
    computed: {
      ...mapGetters(['allUsers', 'fetchError']),
      friends() {
        return this.allUsers;
      }
    },
    methods: {
      ...mapActions(['fetchFriends'])
    },
    mounted() {
      this.fetchFriends();
    }
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  