<script setup lang="ts">
interface Props {
  image?: string
  alt: string
  isLazy?: boolean
  isCover?: boolean
  customDominant?: string
  customAspectRatio?: string
}

const props = withDefaults(defineProps<Props>(), {
  isLazy: true,
  isCover: false,
  image: undefined,
  customDominant: undefined,
  customAspectRatio: undefined,
})

const nuxt = useNuxtApp()

const photo = ref<HTMLElement | null>(null)
const loaded = ref(false)

const isServer = computed(() => nuxt.isHydrating || process.server)

const lazyOptions = computed(() => ({
  src: props.image,
  lifecycle: {
    loaded: () => {
      setTimeout(() => (loaded.value = true), 250)
    },
    error: () => {
      setTimeout(() => (loaded.value = false), 250)
    },
  },
}))

const dominantColor = computed(() => {
  if (props.customDominant) return props.customDominant

  if (props.image && props.image.includes('col=')) {
    return '#' + props.image.split('col=').pop()
  }
  return 'white'
})
</script>

<template>
  <div
    ref="photo"
    class="photo"
    :style="[
      loaded ? { 'background-color': 'transparent' } : { 'background-color': dominantColor },
      customAspectRatio ? { paddingBottom: customAspectRatio } : '',
    ]"
  >
    <template v-if="isLazy">
      <template v-if="image">
        <img
          v-if="isServer"
          :src="image"
          :alt="alt"
          loading="lazy"
          :class="[isCover ? 'cover' : 'contain', 'image-default']"
        />
        <img v-else v-lazy="lazyOptions" :alt="alt" :class="[isCover ? 'cover' : 'contain']" />
      </template>
    </template>
    <img v-else class="image-default" :src="image" :alt="alt" @load="loaded = true" />
  </div>
</template>

<style scoped lang="scss">
.photo {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s ease;
  transition-property: background-color, opacity, transform;

  img {
    position: absolute;
    width: inherit;
    height: inherit;
    opacity: 0;
  }

  img[lazy='loading'],
  img[lazy='error'] {
    opacity: 0;
  }

  img[lazy='loaded'] {
    opacity: 1;
    transition: inherit;
  }

  .cover {
    object-fit: cover;
  }

  .contain {
    object-fit: contain;
  }

  .image-default {
    opacity: 1;
  }
}
</style>
