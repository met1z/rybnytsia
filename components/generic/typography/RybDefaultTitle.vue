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
}
</style>
