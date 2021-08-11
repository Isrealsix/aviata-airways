<template>
  <button
    class="min-w-[8rem] rounded bg-third py-1 px-2.5 text-center font-main text-xs font-semibold font-normal text-blue transition-all hover:text-blue/80"
  >
    {{ icon }}
    <slot />
  </button>
</template>
<script setup lang="ts">
defineProps<{ icon: string }>();
</script>
