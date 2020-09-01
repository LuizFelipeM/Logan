import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', routes)

app.listen(process.env.PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', '\n\nServer is now running on port:', `${process.env.HOST}:${process.env.PORT}/api\n\n`)
})
