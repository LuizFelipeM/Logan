import { IResolvers, IResolverObject } from 'apollo-server-express'
import { user, users } from './userQueries'
import { createUser } from './userMutations'
import { profilesTable } from '../../profileManagement/repositorie/profilesTable'
import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { IUser } from '../../../domain/interfaces/user/IUser'

const User: IResolverObject<IUser, void, void> = {
  profile: async (user: IUser): Promise<IProfile> => {
    return await profilesTable
      .select('*')
      .where({ id: user.idProfile })
      .first()
  }
}

export const userResolver: IResolvers = {
  Query: { user, users },
  Mutation: { createUser },
  User
}
