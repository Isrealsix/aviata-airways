import { computed, onMounted, ref } from "vue";
import { SCREEN_SIZE } from "../Enums";

export default () => {
  const screenWidth = ref(window.innerWidth);

  onMounted(() => {
    const handleResize = () => (screenWidth.value = window.innerWidth);
    window.addEventListener("resize", handleResize);
  });

  const screenSize = computed(() => {
    if (screenWidth.value < SCREEN_SIZE.LG) {
      return SCREEN_SIZE.MD;
    } else {
      return SCREEN_SIZE.LG;
    }
  });

  return {
    md: computed(() => screenSize.value === SCREEN_SIZE.MD),
    lg: computed(() => screenSize.value === SCREEN_SIZE.LG),
  };
};
