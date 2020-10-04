import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface RouteProp {
  path: string
  name: string
  page: React.FC<any>
  icon?: IconProp
  hideOnSideMenu?: boolean
}

type RoutesConfig = { [key: string]: RouteProp }

export default RoutesConfig
