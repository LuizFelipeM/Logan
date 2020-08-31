import { IResolvers, IResolverObject } from 'apollo-server-express'
import { profile, profiles } from './profileQueries'
import { createProfile } from './profileMutations'
import { IRule } from '../../../domain/interfaces/rule/IRule'
import { rulesTable } from '../../ruleManagement/repositorie/rulesTable'
import { IProfile } from '../../../domain/interfaces/profile/IProfile'

const Profile: IResolverObject<IProfile, void, void> = {
  rules: async (profile: IProfile): Promise<IRule[]> => {
    console.log('profile', profile)

    return await rulesTable
      .select('*')
      .where(builder => builder.whereIn('id', profile.rules))
  }
}

export const profileResolver: IResolvers = {
  Query: { profile, profiles },
  Mutation: { createProfile },
  Profile
}
