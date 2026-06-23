export function formatCurrency(price) {
  return price == null || isNaN(price)
    ? ''
    : Number(price).toLocaleString('hu-HU') + ' Ft' 
}