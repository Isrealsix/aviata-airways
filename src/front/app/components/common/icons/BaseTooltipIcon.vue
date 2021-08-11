<template>
  <div>
    <transition name="fade">
      <div
        v-if="isShow"
        class="tooltip-icon absolute z-50 flex h-12 w-32 items-center justify-center pb-1.5 text-center text-xs text-deepDark"
      >
        {{ text }}
      </div>
    </transition>
    <div v-if="isShow" class="relative" />
    <div @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  text: {
    type: String,
    required: true,
  },
});

const isShow = ref(false);

function showTooltip() {
  isShow.value = true;
}

function hideTooltip() {
  isShow.value = false;
}
</script>

<style>
.tooltip-icon {
  transform: translate(-43%, -100%);
  background-image: url("../../../assets/tooltip-icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
