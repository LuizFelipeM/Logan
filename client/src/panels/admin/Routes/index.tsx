import * as React from 'react'
import { Col } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import routesConfig from './routesConfig'
import SideMenu from '../../../components/SideMenu'
import DisplayContainer from '../../../components/DisplayContainer'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Col xs={3} className="side-menu-col">
      <SideMenu config={routesConfig} />
    </Col>
    <Col className="display-col">
      <DisplayContainer config={routesConfig} />
    </Col>
  </BrowserRouter>
)

export default Routes
