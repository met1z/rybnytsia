import { createVuetify } from 'vuetify'
import { VApp, VDialog, VMenu, VParallax, VSnackbar } from 'vuetify/components'

const VUETIFY_COMPONENTS = {
  [VApp.name!]: VApp,
  [VMenu.name!]: VMenu,
  [VSnackbar.name!]: VSnackbar,
  [VParallax.name!]: VParallax,
  [VDialog.name!]: VDialog,
}

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    components: VUETIFY_COMPONENTS,
  })
  nuxt.vueApp.use(vuetify)
})
