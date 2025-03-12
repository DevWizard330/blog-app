import { defineNuxtConfig } from 'nuxt/config'; // 正确导入

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '@/assets/css/tailwind.css',
  ],

  compatibilityDate: '2025-03-12',
});