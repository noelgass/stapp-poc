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
  import axios from 'axios'
  
  // Define a reactive variable to store the users
  const users = ref([])
  
  // Fetch the data from the API when the component is mounted
  onMounted(async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=10')
      users.value = response.data.results
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  })
  </script>