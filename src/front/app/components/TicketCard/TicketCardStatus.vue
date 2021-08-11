<template>
  <div class="flex items-center">
    <TicketCardStatusIcon
      class="mr-2"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    />
    <p class="text-xs text-dark">
      <slot />
    </p>
  </div>
</template>
<script setup lang="ts">
import TicketCardStatusIcon from "../common/icons/TicketCardStatusIcon.vue";
</script>
