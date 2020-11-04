import { DataGridCard } from 'bootstrap-based-components'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ITesteCalendarDto } from '../../contracts/ITesteCalendarDto'
import YearCalendar from './calendar'
import './styles.scss'

const AcademicCalendar: React.FC = () => {
  const [Calendardata, setCalendardata] = useState<ITesteCalendarDto[]>([])

  const fetchData = () => Promise.all([

  ])

  return (
    <>
      <Row>
        <Col xs={4} className="d-flex justify-content-center">
          <DataGridCard
            header="Ano Letivo"
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
}

export default AcademicCalendar
