export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive('click-outside', {
    mounted(el, binding) {
      el.clickOutsideEvent = function (event: PointerEvent) {
        const isFunction = typeof binding.value === 'function'
        if (isFunction) {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value(event)
          }
        } else {
          const maybeItemIdentifier = binding.value.except as string
          const exceptSelector = document.querySelector(maybeItemIdentifier)
          const ignore = typeof binding.value.ignoreIf === 'function' ? binding.value.ignoreIf() : false
          if (
            !(
              el === event.target ||
              el.contains(event.target) ||
              (event.target && exceptSelector?.contains(event.target as Node)) ||
              ignore
            )
          ) {
            binding.value.callFunction(event)
          }
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    },
  })
})
