import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import RoutesConfig from '../../@types/RoutesConfig'

import { ReactComponent as Logo } from '../../assets/imgs/logo.svg'
import './style.scss'

interface SideMenuProps {
  config: RoutesConfig
}

const { Item } = Nav

const SideMenu: React.FC<SideMenuProps> = ({ config }) => {
  const location = useLocation()
  const configs = Object.entries(config)

  return (
    <Nav className="flex-column side-menu-wrapper">
      <Item className="side-menu-item logo">
        <Link to="/">
          <Logo /> Logan
        </Link>
      </Item>
      {configs
        .filter((route) => !route[1].hideOnSideMenu)
        .map((route) => {
          const { path, name, icon } = route[1]
          const isSelected = location.pathname === `/${path}`

          return (
            <Item
              key={route[0]}
              className={`side-menu-item ${route[0]} ${isSelected ? 'selected' : ''}`}
            >
              <Link className="side-menu-link" to={path}>
                {icon && <FontAwesomeIcon className="side-menu-icon" icon={icon} size="lg" />}
                <span className="side-menu-name">{name}</span>
              </Link>
              {isSelected && <span className="side-menu-selectedbar" />}
            </Item>
          )
        })}
    </Nav>
  )
}

export default SideMenu
