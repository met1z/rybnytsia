<script lang="ts" setup>
import RybDefaultTitle from '~/components/generic/typography/RybDefaultTitle.vue'

import RybDefaultText from '../generic/typography/RybDefaultText.vue'
import RybSecondaryText from '../generic/typography/RybSecondaryText.vue'

const MOBILE_WIDTH = 600
const TELEPHONE_NUMBER = '+380 56 785 36 08'
const EMAIL = 'admiralrpk@gmail.com'

const nuxtApp = useNuxtApp()
const i18n = useI18n()

const windowSize = computed(() => nuxtApp.$windowSize.value.width)
const snackbar = ref(false)
const snackbarText = ref('')

const copyToClipboard = (val: string) => {
  navigator.clipboard.writeText(val)
  if (val === EMAIL) {
    snackbar.value = false
    snackbarText.value = i18n.t('footer.text.emailCopied')
    snackbar.value = true
  } else {
    snackbar.value = false
    snackbarText.value = i18n.t('footer.text.telCopied')
    snackbar.value = true
  }
}
</script>

<template>
  <footer>
    <VSnackbar
      v-model="snackbar"
      location="top"
      color="var(--ryb-white)"
      :timeout="3000"
      min-width="0"
      :width="windowSize < MOBILE_WIDTH ? '300' : undefined"
    >
      <RybSecondaryText :text="snackbarText" />
    </VSnackbar>
    <RybDefaultTitle :text="$t('footer.title')" class="footer-title" />
    <div class="footer-max ryb-default-container-width">
      <div class="footer-text">
        <div class="footer-text-sights">
          <RybDefaultText :text="$t('footer.text.companyName')" class="footer-text-sights-company-name" />
          <RybDefaultText :text="$t('footer.text.address')" />
        </div>

        <div class="footer-text-sights">
          <i18n-t class="footer-text-sights-item" keypath="footer.text.telephone" tag="div" scope="global">
            <template #tel>
              <span>
                <button
                  name="Phone number"
                  type="button"
                  class="footer-text-sights-item-button"
                  @click="copyToClipboard(TELEPHONE_NUMBER)"
                >
                  {{ TELEPHONE_NUMBER }}
                </button>
              </span>
            </template>
          </i18n-t>
          <i18n-t class="footer-text-sights-item" keypath="footer.text.email" tag="div" scope="global">
            <template #email>
              <span>
                <button
                  name="Email"
                  type="button"
                  class="footer-text-sights-item-button"
                  @click="copyToClipboard(EMAIL)"
                >
                  {{ EMAIL }}
                </button>
              </span>
            </template>
          </i18n-t>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--ryb-white);
  padding-top: 1.5rem;
  width: 100%;

  .footer-title {
    position: relative;
    width: 100%;

    text-align: center;
    text-transform: uppercase;
    color: var(--ryb-sky-blue);

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: calc(50% - 0.5px);
      height: 1px;
      background-color: var(--ryb-sky-blue);
    }

    &::before {
      left: 0;
      padding-right: 42%;
    }

    &::after {
      right: 0;
      padding-left: 42%;
    }

    @media (max-width: 1920px) {
      &::before {
        left: 0;
        padding-right: 35%;
      }

      &::after {
        right: 0;
        padding-left: 35%;
      }
    }

    @media (max-width: 700px) {
      &::before {
        left: 0;
        padding-right: 20%;
      }

      &::after {
        right: 0;
        padding-left: 20%;
      }
    }
  }

  .footer-max {
    display: flex;
    flex-direction: column;
    width: 100%;

    .footer-text {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 1.5rem 0;

      @media (max-width: 650px) {
        flex-direction: column;
        gap: 1.5rem;
      }

      .footer-text-sights {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

        &:first-child {
          gap: 1.5rem;
        }

        @media (max-width: 650px) {
          align-items: center;
        }

        .footer-text-sights-company-name {
          font-weight: 700;
        }

        .footer-text-sights-item {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          font-size: 1.5rem;
          line-height: 133%;
          color: var(--ryb-midnight-blue);

          @media (max-width: 1250px) {
            font-size: 1.25rem;
          }

          @media (max-width: 420px) {
            font-size: 1.15rem;
          }

          .footer-text-sights-item-button {
            margin-left: 0.25rem;
            padding: 0.25rem 0.75rem;
            transition: all 0.3s ease;
            border-radius: 2rem;

            &:hover {
              background-color: var(--ryb-midnight-blue);
              color: var(--ryb-sky-blue);
            }

            &:enabled:active {
              background-color: var(--ryb-midnight-blue);
              color: var(--ryb-sky-blue);
            }
          }
        }
      }
    }
  }
}
</style>
