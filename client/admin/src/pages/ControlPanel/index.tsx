import React from 'react'
import { faAddressCard, faBookmark, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Title } from 'bootstrap-based-components'
import { Row, Col, Card } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'
import SafeRoute from '../../Routes/SafeRoute'
import './style.scss'

const ControlPanel: React.FC = () => {
  const { url } = useRouteMatch()

  return (
    <SafeRoute>
      <Row>
        <Col>
          <Title className="control-panel">Painel de controle</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="account-control" to={`${url}/accountControl`}>
            <Card>
              <Card.Body className="content">
                <div className="icon">
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <span className="text">Controle de contas</span>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link className="users-permissions" to={`${url}/userPermissions`}>
            <Card>
              <Card.Body className="content">
                <div className="icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <span className="text">Permissões de usuário</span>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link className="courses-institutions" to={`${url}/courseInstitution`}>
            <Card>
              <Card.Body className="content">
                <div className="icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <span className="text">Registros de instituição e cursos</span>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </SafeRoute>
  )
}

export default ControlPanel
