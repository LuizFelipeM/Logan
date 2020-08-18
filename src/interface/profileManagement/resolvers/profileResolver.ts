import { IResolvers } from 'apollo-server-express'
import { profile, profiles } from './profileQueries'
import { createProfile } from './profileMutations'

export const profileResolver: IResolvers = {
  Query: { profile, profiles },
  Mutation: { createProfile }
}
