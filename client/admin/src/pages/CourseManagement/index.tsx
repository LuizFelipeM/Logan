import React, { useEffect, useState, useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { DataGridCard, Title } from 'bootstrap-based-components'
import {
  BarChart, CartesianGrid, Legend, Bar, Tooltip, XAxis, YAxis, ResponsiveContainer
} from 'recharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useRouteMatch } from 'react-router-dom'
import disciplineService from '../../services/disciplineService'
import { ITypeDisciplineAndWorkloadDto } from '../../interfaces/contracts/ITypeDisciplineAndWorkloadDto'
import classService from '../../services/classService'
import { IClassMinifyViewDto } from '../../interfaces/contracts/IClassMinifyViewDto'
import { WrapperContext } from '../../contexts/WrapperContext'
import courseService from '../../services/courseService'
import { ICoursesMinifyViewDto } from '../../interfaces/contracts/ICoursesMinifyViewDto'
import routesConfig from '../../Routes/routesConfig'
import './style.scss'

const CourseManagement: React.FC = () => {
  const history = useHistory()
  const { url } = useRouteMatch()

  const { notification, setLoading } = useContext(WrapperContext)

  const [disciplineData, setDisciplineData] = useState<ITypeDisciplineAndWorkloadDto[]>([])
  const [classesData, setClassesData] = useState<IClassMinifyViewDto[]>([])
  const [frequencyFoulsByCourse, setFrequencyFoulsByCourse] = useState<ICoursesMinifyViewDto[]>([])

  useEffect(() => {
    setLoading(true)

    fetchData()
      .then(([disciplines, classes, frequencyFoulsByCourse]) => {
        setDisciplineData(disciplines)
        setClassesData(classes)
        setFrequencyFoulsByCourse(frequencyFoulsByCourse)
      })
      .catch(() => notification.error('Falha ao carregar', 'Erro ao carregar a página, por favor tente novamente mais tarde.'))
      .finally(() => setLoading(false))
  }, [])

  const fetchData = () => Promise.all([
    disciplineService.getAllWithDisciplineTypeAndWorkload(),
    classService.getAllClassMinify(),
    courseService.getAllCoursesMinifiedView()
  ])

  return (
    <>
      <Row>
        <Col>
          <Title className="course-management">Gerência de curso</Title>
        </Col>
      </Row>
      <Row className="disciplines-subjects">
        <Col xs={4}>
          <DataGridCard
            header="Disciplinas"
            dataSource={disciplineData}
            onClick={(_, data) => history.push(`${url}/discipline/${data.id}`)}
            columnConfig={[
              { name: 'Nome', key: 'discipline_name' },
              { name: 'Tipo', key: 'discipline_type' },
              { name: 'Carga (h)', key: 'workload' }
            ]}
          />
        </Col>
        <Col xs={4}>
          <DataGridCard
            header="Turmas"
            dataSource={classesData}
            onClick={(_, data) => history.push(`${url}/class/${data.class_id}`)}
            columnConfig={[
              { name: 'Turma', key: 'class_id' },
              { name: 'Curso', key: 'course_name' },
              { name: 'Qtd. Alunos', key: 'students_count' }
            ]}
          />
        </Col>
        <Col xs={4}>
          <Card className="messages-board-card">
            <Card.Body className="content">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span className="text">Acesse aqui seu mural de mensagens</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Card className="detailed-view-card">
            <Card.Body className="content">
              <h3 className="title">Visão detalhada</h3>
              <span className="text">Acesse as notas de alunos em detalhes</span>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={8} className="bar-chart">
          <h3>Notas e Faltas</h3>
          <ResponsiveContainer height={250}>
            <BarChart
              barSize={50}
              data={frequencyFoulsByCourse}
            >
              <Tooltip />
              <Legend iconType="circle" />
              <YAxis />
              <XAxis dataKey="course_name" />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                name="Média de notas"
                dataKey="notes_avg"
                fill="#FFB978"
                unit="%"
              />
              <Bar
                name="Média de frequência"
                dataKey="frequency_avg"
                fill="#5174A8"
                unit="%"
              />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </>
  )
}
export default CourseManagement
