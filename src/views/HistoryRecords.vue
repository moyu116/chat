<template>
    <div class="history-records">
      <h2>查询历史记录</h2>
      <ul v-if="historyRecords.length > 0">
        <li v-for="(record, index) in historyRecords" :key="index">
          {{ record.query }} - {{ record.date }}
        </li>
      </ul>
      <p v-else>没有查询记录。</p>
      <button @click="clearHistory">清空历史记录</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getHistoryRecords']),
      historyRecords() {
        return this.getHistoryRecords;
      },
    },
    methods: {
      ...mapActions(['fetchHistoryRecords', 'clearHistoryRecords']),
      clearHistory() {
        this.clearHistoryRecords();
      },
    },
    mounted() {
      this.fetchHistoryRecords(); // 页面加载时获取查询记录
    },
  };
  </script>
  
  <style scoped>
  .history-records {
    padding: 20px;
  }
  button {
    margin-top: 10px;
    padding: 5px 10px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  