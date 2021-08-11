<template>
  <div class="min-w-[15rem]">
    <TheTariffOptions class="mb-3 rounded bg-primary" />
    <TheAirlines
      class="mb-1 max-h-[19rem] overflow-hidden overflow-y-scroll rounded bg-primary"
    />

    <ButtonUnderline @click="resetFilter"
      >Сбросить все фильтры
    </ButtonUnderline>
  </div>
</template>
<script setup lang="ts">
import { useModule } from "../store";
import { FilterModule } from "../../../Core/Tickets/app/store/FilterModule";
import ButtonUnderline from "./common/Button/ButtonUnderline.vue";
import TheAirlines from "./TheAirlines.vue";
import TheTariffOptions from "./TheTariffOptions.vue";

const filterStore: FilterModule = useModule(FilterModule);
filterStore.fetchAirlines();
const resetFilter = () => filterStore.resetFilters();
</script>
