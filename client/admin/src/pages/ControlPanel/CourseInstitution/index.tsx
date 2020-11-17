import { DataGridCard, StandardCard, Title } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import {
  Row,
  Col,
  Form,
  Card,
  Modal,
  Button
} from 'react-bootstrap'
import { WrapperContext } from '../../../contexts/WrapperContext'
import { ICouseNameSemesterAndCampusNameDto } from '../../../interfaces/contracts/ICourseNameSemestersAndCampusNameDto'
import { ICampus } from '../../../interfaces/models/ICampus'
import SafeRoute from '../../../Routes/SafeRoute'
import campusService from '../../../services/campusService'
import PopUpCampus from './PopUpCampus'
import './style.scss'

// import { Container } from './styles';

const CourseInstitution: React.FC = () => {
  const { notification, setLoading } = useContext(WrapperContext)

  const [Campus, setCampus] = useState<ICampus[]>([])

  useEffect(() => {
    setLoading(true)

    campusService.getAll()
      .then((campus) => setCampus(campus))
      .catch(() => notification.error('Erro ao carregar a página', 'Ocorreu um erro ao finalizar o carretamento da página, tente carregar a página novamente'))
      .finally(() => setLoading(false))
  }, [])

  const [couseNameSemesterAndCampusName, setCouseNameSemesterAndCampusName] = useState<ICouseNameSemesterAndCampusNameDto[]>([])

  useEffect(() => {
    setLoading(true)

    campusService.getCourseNameSemesterAndCampusName()
      .then((course) => setCouseNameSemesterAndCampusName(course))
      .catch(() => notification.error('Erro ao carregar a página', 'Ocorreu um erro ao finalizar o carretamento da página, tente carregar a página novamente'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <SafeRoute>
        <Row>
          <Col>
            <Title className="control-panel">Registros de instituição e cursos</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataGridCard
              className="card-campus-grid"
              header="Campus"
              dataSource={Campus}
              columnConfig={[
                { name: 'Campus', key: 'name' },
                { name: 'UF', key: 'uf' }
              ]}
            >
              <PopUpCampus />
            </DataGridCard>
          </Col>
          <Col>
            <DataGridCard
              className="card-courses-grid"
              header="Cursos"
              dataSource={couseNameSemesterAndCampusName}
              columnConfig={[
                { name: 'Cursos', key: 'course_name' },
                { name: 'Qtnd Semestres', key: 'total_semester' },
                { name: 'Campus', key: 'campus_name' }
              ]}
            />
          </Col>
        </Row>
      </SafeRoute>
    </>
  )
}

export default CourseInstitution
