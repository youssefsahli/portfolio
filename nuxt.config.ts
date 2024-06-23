// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/devtools",
    "@element-plus/nuxt",
    "nuxt-icon",
    "nuxt-typed-router",
    "@nuxthq/studio",
  ],

  content: {
    experimental: {
      search: {
        indexed: true
      }
    },
    
    api: {
      baseURL: '/api/content'
    }
  },
})
