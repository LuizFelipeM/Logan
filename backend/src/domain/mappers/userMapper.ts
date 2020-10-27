import { IProfileDto } from '../interfaces/contracts/IProfileDto'
import { IUserDto } from '../interfaces/contracts/IUserDto'
import { IUser } from '../interfaces/entities/IUser'

export function toUserDto<T extends IUser> (data: T, profile: IProfileDto | undefined): IUserDto {
  return {
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    gender: data.gender,
    birth_date: data.birth_date,
    profile
  }
}
