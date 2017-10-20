module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  /*
   * Headers of the page
   */
  head: {
    title: 'djmountainous',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'DJ Mountainous - spinning electro from the top of the world',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },
      {
        rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png',
      },
      {
        rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png',
      },
      {
        rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.min.js'},
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' },
    ],
  },

  /*
   * Customize the progress bar color
   */
  loading: { color: '#0aab07' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
