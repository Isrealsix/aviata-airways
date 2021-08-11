<template>
  <div
    class="flex flex-col items-center justify-center gap-5 rounded-b bg-primary px-11 py-4"
  >
    <p class="font-second text-2xl">{{ price }}</p>

    <BaseButton> Выбрать </BaseButton>
    <p class="text-xs text-dark">Цена за всех пассажиров</p>
  </div>
</template>
<script setup lang="ts">
import BaseButton from "../common/Button/BaseButton.vue";
import { computed } from "vue";
const props = defineProps({
  price_amount: {
    type: String,
    required: true,
  },
  price_currency: {
    type: String,
    required: true,
  },
});
const price = computed(() => {
  return `${props.price_amount} ${props.price_currency}`;
});
</script>
