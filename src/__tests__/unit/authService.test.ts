import { AccessPermissionType } from '../../services/authService'
import User from '../../domain/interfaces/User'
import Perfil from '../../domain/interfaces/Perfil'

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

it('Should not allow user access by permissions', () => {
  const permission = AccessPermissionType(userNotAllowed)
  const routeAPI = () => { console.log('running') }

  expect(permission(routeAPI, 'routeAPI', { value: routeAPI })).toThrowErrorMatchingSnapshot()
})

it('Should allow user access by permissions', () => {
  const obj = { a: 0, b: 0, c: 0 }

  const permission = AccessPermissionType(userAllowed)
  const routeAPI = (a: 10, b: 20, c: 30) => {
    console.log('test a', a)

    return ({ a, b, c })
  }

  permission(routeAPI, 'routeAPI', { value: routeAPI })

  expect(obj).toBe({ a: 10, b: 20, c: 30 })
})
