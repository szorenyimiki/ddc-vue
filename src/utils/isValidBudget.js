export function isValidBudget(budget) {
  return typeof budget === 'number'
    && budget >= 0
    && budget <= 100000000
    && budget === parseInt(budget)
}