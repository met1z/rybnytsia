<script setup lang="ts">
import type { ProductInterface } from '~/common/types/product.interface'
import RybButton from '~/components/generic/RybButton.vue'
import RybImage from '~/components/generic/RybImage.vue'
import RybLargeText from '~/components/generic/typography/RybLargeText.vue'
import RybSecondaryText from '~/components/generic/typography/RybSecondaryText.vue'

const emits = defineEmits<{ (e: 'on-close'): void }>()
const props = defineProps<{ dialog: boolean; item: ProductInterface }>()

const show = computed({
  get: () => props.dialog,
  set(): void {
    emits('on-close')
  },
})
</script>

<template>
  <ClientOnly>
    <VDialog v-model="show" width="60rem">
      <div class="ryb-product-modal">
        <div class="ryb-card">
          <div class="ryb-card-image">
            <div class="ryb-card-image-block">
              <RybImage :image="item.image" :alt="item.name" />
            </div>
          </div>

          <div class="ryb-card-content">
            <div class="ryb-card-content-block">
              <RybSecondaryText :text="$t('generic.name')" class="ryb-card-content-block-header" />
              <RybLargeText :text="item.name" class="ryb-card-content-block-name" />
            </div>
            <div class="ryb-card-content-block">
              <RybSecondaryText :text="$t('generic.categoryName')" class="ryb-card-content-block-header" />
              <RybLargeText :text="item.categoryName" />
            </div>
            <div class="ryb-card-content-block">
              <RybSecondaryText :text="$t('generic.price')" class="ryb-card-content-block-header" />
              <RybLargeText :text="item.price" class="ryb-card-content-block-price" />
            </div>
            <RybButton text="Close" class="ryb-card-content-action" with-border @click="emits('on-close')" />
          </div>
        </div>
      </div>
    </VDialog>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.ryb-product-modal {
  padding: 1.5rem;
  background-color: var(--ryb-white);
  border-radius: 1.5rem;

  @media (max-width: 700px) {
    padding: 1rem;
  }

  .ryb-card {
    position: relative;
    display: flex;
    gap: 1rem;

    width: 100%;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    .ryb-card-image {
      position: relative;
      width: 25rem;
      height: 25rem;

      flex-shrink: 0;
      align-self: center;

      @media (max-width: 1024px) {
        width: 20rem;
        height: 20rem;
      }

      @media (max-width: 420px) {
        width: 100%;
        height: auto;
        padding-bottom: 100%;
      }

      .ryb-card-image-block {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
      }
    }

    .ryb-card-content {
      display: flex;
      flex-direction: column;

      flex: 1;
      gap: 2rem;

      @media (max-width: 1024px) {
        gap: 1.5rem;
      }

      @media (max-width: 700px) {
        gap: 1rem;
      }

      .ryb-card-content-block {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        .ryb-card-content-block-header {
          font-weight: 700;
          opacity: 0.7;
        }

        .ryb-card-content-block-name {
          font-weight: 700;
        }

        .ryb-card-content-block-price {
          font-style: italic;
        }
      }

      .ryb-card-content-action {
        margin-top: auto;
        align-self: flex-end;
      }
    }
  }
}
</style>
