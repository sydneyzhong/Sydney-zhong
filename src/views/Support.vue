<template>
  <v-container class="py-8">
    <!-- App Download Section -->
    <div class="text-center mb-12">
      <h3 class="text-h5 mb-6">APP下载</h3>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="4" class="text-center">
          <v-img
            src="/images/android-qr.png"
            max-width="200"
            class="mx-auto mb-4"
            contain
          ></v-img>
          <div class="text-subtitle-1">Android版本</div>
        </v-col>
        <v-col cols="12" sm="4" class="text-center">
          <v-img
            src="/images/ios-qr.png"
            max-width="200"
            class="mx-auto mb-4"
            contain
          ></v-img>
          <div class="text-subtitle-1">iOS版本</div>
        </v-col>
      </v-row>
    </div>

    <!-- Bottom Section with Contact and Business QR Codes -->
    <v-row class="mt-auto align-center" style="position: fixed; bottom: 0; left: 0; right: 0; background: white; padding: 20px;">
      <!-- Contact Information -->
      <v-col cols="12" md="4">
        <div class="text-body-1">
          <div class="font-weight-bold mb-4">联系方式：</div>
          <div class="mb-2"><strong>深圳市守月科技有限公司</strong></div>
          <div class="mb-2">地址：深圳市宝安区航城街道黄麻布社区簕竹角坚鼎科技园1栋厂房2层</div>
          <div>邮箱：lunarshied@foxmail.com</div>
        </div>
      </v-col>

      <!-- Business QR Codes -->
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="6" class="text-center">
            <v-img
              src="/images/business-qr1.png"
              max-width="150"
              class="mx-auto"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-img
              src="/images/business-qr2.png"
              max-width="150"
              class="mx-auto"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.v-img {
  border-radius: 8px;
}

.v-container {
  padding-bottom: 200px; /* Add space for fixed bottom section */
}
</style>