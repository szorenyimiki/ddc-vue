<script setup>
  defineProps({
    title: String,
    backTo: String,
  })
</script>

<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-header py-3 d-flex align-items-center gap-2">
            <router-link v-if="backTo" :to="backTo" class="btn btn-sm btn-outline-secondary">←</router-link>
            <h5 class="mb-0">{{ title }}</h5>
          </div>
          <div class="card-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
