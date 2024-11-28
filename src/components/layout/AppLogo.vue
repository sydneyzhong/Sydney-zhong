<template>
  <router-link to="/" class="text-decoration-none">
    <div class="text-h6 font-weight-bold primary--text">{{ companyName }}</div>
  </router-link>
</template>

<script setup>
import { COMPANY_NAME } from '@/utils/constants';

const companyName = COMPANY_NAME;
</script>