import { createVuetify } from 'vuetify'
import { VApp, VCard, VMenu } from 'vuetify/components'

const VUETIFY_COMPONENTS = {
  [VApp.name!]: VApp,
  [VMenu.name!]: VMenu,
  [VCard.name!]: VCard,
}

export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    components: VUETIFY_COMPONENTS,
  })
  nuxt.vueApp.use(vuetify)
})
