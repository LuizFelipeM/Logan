import User from '../../domain/interfaces/Entities/User'
import Perfil from '../../domain/interfaces/Entities/Perfil'
import { UserPermissions } from '../../domain/middlewares/permissions'

const Aluno: Perfil = {
  id: 2,
  name: 'aluno',
  rules: []
}

const Professor: Perfil = {
  id: 1,
  name: 'professor',
  rules: []
}

const userNotAllowed: User = {
  id: 10,
  name: 'Maria',
  birthDate: new Date(),
  gender: 'feminino',
  perfil: Aluno
}

const userAllowed: User = {
  id: 10,
  name: 'José',
  birthDate: new Date(),
  gender: 'masculino',
  perfil: Professor
}

const mockCallback = jest.fn(() => true)

describe('Users permissions middleware', () => {
  beforeEach(() => mockCallback.mockClear())

  it('Should allow user access by permissions', () => {
    const response = UserPermissions(userAllowed, mockCallback)

    expect(mockCallback.mock.calls.length).toBe(1)
    expect(response).toBe(true)
  })

  it('Should not allow user access by permissions', () => {
    const response = UserPermissions(userNotAllowed, mockCallback)

    expect(mockCallback.mock.calls.length).toBe(0)
    expect(response).not.toBe(true)
  })
})
