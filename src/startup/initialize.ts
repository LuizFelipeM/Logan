import { Express } from 'express'
import cors from 'cors'
import compression from 'compression'
import { initializeGraphqlServer } from './apolloServer/initialize'

export function initialize (app: Express): void {
  app.use(cors())
  app.use(compression())

  initializeGraphqlServer(app)
}
