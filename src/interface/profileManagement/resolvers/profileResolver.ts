import { IResolvers } from 'apollo-server-express'
import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { profilesMock } from '../../../domain/interfaces/profile/ProfilesMock'

function profile (_: void, args: { id: string }): IProfile | undefined {
  return profilesMock.find(user => user.id === args.id)
}

function profiles (_: void, args: { limit: number }): Array<IProfile> {
  return profilesMock.slice(0, args.limit ?? 10)
}

export const profileResolver: IResolvers = { Query: { profile, profiles } }
