import { Router } from 'express'
import { profileService } from '../services/profileService'
import { IProfileDto } from '../domain/contracts/IProfileDto'

export const profileController = Router()

profileController.get('/get-all', async (req, res) => {
  const profiles = await profileService.getAll()

  return res.json(profiles)
})

profileController.get('/get', async (req, res) => {
  const { id } = req.query

  let profile: IProfileDto | undefined

  if (id) {
    const profileId = parseInt(id.toString())
    profile = await profileService.getByIdWithRules(profileId)
  }

  return res.json(profile)
})
