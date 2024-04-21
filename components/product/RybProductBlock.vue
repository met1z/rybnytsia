<script lang="ts" setup>
import RybDefaultTitle from '../generic/typography/RybDefaultTitle.vue'
import HomeDefaultContainer from '../home/HomeDefaultContainer.vue'
import RybProductCard from './RybProductCard.vue'

defineProps<{
  name: string
  image: string
}>()

const nuxtApp = useNuxtApp()
const windowSize = computed(() => nuxtApp.$windowSize.value.width)
</script>

<template>
  <HomeDefaultContainer class="ryb-product-block">
    <VCard position="relative" :image="image" max-width="1640" :height="windowSize > 1024 ? '15rem' : '10rem'">
      <template #title>
        <div class="ryb-category-title">
          <RybDefaultTitle :text="name" />
        </div>
      </template>
    </VCard>
    <div class="ryb-products">
      <RybProductCard
        v-for="item in 6"
        :key="item"
        :name="$t('products.goldSmokedSalmon')"
        image="/products/gold-smoked-salmon.png"
      />
    </div>
  </HomeDefaultContainer>
</template>

<style lang="scss" scoped>
.ryb-product-block {
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
  }

  .ryb-category-title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ryb-products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
}
</style>
