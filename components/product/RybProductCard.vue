<script lang="ts" setup>
import RybImage from '../generic/RybImage.vue'
import RybDefaultText from '../generic/typography/RybDefaultText.vue'

defineProps<{
  name: string
  image: string
}>()
</script>

<template>
  <div class="ryb-product-card">
    <RybImage :alt="name" :image="image" custom-aspect-ratio="100%" />
    <RybDefaultText :text="name" />
  </div>
</template>

<style lang="scss" scoped>
.ryb-product-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  padding: 1.5rem;

  border: 1px solid var(--ryb-sky-blue);
  border-radius: 1.5rem;

  @media (max-width: 450px) {
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
