<script setup>
  import { ref } from 'vue'
  import Navbar from './components/layout/Navbar.vue'
  import Toast from '@/components/common/Toast.vue'
  import ConfirmModal from '@/components/common/ConfirmModal.vue'
</script>

<template>
  <ConfirmModal />
  <Toast />
  <Navbar />
  <router-view />
</template>
