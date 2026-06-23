<script setup>
import ProjectList from '@/components/project/ProjectList.vue'
import { useProjects } from '@/composables/useProjects'

const { projects, removeProject } = useProjects()
</script>

<template>
  <div>
    <h1>Projektek</h1>

    <ProjectList
      :projects="projects"
      @removeProject="removeProject"
    />
  </div>
</template>