import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())

app.listen(9868)
