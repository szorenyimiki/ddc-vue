<script setup>
import ProjectForm from '@/components/project/ProjectForm.vue'
import { useProjects } from '@/composables/useProjects'

const { addProject } = useProjects()
</script>

<template>
  <div>
    <h1>Projekt hozzáadása</h1>

    <ProjectForm
      @addProject="addProject"
    />
  </div>
</template>