<script lang="ts" setup>
import { PRODUCTS_CATEGORIES } from '~/common/constants'
import RybContainer from '~/components/generic/RybContainer.vue'
import RybProductBlock from '~/components/product/RybProductBlock.vue'
</script>

<template>
  <RybContainer class="ryb-container">
    <RybProductBlock
      v-for="item in PRODUCTS_CATEGORIES"
      :key="item.i18nCode"
      :name="$t(`categories.${item.i18nCode}`)"
      :image="`/categories/${item.image}`"
      :items="item.items"
    />
  </RybContainer>
</template>

<style scoped lang="scss">
.ryb-container {
  margin: auto;
}
</style>
