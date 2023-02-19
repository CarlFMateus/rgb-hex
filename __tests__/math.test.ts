import { addFunc } from '../math'

describe('Test math', () => {
  it('Should show result correctly', () => {
    expect(addFunc(3,3)).toBe(6)
  })
})
