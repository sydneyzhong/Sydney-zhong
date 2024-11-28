<template>
  <div>
    <system-bar />
    <v-app-bar app color="white" elevation="1">
      <app-logo />
      <v-spacer></v-spacer>

      <nav-menu :items="menuItems" />

      <v-btn icon @click="emit('showLogin')">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script setup>
import { MENU_ITEMS } from '@/utils/constants';
import SystemBar from './SystemBar.vue';
import AppLogo from './AppLogo.vue';
import NavMenu from './NavMenu.vue';

const emit = defineEmits(['showLogin']);
const menuItems = MENU_ITEMS;
</script>