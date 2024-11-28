<template>
  <v-dialog v-model="isVisible" max-width="400">
    <v-card>
      <v-card-title>账户充值</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="isValid">
          <v-select
            v-model="selectedAmount"
            :items="rechargeAmounts"
            label="选择充值金额"
            required
            :rules="[required]"
          ></v-select>
          
          <v-radio-group v-model="paymentMethod" row>
            <v-radio label="支付宝" value="alipay"></v-radio>
            <v-radio label="微信支付" value="wechat"></v-radio>
          </v-radio-group>

          <div class="text-center mt-4">
            <v-img
              :src="qrCodeSrc"
              max-width="200"
              class="mx-auto"
              v-if="qrCodeSrc"
            ></v-img>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="handleRecharge" :disabled="!isValid">
          确认充值
        </v-btn>
        <v-btn text @click="isVisible = false">取消</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { required } from '@/utils/validation';
import { useNotification } from '@/composables/useNotification';

const props = defineProps({
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

const isVisible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const { showNotification } = useNotification();

const form = ref(null);
const isValid = ref(false);
const selectedAmount = ref(null);
const paymentMethod = ref('alipay');

const rechargeAmounts = [
  { title: '50元', value: 50 },
  { title: '100元', value: 100 },
  { title: '200元', value: 200 },
  { title: '500元', value: 500 }
];

const qrCodeSrc = computed(() => {
  if (!selectedAmount.value || !paymentMethod.value) return '';
  return `/images/payment-qr/${paymentMethod.value}-${selectedAmount.value}.png`;
});

const handleRecharge = async () => {
  try {
    // 这里添加实际的充值逻辑
    showNotification('充值请求已提交，请扫码支付', 'success');
  } catch (error) {
    showNotification('充值失败，请重试', 'error');
  }
};
</script>