import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
  const isDarkMode = ref(false);
  const isMobileMenuOpen = ref(false);

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  return {
    isDarkMode,
    isMobileMenuOpen,
    toggleDarkMode,
    toggleMobileMenu
  };
});