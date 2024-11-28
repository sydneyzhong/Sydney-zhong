<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <h3 class="text-h6">{{ title }}</h3>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>
            <div v-if="item.list" class="mt-2">
              <ul class="pl-4">
                <li v-for="(listItem, listIndex) in item.list" :key="listIndex">
                  {{ listItem }}
                </li>
              </ul>
            </div>
            <div v-else>{{ item.content }}</div>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
});
</script>