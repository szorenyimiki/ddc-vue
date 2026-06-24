<script setup>
  import ProjectList from '@/components/project/ProjectList.vue'
  import { useProjects } from '@/composables/useProjects'
  import { useModalStore } from '@/stores/modal'

  const { projects, removeProject } = useProjects()
  const modal = useModalStore()

  async function handleRemoveProject(id) {
    const ok = await modal.open(
      'Projekt törlése',
      'Biztos törölni szeretnéd?'
    )

    if (ok) {
      removeProject(id)
    }
  }
</script>

<template>
  <div class="container">
    <h1 class="mb-3">Projektek</h1>

    <ProjectList
      :projects="projects"
      @removeProject="handleRemoveProject"
    />
  </div>
</template>