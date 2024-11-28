import { ref } from 'vue';

export function useNotification() {
  const notification = ref({
    show: false,
    message: '',
    type: 'info'
  });

  function showNotification(message, type = 'info', timeout = 3000) {
    notification.value = {
      show: true,
      message,
      type
    };

    setTimeout(() => {
      notification.value.show = false;
    }, timeout);
  }

  return {
    notification,
    showNotification
  };
}