<template>
  <div class="page-header mb-8">
    <h1 class="text-h3 font-weight-bold">{{ title }}</h1>
    <p v-if="subtitle" class="text-subtitle-1 mt-2">{{ subtitle }}</p>
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