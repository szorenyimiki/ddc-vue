<script setup>
  import ProjectForm from '@/components/project/ProjectForm.vue'
  import { useProjects } from '@/composables/useProjects'
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'
  import router from '@/router'

  const route = useRoute()
  const { getProject, updateProject } = useProjects()
  const project = getProject(route.params.id)

  const form = ref({
    name: '',
    description: '',
    startDate: '',
    budget: 0,
  })

  watch(
    project,
    (p) => {
      if (p) {
        form.value = { ...p }
      }
    },
    { immediate: true }
  )

  function handleSubmit() {
    if (!validateProject(form.value)) {
      alert(JSON.stringify(errors.value));
      return
    }

    updateProject(form.value)

    router.back()
  }
</script>

<template>
  <div class="container">
    <h1 class="mb-3">Projekt módosítása</h1>

    <ProjectForm
      v-model="form" 
      @submit="handleSubmit"
    />
  </div>
</template>