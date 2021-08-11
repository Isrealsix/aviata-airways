<template>
  <label
    :for="id"
    class="flex flex-row items-center"
    @click.stop.prevent="$emit('checked')"
  >
    <input
      :id="id"
      ref="checkboxRef"
      type="checkbox"
      :checked="toggleState"
      class="absolute h-0 w-0 opacity-0"
    />
    <span class="mr-3">
      <CheckboxSelectedIcon v-if="toggleState" />
      <component
        :is="ComponentMap[currentState]"
        v-else
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      />
    </span>
    <slot />
  </label>
</template>

<script lang="ts" setup>
import CheckboxSelectedIcon from "./CheckboxSelectedIcon.vue";
import { ComponentMap } from "../../../../../Core/Tickets/app/Enums";

defineProps<{
  toggleState: boolean;
  currentState: keyof typeof ComponentMap;
  id: string;
  filterId: string;
}>();

defineEmits(["checked"]);
</script>
