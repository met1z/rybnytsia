<script lang="ts" setup>
import RybButton from '../generic/RybButton.vue'
import RybImage from '../generic/RybImage.vue'
import CloseIcon from '../icons/CloseIcon.vue'
import MenuIcon from '../icons/MenuIcon.vue'

const nuxtApp = useNuxtApp()
const router = useRouter()
const localeRoute = useLocaleRoute()

const menu = ref(false)
const windowSize = computed(() => nuxtApp.$windowSize.value.width)

const toggleMenu = () => {
  menu.value = !menu.value
}

const close = () => {
  menu.value = false
}

watch(windowSize, () => {
  if (windowSize.value > 750) close()
})

watch(router.currentRoute, close)
</script>

<template>
  <header class="ryb-header-global">
    <div class="ryb-header-content ryb-default-container-width">
      <NuxtLink :to="localeRoute({ path: '/' })" class="ryb-logo">
        <RybImage image="/logo.png" alt="Logo" :custom-aspect-ratio="(625 / 893) * 100 + '%'" />
      </NuxtLink>
      <div class="header-actions">
        <div class="header-actions-buttons">
          <NuxtLink :to="localeRoute({ path: '/' })" :aria-label="$t('header.routes.main')">
            <RybButton name="Main" type="button" :text="$t('header.routes.main')" />
          </NuxtLink>
          <NuxtLink :to="localeRoute({ path: '/products' })" :aria-label="$t('header.routes.products')">
            <RybButton name="Products" type="button" :text="$t('header.routes.products')" />
          </NuxtLink>
          <NuxtLink :to="localeRoute({ path: '/about' })" :aria-label="$t('header.routes.aboutUs')">
            <RybButton name="About us" type="button" :text="$t('header.routes.aboutUs')" />
          </NuxtLink>
        </div>
        <button name="Menu" type="button" class="header-actions-menu" @click="toggleMenu">
          <CloseIcon v-if="menu" />
          <MenuIcon v-else />
        </button>
        <VMenu
          v-model="menu"
          activator=".header-actions-menu"
          transition="fade-transition"
          offset="24"
          :open-on-click="false"
        >
          <div class="ryb-routes-menu">
            <NuxtLink class="ryb-route" :to="localeRoute({ path: '/' })">
              <RybButton name="Main" type="button" :text="$t('header.routes.main')" stretch />
            </NuxtLink>
            <NuxtLink class="ryb-route" :to="localeRoute({ path: '/products' })">
              <RybButton name="Products" type="button" :text="$t('header.routes.products')" stretch />
            </NuxtLink>
            <NuxtLink class="ryb-route" :to="localeRoute({ path: '/about' })">
              <RybButton name="About us" type="button" :text="$t('header.routes.aboutUs')" stretch />
            </NuxtLink>
          </div>
        </VMenu>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.ryb-header-global {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--ryb-header-height);
  background-color: var(--ryb-white);
  border-bottom: 1px solid var(--ryb-sky-blue);

  .ryb-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0.5rem 0;

    @media (max-width: 1920px) {
      padding: 0.5rem 140px;
    }

    @media (max-width: 1440px) {
      padding: 0.5rem 70px;
    }

    @media (max-width: 1024px) {
      padding: 0.5rem 1rem;
    }

    .ryb-logo {
      width: 5rem;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 2rem;

      @media (max-width: 750px) {
        gap: 1.5rem;
      }

      .header-actions-buttons {
        display: flex;
        align-items: center;

        gap: 2.5rem;

        @media (max-width: 750px) {
          display: none;
        }
      }

      .header-actions-menu {
        display: none;
        color: var(--ryb-midnight-blue);
        background-color: var(--ryb-sky-blue);
        font-size: 1.5rem;
        padding: 0.5rem;
        border-radius: 50%;

        @media (max-width: 750px) {
          display: block;
        }

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

.ryb-routes-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--ryb-white);
  width: calc(100vw - 2rem);
  border-radius: 1.5rem;
  padding: 1.5rem;
  gap: 1rem;
  border: 1px solid var(--ryb-sky-blue);

  .ryb-route {
    display: flex;
    width: 100%;
  }
}
</style>
