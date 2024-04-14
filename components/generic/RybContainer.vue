<script lang="ts" setup>
import RybDotsLoaderPage from './RybDotsLoaderPage.vue'

const props = withDefaults(
  defineProps<{
    pending?: boolean
    error?: Error | null
    preventMaxWidth?: boolean
  }>(),
  {
    pending: false,
    error: undefined,
    preventMaxWidth: false,
  },
)
const error = computed(() => props.error)

// triggers on server side
if (props.error) {
  showError('Something went wrong')
}

// triggers on client side
watch(error, () => {
  if (!error.value) return
  if (props.error) showError('Something went wrong')
})
</script>

<template>
  <RybDotsLoaderPage v-if="pending" />
  <div v-else class="ryb-default-container" :class="{ 'ryb-default-container-width': !preventMaxWidth }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ryb-default-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
}
</style>
