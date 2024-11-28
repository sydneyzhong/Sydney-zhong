import { ref } from 'vue';

export function useDialog() {
  const isOpen = ref(false);
  const data = ref(null);

  function open(dialogData = null) {
    data.value = dialogData;
    isOpen.value = true;
  }

  function close() {
    data.value = null;
    isOpen.value = false;
  }

  return {
    isOpen,
    data,
    open,
    close
  };
}