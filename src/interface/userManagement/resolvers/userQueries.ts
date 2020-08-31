import { IUser } from '../../../domain/interfaces/user/IUser'
import { getUserById } from '../repositorie/getUser'
import { getUsers } from '../repositorie/getUsers'

async function user (parent: unknown, args: { id: string }, context: unknown): Promise<IUser | undefined> {
  return await getUserById(args.id)
}

async function users (parent: unknown, args: { limit: number }, context: unknown): Promise<Array<IUser>> {
  return await getUsers(args.limit)
}

export { user, users }
