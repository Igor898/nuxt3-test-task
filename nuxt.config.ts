import { defineNuxtConfig } from 'nuxt/config';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-test-task/' : '/',
  },
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
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
});