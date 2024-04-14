<script lang="ts" setup>
const { setLocale } = useLocale()
</script>

<template>
  <div style="display: flex">
    <h1>{{ $t('header.index') }}</h1>
    <button type="button" @click="() => setLocale('en')">
      <h1>{{ $t('header.english') }}</h1>
    </button>
    <button type="button" @click="() => setLocale('ua')">
      <h1>{{ $t('header.ukraine') }}</h1>
    </button>
  </div>
</template>
