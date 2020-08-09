import { gql } from 'apollo-server-express'

export const profileSchema = gql`
  type Query {
    profile(id: String!): Profile
    profiles(limit: Int): [Profile]
  }

  type Profile {
    id: String!
    name: String!
    rules: [Rule]
  }
`

// export const profileSchema: GraphQLSchema = makeExecutableSchema({ typeDefs: schema, resolvers: profileResolver })
