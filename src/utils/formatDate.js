export function formatDate(date) {
  return date 
    ? new Date(date).toLocaleDateString() 
    : null
}