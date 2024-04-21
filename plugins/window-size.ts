export default defineNuxtPlugin((nuxtApp) => {
  const windowSize = ref({
    width: process.client ? window.innerWidth : 0,
    height: process.client ? window.innerHeight : 0,
  })

  const updateWindowSize = () => {
    windowSize.value.width = window.innerWidth
    windowSize.value.height = window.innerHeight
  }

  nuxtApp.hook('app:mounted', () => {
    window.addEventListener('resize', updateWindowSize)
  })

  return {
    provide: {
      windowSize,
    },
  }
})
