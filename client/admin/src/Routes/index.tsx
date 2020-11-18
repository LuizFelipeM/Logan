import * as React from 'react'
import { Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { DisplayContainer, SideMenu } from 'bootstrap-based-components'
import { RouteProp } from 'bootstrap-based-components/dist/@types/RoutesConfig'
import routesConfig from './routesConfig'
import { ReactComponent as Logo } from '../assets/imgs/logo.svg'

const Routes: React.FC = () => {
  const { pathname } = useLocation()

  const configs = Object.entries<RouteProp>(routesConfig)

  const showMenu = configs
    .filter(([_, { hideSideMenu }]) => hideSideMenu)
    .find(([_, { path }]) => pathname.match(path.startsWith('/') ? path : `/${path}`))

  return (
    <>
      {!showMenu && (
      <Col xs={3} className="side-menu-col">
        <SideMenu routeConfig={routesConfig}>
          <Logo title="Logan" /> Logan
        </SideMenu>
      </Col>
      )}
      <Col className="display-col">
        <DisplayContainer config={routesConfig} />
      </Col>
    </>
  )
}

export default Routes
