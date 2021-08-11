<template>
  <svg
    :fill="color"
    :viewBox="viewBox"
    :height="size"
    :width="size"
    :style="{
      transform: `rotate(${rotate}deg)`,
    }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
    size?: string | number;
    rotate?: number;
    viewBox?: string;
  }>(),
  {
    color: "transparent",
    size: "12",
    rotate: 0,
    viewBox: "0 0 12 12",
  }
);
</script>
