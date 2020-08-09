import { IUser } from './IUser'
import { profilesMock } from '../profile/ProfilesMock'

export const usersMock: IUser[] = [
  {
    id: '123456',
    name: 'Joana',
    gender: 'Feminino',
    profile: profilesMock[0]
  },
  {
    id: '123455',
    name: 'João',
    gender: 'Masculino',
    profile: profilesMock[1]
  },
  {
    id: '543216',
    name: 'Natalia',
    gender: 'Feminino',
    profile: profilesMock[2]
  }
]
