import { createVuetify } from 'vuetify'
import { VApp, VCard, VMenu, VSnackbar } from 'vuetify/components'

const VUETIFY_COMPONENTS = {
  [VApp.name!]: VApp,
  [VMenu.name!]: VMenu,
  [VCard.name!]: VCard,
  [VSnackbar.name!]: VSnackbar,
}

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    components: VUETIFY_COMPONENTS,
  })
  nuxt.vueApp.use(vuetify)
})
