<template>
    <div>
      <button @click="handleAddFriend" class="add-friend-button">
        添加好友
      </button>
      <p v-if="addFriendError" class="error">{{ addFriendError }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    props: {
      friendId: {
        type: String,
        required: true,
      },
    },
    computed: {
      ...mapGetters(['getAddFriendError']),
      addFriendError() {
        return this.getAddFriendError;
      },
    },
    methods: {
      ...mapActions(['addFriend']),
      handleAddFriend() {
        this.addFriend(this.friendId);
      },
    },
  };
  </script>
  
  <style scoped>
  .add-friend-button {
    padding: 5px 10px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .error {
    color: red;
    margin-top: 5px;
  }
  </style>
  