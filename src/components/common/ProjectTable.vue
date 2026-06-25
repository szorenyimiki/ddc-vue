<script setup>
  import { formatDate } from '@/utils/formatDate'
  import { formatCurrency } from '@/utils/formatCurrency'

  defineProps(['projects'])
  defineEmits(['removeProject'])
</script>

<template>
  <div class="table-responsive">
    <table class="table table-hover align-middle mb-0">
      <thead class="table-light">
        <tr>
          <th>Projekt neve</th>
          <th>Költségvetés</th>
          <th>Kezdési dátum</th>
          <th>Leírás</th>
          <th></th>
        </tr>
      </thead>

      <tbody v-if="projects.length > 0">
        <tr v-for="project in projects" :key="project.id">
          <td class="fw-medium text-truncate" style="max-width: 180px;">{{ project.name }}</td>
          <td class="text-nowrap">{{ formatCurrency(project.budget) }}</td>
          <td class="text-nowrap">{{ formatDate(project.startDate) }}</td>
          <td class="text-truncate text-muted" style="max-width: 200px;">{{ project.description }}</td>
          <td class="text-end text-nowrap">
            <router-link :to="'/projects/' + project.id + '/edit'" class="btn btn-sm btn-outline-secondary me-1">Szerkesztés</router-link>
            <button type="button" class="btn btn-sm btn-outline-danger" @click="$emit('removeProject', project.id)">Törlés</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="text-center text-muted py-4">
            Nincs projekt a listában.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>