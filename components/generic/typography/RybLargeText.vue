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
  font-size: 2rem;
  line-height: 133%;
  color: var(--ryb-midnight-blue);

  @media (max-width: 1250px) {
    font-size: 1.75rem;
  }

  @media (max-width: 420px) {
    font-size: 1.15rem;
  }
}
</style>
