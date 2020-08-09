import { Express } from 'express'
import cors from 'cors'
import compression from 'compression'
import { initializeApolloServer } from './apolloServer/initialize'

export function initialize (app: Express): void {
  app.use(cors())
  app.use(compression())

  initializeApolloServer(app)
}
