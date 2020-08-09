import { GraphQLSchema, DocumentNode, GraphQLNamedType } from 'graphql'

import { userSchema } from '../../interface/userManagement/schemas/userSchema'
import { profileSchema } from '../../interface/profileManagement/schemas/profileSchema'
import { ruleSchema } from '../../interface/ruleManagement/schemas/ruleSchema'

export const schemas: Array<string | GraphQLSchema | DocumentNode | Array<GraphQLNamedType>> = [
  userSchema,
  profileSchema,
  ruleSchema
]
