import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    'api/swr': { swr: 5 },
    'api/users': {ssr: true},
  }
})
