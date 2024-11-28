<template>
  <v-dialog v-model="isVisible" max-width="400">
    <v-card>
      <v-card-title class="text-center">AI客服</v-card-title>
      <v-card-text>
        <div class="text-center pa-4">
          <v-icon size="64" color="primary">mdi-robot</v-icon>
          <div class="mt-4">
            AI客服为您服务，请问有什么可以帮助您？
          </div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="isVisible = false">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

const isVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>