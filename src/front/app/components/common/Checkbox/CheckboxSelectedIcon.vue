<template>
  <BaseIcon v-bind="$props">
    <rect
      x="0.5"
      y="0.5"
      width="11"
      height="11"
      rx="1.5"
      fill="#55BB06"
      stroke="#55BB06"
    />
    <g clip-path="url(#clip0_6_15)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.95452 4.1527L5.24992 9.44537L2 6.19545L3.41421 4.78123L5.16429 6.53131L8.4597 2.82397L9.95452 4.1527Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_15">
        <rect width="8" height="8" fill="white" transform="translate(2 2)" />
      </clipPath>
    </defs>
  </BaseIcon>
</template>

<script setup lang="ts">
import BaseIcon from "../icons/BaseIcon.vue";
</script>
