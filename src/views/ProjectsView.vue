<script setup>
  import ProjectList from '@/components/project/ProjectList.vue'
  import Filter from '@/components/common/Filter.vue'
  import { useProjects } from '@/composables/useProjects'
  import { useModalStore } from '@/stores/modal'
  import { ref, computed } from 'vue'

  const { projects, removeProject } = useProjects()
  const modal = useModalStore()
  const filter = ref('')

  async function handleRemoveProject(id) {
    const ok = await modal.open(
      'Projekt törlése',
      'Biztos törölni szeretnéd?'
    )

    if (ok) {
      removeProject(id)
    }
  }

  const filteredProjects = computed(() =>
    projects.value.filter(p =>
      p.name.toLowerCase().includes(filter.value.toLowerCase())
    )
  )
</script>

<template>
  <div class="container">
    <h1 class="mb-3">Projektek</h1>

    <Filter v-model="filter" />
    <ProjectList
      :projects="filteredProjects"
      @removeProject="handleRemoveProject"
    />
  </div>
</template>