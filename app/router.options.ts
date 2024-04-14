import type { RouterConfig } from 'nuxt/schema'

const findEl = (hash: string, x = 0) => {
  return (
    document.querySelector(hash) ||
    new Promise((resolve) => {
      if (x > 50) return resolve(undefined)
      setTimeout(() => {
        resolve(findEl(hash, ++x || 1))
      }, 100)
    })
  )
}

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()
    const error = useError()
    return new Promise((resolve) => {
      if (to.hash) {
        // if element not found nothing happened
        setTimeout(async () => {
          const el = (await findEl(to.hash)) as HTMLElement | undefined
          if (!el) return
          const calculatedTop = el.getBoundingClientRect().top + document.documentElement.scrollTop
          if ('scrollBehavior' in document.documentElement.style) {
            const marginTop = Number(getComputedStyle(el.parentElement as Element).marginTop?.replace('px', ''))
            const headerHeight = document.querySelector('header')?.clientHeight ?? 0
            const top = calculatedTop - marginTop - headerHeight
            resolve(window.scrollTo({ top, behavior: 'smooth' }))
          } else resolve(window.scrollTo(0, calculatedTop))
        })
      }
      // do nothing if previous route does not have name and its not an error
      else if (!from.name && !error.value) return undefined
      else if (savedPosition) {
        // if paths are same page:finish not triggered
        if (to.path !== from.path) {
          nuxtApp.hook('page:finish', () => {
            setTimeout(() => resolve(savedPosition))
          })
        } else resolve({ left: 0, top: 0, behavior: 'smooth' })
      } else resolve({ left: 0, top: 0 })
    })
  },
}
