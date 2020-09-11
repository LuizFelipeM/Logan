import { Override } from '../../@types/override'
import { IRegistry } from '../interfaces/IRegistry'
import { IStatusRegistryDto } from './IStatusRegistryDto'

export type IRegistryDto = Override<IRegistry, {
  status: IStatusRegistryDto
}>
