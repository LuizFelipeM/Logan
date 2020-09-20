import { ProfileService } from '../services/profileService'
import { IProfile } from '../domain/interfaces/IProfile'
import { Request, Response } from 'express'
import { AbstractController } from './AbstractController'
import { inject, injectable } from 'inversify'

@injectable()
export class ProfileController extends AbstractController<IProfile, ProfileService> {
  constructor (
    @inject(ProfileService)
    protected readonly service: ProfileService
  ) {
    super()

    this.controller.get('/rules/', this.getWithRules)
    this.controller.get('/rules/:id', this.getByIdWithRules)
  }

  private getWithRules = async (req: Request, res: Response) => {
    try {
      const profiles = await this.service.getWithRules()

      res.json(profiles)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
    }
  }

  private getByIdWithRules = async (req: Request, res: Response) => {
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
