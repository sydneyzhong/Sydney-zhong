<template>
  <v-card class="mb-6">
    <v-card-title>联系方式</v-card-title>
    <v-card-text>
      <p class="mb-2"><strong>{{ contactInfo.company }}</strong></p>
      <p class="mb-2">地址：{{ contactInfo.address }}</p>
      <p>邮箱：{{ contactInfo.email }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { CONTACT_INFO } from '@/utils/constants';

const contactInfo = CONTACT_INFO;
</script>