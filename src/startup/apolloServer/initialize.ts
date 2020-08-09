import { Express } from 'express'
import { mergeSchemas, ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'

import { schemas } from './schemasDefinition'
import { resolvers } from './resolversDefinition'

export function initializeApolloServer (app: Express): void {
  const schema = mergeSchemas({ schemas, resolvers })

  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    validationRules: [depthLimit(7)]
  })

  apolloServer.applyMiddleware({ app, path: '/api' })
}
