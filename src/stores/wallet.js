import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWalletStore = defineStore('wallet', () => {
  const balance = ref(0);
  const transactions = ref([]);

  function addTransaction(amount, type, status = 'pending') {
    const transaction = {
      id: Date.now(),
      amount,
      type,
      status,
      timestamp: new Date()
    };
    transactions.value.unshift(transaction);
    return transaction.id;
  }

  function updateBalance(amount) {
    balance.value += amount;
  }

  function updateTransactionStatus(id, status) {
    const transaction = transactions.value.find(t => t.id === id);
    if (transaction) {
      transaction.status = status;
      if (status === 'completed' && transaction.type === 'recharge') {
        updateBalance(transaction.amount);
      }
    }
  }

  return {
    balance,
    transactions,
    addTransaction,
    updateTransactionStatus
  };
});