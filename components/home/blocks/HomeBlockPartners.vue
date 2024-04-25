<script lang="ts" setup>
import RybDefaultTitle from '~/components/generic/typography/RybDefaultTitle.vue'

import RybImage from '../../generic/RybImage.vue'
import RybDefaultText from '../../generic/typography/RybDefaultText.vue'
import HomeDefaultContainer from '../HomeDefaultContainer.vue'
</script>

<template>
  <HomeDefaultContainer>
    <div class="home-partners-block">
      <RybDefaultTitle :text="$t('partners.index')" class="home-partners-title" />
      <div class="home-partners-block-content">
        <div class="home-partners-text">
          <RybDefaultText :text="$t('partners.text')" tag="div" />
        </div>
        <div class="home-partners-image">
          <RybImage image="/partners/image.webp" alt="About us 1" :custom-aspect-ratio="(620 / 1004) * 100 + '%'" />
        </div>
      </div>
    </div>
  </HomeDefaultContainer>
</template>

<style lang="scss" scoped>
.home-partners-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 700px) {
    gap: 1.5rem;
  }

  .home-partners-title {
    text-align: center;
  }

  .home-partners-block-content {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 1024px) {
      gap: 2rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 1.5rem;
    }

    .home-partners-text {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 45%;

      @media (max-width: 700px) {
        width: 100%;
      }
    }

    .home-partners-image {
      flex: 1;

      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
}
</style>
