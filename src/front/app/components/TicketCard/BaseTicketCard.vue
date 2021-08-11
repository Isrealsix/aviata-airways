<template>
  <div
    class="flex h-auto min-h-10.5 min-w-[55rem] max-w-md justify-between rounded shadow"
  >
    <TicketCardLeft
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
    />
    <TicketCardRight
      :price_amount="ticket.price_amount"
      :price_currency="ticket.price_currency"
      :has-baggage="ticket.hasBaggage"
    />
  </div>
</template>

<script setup lang="ts">
import { TicketEntity } from "../../../../Core/Tickets/domain/entities/Ticket.entity";
import TicketCardRight from "./TicketCardRight.vue";
import TicketCardLeft from "./TicketCardLeft.vue";

const props = defineProps({
  ticket: {
    type: TicketEntity,
    default: null,
  },
});
</script>
