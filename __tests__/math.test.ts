import { addFunc } from '../math'

// Agregue un comentario

describe('Test math', () => {
  it('Should show result correctly', () => {
    expect(addFunc(3,3)).toBe(6)
  })
})
