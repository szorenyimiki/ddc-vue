<script setup>
  import { formatDate } from '@/utils/formatDate'
  import { formatCurrency } from '@/utils/formatCurrency'

  defineProps({
    projects: {
      type: Array,
      required: true,
    },
  })
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>Projekt neve</th>
        <th>Költségvetés</th>
        <th>Kezdési dátum</th>
        <th>Leírás</th>
        <th>&nbsp;</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="project in projects" :key="project.id">
        <td width="200" class="text-truncate" style="max-width: 200px;">{{ project.name }}</td>
        <td width="200">{{ formatCurrency(project.budget) }}</td>
        <td width="200">{{ formatDate(project.startDate) }}</td>
        <td class="text-truncate" style="max-width: 200px;">{{ project.description }}</td>
        <td width="100">
          <button type="button" class="btn btn-danger" @click="$emit('removeProject', project.id)">Törlés</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>