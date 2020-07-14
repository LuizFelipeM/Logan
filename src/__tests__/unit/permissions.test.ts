import { UserPermissions } from '../../domain/middlewares/permissions'
import User from '../../domain/interfaces/Entities/User'
import Profile from '../../domain/interfaces/Entities/Profile'

const mockCallback = jest.fn(() => true)

const student: Profile = {
  id: 2,
  name: 'student',
  rules: []
}

const Student: User = {
  id: 10,
  name: 'Maria',
  birthDate: new Date(),
  gender: 'feminino',
  profile: student
}

const teacher: Profile = {
  id: 1,
  name: 'teacher',
  rules: []
}

const Teacher: User = {
  id: 10,
  name: 'José',
  birthDate: new Date(),
  gender: 'masculino',
  profile: teacher
}

describe('Users permissions middleware', () => {
  beforeEach(() => mockCallback.mockClear())

  it('Should allow user access by permissions', () => {
    const response = UserPermissions(Teacher, mockCallback, teacher)

    expect(mockCallback.mock.calls.length).toBe(1)
    expect(response).toBe(true)
  })

  it('Should not allow user access by permissions', () => {
    const response = UserPermissions(Student, mockCallback, teacher)

    expect(mockCallback.mock.calls.length).toBe(0)
    expect(response).not.toBe(true)
  })
})
