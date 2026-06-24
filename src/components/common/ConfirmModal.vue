<script setup>
  import { storeToRefs } from 'pinia'
  import { useModalStore } from '@/stores/modal'

  const modalStore = useModalStore()
  const { modal } = storeToRefs(modalStore)
</script>

<template>
  <template v-if="modal">
    <div class="modal show d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modal.title }}</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="modalStore.close(false)"></button>
          </div>
          <div class="modal-body">
            {{ modal.message }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="modalStore.close(false)">Mégse</button>
            <button type="button" class="btn btn-danger" @click="modalStore.close(true)">Törlés</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </template>
</template>
