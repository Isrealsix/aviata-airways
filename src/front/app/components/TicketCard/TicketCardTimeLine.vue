<template>
  <div class="text-center">
    <div class="flex justify-between">
      <span class="text-xxs text-gray">{{ origin_code }}</span>
      <span class="text-xs text-deepDark">{{ traveltime }}</span>
      <span class="text-xxs text-gray">
        {{ segments_dest_code || (segments1_dest_code && Boolean(stops)) }}
      </span>
    </div>
    <div class="md:py-5">
      <TimeLineIcon v-bind="$props" />
    </div>
    <p class="text-xs text-orange">{{ layovers }}</p>
  </div>
</template>
<script setup lang="ts">
import TimeLineIcon from "../common/icons/TimeLineIcon.vue";

defineProps({
  width: String,
  heigh: String,
  viewBox: String,
  layovers: String,
  fill: {
    type: String,
    default: "none",
  },
  origin_code: String,
  segments_dest_code: String,
  segments1_dest_code: String,
  traveltime: String,
  stops: Number,
});
</script>
