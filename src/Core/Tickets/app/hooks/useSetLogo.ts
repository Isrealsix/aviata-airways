import { computed } from "vue";

export default (carrier: string | undefined) => {
  if (!carrier) return;
  return computed(() => {
    return `https://aviata.kz/static/airline-logos/80x80/${carrier}.png`;
  });
};
