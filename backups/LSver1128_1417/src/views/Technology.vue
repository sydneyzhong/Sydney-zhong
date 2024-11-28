<template>
  <v-container class="py-8">
    <h2 class="text-h4 mb-6">相关技术</h2>
    
    <v-expansion-panels>
      <technology-section
        v-for="section in sections"
        :key="section.title"
        :title="section.title"
        :items="section.items"
      />
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import TechnologySection from '@/components/technology/TechnologySection.vue';
import {
  sleepMonitoringTech,
  stressMonitoringTech,
  menstrualCycleMonitoringTech,
  healthMonitoringTech
} from '@/data/technology';

const sections = [
  sleepMonitoringTech,
  stressMonitoringTech,
  menstrualCycleMonitoringTech,
  healthMonitoringTech
];
</script>