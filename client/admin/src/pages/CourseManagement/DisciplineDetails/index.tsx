import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const DisciplineDetails: React.FC = () => {
  const { id } = useParams<{id?: string}>()

  return (
    <>
      <Row>
        <Col>
          <h1>DisciplineDetails - {id}</h1>
        </Col>
      </Row>
    </>
  )
}
export default DisciplineDetails
