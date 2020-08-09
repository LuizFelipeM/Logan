import { gql } from 'apollo-server-express'

export const userSchema = gql`
  type Query {
    user(id: String!): User
    users(limit: Int): [User]
  }

  type User {
    id: String!
    name: String!
    gender: String!
    birthDate: String
    profile: Profile
  }
`

// export const userSchema: GraphQLSchema = makeExecutableSchema({ typeDefs: schema, resolvers: userResolver })
