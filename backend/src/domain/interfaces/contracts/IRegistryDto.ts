import { Override } from '../../../@types/override'
import { IRegistry } from '../entities/IRegistry'
import { IStatusRegistryDto } from './IStatusRegistryDto'

export type IRegistryDto = Override<IRegistry, {
  status: IStatusRegistryDto
}>
