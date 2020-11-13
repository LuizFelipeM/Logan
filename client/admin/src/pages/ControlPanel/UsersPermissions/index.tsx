import { Title } from 'bootstrap-based-components'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SafeRoute from '../../../Routes/SafeRoute'

// import { Container } from './styles';

const UsersPermissions: React.FC = () => (
  <SafeRoute>
    <Row>
      <Col>
        <Title className="control-panel">Permissões de usuários</Title>
      </Col>
    </Row>
  </SafeRoute>
)

export default UsersPermissions
