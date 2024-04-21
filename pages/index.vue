<script lang="ts" setup>
import RybContainer from '~/components/generic/RybContainer.vue'
import HomeBlockAboutUs from '~/components/home/blocks/HomeBlockAboutUs.vue'
import HomeBlockMain from '~/components/home/blocks/HomeBlockMain.vue'
import HomeBlockPartners from '~/components/home/blocks/HomeBlockPartners.vue'
import HomeBlockProducts from '~/components/home/blocks/HomeBlockProducts.vue'
</script>

<template>
  <RybContainer class="ryb-container">
    <HomeBlockMain />
    <HomeBlockAboutUs />
    <HomeBlockProducts />
    <HomeBlockPartners />
  </RybContainer>
</template>

<style scoped lang="scss">
.ryb-container {
  margin: auto;
}
</style>
