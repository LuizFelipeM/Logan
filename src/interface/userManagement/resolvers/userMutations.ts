import { v4 as uuid } from 'uuid'
import { IUser } from '../../../domain/interfaces/user/IUser'
import { insertUser } from '../repositorie/insertUser'

function createUser (_: void, args: Omit<IUser, 'id' | 'profile'>): IUser {
  const id = uuid()
  const user = { ...args, id }

  insertUser(user)

  return user
}

export { createUser }
