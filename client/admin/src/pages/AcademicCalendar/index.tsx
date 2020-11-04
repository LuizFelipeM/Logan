import { DataGridCard } from 'bootstrap-based-components'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ITypeDisciplineAndWorkloadDto } from '../../contracts/ITypeDisciplineAndWorkloadDto'
import YearCalendar from './calendar'
import './styles.scss'

const [Calendardata, setCalendardata] = useState<ITypeDisciplineAndWorkloadDto[]>([])

const AcademicCalendar: React.FC = () => (
  <>
    <Row>
      <Col xs={4} className="d-flex justify-content-center">
        <DataGridCard
          header="Test"
          dataSource={Calendardata}
          columnConfig={[
            { name: 'Turma', key: 'typeName' },
            { name: 'Nº Alunos', key: 'workload' },
            { name: 'Semestre', key: 'name' }
          ]}
        />
      </Col>
      <Col className="d-flex justify-content-center"> <YearCalendar /></Col>
    </Row>
  </>

)

export default AcademicCalendar
