<template>
  <v-system-bar color="primary" dark height="40">
    <div class="d-flex justify-center align-center width-100">
      <span class="text-caption text-center">{{ slogan }}</span>
    </div>
  </v-system-bar>
</template>

<script setup>
import { COMPANY_SLOGAN } from '@/utils/constants';

const slogan = COMPANY_SLOGAN;
</script>

<style scoped>
.width-100 {
  width: 100%;
}
</style>