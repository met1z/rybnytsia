<script lang="ts" setup>
import type { ProductInterface } from '~/common/types/product.interface'

import RybDefaultTitle from '../generic/typography/RybDefaultTitle.vue'
import HomeDefaultContainer from '../home/HomeDefaultContainer.vue'
import RybProductCard from './RybProductCard.vue'

const RybProductModal = defineAsyncComponent(() => import('./modals/RybProductModal.vue'))

defineProps<{
  name: string
  image: string
  items: {
    i18nCode: string
    image: string
    price: number
    perKg: boolean
  }[]
}>()

const { formatPrice } = useUtils()
const nuxtApp = useNuxtApp()
const windowSize = computed(() => nuxtApp.$windowSize.value.width)

const dialogProduct = ref<ProductInterface>()
const dialogProductModal = ref(false)

const openModal = (product: ProductInterface) => {
  dialogProduct.value = product
  dialogProductModal.value = true
}
</script>

<template>
  <HomeDefaultContainer class="ryb-product-block">
    <RybProductModal
      v-if="dialogProduct"
      :item="dialogProduct"
      :dialog="dialogProductModal"
      @on-close="dialogProductModal = false"
    />
    <div class="ryb-category-block">
      <VParallax
        :src="image"
        :scale="0.85"
        :height="windowSize > 1024 ? '15rem' : '10rem'"
        class="ryb-category-block-background"
      />
      <div class="ryb-category-title">
        <RybDefaultTitle :text="name" />
      </div>
    </div>
    <div class="ryb-products">
      <RybProductCard
        v-for="item in items"
        :key="item.i18nCode"
        :name="$t(`products.${item.i18nCode}`)"
        :image="item.image"
        @click="
          openModal({
            name: $t(`products.${item.i18nCode}`),
            image: item.image,
            price: formatPrice(item.price, item.perKg),
            categoryName: name,
          })
        "
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

  .ryb-category-block {
    position: relative;

    .ryb-category-block-background {
      opacity: 0.35;
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

.v-img__img {
  opacity: 0.3;
}
</style>
