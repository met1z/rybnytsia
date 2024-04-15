<script lang="ts" setup>
import type { StyleValue } from 'vue'

import RybDotsSpinner from './RybDotsSpinner.vue'

withDefaults(
  defineProps<{
    name?: string
    type?: 'submit' | 'reset' | 'button'
    text: string
    disabled?: boolean
    loading?: boolean
    icon?: Component
    iconStyle?: StyleValue
    iconSide?: 'left' | 'right'
    stretch?: boolean
  }>(),
  {
    name: undefined,
    type: 'button',
    disabled: false,
    loading: false,
    icon: undefined,
    iconStyle: undefined,
    iconSide: 'left',
    stretch: false,
  },
)
</script>

<template>
  <button
    class="hc-button"
    :class="{
      'hc-button-right-mode': iconSide === 'right',
      'hc-button-stretch': stretch,
    }"
    :name="name"
    :type="type"
    :disabled="disabled"
  >
    <div class="hc-button-inner">
      <template v-if="!loading">
        <slot name="icon">
          <div v-if="icon" class="hc-button-icon" :style="iconStyle">
            <Component :is="icon" />
          </div>
        </slot>
        <div class="hc-button-text" :text="text">{{ text }}</div>
      </template>
      <div v-else class="hc-spinner-external">
        <RybDotsSpinner />
      </div>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.hc-button {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  transition: all 0.3s ease;
  border-radius: 2rem;

  &:hover {
    background-color: var(--ryb-midnight-blue);

    .hc-button-text {
      color: var(--ryb-sky-blue);
    }
  }

  &:enabled:active {
    background-color: var(--ryb-midnight-blue);

    .hc-button-text {
      color: var(--ryb-sky-blue);
    }
  }

  .hc-button-icon {
    display: flex;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  .hc-button-text {
    display: flex;
    transition: inherit;
    white-space: nowrap;

    font-size: 1.25rem;
    font-weight: 600;
    color: var(--ryb-midnight-blue);
  }

  .hc-spinner-external {
    display: flex;
    font-size: 0.1875rem;
  }

  &:disabled {
    cursor: auto;
  }
}

.hc-button-stretch {
  flex: 1;
}

.hc-button-right-mode {
  flex-direction: row-reverse;

  .hc-button-icon {
    margin-right: 0;
    margin-left: 0.5rem;
  }
}
</style>
