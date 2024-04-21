<script lang="ts" setup>
import type { Swiper as SwiperClass } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'

import SliderIcon from '~/components/icons/SliderIcon.vue'

import RybSkeleton from '../../generic/RybSkeleton.vue'
import RybProductCard from '../../product/RybProductCard.vue'
import HomeDefaultContainer from '../HomeDefaultContainer.vue'

const swiperInstance = ref<SwiperClass>()

const setSwiper = (swiper: SwiperClass) => {
  swiperInstance.value = swiper
}
</script>

<template>
  <HomeDefaultContainer>
    <div class="home-products-block">
      <button type="button" class="ryb-swiper-paginator-button left desktop" @click="swiperInstance?.slidePrev()">
        <SliderIcon />
      </button>
      <ClientOnly>
        <template #fallback>
          <div class="ryb-swiper-skeleton">
            <RybSkeleton v-for="i in 4" :key="i" class="ryb-swiper-skeleton-item" />
          </div>
        </template>
        <Swiper
          :slides-per-view="1"
          loop
          grab-cursor
          prevent-clicks-propagation
          prevent-clicks
          :breakpoints="{
            1440: { slidesPerView: 4, spaceBetween: 48 },
            1024: { slidesPerView: 3, spaceBetween: 48 },
            400: { slidesPerView: 2, spaceBetween: 24 },
          }"
          @swiper="setSwiper"
        >
          <SwiperSlide v-for="item in 10" :key="item">
            <RybProductCard :name="$t('products.goldSmokedSalmon')" image="/products/gold-smoked-salmon.png" />
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
      <button type="button" class="ryb-swiper-paginator-button desktop" @click="swiperInstance?.slideNext()">
        <SliderIcon />
      </button>
    </div>
    <div class="ryb-swiper-paginator">
      <button type="button" class="ryb-swiper-paginator-button left" @click="swiperInstance?.slidePrev()">
        <SliderIcon />
      </button>
      <button type="button" class="ryb-swiper-paginator-button" @click="swiperInstance?.slideNext()">
        <SliderIcon />
      </button>
    </div>
  </HomeDefaultContainer>
</template>

<style lang="scss" scoped>
.home-products-block {
  display: flex;
  align-items: center;
  gap: 3rem;

  width: 100%;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  .ryb-swiper-skeleton {
    display: flex;
    gap: 3rem;
    width: 100%;

    .ryb-swiper-skeleton-item {
      width: calc(100% - 9rem);
      border-radius: 1.5rem;

      &::before {
        content: '';
        display: block;
        padding-bottom: calc(100% * 489 / 398);
      }
    }

    @media (max-width: 1440px) {
      .ryb-swiper-skeleton-item {
        width: calc(100% - 6rem);

        &:last-child {
          display: none;
        }
      }
    }

    @media (max-width: 1024px) {
      gap: 1.5rem;

      .ryb-swiper-skeleton-item {
        width: calc(100% - 1.5rem);

        &:nth-child(2n) {
          display: none;
        }
      }
    }

    @media (max-width: 400px) {
      .ryb-swiper-skeleton-item {
        width: 100%;
        display: none;

        &:last-child {
          display: block;
        }
      }
    }
  }
}

.left {
  transform: rotate(180deg);
}

.ryb-swiper-paginator-button {
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--ryb-sky-blue);
  color: var(--ryb-midnight-blue);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--ryb-midnight-blue);
    color: var(--ryb-sky-blue);
  }
}

.ryb-swiper-paginator {
  display: none;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  @media (max-width: 500px) {
    display: flex;
  }
}

.desktop {
  @media (max-width: 500px) {
    display: none;
  }
}
</style>
