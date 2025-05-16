<template>
  <button
    :id="id"
    :class="['general-styles', className, { 'disabled-button': isDisabled }]"
    :disabled="isDisabled"
    @click="onClick"
  >
    <span v-if="leftIcon" :class="loading ? 'loading-icon' : 'icon-left'">
      <slot name="leftIcon">{{ leftIcon }}</slot>
    </span>
    <span>{{ content }}</span>
    <span v-if="rightIcon" :class="loading ? 'loading-icon' : 'icon-right'">
      <slot name="rightIcon">{{ rightIcon }}</slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  className: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: "",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  leftIcon: {
    type: String,
    default: null,
  },
  rightIcon: {
    type: String,
    default: null,
  },
});

const isDisabled = computed(() => props.disabled || props.loading);
</script>


<style scoped>
.general-styles {
  cursor: pointer;
  color: var(--white-smoke);
  text-transform: uppercase;
}

.disabled-button {
  color: var(--gray-2);
}

.icon-left,
.icon-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-left {
  margin-right: 8px;
}

.icon-right {
  margin-left: 8px;
}

.loading-icon {
  font-size: 0.75rem;
  color: black;
  animation: animate 1.5s infinite;
}

@keyframes animate {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>