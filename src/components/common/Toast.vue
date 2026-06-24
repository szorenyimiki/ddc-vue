<script setup>
  import { storeToRefs } from 'pinia'
  import { useToastStore } from '@/stores/toast'

  const toastStore = useToastStore()
  const { toasts } = storeToRefs(toastStore)

  function bgClass(type) {
    return {
      success: 'bg-success',
      error: 'bg-danger'
    }[type] || 'bg-dark'
  }
</script>

<template>
  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div
      v-for="(toast, index) in toasts"
      :key="index"
      class="toast show align-items-center text-white"
      :class="bgClass(toast.type)"
      role="alert"
    >
      <div class="d-flex">
        <div class="toast-body">
          {{ toast.message }}
        </div>
      </div>
    </div>
  </div>
</template>
