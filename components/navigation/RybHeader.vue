<script lang="ts" setup>
import RybButton from '../generic/RybButton.vue'

const { setLocale } = useLocale()
</script>

<template>
  <header class="header-container">
    <h1>{{ $t('header.index') }}</h1>
    <RybButton name="English" type="button" :text="$t('header.english')" @click="() => setLocale('en')" />
    <RybButton name="Ukraine" type="button" :text="$t('header.ukraine')" @click="() => setLocale('ua')" />
  </header>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
}
</style>
