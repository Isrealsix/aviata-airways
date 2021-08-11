<template>
  <div class="flex items-center justify-between p-3.5 font-bold">
    <h1>{{ title }}</h1>
    <BaseTooltipIcon text="Сбросить выбор">
      <div ref="hoverRef" @click.stop.prevent="resetFilterSelected">
        <BaseCloseFilterIcon :hover="hover" />
      </div>
    </BaseTooltipIcon>
  </div>
  <div v-for="filter in Airlines" :key="filter.id">
    <FilterItem
      :id="filter.id"
      :title="filter.text"
      :toggle-state="filter.status"
      :filter-id="filter.filterId"
    />
  </div>
</template>
<script setup lang="ts">
import FilterItem from "./FilterItem.vue";
import BaseCloseFilterIcon from "./common/icons/CloseFilterIcon/BaseCloseFilterIcon.vue";
import { computed } from "vue";

import BaseTooltipIcon from "./common/icons/BaseTooltipIcon.vue";
import useHover from "../../../Core/Tickets/app/hooks/useHover";
import { useModule } from "../store";
import { FilterModule } from "../../../Core/Tickets/app/store/FilterModule";
import { FILTER_ID } from "../../../Core/Tickets/app/Enums";

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const filterStore: FilterModule = useModule(FilterModule);
filterStore.fetchAirlines();

const Airlines = computed(() => filterStore.getFilterAirlines);

const { hover, hoverRef } = useHover();

const resetFilterSelected = () => {
  filterStore.resetFilterId(FILTER_ID.airId);
};
</script>
