<template>
  <div>
    <AddFriendButton />
    <UserProfileView />
  </div>
</template>

<script>
import AddFriendButton from './components/AddFriendButton.vue';
import UserProfileView from './components/UserProfileView.vue';

export default {
  name: 'App',
  components: {
    AddFriendButton,
    UserProfileView
  }
  };

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
