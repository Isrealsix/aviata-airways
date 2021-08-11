<template>
  <div
    class="flex flex-col items-center justify-between rounded-r bg-primary px-5 py-3.5"
  >
    <p class="font-second text-2xl">{{ price }}</p>
    <BaseButton> Выбрать </BaseButton>
    <p class="text-xs text-dark">Цена за всех пассажиров</p>
    <div class="flex items-center">
      <p class="white mr-3.5 whitespace-nowrap text-xs text-deepDark">
        {{ hasBaggage ? "С багажом" : "Нет багажа" }}
      </p>
      <ButtonWithIcon icon="+">{{
        !hasBaggage ? "Добавить багаж" : "Убрать багаж"
      }}</ButtonWithIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../common/Button/BaseButton.vue";
import ButtonWithIcon from "../common/Button/ButtonWithIcon.vue";
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
  hasBaggage: {
    type: Boolean,
    required: false,
  },
});

const price = computed(() => {
  return `${props.price_amount} ${props.price_currency}`;
});
</script>
