export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  colorMode: {
    classSuffix: ''
  },
  css: ['@/assets/css/tailwind.css'],
  googleFonts: {
    families: {
      Poppins: [100, 400, 500, 700] //読み込みたいGoogle　Fontsを指定
    }
  },
})
