import { IProfile } from '../../../domain/interfaces/profile/IProfile'
import { getProfiles } from '../repositorie/getProfiles'
import { getProfile } from '../repositorie/getProfile'

async function profile (_: void, args: { id: string }): Promise<IProfile | undefined> {
  return await getProfile(args.id)
}

async function profiles (_: void, args: { limit: number }): Promise<Array<IProfile>> {
  return await getProfiles(args.limit)
}

export { profile, profiles }
