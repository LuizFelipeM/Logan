import { ProfileService } from '../services/ProfileService'
import { Request, Response } from 'express'
import { AbstractController } from './AbstractController'
import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { IProfile } from '../domain/interfaces/entities/IProfile'

@controller('/profile')
export class ProfileController extends AbstractController<IProfile, ProfileService> {
  constructor (
    @inject(ProfileService)
    protected readonly service: ProfileService
  ) { super() }

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
