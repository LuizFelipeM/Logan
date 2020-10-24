import * as React from 'react'
import { Col } from 'react-bootstrap'
import { BrowserRouter, useHistory } from 'react-router-dom'
import { SideMenu, DisplayContainer } from 'bootstrap-based-components'
import routesConfig from './routesConfig'

import { ReactComponent as Logo } from '../assets/imgs/logo.svg'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Body />
  </BrowserRouter>
)

const Body: React.FC = () => {
  const history = useHistory()

  return (
    <>
      {!history.location.pathname.match('login') && (
        <Col xs={3} className="side-menu-col">
          <SideMenu config={routesConfig}><Logo title="Logan" /> Logan</SideMenu>
        </Col>
      )}
      <Col className="display-col">
        <DisplayContainer config={routesConfig} />
      </Col>
    </>
  )
}

export default Routes
