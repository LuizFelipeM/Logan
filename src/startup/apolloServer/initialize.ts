import { Express } from 'express'
import { mergeSchemas, IResolversParameter } from 'apollo-server-express'
import { join } from 'path'
import { glob } from 'glob'
import { loadFilesSync } from 'graphql-tools'
import { initilizeApolloServer } from '../apolloServer'

export function initializeGraphqlServer (app: Express): void {
  const path = join(__dirname, '..', '..', 'interface')

  const schemas = loadFilesSync(path, {
    ignoredExtensions: ['ts', 'js'],
    recursive: true,
    ignoreIndex: true
  })

  glob(`${path}/**/*Resolver.{ts,js}`, (err, files) => {
    if (!err) {
      Promise.all(files.map(file => import(file)))
        .then(resolvers => resolvers.flatMap(resolver => Object.values(resolver)) as IResolversParameter)
        .then(resolvers => mergeSchemas({ schemas, resolvers }))
        .then(schema => initilizeApolloServer(schema, app))
        .catch(error => console.error('Error while starting Apollo Server', error))
    } else {
      console.error(err)
    }
  })
}
