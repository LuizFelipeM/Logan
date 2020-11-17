import { Title } from 'bootstrap-based-components'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SafeRoute from '../../../Routes/SafeRoute'

// import { Container } from './styles';

const AccountControl: React.FC = () => (
  <SafeRoute>
    <Row>
      <Col>
        <Title className="control-panel">Controle de contas</Title>
      </Col>
    </Row>
  </SafeRoute>
)

export default AccountControl
