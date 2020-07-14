import Profile from './Profile'

export default interface User {
  id: number,
  name: string,
  gender: string,
  birthDate: Date,
  profile: Profile,
}
