import { DataGridCard, Title } from 'bootstrap-based-components'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  BarChart, CartesianGrid, Legend, Bar, Tooltip, XAxis, YAxis, ResponsiveContainer
} from 'recharts'

import './style.scss'

const CourseManagement: React.FC = () => (
  <>
    <Row>
      <Col>
        <Title>Gerência de curso</Title>
      </Col>
    </Row>
    <Row>
      <Col xs={4}>
        <DataGridCard
          header="Disciplinas"
          dataSource={[]}
          columnConfig={[
            { name: 'Nome', key: 'name' },
            { name: 'Tipo', key: 'type_discipline' },
            { name: 'Carga', key: 'workload' }
          ]}
        />
      </Col>
      <Col xs={4}>
        <DataGridCard
          header="Turmas"
          dataSource={[]}
          columnConfig={[
            { name: 'Turma', key: 'subject' },
            { name: 'Curso', key: 'course' },
            { name: 'Qtd. Pessoas', key: 'quantity' }
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
        <ResponsiveContainer height={250}>
          <BarChart
            data={[
              {
                name: 'Page A',
                uv: 4000,
                pv: 2400
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
          </BarChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  </>
)

export default CourseManagement
