import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollPosition() {
  const scrollY = ref(0);
  const isScrollingUp = ref(false);
  let lastScrollY = 0;

  function handleScroll() {
    isScrollingUp.value = window.scrollY < lastScrollY;
    scrollY.value = window.scrollY;
    lastScrollY = window.scrollY;
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    scrollY,
    isScrollingUp
  };
}