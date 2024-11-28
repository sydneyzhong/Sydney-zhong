<template>
  <v-container fluid class="pa-0">
    <v-row class="fill-height">
      <v-col cols="12" md="6" class="d-flex flex-column justify-center pa-16">
        <h1 class="text-h2 font-weight-bold mb-6">
          标定睡眠质量，衡量工作压力，关爱女性生理周期
        </h1>
        <v-btn
          color="primary"
          x-large
          class="mt-6"
          width="200"
          @click="navigateToProduct"
        >
          了解更多
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" class="d-flex flex-column align-center justify-center">
        <v-img
          src="/images/product-main.png"
          max-width="500"
          class="mb-8"
          contain
        ></v-img>
        <v-img
          src="/images/brand-logo.png"
          max-width="300"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToProduct = () => {
  router.push('/product');
};
</script>

<style scoped>
.v-container {
  min-height: calc(100vh - 112px);
}
</style>