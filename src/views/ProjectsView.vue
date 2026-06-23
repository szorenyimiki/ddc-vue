<script setup>
import ProjectList from '@/components/project/ProjectList.vue'
import { useProjects } from '@/composables/useProjects'

const { projects, removeProject } = useProjects()
</script>

<template>
  <div class="container">
    <h1 class="mb-3">Projektek</h1>

    <ProjectList
      :projects="projects"
      @removeProject="removeProject"
    />
  </div>
</template>