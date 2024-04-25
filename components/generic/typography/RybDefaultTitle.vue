<script lang="ts" setup>
withDefaults(defineProps<{ text: string | number; tag?: 'h4' | 'div' | 'p' | 'label' | 'button' }>(), {
  tag: 'div',
})
</script>

<template>
  <component :is="tag" class="ryb-text">
    {{ text }}
  </component>
</template>

<style lang="scss" scoped>
.ryb-text {
  font-size: 3rem;
  line-height: 133%;
  font-weight: 700;
  color: var(--ryb-midnight-blue);

  @media (max-width: 1250px) {
    font-size: 2.25rem;
  }

  @media (max-width: 420px) {
    font-size: 1.75rem;
  }
}
</style>
