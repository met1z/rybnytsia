<script lang="ts" setup>
defineProps<{
  locale: 'en' | 'ua'
}>()

const emit = defineEmits<{ (e: 'on-change-locale', val: 'en' | 'ua'): void }>()
</script>

<template>
  <div class="ryb-change-locale">
    <button
      name="English"
      type="button"
      class="ryb-change-locale-button"
      :disabled="locale === 'en'"
      @click="emit('on-change-locale', 'en')"
    >
      {{ $t('header.locale.en') }}
    </button>
    <button
      name="Ukrainian"
      type="button"
      class="ryb-change-locale-button"
      :disabled="locale === 'ua'"
      @click="emit('on-change-locale', 'ua')"
    >
      {{ $t('header.locale.ua') }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.ryb-change-locale {
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--ryb-midnight-blue);

  .ryb-change-locale-button {
    font-size: 1rem;

    &:hover:not(:disabled) {
      color: var(--ryb-sky-blue);
    }

    &:disabled {
      color: var(--ryb-light);
    }

    &:not(:first-child) {
      &::before {
        content: '|';
        margin: 0 0.25rem;
        color: var(--ryb-midnight-blue);
      }
    }
  }
}
</style>
