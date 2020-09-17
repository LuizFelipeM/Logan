import { Router } from 'express'
import { userService } from '../services/userService'

export const userController = Router()

userController.get('/get', async (req, res) => {
  const { id } = req.query

  const user = await userService.getById(Number(id))

  return res.json(user)
})

userController.get('/get-all', async (req, res) => {
  const users = await userService.getAll()

  return res.json(users)
})

userController.delete('/', (req, res) => {
  const { id } = req.body

  userService.remove(id)

  res.status(204).send()
})
