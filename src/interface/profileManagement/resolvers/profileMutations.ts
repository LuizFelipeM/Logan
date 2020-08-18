import { v4 as uuid } from 'uuid'
import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { insertProfile } from '../repositorie/insertProfile'

function createProfile (_: void, args: Omit<IProfile, 'id' | 'rules'>): IProfile {
  const id = uuid()
  const profile = { ...args, id }

  insertProfile(profile)

  return profile
}

export { createProfile }
