<template>
  <CloseFilterIcon
    v-if="!hover"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  />
  <CloseFilterHoverIcon
    v-if="hover"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  />
</template>
<script setup lang="ts">
import CloseFilterHoverIcon from "./CloseFilterHoverIcon.vue";
import CloseFilterIcon from "./CloseFilterIcon.vue";
defineProps({
  hover: {
    type: Boolean,
    required: true,
  },
});
</script>
