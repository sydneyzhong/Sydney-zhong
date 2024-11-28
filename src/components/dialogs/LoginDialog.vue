<template>
  <v-dialog v-model="isVisible" max-width="400">
    <v-card>
      <v-card-title>登录</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="username"
            label="用户名"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="密码"
            type="password"
            required
          ></v-text-field>
        </v-form>
        <v-btn text color="primary" @click="showRegister">
          注册账号
        </v-btn>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="login">
          登录
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

const username = ref('');
const password = ref('');

const isVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const showRegister = () => {
  // Implement register logic
};

const login = () => {
  // Implement login logic
  isVisible.value = false;
};
</script>