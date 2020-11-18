import { interfaces } from 'inversify-express-utils'
import { IUserDto } from '../domain/interfaces/contracts/IUserDto'

export class Principal implements interfaces.Principal {
  public details: IUserDto;
  public constructor (details: IUserDto) {
    this.details = details
  }

  public isAuthenticated (): Promise<boolean> {
    return Promise.resolve(true)
  }

  public isResourceOwner (resourceId: any): Promise<boolean> {
    return Promise.resolve(resourceId === 1111)
  }

  public isInRole (profileName: string): Promise<boolean> {
    return Promise.resolve(profileName === this.details.profile?.name)
  }
}
