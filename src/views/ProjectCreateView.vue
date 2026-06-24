<script setup>
  import FormLayout from '@/components/layout/FormLayout.vue'
  import ProjectForm from '@/components/project/ProjectForm.vue'
  import { useProjects } from '@/composables/useProjects'
  import { useValidation } from '@/composables/useValidation'
  import { ref } from 'vue'
  import router from '@/router'
  import { useToastStore } from '@/stores/toast'

  const toast = useToastStore()
  const { addProject } = useProjects()
  const { errors, validateProject } = useValidation()

  const form = ref({
    name: '',
    description: '',
    startDate: '',
    budget: 0,
  })

  function handleSubmit() {
    if (!validateProject(form.value)) {
      for (const field in errors.value) {
        toast.error(errors.value[field])
      }
      return
    }

    addProject(form.value)
    toast.success('Projekt sikeresen létrehozva')
    router.back()
  }
</script>

<template>
  <FormLayout title="Projekt hozzáadása" back-to="/projects">
    <ProjectForm v-model="form" @submit="handleSubmit" />
  </FormLayout>
</template>
