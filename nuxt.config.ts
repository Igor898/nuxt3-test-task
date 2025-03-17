import { defineNuxtConfig } from 'nuxt/config';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-test-task/' : '/',
  },
  generate: {
    fallback: '404.html', // GitHub Pages использует 404.html как index для SPA
  },
  routeRules: {
    '/**': { prerender: true }, // Пререндеринг всех маршрутов
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

  compatibilityDate: '2025-03-17',
});