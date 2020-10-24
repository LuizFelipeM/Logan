import * as React from 'react'
import { useState } from 'react'
import {
  Form,
  Container,
  Jumbotron,
  Card,
  Row,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/imgs/logo.svg'
import routesConfig from '../../Routes/routesConfig'
import userService from '../../services/userService'

import './style.scss'

const Login: React.FC = () => {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()

    userService.authenticate(email, password)

    setValidated(true)
  }

  return (
    <>
      <Jumbotron className="login-container" fluid>
        <Container>
          <Row className="justify-content-center">
            <Card className="login-card-form">
              <Card.Header className="login-header">
                <Logo title="Logan" />
                <h1>Logan</h1>
              </Card.Header>
              <Card.Body className="login-form">
                <div>
                  <Form onSubmit={handleSubmit} validated={validated} noValidate>
                    <Form.Group controlId="formGroupEmail" className="email input">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Insira seu email"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword" className="password input">
                      <Form.Label>Senha:</Form.Label>
                      <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Insira sua senha"
                        required
                      />
                    </Form.Group>
                    <Button className="login-btn" type="submit" block>
                      Entrar
                    </Button>
                  </Form>
                  <span className="password-recovery">
                    <Link to={routesConfig.passwordRecovery.path}>Esqueci minha senha</Link>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Jumbotron>
    </>
  )
}

export default Login
