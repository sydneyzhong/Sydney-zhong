<template>
  <div class="section-title mb-6">
    <h2 class="text-h4">{{ title }}</h2>
    <div v-if="subtitle" class="text-subtitle-1 mt-2">{{ subtitle }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>