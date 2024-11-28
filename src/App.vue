<template>
  <v-app :theme="uiStore.isDarkMode ? 'dark' : 'light'">
    <navigation-bar @show-login="showLoginDialog" />

    <v-main>
      <loading-spinner :loading="loading" />
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-btn
      icon
      color="primary"
      class="ai-service-btn"
      fixed
      style="position: fixed; right: 16px; top: 50%; transform: translateY(-50%); z-index: 100"
      @click="aiServiceDialog = true"
    >
      <v-icon>mdi-robot</v-icon>
      <v-tooltip
        activator="parent"
        location="left"
      >
        AI客服
      </v-tooltip>
    </v-btn>

    <v-btn
      icon
      color="primary"
      class="product-btn"
      fixed
      style="position: fixed; left: 16px; bottom: 16px; z-index: 100"
      @click="navigateToProduct"
    >
      <v-icon>mdi-ring</v-icon>
      <v-tooltip
        activator="parent"
        location="right"
      >
        守月产品
      </v-tooltip>
    </v-btn>

    <scroll-to-top />
    <login-dialog v-model="loginDialog" />
    <ai-service-dialog v-model="aiServiceDialog" />
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUIStore } from './stores/ui';
import NavigationBar from './components/layout/NavigationBar.vue';
import ScrollToTop from './components/layout/ScrollToTop.vue';
import LoginDialog from './components/dialogs/LoginDialog.vue';
import AIServiceDialog from './components/dialogs/AIServiceDialog.vue';
import LoadingSpinner from './components/shared/LoadingSpinner.vue';

const router = useRouter();
const uiStore = useUIStore();
const loginDialog = ref(false);
const aiServiceDialog = ref(false);
const loading = ref(false);

const showLoginDialog = () => {
  loginDialog.value = true;
};

const navigateToProduct = () => {
  router.push('/product');
};
</script>

<style>
.ai-service-btn,
.product-btn {
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>