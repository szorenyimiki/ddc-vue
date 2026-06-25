export function createProject(overrides = {}) {
  return {
    id: null,
    name: '',
    budget: null,
    startDate: '',
    description: '',
    ...overrides
  }
}