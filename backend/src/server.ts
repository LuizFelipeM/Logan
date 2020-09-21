import { join } from 'path'
import { glob } from 'glob'
import { startup } from './startup'

const path = join(__dirname, 'controllers')

glob(`${path}/**/[!Abstract]*Controller.{ts,js}`, (err, files) => {
  if (!err) {
    Promise
      .all(files.map(file => import(file)))
      .then(startup)
  } else {
    console.error(err)
  }
})
