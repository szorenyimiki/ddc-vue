<script setup>
  const emit = defineEmits(['submit'])
  const form = defineModel()

  function handleSubmit() {
    emit('submit', form.value)
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Projekt neve</label>
      <input class="form-control" v-model="form.name" id="name">
    </div>
    <div class="mb-3">
      <label for="budget" class="form-label">Költségvetés</label>
      <input type="number" class="form-control" v-model="form.budget" id="budget">
    </div>
    <div class="mb-3">
      <label for="start" class="form-label">Kezdési dátum</label>
      <input type="date" class="form-control" v-model="form.startDate" id="start">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Leírás</label>
      <textarea rows="10" class="form-control" v-model="form.description" id="description"></textarea>
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary">Mentés</button>
    </div>
  </form>
</template>