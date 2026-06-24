<script setup>
  import FormLayout from '@/components/layout/FormLayout.vue'
  import ProjectForm from '@/components/project/ProjectForm.vue'
  import { useProjects } from '@/composables/useProjects'
  import { useRoute } from 'vue-router'
  import { useValidation } from '@/composables/useValidation'
  import { ref, watch } from 'vue'
  import router from '@/router'
  import { useToastStore } from '@/stores/toast'

  const route = useRoute()
  const { getProject, updateProject } = useProjects()
  const { errors, validateProject } = useValidation()
  const toast = useToastStore()
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
      if (p) form.value = { ...p }
    },
    { immediate: true }
  )

  function handleSubmit() {
    if (!validateProject(form.value)) {
      for (const field in errors.value) {
        toast.error(errors.value[field])
      }
      return
    }

    updateProject(form.value)
    toast.success('Projekt sikeresen módosítva')
    router.back()
  }
</script>

<template>
  <div v-if="form.name">
    <FormLayout title="Projekt módosítása" back-to="/projects">
      <ProjectForm v-model="form" @submit="handleSubmit" />
    </FormLayout>
  </div>
  <div v-else>
    <h1>Projekt nem található</h1>

    <router-link to="/projects">
      Vissza a listához
    </router-link>
  </div>
</template>
