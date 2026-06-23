export function nextProjectId(projects) {
  return projects.length === 0 
    ? 1 
    : (
      Math.max(
        ...projects.map(p => p.id).filter(id => id), 0
      )
    ) + 1
}