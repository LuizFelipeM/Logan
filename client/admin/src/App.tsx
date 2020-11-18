import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { WrapperProvider } from './contexts/WrapperContext'
import Routes from './Routes'

import './styles/App.scss'

function App() {
  return (
    <BrowserRouter>
      <Container className="body-wrapper" fluid>
        <UserProvider>
          <WrapperProvider>
            <Row className="body-content">
              <Routes />
            </Row>
          </WrapperProvider>
        </UserProvider>
      </Container>
    </BrowserRouter>
  )
}

export default App
