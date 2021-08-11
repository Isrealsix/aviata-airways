<template>
  <div class="flex flex-col items-center justify-center">
    <p class="text-xs text-deepDark">{{ date }}</p>
    <p class="text-2xl font-semibold text-deepDark">{{ hour }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  date: String,
  hour: String,
});
</script>
