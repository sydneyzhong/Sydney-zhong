<template>
  <v-container class="py-8">
    <h2 class="text-h4 mb-6">支持</h2>
    
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

    <v-row>
      <!-- Contact Information -->
      <v-col cols="12" md="6">
        <v-card class="mb-4">
          <v-card-title class="text-h5">联系方式</v-card-title>
          <v-card-text>
            <div class="text-body-1 mb-4">
              <strong>深圳市守月科技有限公司</strong>
            </div>
            <div class="text-body-1 mb-4">
              地址：深圳市宝安区航城街道黄麻布社区簕竹角坚鼎科技园1栋厂房2层
            </div>
            <div class="text-body-1">
              邮箱：lunarshied@foxmail.com
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Business Cooperation QR Codes -->
      <v-col cols="12" md="6">
        <h3 class="text-h5 mb-6">商务合作</h3>
        <v-row>
          <v-col cols="6" class="text-center">
            <v-img
              src="/images/business-qr1.png"
              max-width="200"
              class="mx-auto mb-4"
              contain
            ></v-img>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-img
              src="/images/business-qr2.png"
              max-width="200"
              class="mx-auto mb-4"
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
</style>