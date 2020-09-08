import { Router } from 'express'
import { profileService } from '../services/profileService'
import { IProfileDto } from '../domain/contracts/IProfileDto'

export const profileController = Router()

profileController.get('/get-all',
  async (req, res) => {
    try {
      const limit = req.query.limit?.toString()
      const convertedLimit = limit ? parseInt(limit) : undefined

      const profiles = await profileService.getProfiles(convertedLimit)

      return res.json(profiles)
    } catch (error) {
      console.error(error)
      return res.status(404).json({ error })
    }
  }
)

profileController.get('/get',
  async (req, res) => {
    try {
      const { id } = req.query

      let profile: IProfileDto | undefined

      if (id) {
        const profileId = parseInt(id.toString())
        profile = await profileService.getProfile(profileId)
      }

      return res.json(profile)
    } catch (ex) {
      console.error(ex)
    }
  })
