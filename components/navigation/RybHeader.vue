<script lang="ts" setup>
import RybButton from '../generic/RybButton.vue'
import RybImage from '../generic/RybImage.vue'
import RybLocaleSwitcher from '../generic/RybLocaleSwitcher.vue'

const { currentLocale, setLocale } = useLocale()
</script>

<template>
  <header class="header-container">
    <div class="ryb-logo">
      <RybImage image="/logo.png" alt="Logo" :custom-aspect-ratio="(625 / 893) * 100 + '%'" />
    </div>
    <div class="header-actions">
      <div class="header-actions-buttons">
        <NuxtLink :to="{ path: '/' }" :aria-label="$t('header.routes.main')">
          <RybButton name="Main" type="button" :text="$t('header.routes.main')" />
        </NuxtLink>
        <NuxtLink :to="{ path: '/products' }" :aria-label="$t('header.routes.products')">
          <RybButton name="Products" type="button" :text="$t('header.routes.products')" />
        </NuxtLink>
        <NuxtLink :to="{ path: '/', hash: `#about` }" :aria-label="$t('header.routes.aboutUs')">
          <RybButton name="About us" type="button" :text="$t('header.routes.aboutUs')" />
        </NuxtLink>
      </div>
      <RybLocaleSwitcher :locale="currentLocale" @on-change-locale="(c) => setLocale(c)" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5rem 0;

  .ryb-logo {
    width: 5rem;
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 2rem;

    .header-actions-buttons {
      display: flex;
      align-items: center;

      gap: 2.5rem;
    }
  }
}
</style>
