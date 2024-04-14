import { createVuetify } from 'vuetify'
import { VApp, VDialog, VExpandTransition, VMenu, VOverlay, VVirtualScroll } from 'vuetify/components'

const VUETIFY_COMPONENTS = {
  [VApp.name!]: VApp,
  [VExpandTransition.name!]: VExpandTransition,
  [VOverlay.name!]: VOverlay,
  [VMenu.name!]: VMenu,
  [VVirtualScroll.name!]: VVirtualScroll,
  [VDialog.name!]: VDialog,
}

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    components: VUETIFY_COMPONENTS,
  })
  nuxt.vueApp.use(vuetify)
})
