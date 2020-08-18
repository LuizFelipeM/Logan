import { join } from 'path'
import { loadFilesSync } from 'graphql-tools'

const path = join(__dirname, '..', '..', 'interface')

export const schemas = loadFilesSync(path, {
  ignoredExtensions: ['ts', 'js'],
  recursive: true,
  ignoreIndex: true
})
