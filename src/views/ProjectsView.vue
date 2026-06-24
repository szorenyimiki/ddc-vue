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
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4 class="fw-bold mb-0">Projektek</h4>
      <router-link to="/projects/new" class="btn btn-primary btn-sm">
        + Új projekt
      </router-link>
    </div>

    <div class="card shadow-sm">
      <div class="card-body border-bottom py-3">
        <Filter v-model="filter" />
      </div>
      <ProjectList
        :projects="filteredProjects"
        @removeProject="handleRemoveProject"
      />
    </div>
  </div>
</template>
