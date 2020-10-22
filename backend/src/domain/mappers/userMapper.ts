import { IProfileDto } from '../interfaces/contracts/IProfileDto'
import { IUserDto } from '../interfaces/contracts/IUserDto'
import { IUser } from '../interfaces/entities/IUser'

export function toUserDto<T extends IUser> (data: T, userProfile: IProfileDto | undefined): IUserDto {
  return {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    birthDate: data.birthDate,
    profile: userProfile,
    createdAt: data.createdAt,
    lastUpdate: data.lastUpdate
  }
}
