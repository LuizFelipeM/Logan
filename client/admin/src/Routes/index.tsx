import * as React from 'react'
import { Col } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { SideMenu, DisplayContainer } from 'bootstrap-based-components'
import routesConfig from './routesConfig'

import { ReactComponent as Logo } from '../assets/imgs/logo.svg'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Col xs={3} className="side-menu-col">
      <SideMenu config={routesConfig}> <Logo /> </SideMenu>
    </Col>
    <Col className="display-col">
      <DisplayContainer config={routesConfig} />
    </Col>
  </BrowserRouter>
)

export default Routes
