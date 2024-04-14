// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['composables/**'],
  },

  typescript: {
    strict: true,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        esModuleInterop: true,
        isolatedModules: true,
        noImplicitThis: true,
        verbatimModuleSyntax: true,
      },
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  css: [
    'vuetify/styles',
    'swiper/css',
    'swiper/css/free-mode',
    '@/assets/scss/global-layout.scss',
    '@/assets/scss/design-layout.scss',
  ],

  ssr: true,

  modules: ['@nuxt/content', '@nuxtjs/i18n', 'nuxt-font-loader', '@pinia/nuxt'],

  runtimeConfig: {
    public: {
      title: '',
      hcUrl: '',
      feedbackUrl: '',
    },
  },

  content: {
    locales: ['en', 'ua'],
    defaultLocale: 'en',
  },
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales/',
    compilation: {
      strictMessage: false,
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'english',
        file: 'en.json',
      },
      {
        code: 'ua',
        iso: 'ua-UK',
        name: 'Ukrainian',
        file: 'ua.json',
      },
    ],
    vueI18n: './i18n.options.ts',
  },
})
