import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import RoutesConfig from '../../@types/RoutesConfig'

import './style.scss'

const DisplayContainer: React.FC<{ config: RoutesConfig }> = ({ config }) => {
  const configs = Object.entries(config)

  return (
    <Container className="display-container-wrapper" fluid>
      <Switch>
        {configs.map((route) => {
          const name = route[0]
          const { path, page } = route[1]

          return (
            <Route
              key={name}
              path={`/${path}`}
              component={page}
              exact
            />
          )
        })}
      </Switch>
    </Container>
  )
}

export default DisplayContainer
