import { UserService } from '../services/UserService'
import { Request, Response, NextFunction } from 'express'
import { DIContainer } from '../DIContainer'

const userService = DIContainer.resolve<UserService>(UserService)

export const secureRoute = (...permissionsIds: number[]) =>
  async (req: Request, res: Response, next: NextFunction): Promise<unknown> => {
    const { userid } = req.headers
    const id = Number(userid)
    const user = userid ? await userService.getById(id) : undefined
    const userCanAccess = permissionsIds.includes(Number(user?.profile)) ?? undefined

    if (userCanAccess) {
      next()
    } else {
      return res.status(401).send('Você não possui as permissões necessárias para acessar este recurso')
    }
  }
