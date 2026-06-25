import { ref, computed } from 'vue'
import { useProjectStorage } from '@/composables/useProjectStorage'
import { nextProjectId } from '@/utils/nextProjectId'

const { load, save, clear } = useProjectStorage()

export function useProjects() {
  const projects = ref(load())

  function addProject(project) {
    project.id = nextProjectId(projects.value)
    projects.value.push(project)
    
    save(projects.value)
  }

  function updateProject(updatedProject) {
    projects.value = projects.value.map(p =>
      p.id === updatedProject.id ? { ...updatedProject } : p
    )

    save(projects.value)
  }

  function removeProject(id) {
    if (!id) return;

    projects.value = projects.value.filter(p => p.id !== id)

    save(projects.value)
  }

  function getProject(id) {
    return computed(() => projects.value.find(p => p.id == id))
  }

  return {
    projects,
    addProject,
    updateProject,
    removeProject,
    getProject,
  }
}