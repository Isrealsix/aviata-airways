<template>
  <div class="min-h-screen w-full bg-middleGray">
    <div
      class="flex justify-center px-5 md:flex md:flex-col md:items-center md:justify-center"
    >
      <TheSidebar
        :class="{
          'position: fixed; left: 20px; top: 50%;':
            filteredTickets.length === 0,
        }"
        class="sticky top-0 mr-5 h-auto max-h-[37.5rem] pt-8 md:static md:mr-0 md:min-w-[18rem]"
      />
      <div class="flex flex-col items-center justify-center pt-8">
        <div
          v-for="ticket in filteredTickets"
          :key="ticket.id_flight"
          class="mb-3"
        >
          <div>
            <MDBaseTicketCard v-if="md" :ticket="ticket" />
            <BaseTicketCard v-else :ticket="ticket" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useScreenSize from "../../Core/Tickets/app/hooks/useScreenSize";
import { TicketsStore } from "../../Core/Tickets/app/store/TicketModule";
import { useModule } from "./store";
import { computed } from "vue";
import { FilterModule } from "../../Core/Tickets/app/store/FilterModule";
import BaseTicketCard from "./components/TicketCard/BaseTicketCard.vue";
import MDBaseTicketCard from "./components/TicketCard/MDBaseTicketCard.vue";
import TheSidebar from "./components/TheSidebar.vue";

const { md } = useScreenSize();

const ticketsStore: TicketsStore = useModule(TicketsStore);
ticketsStore.fetchTickets();
const filterStore: FilterModule = useModule(FilterModule);

const tickets = computed(() => ticketsStore.getTickets);
const selectedFilters = computed(() => filterStore.getSelectedFilters);

const filteredTickets = computed(() => {
  if (!tickets?.value) return [];
  if (selectedFilters.value.size === 0) return tickets?.value;
  return tickets?.value.filter((ticket) => {
    return Array.from(selectedFilters.value).some(
      (filter) => filter.id === ticket.carrier
    );
  });
});
</script>
