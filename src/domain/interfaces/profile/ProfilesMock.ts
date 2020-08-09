import { IProfile } from './IProfile'
import { rulesMock } from '../rule/rulesMock'

export const profilesMock: IProfile[] = [
  {
    id: '1',
    name: 'Admin',
    rules: [rulesMock[0], rulesMock[1], rulesMock[2]]
  },
  {
    id: '2',
    name: 'Teacher',
    rules: [rulesMock[0]]
  },
  {
    id: '3',
    name: 'Student'
  }
]
