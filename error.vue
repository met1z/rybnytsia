<script lang="ts" setup>
import RybButton from './components/generic/RybButton.vue'
import RybContainer from './components/generic/RybContainer.vue'
import RybDefaultTitle from './components/generic/typography/RybDefaultTitle.vue'
import ErrorIcon from './components/icons/ErrorIcon.vue'
import RybFooter from './components/navigation/RybFooter.vue'
import RybHeader from './components/navigation/RybHeader.vue'

const localePath = useLocalePath()
const { head } = useDefaultHead()
useHead(head)

const handleError = () => clearError({ redirect: localePath({ path: '/' }) })
</script>

<template>
  <div class="global">
    <RybHeader />
    <main class="main-error">
      <RybContainer>
        <div class="generic-error">
          <ErrorIcon />
          <RybDefaultTitle class="hey-clay-big-title" :text="$t('error.somethingWentWrong')" />
          <RybButton name="Go home" :text="$t('error.button')" type="button" @click="handleError" />
        </div>
      </RybContainer>
    </main>
    <RybFooter />
  </div>
</template>

<style lang="scss" scoped>
.main-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  padding-top: 72px;
  background-color: var(--ryb-white);

  .generic-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 5rem;

    .hey-clay-big-title {
      text-align: center;
    }

    @media (max-width: 600px) {
      padding-top: 1rem;
    }
  }
}
</style>
