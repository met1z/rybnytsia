<script lang="ts" setup>
import RybDefaultTitle from '~/components/generic/typography/RybDefaultTitle.vue'
import RybDefaultText from '../generic/typography/RybDefaultText.vue'
import HomeDefaultContainer from '../home/HomeDefaultContainer.vue'
</script>


<template>
  <HomeDefaultContainer class="footer-container">
      <RybDefaultTitle :text="$t('footer.title')" class="footer-title"/>
      <div class="footer-text">

        <div class="align-left">
        <RybDefaultText :text="$t('footer.text.privacyPolicy')" style="    padding-bottom: 1rem;" />
        <RybDefaultText :text="$t('footer.text.termsConditions')" style="    padding-bottom: 1rem;"/>
        <RybDefaultText :text="$t('footer.text.aboutUs')" />
        </div>

        <div class="align-right">
        <RybDefaultText :text="$t('footer.text.telephone1')"  style="    padding-bottom: 1rem;"/>
        <RybDefaultText :text="$t('footer.text.telephone2')"  />
        </div>

      </div>
  </HomeDefaultContainer>
</template>


<style lang="scss" scoped>
  .footer-container{
    background-color: var(--ryb-white);
    margin-top: 50px;
  }
  .footer-title{
    text-align: center;
    position: relative;
    width: 100%;
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        height: 2px; 
        background-color: black;
    }

    &::before {
        left: 0;
        padding-right:35%;
    }

    &::after {
        right: 0;
        padding-left:35%;
    }

    } 
    .footer-text{
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      align-items: center;
      
    .align-right{
      text-align: right;
      padding-right: 13%;
      flex-grow: 1;
    }
    .align-left{
      flex-grow: 1;
      padding-right: 13%;
      text-align: center;
    }
    }
  
</style>