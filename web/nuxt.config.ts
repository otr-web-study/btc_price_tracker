// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    MONGO_ADDR: process.env.MONGO_ADDR || 'localhost',
    MONGO_PORT: process.env.MONGO_PORT || '27017',
    DB_NAME: process.env.DB_NAME || 'btctracking',
  },
  modules: ['@ant-design-vue/nuxt'],
});
