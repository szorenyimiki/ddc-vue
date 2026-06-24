<script setup>
  const model = defineModel()
</script>

<template>
  <div class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Keresés..." aria-label="Search" v-model="model">
  </div>
</template>