const STORAGE_KEY = 'projects'

export function useProjectStorage() {

  function load() {
    const data = localStorage.getItem(STORAGE_KEY)

    return data ? JSON.parse(data) : []
  }

  function save(projects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
  }

  function clear() {
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    load,
    save,
    clear,
  }
}