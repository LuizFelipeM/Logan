import { IResolvers } from 'apollo-server-express'
import { IUser } from '../../../domain/interfaces/user/IUser'
import { usersMock } from '../../../domain/interfaces/user/UsersMock'

function user (_: void, args: { id: string }): IUser | undefined {
  return usersMock.find(user => user.id === args.id)
}

function users (_: void, args: { limit: number }): Array<IUser> {
  return usersMock.slice(0, args.limit ?? 10)
}

export const userResolver: IResolvers = { Query: { user, users } }
