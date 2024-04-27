<script lang="ts" setup>
import RybImage from '../generic/RybImage.vue'
import RybDefaultText from '../generic/typography/RybDefaultText.vue'

defineProps<{
  name: string
  image: string
  overflow?: boolean
}>()
</script>

<template>
  <div class="ryb-product-card" :class="{ 'overflow-text': overflow }">
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
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    gap: 1rem;
    padding: 1rem;
  }

  &:hover {
    border-color: var(--ryb-midnight-blue);
  }
}

.overflow-text {
  overflow: hidden;

  .ryb-text {
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
