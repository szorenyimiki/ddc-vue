import { ref } from 'vue'

export function useValidation() {
  const errors = ref({})

  function validateProject(project) {
    errors.value = {}

    if (!project.name) {
      errors.value.name = 'Név megadása kötelező'
    }
    if (isNaN(parseFloat(project.budget))) {
      errors.value.budget = 'Költségvetés megadása kötelező'
    }
    else if (project.budget < 0) {
      errors.value.budget = 'A költségvetésnek pozitív egész számnak kell lennie'
    }

    return Object.keys(errors.value).length === 0
  }

  return {
    errors,
    validateProject
  }
}