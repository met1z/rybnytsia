// copied from https://github.com/ElemeFE/vue-infinite-scroll
// fix issue when mounted not working when component reopen
const ctx = '@@InfiniteScroll'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive('infinite-scroll', {
    beforeMount(el, binding) {
      const vm = binding.instance

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const isAttached = (element: { parentNode: any }) => {
        let currentNode = element.parentNode
        while (currentNode) {
          if (currentNode.tagName === 'HTML') return true

          if (currentNode.nodeType === 11) return false

          currentNode = currentNode.parentNode
        }
        return false
      }

      const throttle = (delay: number) => {
        let now: number, lastExec: number, timer: NodeJS.Timeout | null

        const execute = () => {
          doCheck()
          lastExec = now
        }

        return () => {
          now = Date.now()

          if (timer) {
            clearTimeout(timer)
            timer = null
          }

          if (lastExec) {
            const diff = delay - (now - lastExec)
            if (diff < 0) execute()
            else {
              timer = setTimeout(() => {
                execute()
              }, diff)
            }
          } else execute()
        }
      }

      const getComputedStyle = document.defaultView?.getComputedStyle || window.getComputedStyle

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const getScrollEventTarget = (element: any) => {
        let currentNode = element

        while (
          currentNode &&
          currentNode.tagName !== 'HTML' &&
          currentNode.tagName !== 'BODY' &&
          currentNode.nodeType === 1
        ) {
          const overflowY = getComputedStyle(currentNode).overflowY
          if (overflowY === 'scroll' || overflowY === 'auto') return currentNode

          currentNode = currentNode.parentNode
        }
        return window
      }

      const getVisibleHeight = (element: Window | Element) => {
        if (element instanceof Window) return document.documentElement.clientHeight

        return element.clientHeight
      }

      const getElementTop = (element: Window | Element) => {
        if (element instanceof Window) return getScrollTop(window)

        return element.getBoundingClientRect().top + getScrollTop(window)
      }

      const getScrollTop = (element: Window | Element) => {
        if (element instanceof Window) return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)

        return element.scrollTop
      }

      const doCheck = (force?: boolean) => {
        const scrollEventTarget = el[ctx].scrollEventTarget
        const element = el[ctx].el
        const distance = el[ctx].distance

        if (force !== true && el[ctx].disabled) return
        const viewportScrollTop = getScrollTop(scrollEventTarget)
        const viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget)

        let shouldTrigger = false

        if (scrollEventTarget === element) shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance
        else {
          const elementBottom =
            getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop

          shouldTrigger = viewportBottom + distance >= elementBottom
        }

        if (shouldTrigger && el[ctx].expression) el[ctx].expression()
      }

      const doBind = () => {
        if (el[ctx].binded) return
        el[ctx].binded = true

        const directive = el[ctx]
        const element = el[ctx].el

        const throttleDelayExpr = element.getAttribute('infinite-scroll-throttle-delay')
        let throttleDelay = 200
        if (throttleDelayExpr) {
          throttleDelay = Number(directive.vm[throttleDelayExpr] || throttleDelayExpr)
          if (isNaN(throttleDelay) || throttleDelay < 0) throttleDelay = 200
        }
        directive.throttleDelay = throttleDelay

        directive.scrollEventTarget = getScrollEventTarget(element)
        directive.scrollListener = throttle(directive.throttleDelay)
        directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener)

        const disabledExpr = element.getAttribute('infinite-scroll-disabled')
        let disabled = false

        if (disabledExpr) {
          directive.vm.$watch(disabledExpr, (value: boolean) => {
            directive.disabled = value
            if (!value && directive.immediateCheck) doCheck.call(directive)
          })
          disabled = Boolean(directive.vm[disabledExpr])
        }
        directive.disabled = disabled

        const distanceExpr = element.getAttribute('infinite-scroll-distance')
        let distance = 0
        if (distanceExpr) {
          distance = Number(directive.vm[distanceExpr] || distanceExpr)
          if (isNaN(distance)) distance = 0
        }
        directive.distance = distance

        const immediateCheckExpr = element.getAttribute('infinite-scroll-immediate-check')
        let immediateCheck = true
        if (immediateCheckExpr) immediateCheck = Boolean(directive.vm[immediateCheckExpr])

        directive.immediateCheck = immediateCheck

        if (immediateCheck) doCheck()
      }

      el[ctx] = {
        el,
        vm,
        expression: binding.value,
      }
      if (isAttached(el)) doBind()

      el[ctx].bindTryCount = 0

      const tryBind = () => {
        if (el[ctx].bindTryCount > 10) return

        el[ctx].bindTryCount++
        if (isAttached(el)) doBind()
        else setTimeout(tryBind, 50)
      }

      tryBind()
    },
    unmounted(el) {
      if (el && el[ctx] && el[ctx].scrollEventTarget)
        el[ctx].scrollEventTarget.removeEventListener('scroll', el[ctx].scrollListener)
    },
  })
})
