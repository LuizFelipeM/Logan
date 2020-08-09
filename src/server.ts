import express from 'express'
import { initialize } from './startup/initialize'

const app = express()

initialize(app)

app.listen(8080)
