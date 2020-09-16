import { IUserDto } from '../contracts/IUserDto'
import { IUser } from '../interfaces/IUser'

export function toUserDto<T extends IUser> (data: T): IUserDto {
  return {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    birthDate: data.birthDate
  }
}
