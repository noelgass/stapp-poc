<template>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.login.uuid">
          {{ user.name.first }} {{ user.name.last }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useAsyncData } from '#app'
  import axios from 'axios'
  
  // Define a function to fetch the data from the API
  const fetchUsers = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=10')
    return response.data.results
  }
  
  // Use the useAsyncData hook to fetch the data
  const { data: users, error } = await useAsyncData('users', fetchUsers)
  
  if (error.value) {
    console.error('Error fetching users:', error.value)
  }
  </script>