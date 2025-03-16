import { defineNuxtConfig } from 'nuxt/config';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineNuxtConfig({
  vite: {
    plugins: [
      cssInjectedByJsPlugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";`,
        },
      },
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    'vuetify/styles', // Основные стили Vuetify 3
    '@mdi/font/css/materialdesignicons.min.css', // Иконки Material Design
  ],
});