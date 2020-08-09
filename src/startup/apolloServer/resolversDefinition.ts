import { IResolversParameter } from 'apollo-server-express'

import { userResolver } from '../../interface/userManagement/resolvers/userResolver'
import { profileResolver } from '../../interface/profileManagement/resolvers/profileResolver'
import { ruleResolver } from '../../interface/ruleManagement/resolvers/ruleResolver'

export const resolvers: IResolversParameter = [
  userResolver,
  profileResolver,
  ruleResolver
]
