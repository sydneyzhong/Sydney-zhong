<template>
  <v-fade-transition>
    <v-btn
      v-show="showButton"
      icon="mdi-arrow-up"
      fixed
      bottom
      right
      class="mb-4 mr-4"
      @click="scrollToTop"
    ></v-btn>
  </v-fade-transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

function checkScroll() {
  showButton.value = window.scrollY > 500;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>