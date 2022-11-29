const SITE_URL = '/vueuse-sample/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  app: {
    baseURL: SITE_URL,
    cdnURL: `https://cslf-fh.github.io${SITE_URL}`,
  },
});
