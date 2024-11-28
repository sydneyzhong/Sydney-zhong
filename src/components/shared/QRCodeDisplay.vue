<template>
  <div class="text-center">
    <v-img :src="imageSrc" :max-width="size" class="mx-auto"></v-img>
    <p v-if="label" class="mt-2">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 200
  }
});
</script>