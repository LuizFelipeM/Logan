import { inject } from 'inversify'
import { controller } from 'inversify-express-utils'
import { ITypeDiscipline } from '../domain/interfaces/entities/ITypeDicipline'
import { TypeDisciplineService } from '../services/TypeDisciplineService'
import { AbstractController } from './AbstractController'

@controller('/typeDiscipline')
export class TypeDisciplineController extends AbstractController<ITypeDiscipline, TypeDisciplineService> {
  constructor (
    @inject(TypeDisciplineService)
    protected readonly typeDisciplineService: TypeDisciplineService
  ) { super(typeDisciplineService) }
}
