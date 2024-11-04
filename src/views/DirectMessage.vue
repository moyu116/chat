<template>
    <div class="direct-message">
      <h2>与 {{ recipientName }} 的私信</h2>
  
      <div class="messages">
        <div v-for="msg in conversation" :key="msg.id" class="message">
          <p><strong>{{ msg.senderName }}:</strong> {{ msg.content }}</p>
        </div>
      </div>
  
      <div v-if="sendError" class="error">{{ sendError }}</div>
  
      <form @submit.prevent="sendMessage">
        <input
          type="text"
          v-model="newMessage"
          placeholder="输入消息内容"
          required
        />
        <button type="submit">发送</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        newMessage: ''
      };
    },
    computed: {
      ...mapGetters(['getConversationByUser', 'getSendError']),
      conversation() {
        return this.getConversationByUser(this.recipientId);
      },
      sendError() {
        return this.getSendError;
      },
      recipientId() {
        return this.$route.params.userId;
      },
      recipientName() {
        return this.$route.params.userName; // 假设路由传入了用户名
      }
    },
    methods: {
      ...mapActions(['fetchConversation', 'sendMessage']),
      async sendMessage() {
        if (this.newMessage.trim()) {
          await this.sendMessage({
            userId: this.recipientId,
            message: this.newMessage
          });
          this.newMessage = ''; // 清空输入框
        }
      }
    },
    mounted() {
      this.fetchConversation(this.recipientId);
    }
  };
  </script>
  
  <style scoped>
  .direct-message {
    border: 1px solid #ddd;
    padding: 10px;
  }
  .messages {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  .message {
    padding: 5px;
    border-bottom: 1px solid #eee;
  }
  .error {
    color: red;
  }
  </style>
  