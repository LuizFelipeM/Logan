import 'reflect-metadata'
import { Application } from 'express'
import { urlencoded, json } from 'body-parser'
import { InversifyExpressServer } from 'inversify-express-utils'
import { DIContainer } from './DIContainer'

import './controllers/userController'

const server = new InversifyExpressServer(DIContainer)

server.setConfig((app: Application) => {
  app.use(urlencoded({ extended: true }))
  app.use(json())
})

const app = server.build()
app.listen(process.env.PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', '\n\nServer is now running on port:', `${process.env.HOST}:${process.env.PORT}/api\n\n`)
})

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use('/api', routes)

// app.listen(process.env.PORT, () => {
//   console.log('\x1b[36m%s\x1b[0m', '\n\nServer is now running on port:', `${process.env.HOST}:${process.env.PORT}/api\n\n`)
// })
