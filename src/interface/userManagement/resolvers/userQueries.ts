import { IUser } from '../../../domain/interfaces/user/IUser'
import { getUserById } from '../repositorie/getUser'
import { getUsers } from '../repositorie/getUsers'

async function user (_: void, args: { id: string }): Promise<IUser | undefined> {
  return await getUserById(args.id)
}

async function users (_: void, args: { limit: number }): Promise<Array<IUser>> {
  return await getUsers(args.limit)
}

export { user, users }
