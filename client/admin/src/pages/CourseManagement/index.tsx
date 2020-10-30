import React, { useEffect, useState, useContext } from 'react'
import { Col, Row, Toast } from 'react-bootstrap'
import { DataGridCard, Title } from 'bootstrap-based-components'
import {
  BarChart, CartesianGrid, Legend, Bar, Tooltip, XAxis, YAxis, ResponsiveContainer
} from 'recharts'

import './style.scss'
import disciplineService from '../../services/disciplineService'
import { ITypeDisciplineAndWorkloadDto } from '../../interfaces/contracts/ITypeDisciplineAndWorkloadDto'
import classService from '../../services/classService'
import { IClassMinifyViewDto } from '../../interfaces/contracts/IClassMinifyViewDto'
import { WrapperContext } from '../../contexts/WrapperContext'

const CourseManagement: React.FC = () => {
  const { notification, setLoading } = useContext(WrapperContext)
  const [disciplineData, setDisciplineData] = useState<ITypeDisciplineAndWorkloadDto[]>([])
  const [classesData, setClassesData] = useState<IClassMinifyViewDto[]>([])

  useEffect(() => {
    setLoading(true)

    fetchData()
      .then(([disciplines, classes]) => {
        setDisciplineData(disciplines)
        setClassesData(classes)
      })
      .catch(() => notification.error('Falha ao carregar', 'Erro ao carregar a página, por favor tente novamente mais tarde.'))
      .finally(() => setLoading(false))
  }, [])

  const fetchData = () => Promise.all([
    disciplineService.getAllWithDisciplineTypeAndWorkload(),
    classService.getAllClassMinify()
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
            columnConfig={[
              { name: 'Turma', key: 'class_id' },
              { name: 'Curso', key: 'course_name' },
              { name: 'Qtd. Alunos', key: 'students_count' }
            ]}
          />
        </Col>
        <Col xs={4} />
      </Row>
      <Row>
        <Col xs={4}>
          {/* <StandardCard /> */}
        </Col>
        <Col xs={8} className="bar-chart">
          <h3>Notas e Faltas</h3>
          <ResponsiveContainer height={250}>
            <BarChart
              data={[
                {
                  name: 'Page A',
                  uv: 4000,
                  pv: 2400,
                  ct: 1500
                },
                {
                  name: 'Page B',
                  uv: 3000,
                  pv: 1398
                },
                {
                  name: 'Page C',
                  uv: 2000,
                  pv: 9800
                },
                {
                  name: 'Page D',
                  uv: 2780,
                  pv: 3908
                },
                {
                  name: 'Page E',
                  uv: 1890,
                  pv: 4800
                },
                {
                  name: 'Page F',
                  uv: 2390,
                  pv: 3800
                },
                {
                  name: 'Page G',
                  uv: 3490,
                  pv: 4300
                }
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
              <Bar dataKey="ct" fill="#272727" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </>
  )
}
export default CourseManagement
