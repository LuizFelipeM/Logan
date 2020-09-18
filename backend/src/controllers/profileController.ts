import { ProfileService, profileService } from '../services/profileService'
import { AbstractController } from './AbstractController'
import { IProfile } from '../domain/interfaces/IProfile'
import { Request, Response } from 'express'

class ProfileController extends AbstractController<IProfile, ProfileService> {
  constructor () {
    super(profileService)

    this.controller.get('/rules/', this.getWithRules)
    this.controller.get('/rules/:id', this.getByIdWithRules)
  }

  getWithRules = async (req: Request, res: Response) => {
    try {
      const profiles = await this.service.getWithRules()

      res.json(profiles)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
    }
  }

  getByIdWithRules = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const profileId = parseInt(id)

      const profiles = await this.service.getByIdWithRules(profileId)

      res.json(profiles)
    } catch (error) {
      console.error(error)
      res.status(400).json({ error })
    }
  }
}

export const profileController = new ProfileController()
