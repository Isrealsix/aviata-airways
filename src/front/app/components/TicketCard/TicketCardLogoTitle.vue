<template>
  <div class="flex items-center justify-center">
    <img :style="setSizeLogo" :src="props.logoUrl" alt="logo" class="mr-2.5" />
    <span>{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  logoUrl: String,
  title: String,
  widthLogo: String,
  heightLogo: String,
});
const setSizeLogo = computed(() => {
  return `width: ${props.widthLogo}; height: ${props.heightLogo};`;
});
</script>
