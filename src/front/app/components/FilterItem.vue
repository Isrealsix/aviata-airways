<template>
  <div
    :id="id"
    ref="hoverRef"
    class="transition duration-100 ease-in-out"
    :class="{ 'bg-lightGray p-0': hover }"
  >
    <BaseCheckbox
      :id="id"
      :filter-id="filterId"
      :current-state="currentState"
      :toggle-state="toggleState"
      class="p-2.5 text-xs"
      @checked="sendFilter"
      @mouseover="currentState = Status.hover"
      @mouseleave="currentState = Status.default"
    >
      {{ title }}
    </BaseCheckbox>
  </div>
</template>
<script setup lang="ts">
import BaseCheckbox from "./common/Checkbox/BaseCheckbox.vue";
import { useModule } from "../store";
import { FilterModule } from "../../../Core/Tickets/app/store/FilterModule";
import { Status } from "../../../Core/Tickets/app/Enums";
import { ref } from "vue";
import useHover from "../../../Core/Tickets/app/hooks/useHover";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  filterId: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },

  toggleState: Boolean,
});

const filterStore: FilterModule = useModule(FilterModule);
filterStore.fetchAirlines();

const { hover, hoverRef } = useHover();
const currentState = ref(Status.default);

const sendFilter = () => {
  filterStore.handleFilter(props.id);
};
</script>
