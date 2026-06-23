export function formatCurrency(price) {
  if (price == null || isNaN(price)) return ''

  return Number(price).toLocaleString('hu-HU') + ' Ft'
}