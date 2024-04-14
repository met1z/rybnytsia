<script lang="ts" setup>
const { head } = useDefaultHead()
const localeService = useLocale()

useAsyncData(async () => {
  await localeService.trySetLocaleFromCookie()
})

useHead(head)
</script>

<template>
  <VApp :full-height="false">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>

<style lang="scss">
@import './assets/scss/vuetify-overrides.scss';
</style>
