<script lang="ts" setup>
import RybDefaultTitle from '~/components/generic/typography/RybDefaultTitle.vue'

import RybImage from '../../generic/RybImage.vue'
import RybDefaultText from '../../generic/typography/RybDefaultText.vue'
import HomeDefaultContainer from '../HomeDefaultContainer.vue'
</script>

<template>
  <HomeDefaultContainer id="about">
    <div class="home-about-us-block">
      <RybDefaultTitle :text="$t('aboutUs.index')" class="home-about-us-title" />
      <div class="home-about-us-block-item">
        <div class="home-about-us-text">
          <RybDefaultText :text="$t('aboutUs.block1')" />
        </div>
        <div class="home-about-us-image">
          <RybImage image="/about-us/image1.png" alt="About us 1" :custom-aspect-ratio="(590 / 990) * 100 + '%'" />
        </div>
      </div>
      <div class="home-about-us-block-item">
        <div class="home-about-us-image">
          <RybImage image="/about-us/image2.png" alt="About us 2" :custom-aspect-ratio="(590 / 990) * 100 + '%'" />
        </div>
        <div class="home-about-us-text">
          <RybDefaultText :text="$t('aboutUs.block2')" />
        </div>
      </div>
      <RybDefaultText :text="$t('aboutUs.block3')" />
    </div>
  </HomeDefaultContainer>
</template>

<style lang="scss" scoped>
.home-about-us-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (max-width: 700px) {
    gap: 1.5rem;
  }

  .home-about-us-title {
    text-align: center;
  }

  .home-about-us-block-item {
    display: flex;
    gap: 4rem;

    @media (max-width: 1024px) {
      gap: 2rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      gap: 1.5rem;

      &:nth-child(2n + 1) {
        flex-direction: column-reverse;
      }
    }

    .home-about-us-text {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 50%;

      @media (max-width: 700px) {
        width: 100%;
      }
    }

    .home-about-us-image {
      flex: 1;
    }
  }
}
</style>
