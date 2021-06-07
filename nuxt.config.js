import colors from 'vuetify/es5/util/colors';

export default {
  ssr: false,

  head: {
    titleTemplate: '%s',
    title: 'frozeneon-test-task',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: 'https://api.jsdelivr.com/v1/jsdelivr',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#ED254E',
          accent: '#011936',
          secondary: '#465362',
          info: '#F4FFFD',
          warning: '#F9DC5C',
          error: '#449DD1',
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
};
