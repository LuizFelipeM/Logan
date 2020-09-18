import { NextFunction, Request, Response, Router } from 'express'
import { IBaseEntity } from '../domain/interfaces/IBaseEntity'
import { AbstractRepository } from '../repositories/AbstractRepository'
import { AbstractService } from '../services/AbstractService'
import { ParsedQs } from 'qs'
import { FilterTypes } from '../domain/FilterTypes'

export abstract class AbstractController<T extends IBaseEntity, Service extends AbstractService<T, AbstractRepository<T>>> {
  protected controller = Router()

  protected constructor (protected service: Service) {
    this.controller.get('/', this.getAll)
    this.controller.get('/:id', this.getById)
    this.controller.get('/filter/:type', this.getWithFilter)
    this.controller.post('/', this.post)
    this.controller.delete('/', this.delete)
  }

  public get router (): Router {
    return this.controller
  }

  private getAll = async (req: Request, res: Response) => {
    try {
      const data: T[] = await this.service.getAll()

      return res.json(data)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error })
    }
  }

  private getWithFilter = async (req: Request, res: Response) => {
    try {
      const queryString: ParsedQs = req.query
      const { type } = req.params

      const data: T[] = await this.service.filter(type as FilterTypes, queryString)
      return res.json(data)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error })
    }
  }

  private getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params

      let data: T | undefined

      if (parseInt(id)) {
        data = await this.service.getById(parseInt(id))
      } else {
        return next()
      }

      return res.json(data)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error })
    }
  }

  private post = (req: Request, res: Response) => {
    try {
      const data: Omit<T, 'id' | 'createdAt' | 'lastUpdate'> = req.body

      this.service.create(data)

      return res.status(204).send()
    } catch (error) {
      console.error(error)
      return res.status(400).json({ error })
    }
  }

  private delete = (req: Request, res: Response) => {
    try {
      const data: T = req.body
      this.service.remove(data)
      return res.status(204).send()
    } catch (error) {
      console.error(error)
      return res.status(400).json({ error })
    }
  }
}
