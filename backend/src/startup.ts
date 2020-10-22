import 'reflect-metadata'
import cors from 'cors'
import { urlencoded, json } from 'body-parser'
import { InversifyExpressServer } from 'inversify-express-utils'
import { DIContainer } from './DIContainer'

export function startup (): void {
  const server = new InversifyExpressServer(DIContainer)

  server.setConfig(app => {
    app.use(cors())
    app.use(urlencoded({ extended: true }))
    app.use(json())
  })

  const app = server.build()

  app.listen(process.env.PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', '\n\nServer is now running on port:', `${process.env.HOST}:${process.env.PORT}/\n\n`)
  })
}
