import { StandardCard, Title } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import {
  Col, Row
} from 'react-bootstrap'
import './style.scss'
import { ICourse } from '../../../interfaces/models/ICourse'
import { ITypeDiscipline } from '../../../interfaces/models/ITypeDicipline'
import courseService from '../../../services/courseService'
import typeDisciplineService from '../../../services/typeDisciplineService'
import { WrapperContext } from '../../../contexts/WrapperContext'
import DisciplineRegister from '../../../components/DisciplineRegister'
import ClassRegister from '../../../components/ClassRegister'
import studentService from '../../../services/studentService'
import { IStudent } from '../../../interfaces/models/IStudent'

const DisciplineClassRegister: React.FC = () => {
  const { setLoading, notification } = useContext(WrapperContext)

  const [courseList, setCourseList] = useState<ICourse[]>([])
  const [disciplineTypeList, setDisciplineTypeList] = useState<ITypeDiscipline[]>([])
  const [studentList, setStudentList] = useState<IStudent[]>([])

  useEffect(() => {
    setLoading(true)

    fetchData()
      .then(([courses, disciplineTypes, students]) => {
        setCourseList(courses)
        setDisciplineTypeList(disciplineTypes)
        setStudentList(students)
      })
      .catch(() => notification.error('Erro ao carregar a página', 'Ocorreu um erro ao realizar o carregamento da página, por favor, tente carregar a página novamente.'))
      .finally(() => setLoading(false))
  }, [])

  const fetchData = () => Promise.all([
    courseService.getAll(),
    typeDisciplineService.getAll(),
    studentService.getAll()
  ])

  return (
    <>
      <Row>
        <Col>
          <Title>Cadastro de disciplinas e turmas</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <DisciplineRegister
            courseList={courseList}
            disciplineTypeList={disciplineTypeList}
          />
        </Col>
        <Col>
          <ClassRegister
            courseList={courseList}
            studentList={studentList}
          />
        </Col>
      </Row>
    </>
  )
}

export default DisciplineClassRegister
