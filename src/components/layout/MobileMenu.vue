<template>
  <v-navigation-drawer
    v-model="uiStore.isMobileMenuOpen"
    temporary
    right
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
        @click="uiStore.isMobileMenuOpen = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { MENU_ITEMS } from '@/utils/constants';
import { useUIStore } from '@/stores/ui';

const uiStore = useUIStore();
const menuItems = MENU_ITEMS;
</script>