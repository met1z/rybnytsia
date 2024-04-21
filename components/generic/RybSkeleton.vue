<script setup lang="ts">
const props = defineProps<{
  size?: string
  width?: string
  height?: string
}>()

const styles = computed(() => {
  if (props.size) return { width: props.size, height: props.size }
  return { width: props.width, height: props.height }
})
</script>
<template>
  <div class="pixio-skeleton" :style="styles"></div>
</template>

<style lang="scss">
.pixio-skeleton {
  position: relative;
  overflow: hidden;
  background: linear-gradient(270deg, #ebebeb 124.31%, #f7f7f7 152.46%, #ebebeb 175.22%);

  &::after {
    content: '';
    animation: pixio-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  }
}

.pixio-skeleton-none::after {
  animation: none;
}

@keyframes pixio-skeleton-animation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
