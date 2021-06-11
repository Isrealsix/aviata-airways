import { onMounted, ref } from "vue";

export default () => {
  const hover = ref(false);
  const hoverRef = ref<HTMLElement | null>(null);
  onMounted(() => {
    const handleMouseEnter = () => {
      hover.value = true;
    };
    const handleMouseLeave = () => {
      hover.value = false;
    };
    if (hoverRef.value) {
      hoverRef.value.addEventListener("mouseenter", handleMouseEnter);
      hoverRef.value.addEventListener("mouseleave", handleMouseLeave);
    }
  });
  return { hover, hoverRef };
};
