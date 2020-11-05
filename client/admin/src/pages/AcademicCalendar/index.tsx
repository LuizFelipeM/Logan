import { DataGridCard } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { WrapperContext } from '../../contexts/WrapperContext'
import { IClassStudentsAndSemesterDto } from '../../interfaces/contracts/IClassStudentsAndSemesterDto'
import studentsService from '../../services/studentsService'
import YearCalendar from './calendar'
import './styles.scss'

const AcademicCalendar: React.FC = () => {
  const { setLoading } = useContext(WrapperContext)

  const [academicCalendarData, setAcademicCalendarData] = useState<IClassStudentsAndSemesterDto[]>([])

  useEffect(() => {
    setLoading(true)

    studentsService.getClassStudentsAndSemester()

      .then((data) => { console.log(data) })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Row>
        <Col xs={4} className="d-flex justify-content-center">
          <DataGridCard
            header="Ano Letivo"
            dataSource={academicCalendarData}
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
