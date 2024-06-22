// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/devtools",
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-typed-router"
  ],

  content: {
    api: {
      baseURL: '/api/content'
    }
  },
})
