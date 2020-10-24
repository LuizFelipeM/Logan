import { inject } from 'inversify'
import bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/UserRepository'
import { IUserDto } from '../domain/interfaces/contracts/IUserDto'

export class AuthService {
  constructor (
    @inject(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  authenticateUser = async (email: string, password: string): Promise<IUserDto> => {
    const user = await this.userRepository.selectByEmail(email)

    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        return user
      } else {
        throw new Error('Incorrect Email or Password')
      }
    } else {
      throw new Error('User does not exists')
    }
  }
}
