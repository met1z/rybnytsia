import VueLazyLoad from 'vue3-lazyload'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(VueLazyLoad, { observerOptions: { rootMargin: '10%', threshold: 0 } })
})
