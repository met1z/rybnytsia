<script lang="ts" setup>
import RybContainer from '~/components/generic/RybContainer.vue'
import RybFooter from '~/components/navigation/RybFooter.vue'
import RybHeader from '~/components/navigation/RybHeader.vue'
</script>

<template>
  <div class="global">
    <RybContainer class="ryb-container">
      <RybHeader />
      <main class="main-default main-default-padding">
        <NuxtPage />
      </main>
      <RybFooter />
    </RybContainer>
  </div>
</template>

<style lang="scss" scoped>
.ryb-container {
  margin: auto;
}

.main-default {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
}

.main-default-padding {
  padding-top: calc(var(--hc-header-margin) + 2.5rem);

  @media (max-width: 1024px) {
    padding-top: calc(var(--hc-header-margin) + 1.5rem);
  }
}
</style>
