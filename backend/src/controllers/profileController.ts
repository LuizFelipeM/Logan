import { Router } from 'express'
import { profileService } from '../services/profileService'
import { IProfile } from '../domain/interfaces/IProfile'

export const profileController = Router()

profileController.get('/get-all', async (req, res) => {
  try {
    const limit = req.query.limit?.toString()
    const convertedLimit = limit ? parseInt(limit) : undefined

    const profiles = await profileService.getProfiles(convertedLimit)

    return res.json(profiles)
  } catch (ex) {
    console.error(ex)
  }
})

profileController.get('/get', async (req, res) => {
  try {
    const { id } = req.query

    let profile: IProfile | undefined

    if (id) {
      const profileId = parseInt(id.toString())
      profile = await profileService.getProfile(profileId)
    }

    return res.json(profile)
  } catch (ex) {
    console.error(ex)
  }
})
