import { vi, describe, it, expect, beforeEach } from 'vitest'

const { mockLoad, mockSave } = vi.hoisted(() => ({
  mockLoad: vi.fn(() => []),
  mockSave: vi.fn(),
}))

vi.mock('@/composables/useProjectStorage', () => ({
  useProjectStorage: () => ({ load: mockLoad, save: mockSave, clear: vi.fn() }),
}))

vi.mock('@/utils/nextProjectId', () => ({
  nextProjectId: vi.fn((projects) => projects.length + 1),
}))

import { useProjects } from '@/composables/useProjects'

describe('useProjects', () => {
  beforeEach(() => {
    mockLoad.mockReturnValue([])
    mockSave.mockClear()
  })

  it('üres listával indul, ha nincs mentett adat', () => {
    const { projects } = useProjects()
    expect(projects.value).toEqual([])
  })

  it('addProject hozzáad egy projektet', () => {
    const { projects, addProject } = useProjects()
    addProject({ name: 'Első projekt', budget: 100000 })
    expect(projects.value).toHaveLength(1)
    expect(projects.value[0].name).toBe('Első projekt')
  })

  it('addProject automatikusan generál ID-t', () => {
    const { projects, addProject } = useProjects()
    addProject({ name: 'Projekt A', budget: 1000 })
    expect(projects.value[0].id).toBe(1)
  })

  it('addProject növekvő ID-ket generál', () => {
    const { projects, addProject } = useProjects()
    addProject({ name: 'Projekt A', budget: 1000 })
    addProject({ name: 'Projekt B', budget: 2000 })
    expect(projects.value[0].id).toBe(1)
    expect(projects.value[1].id).toBe(2)
  })

  it('addProject hívja a save-et', () => {
    const { addProject } = useProjects()
    addProject({ name: 'Mentett projekt', budget: 5000 })
    expect(mockSave).toHaveBeenCalledOnce()
  })

  it('updateProject módosítja a megfelelő projektet', () => {
    const { projects, addProject, updateProject } = useProjects()
    addProject({ name: 'Eredeti', budget: 1000 })
    const id = projects.value[0].id
    updateProject({ id, name: 'Módosított', budget: 9999 })
    expect(projects.value[0].name).toBe('Módosított')
    expect(projects.value[0].budget).toBe(9999)
  })

  it('updateProject nem módosítja a többi projektet', () => {
    const { projects, addProject, updateProject } = useProjects()
    addProject({ name: 'A projekt', budget: 1000 })
    addProject({ name: 'B projekt', budget: 2000 })
    const idA = projects.value[0].id
    updateProject({ id: idA, name: 'A módosítva', budget: 1000 })
    expect(projects.value[1].name).toBe('B projekt')
  })

  it('removeProject törli a megfelelő projektet', () => {
    const { projects, addProject, removeProject } = useProjects()
    addProject({ name: 'Törölni való', budget: 100 })
    const id = projects.value[0].id
    removeProject(id)
    expect(projects.value).toHaveLength(0)
  })

  it('removeProject üres ID esetén nem változtat semmit', () => {
    const { projects, addProject, removeProject } = useProjects()
    addProject({ name: 'Megmaradó', budget: 500 })
    removeProject(null)
    expect(projects.value).toHaveLength(1)
  })

  it('getProject visszaadja a megfelelő projektet', () => {
    const { projects, addProject, getProject } = useProjects()
    addProject({ name: 'Keresett', budget: 3000 })
    const id = projects.value[0].id
    const found = getProject(id)
    expect(found.value.name).toBe('Keresett')
  })

  it('betölti a tárolt projekteket induláskor', () => {
    mockLoad.mockReturnValueOnce([{ id: 1, name: 'Előző session', budget: 999 }])
    const { projects } = useProjects()
    expect(projects.value).toHaveLength(1)
    expect(projects.value[0].name).toBe('Előző session')
  })
})
