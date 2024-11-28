<template>
  <v-snackbar
    v-model="notification.show"
    :color="notification.type"
    :timeout="3000"
  >
    {{ notification.message }}
    <template v-slot:actions>
      <v-btn
        color="white"
        text
        @click="notification.show = false"
      >
        关闭
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
defineProps({
  notification: {
    type: Object,
    required: true
  }
});
</script>