<script setup>
import { ref } from 'vue'

const users = ref([])

async function fetchUsers() {
  const response = await fetch('https://api.example.com/users')
  const userJson = await response.json()
  users.value = userJson
}

fetchUsers()
</script>

<template>
    <div>
        <h1>Users</h1>
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.name }}
          </li>
        </ul>
      </div>
</template>