import { DataGridCard, Title } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { WrapperContext } from '../../contexts/WrapperContext'
import { IClassStudentsAndSemesterDto } from '../../interfaces/contracts/IClassStudentsAndSemesterDto'
import studentsService from '../../services/studentsService'
import YearCalendar from './YearAcademic'
import './styles.scss'

const AcademicCalendar: React.FC = () => {
  const { notification, setLoading } = useContext(WrapperContext)

  const [academicCalendar, setAcademicCalendar] = useState<IClassStudentsAndSemesterDto[]>([])

  useEffect(() => {
    setLoading(true)

    studentsService.getClassStudentsAndSemester()
      .then((academic) => setAcademicCalendar(academic))
      .catch(() => notification.error('Erro ao carregar a página', 'Ocorreu um erro ao finalizar o carretamento da página, tente carregar a página novamente'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Row>
        <Col>
          <Title className="academica-year">Ano Letivo</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <DataGridCard
            className="card-academic-year"
            header="Ano Letivo"
            dataSource={academicCalendar}
            columnConfig={[
              { name: 'Turma', key: 'class' },
              { name: 'Nº Alunos', key: 'student' },
              { name: 'Semestre', key: 'semester' }
            ]}
          />
        </Col>
        <Col className="year_calendar">
          <YearCalendar />
        </Col>
        <Col className="subtitles">
          <div className="sub circle1"><span> Periodo de avaliações (P1/P2)</span> </div>
          <div className="sub circle2"><span> Periodo de substitutivas</span> </div>
          <div className="sub circle3"><span> Periodo de exame</span> </div>

        </Col>
      </Row>
    </>
  )
}

export default AcademicCalendar
