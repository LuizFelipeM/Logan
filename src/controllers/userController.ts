import { Router } from 'express'
import { userService } from '../services/userService'

export const userController = Router()

userController.get('/get-all', async (req, res) => {
  const limit = req.query.limit?.toString()
  const convertedLimit = limit ? parseInt(limit) : undefined

  const users = await userService.getUsers(convertedLimit)

  return res.json(users)
})
