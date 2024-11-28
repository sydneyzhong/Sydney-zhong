import { ref, watch } from 'vue';
import { useUIStore } from '@/stores/ui';
import { lightTheme, darkTheme } from '@/utils/theme';

export function useTheme() {
  const uiStore = useUIStore();
  const currentTheme = ref(uiStore.isDarkMode ? darkTheme : lightTheme);

  watch(() => uiStore.isDarkMode, (isDark) => {
    currentTheme.value = isDark ? darkTheme : lightTheme;
  });

  return {
    currentTheme
  };
}