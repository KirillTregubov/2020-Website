export default {
  // mode: 'universal',
  target: 'static',
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: { lang: 'en' },
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Kirill Tregubov` : 'Kirill Tregubov';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kirill Tregubov\'s portfolio website, which lists his ongoing and previous projects.' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript. Please do not hesitate to contact me at contact@kirilltregubov.com.' }],
    link: [
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f9703e' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/preview.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    'nuxt-imagemin',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: false
      }
    }
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { minutes } = require('reading-time')(document.text)

        document.timeToRead = Math.floor(minutes)
      }
    },
  },
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('/blog', { deep: true }).only(['path']).fetch()
  
      return files.map(file => file.path === '/index' ? '/' : file.path)
    }
  },
}
