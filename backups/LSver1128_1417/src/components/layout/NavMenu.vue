<template>
  <div class="d-flex">
    <v-btn
      v-for="item in items"
      :key="item.title"
      :to="item.path"
      text
      class="mx-2"
    >
      {{ item.title }}
    </v-btn>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>