import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { UserProvider } from './contexts/UserContext'
import { WrapperProvider } from './contexts/WrapperContext'
import Routes from './Routes'

import './styles/App.scss'

function App() {
  return (
    <Container className="body-wrapper" fluid>
      <UserProvider>
        <WrapperProvider>
          <Row className="body-content">
            <Routes />
          </Row>
        </WrapperProvider>
      </UserProvider>
    </Container>
  )
}

export default App
