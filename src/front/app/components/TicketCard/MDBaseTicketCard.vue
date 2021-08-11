<template>
  <div class="flex h-full min-h-[25.5rem] min-w-[18rem] flex-col shadow">
    <MDTicketCardTop
      :carrier="ticket.carrier"
      :carrier_name="ticket.carrier_name"
      :dep_date_day="ticket.dep_date_day"
      :dep_date_hour="ticket.dep_date_hour"
      :refundable="ticket.refundable"
      :arr_date_day="ticket.arr_date_day"
      :arr_date_hour="ticket.arr_date_hour"
      :layovers="ticket.layovers"
      :origin_code="ticket.origin_code"
      :segments_dest_code="ticket.segments_dest_code"
      :segments1_dest_code="ticket.segments1_dest_code"
      :traveltime="ticket.traveltime"
      :stops="ticket.stops"
      class="h-full w-full bg-white"
    />
    <MDTicketCardBottom
      class="w-full"
      :price_amount="ticket.price_amount"
      :price_currency="ticket.price_currency"
    />
  </div>
</template>

<script setup lang="ts">
import MDTicketCardTop from "./MDTicketCardTop.vue";
import MDTicketCardBottom from "./MDTicketCardBottom.vue";
import { TicketEntity } from "../../../../Core/Tickets/domain/entities/Ticket.entity";

const props = defineProps({
  ticket: {
    type: TicketEntity,
    default: null,
  },
});
</script>
