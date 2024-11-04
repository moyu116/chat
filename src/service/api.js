import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',  // 你的后端 API 地址,（后端）
  withCredentials: false,  // 是否跨域请求携带凭证
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export const registerUser = (userData) => apiClient.post('/users/register', userData);
export const loginUser = (credentials) => apiClient.post('/users/login', credentials);
export const updateProfile = (userId, updatedData) => apiClient.put(`/users/${userId}`, updatedData);
export const getPublicProfile = (username) => apiClient.get(`/users/${username}/public`);
export const sendMessage = (receiverId, message) => apiClient.post('/messages', { receiverId, message });
export const addFriend = (friendUsername) => apiClient.post('/friends', { friendUsername });
export const getChatHistory = (chatId, startTime, endTime) => apiClient.get(`/chats/${chatId}/history?startTime=${startTime}&endTime=${endTime}`);