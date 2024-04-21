<script lang="ts" setup>
const { head } = useDefaultHead()

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
