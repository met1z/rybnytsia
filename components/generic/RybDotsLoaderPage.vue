<script setup lang="ts">
import RybDotsSpinner from './RybDotsSpinner.vue'
</script>

<template>
  <div class="ryb-loader-container">
    <RybDotsSpinner />
  </div>
</template>

<style lang="scss" scoped>
.ryb-loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: var(--ryb-white);
  margin: auto 0;
  --loader-color: var(--ryb-blue);
  --loader-size: 0.75rem;
  font-size: var(--loader-size);
  padding: 6rem 0;
}
</style>
