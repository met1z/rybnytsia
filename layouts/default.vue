<script lang="ts" setup>
import RybFooter from '~/components/navigation/RybFooter.vue'
import RybHeader from '~/components/navigation/RybHeader.vue'
</script>

<template>
  <div class="global">
    <RybHeader />
    <main class="main-default main-default-padding">
      <NuxtPage />
    </main>
    <RybFooter />
  </div>
</template>

<style lang="scss" scoped>
.main-default {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

.main-default-padding {
  padding-top: var(--ryb-header-height);
}
</style>
