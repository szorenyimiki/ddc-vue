<script setup>
  import { reactive } from 'vue'

  const emit = defineEmits(['addProject'])

  const project = reactive({
    name: '',
    description: '',
    startDate: '',
    budget: 0,
  })

  function handleSubmit() {
    if (!project.name) return
    if (project.budget < 0 || project.budget > 99999999) return

    emit('addProject', { ...project })
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="container">
      <div class="mb-3">
        <label for="name" class="form-label">Projekt neve</label>
        <input class="form-control" v-model="project.name" id="name">
      </div>
      <div class="mb-3">
        <label for="budget" class="form-label">Költségvetés</label>
        <input type="number" class="form-control" v-model="project.budget" id="budget">
      </div>
      <div class="mb-3">
        <label for="start" class="form-label">Kezdési dátum</label>
        <input type="date" class="form-control" v-model="project.startDate" id="start">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Leírás</label>
        <textarea rows="10" class="form-control" v-model="project.description" id="description"></textarea>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Hozzáadás</button>
      </div>
    </div>
  </form>
</template>