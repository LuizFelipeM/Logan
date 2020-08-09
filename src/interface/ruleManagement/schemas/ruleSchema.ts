import { gql } from 'apollo-server-express'

export const ruleSchema = gql`
  type Query {
    rule(id: String!): Rule
    rules(limit: Int): [Rule]
  }

  type Rule {
    id: String!
    name: String!
    description: String!
  }
`
