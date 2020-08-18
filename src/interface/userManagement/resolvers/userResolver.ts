import { IResolvers } from 'apollo-server-express'
import { user, users } from './userQueries'
import { createUser } from './userMutations'

export const userResolver: IResolvers = {
  Query: { user, users },
  Mutation: { createUser }
}
