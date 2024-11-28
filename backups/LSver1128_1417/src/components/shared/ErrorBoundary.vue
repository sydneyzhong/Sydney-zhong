<template>
  <div>
    <slot v-if="!error"></slot>
    <div v-else class="error-container">
      <v-alert type="error" class="mb-4">
        {{ error.message }}
      </v-alert>
      <v-btn color="primary" @click="resetError">
        重试
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue';

const error = ref(null);

onErrorCaptured((err) => {
  error.value = err;
  return false;
});

function resetError() {
  error.value = null;
}
</script>

<style scoped>
.error-container {
  padding: 2rem;
  text-align: center;
}
</style>