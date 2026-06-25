import { ref, computed } from 'vue'

export function useFilters(projects) {
  const filter = ref('')

  const filteredProjects = computed(() =>
    projects.value.filter(p =>
      p.name.toLowerCase().includes(filter.value.toLowerCase())
    )
  )

  return {
    filter,
    filteredProjects,
  }
}