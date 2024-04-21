<template>
  <div class="home-default-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.home-default-container {
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem 0;
}
</style>
