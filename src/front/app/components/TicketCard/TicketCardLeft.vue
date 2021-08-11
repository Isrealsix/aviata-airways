<template>
  <div
    class="flex w-full flex-col justify-between rounded-l bg-white pl-[2.75rem] pr-[6rem] pt-10 pb-5"
  >
    <div class="flex items-center justify-between lg:pb-7">
      <TicketCardLogoTitle
        width-logo="20px"
        height-logo="20px"
        :logo-url="logo"
        :title="carrier_name"
      />
      <div class="flex flex-col items-center justify-center">
        <TicketCardDateTime :date="dep_date_day" />
        <TicketCardDateTime :hour="dep_date_hour" />
      </div>
      <TicketCardTimeLine
        :layovers="layovers"
        :stops="stops"
        :origin_code="origin_code"
        :segments_dest_code="segments_dest_code"
        :segments1_dest_code="segments1_dest_code"
        :traveltime="traveltime"
        width="173"
        height="5"
        viewBox="0 0 173 5"
      />
      <div class="flex flex-col items-center justify-center">
        <TicketCardDateTime :date="arr_date_day" />
        <TicketCardDateTime :hour="arr_date_hour" />
      </div>
    </div>
    <div class="flex items-center lg:gap-2">
      <ButtonUnderline class="mr-6">Детали перелета</ButtonUnderline>
      <ButtonUnderline class="mr-12">Условия тарифа</ButtonUnderline>
      <TicketCardStatus>
        {{ refundable ? "возвратный" : "невозвратный" }}
      </TicketCardStatus>
    </div>
  </div>
</template>
<script setup lang="ts">
import TicketCardLogoTitle from "./TicketCardLogoTitle.vue";
import TicketCardDateTime from "./TicketCardDateTime.vue";
import TicketCardTimeLine from "./TicketCardTimeLine.vue";
import TicketCardStatus from "./TicketCardStatus.vue";
import ButtonUnderline from "../common/Button/ButtonUnderline.vue";
import useSetLogo from "../../../../Core/Tickets/app/hooks/useSetLogo";

const props = defineProps({
  carrier: String,
  carrier_name: String,
  dep_date_day: String,
  dep_date_hour: String,
  refundable: Boolean,
  arr_date_day: String,
  arr_date_hour: String,
  layovers: String,
  origin_code: String,
  segments_dest_code: String,
  segments1_dest_code: String,
  traveltime: String,
  stops: Number,
});

const logo = useSetLogo(props.carrier);
</script>
