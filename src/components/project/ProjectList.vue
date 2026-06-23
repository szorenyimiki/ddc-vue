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
        <th width="200">Projekt neve</th>
        <th width="200">Költségvetés</th>
        <th width="200">Kezdési dátum</th>
        <th>Leírás</th>
        <th width="200">&nbsp;</th>
      </tr>
    </thead>

    <tbody v-if="projects.length > 0">
      <tr v-for="project in projects" :key="project.id">
        <td class="text-truncate" style="max-width: 200px;">{{ project.name }}</td>
        <td>{{ formatCurrency(project.budget) }}</td>
        <td>{{ formatDate(project.startDate) }}</td>
        <td class="text-truncate" style="max-width: 200px;">{{ project.description }}</td>
        <td>
          <a :href="'/projects/' + project.id + '/edit'" class="btn btn-sm btn-secondary m-2">Szerkesztés</a>
          <button type="button" class="btn btn-sm btn-danger" @click="$emit('removeProject', project.id)">Törlés</button>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="5">
          Nincs project a listában.
        </td>
      </tr>
    </tbody>
  </table>
</template>