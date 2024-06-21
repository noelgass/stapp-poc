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
  import { ref } from 'vue'
  import { useAsyncData } from '#app'
  
  // Function to fetch users from the API
  const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10')
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    const data = await response.json()
    return data.results
  }
  
  // Using useAsyncData to fetch data on server-side
  const { data: users, error } = await useAsyncData('users', fetchUsers)
  
  if (error.value) {
    console.error('Error fetching users:', error.value)
  }
  </script>