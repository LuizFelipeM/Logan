import { Express } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { GraphQLSchema } from 'graphql'
import depthLimit from 'graphql-depth-limit'

export function initilizeApolloServer (schema: GraphQLSchema, app: Express): void {
  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    validationRules: [depthLimit(7)]
  })

  apolloServer.applyMiddleware({ app, path: '/api' })

  console.log('\x1b[36m%s\x1b[0m', '\n\nApollo Server is now running on port:', `${process.env.HOST}:${process.env.PORT}/api\n\n`)
}
