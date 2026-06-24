import { describe, it, expect, beforeEach } from 'vitest'
import { useValidation } from '@/composables/useValidation'

describe('useValidation', () => {
  let validate, errors

  beforeEach(() => {
    const v = useValidation()
    errors = v.errors
    validate = v.validateProject
  })

  it('érvényes projektet elfogad', () => {
    const result = validate({ name: 'Teszt projekt', budget: 500000 })
    expect(result).toBe(true)
    expect(Object.keys(errors.value)).toHaveLength(0)
  })

  it('hiányzó név esetén hibát ad', () => {
    const result = validate({ name: '', budget: 100 })
    expect(result).toBe(false)
    expect(errors.value.name).toBe('Név megadása kötelező')
  })

  it('hiányzó budget esetén hibát ad', () => {
    const result = validate({ name: 'Projekt', budget: NaN })
    expect(result).toBe(false)
    expect(errors.value.budget).toBe('Költségvetés megadása kötelező')
  })

  it('szöveges budget esetén hibát ad', () => {
    const result = validate({ name: 'Projekt', budget: 'nem szám' })
    expect(result).toBe(false)
    expect(errors.value.budget).toBe('Költségvetés megadása kötelező')
  })

  it('negatív budget esetén hibát ad', () => {
    const result = validate({ name: 'Projekt', budget: -1 })
    expect(result).toBe(false)
    expect(errors.value.budget).toBe('A költségvetésnek pozitív egész számnak kell lennie')
  })

  it('nulla budget elfogadható', () => {
    const result = validate({ name: 'Projekt', budget: 0 })
    expect(result).toBe(true)
  })

  it('több hiba egyszerre lehetséges', () => {
    const result = validate({ name: '', budget: NaN })
    expect(result).toBe(false)
    expect(errors.value.name).toBeDefined()
    expect(errors.value.budget).toBeDefined()
  })
})
