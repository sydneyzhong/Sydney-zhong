import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoints() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  function handleResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  const breakpoints = {
    xs: width.value < 600,
    sm: width.value >= 600 && width.value < 960,
    md: width.value >= 960 && width.value < 1264,
    lg: width.value >= 1264 && width.value < 1904,
    xl: width.value >= 1904
  };

  return {
    width,
    height,
    ...breakpoints
  };
}