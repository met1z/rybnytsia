<script lang="ts" setup>
import RybSecondaryText from '~/components/generic/typography/RybSecondaryText.vue'

import RybImage from '../../generic/RybImage.vue'
import HomeDefaultContainer from '../HomeDefaultContainer.vue'
</script>

<template>
  <HomeDefaultContainer id="main">
    <div class="home-main-block">
      <RybImage
        image="/main-seo.jpeg"
        alt="Rybnytsia"
        :custom-aspect-ratio="(1700 / 3164) * 100 + '%'"
        class="home-main-block-image"
      />
      <div class="home-main-block-crumbs">
        <div class="home-crumbs-item">
          <div class="home-crumbs-image">
            <RybImage image="/main-crumbs/sea.png" alt="Sea" />
          </div>
          <RybSecondaryText :text="$t('home.crumbs.crumb1')" tag="p" />
        </div>
        <div class="home-crumbs-item">
          <div class="home-crumbs-image">
            <RybImage image="/main-crumbs/delivery.png" alt="Sea" />
          </div>
          <RybSecondaryText :text="$t('home.crumbs.crumb2')" tag="p" />
        </div>
      </div>
    </div>
  </HomeDefaultContainer>
</template>

<style lang="scss" scoped>
.home-main-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 3rem;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 0;
  }

  .home-main-block-image {
    border-radius: 1.5rem;
  }

  .home-main-block-crumbs {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .home-crumbs-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 22rem;

      @media (max-width: 600px) {
        width: auto;
        gap: 1rem;
      }

      .home-crumbs-image {
        width: 3.75rem;
        height: 3.75rem;
        flex-shrink: 0;

        @media (max-width: 1024px) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }
}
</style>
