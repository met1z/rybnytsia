<script lang="ts" setup>
import RybContainer from '~/components/generic/RybContainer.vue'
import RybDotsSpinner from '~/components/generic/RybDotsSpinner.vue'
import RybLoader from '~/components/generic/RybLoader.vue'
import RybSkeleton from '~/components/generic/RybSkeleton.vue'
import RybDefaultTitle from '~/components/generic/typography/RybDefaultTitle.vue'
import RybCategoryButton from '~/components/product/RybCategoryButton.vue'
import RybProductCard from '~/components/product/RybProductCard.vue'

const LIMIT = 50

const nuxtApp = useNuxtApp()
const axios = nuxtApp.$axios
const windowSize = computed(() => nuxtApp.$windowSize.value.width)

const page = ref(1)

const productsApi = ref<any[]>([])
const productsTotal = ref(0)
const categoriesApi = ref<any[]>([])

const categories = computed(() => [{ id: -1, name: 'All' }, ...categoriesApi.value])
const selectedCategory = ref<any>({ id: -1, name: 'All' })

const loadingProducts = ref(true)
const loadingCategories = ref(true)

const loadingMore = ref(false)

const fetchInitCategories = async () => {
  loadingCategories.value = true
  page.value = 1
  const params = new URLSearchParams()
  params.append('page', page.value.toString())
  params.append('limit', LIMIT.toString())
  const { data } = await axios.get('/category/published', { params })
  categoriesApi.value = data.items
  loadingCategories.value = false
}

const fetchInitProducts = async () => {
  loadingProducts.value = true
  page.value = 1
  const params = new URLSearchParams()
  params.append('page', page.value.toString())
  params.append('limit', LIMIT.toString())
  if (selectedCategory.value.id === -1) {
    const { data } = await axios.get('/product/published', { params })
    productsApi.value = data.items
    productsTotal.value = data.meta.totalItems
  } else {
    const { data } = await axios.get(`/product/published/${selectedCategory.value.id}`, { params })
    productsApi.value = data.items
    productsTotal.value = data.meta.totalItems
  }
  loadingProducts.value = false
}

const fetchMoreProducts = async () => {
  if (loadingMore.value || productsApi.value.length === productsTotal.value) return
  loadingMore.value = true
  page.value += 1
  const params = new URLSearchParams()
  params.append('page', page.value.toString())
  params.append('limit', LIMIT.toString())
  if (selectedCategory.value.id === -1) {
    const { data } = await axios.get('/product/published', { params })
    productsApi.value = [...productsApi.value, ...data.items]
  } else {
    const { data } = await axios.get(`/product/published/${selectedCategory.value.id}`, { params })
    productsApi.value = [...productsApi.value, ...data.items]
  }
  loadingMore.value = false
}

watch(() => selectedCategory.value, fetchInitProducts)
onMounted(async () => {
  await fetchInitCategories()
  await fetchInitProducts()
})
</script>

<template>
  <RybContainer class="ryb-container">
    <HomeDefaultContainer class="ryb-product-block">
      <div v-if="loadingCategories" class="ryb-filters-block">
        <RybSkeleton v-for="i in 5" :key="i" class="ryb-filters-skeleton" />
      </div>
      <div v-else class="ryb-filters-block">
        <RybCategoryButton
          v-for="i in categories"
          :key="i.id"
          :name="i.name"
          type="button"
          :text="i.name"
          :selected="i.id === selectedCategory.id"
          @click="selectedCategory = i"
        />
      </div>
      <RybLoader v-if="loadingProducts" />
      <template v-else>
        <div v-if="selectedCategory.imageUrl" class="ryb-category-block">
          <VParallax
            :src="selectedCategory.imageUrl"
            :scale="0.85"
            :height="windowSize > 1024 ? '15rem' : '10rem'"
            class="ryb-category-block-background"
          />
          <div class="ryb-category-title">
            <RybDefaultTitle :text="selectedCategory.name" />
          </div>
        </div>
        <div
          v-infinite-scroll="fetchMoreProducts"
          :infinite-scroll-disabled="loadingMore"
          infinite-scroll-distance="250"
          class="ryb-products"
        >
          <RybProductCard
            v-for="item in productsApi"
            :key="item.id"
            :name="item.name"
            :image="item.imageUrl"
            :price="item.price"
          />
        </div>
        <div v-if="loadingMore" class="ryb-spinner-external">
          <RybDotsSpinner />
        </div>
      </template>
    </HomeDefaultContainer>
  </RybContainer>
</template>

<style scoped lang="scss">
.ryb-spinner-external {
  display: flex;
  margin: auto;
  font-size: 0.3rem;
}

.ryb-container {
  margin: auto;

  .ryb-product-block {
    flex: 1;
    gap: 2rem;

    @media (max-width: 1024px) {
      gap: 1.5rem;
    }

    @media (max-width: 600px) {
      gap: 1rem;
    }

    .ryb-filters-block {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;

      .ryb-filters-skeleton {
        width: 130px;
        height: 40.5px;
        border-radius: 2rem;
      }
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
}
</style>
