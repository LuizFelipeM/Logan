import { DataGridCard } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { WrapperContext } from '../../contexts/WrapperContext'
import { IClassStudentsAndSemesterDto } from '../../interfaces/contracts/IClassStudentsAndSemesterDto'
import studentsService from '../../services/studentsService'
import YearCalendar from './YearAcademic'
import './styles.scss'

const AcademicCalendar: React.FC = () => {
  const { setLoading } = useContext(WrapperContext)

  const [academicCalendar, setAcademicCalendar] = useState<IClassStudentsAndSemesterDto[]>([])

  useEffect(() => {
    setLoading(true)

    studentsService.getClassStudentsAndSemester()
      .then((academic) => setAcademicCalendar(academic))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Row>
        <Col xs={4}>
          <DataGridCard
            header="Ano Letivo"
            dataSource={academicCalendar}
            columnConfig={[
              { name: 'Turma', key: 'class' },
              { name: 'Nº Alunos', key: 'student' },
              { name: 'Semestre', key: 'semester' }
            ]}
          />
        </Col>
        <Col className="year_calendar"> <YearCalendar /></Col>
      </Row>
    </>
  )
}

export default AcademicCalendar
