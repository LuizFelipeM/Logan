import { Request } from 'express'
import { inject, injectable } from 'inversify'
import { interfaces } from 'inversify-express-utils'
import { IUserDto } from '../domain/interfaces/contracts/IUserDto'
import { AuthService } from '../services/AuthService'
import { Principal } from './Principal'

@injectable()
export class AuthProvider implements interfaces.AuthProvider {
  @inject(AuthService)
  private readonly authService: AuthService | undefined

  getUser = async (req: Request): Promise<interfaces.Principal> => {
    // const token = req.headers['x-auth-token']

    const { email, password } = req.headers
    const user = await this.authService?.authenticateUser(email as string, password as string)

    return new Principal(user as IUserDto)
  }
}
