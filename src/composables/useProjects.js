import { ref } from 'vue'

export function useProjects() {
  const projects = ref([{
    id: 1,
    name: 'project 1',
    budget: 10000,
    startDate: new Date(),
    description: 'asljdnasjhdj haksjdh kjahsdkj haskjdh kdkahkjshd jkasljdnasjhdj haksjdh kjahsdkj haskjdh kdkahkjshd jkasljdnasjhdj haksjdh kjahsdkj haskjdh kdkahkjshd jkasljdnasjhdj haksjdh kjahsdkj haskjdh kdkahkjshd jk',
  }, {
    id: 2,
    name: 'project 2',
    budget: 10000,
    startDate: new Date(),
  }])

  function addProject(project) {
    console.log(project)
    projects.value.push(project)
  }

  function removeProject(id) {
    projects.value = projects.value.filter(p => p.id !== id)
  }

  return {
    projects,
    addProject,
    removeProject,
  }
}