<template>
  <BaseIcon v-bind="$props">
    <g clip-path="url(#clip0_1_2100)">
      <path d="M2.43792 2.5L170.438 2.5" stroke="#B9B9B9" />
      <circle cx="169.938" cy="2.5" r="2" fill="white" stroke="#B9B9B9" />

      <circle cx="2.93796" cy="2.5" r="2" fill="white" stroke="#B9B9B9" />
    </g>

    <circle cx="83.938" cy="2.5" r="2" fill="white" stroke="#B9B9B9" />
    <defs>
      <clipPath id="clip0_1_2100">
        <rect
          width="172"
          height="5"
          fill="white"
          transform="translate(0.437958)"
        />
      </clipPath>
    </defs>
  </BaseIcon>
</template>
<script setup lang="ts">
import BaseIcon from "./BaseIcon.vue";
defineProps({
  width: String,
  height: String,
  fill: String,
});
</script>
