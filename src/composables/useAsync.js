import { ref } from 'vue';

export function useAsync(asyncFunction) {
  const loading = ref(false);
  const error = ref(null);
  const data = ref(null);

  async function execute(...args) {
    loading.value = true;
    error.value = null;

    try {
      data.value = await asyncFunction(...args);
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }

    return data.value;
  }

  return {
    loading,
    error,
    data,
    execute
  };
}