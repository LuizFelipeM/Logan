import { StandardCard, Title } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import {
  Button, Col, Row, Form as BForm, Alert
} from 'react-bootstrap'
import { Formik, Field, Form } from 'formik'
import { ICourse } from '../../../interfaces/models/ICourse'
import { IDiscipline } from '../../../interfaces/models/IDiscipline'
import { ITypeDiscipline } from '../../../interfaces/models/ITypeDicipline'

import './style.scss'
import courseService from '../../../services/courseService'
import typeDisciplineService from '../../../services/typeDisciplineService'
import disciplineService from '../../../services/disciplineService'
import { WrapperContext } from '../../../contexts/WrapperContext'

const DisciplineClassRegister: React.FC = () => (
  <>
    <Row>
      <Col>
        <Title>Cadastro de disciplinas e turmas</Title>
      </Col>
    </Row>
    <Row>
      <Col>
        <DisciplineRegister />
      </Col>
      <Col>
        <ClassRegister />
      </Col>
    </Row>
  </>
)

interface DisciplineRegisterFormValues {
  name: string;
  workload: number;
  disciplineType: string;
  disciplineCourse: string;
}

const DisciplineRegister: React.FC = () => {
  const { notification } = useContext(WrapperContext)
  const [allCourses, setAllCourses] = useState<ICourse[]>([])
  const [allDisciplineTypes, setAllDisciplineTypes] = useState<ITypeDiscipline[]>([])

  useEffect(() => {
    fetchData()
      .then(([courses, disciplineTypes]) => {
        setAllCourses(courses)
        setAllDisciplineTypes(disciplineTypes)
      })
  }, [])

  const fetchData = () => Promise.all([
    courseService.getAll(),
    typeDisciplineService.getAll()
  ])

  const handleSubmit = ({
    name, workload, disciplineCourse, disciplineType
  }: DisciplineRegisterFormValues) => {
    const course = parseInt(disciplineCourse, 10)
    const type_discipline = parseInt(disciplineType, 10)

    const discipline: Omit<IDiscipline, 'id'> = {
      name, workload, course, type_discipline
    }

    disciplineService.create(discipline)
      .then(() => notification.info('Disciplina cadastrada', 'A disciplina cadastrada foi criada com sucesso.'))
      .catch(() => notification.error('Erro ao cadastrar disciplina', 'Ocorreu um erro ao tentar realizar o cadastro da disciplina, por favor, tente novamente realizar o cadastro.'))
  }

  const nameValidator = (value: string) => (value.trim() === '' ? 'O nome da disciplina não pode estar vazio' : undefined)
  const workloadValidator = (value: number) => (value <= 0 ? 'A carga horária precisa ser maior que 0' : undefined)

  return (
    <StandardCard
      header="Cadastre uma nova disciplina"
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: '',
          workload: 0,
          disciplineType: '1',
          disciplineCourse: '1'
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <BForm.Group>
              <BForm.Label>Nome <span className="required">*</span></BForm.Label>
              <Field
                className="form-control"
                id="name"
                name="name"
                validate={nameValidator}
              />
              {errors.name && touched.name && (<Alert className="form-error" variant="danger">{errors.name}</Alert>)}
            </BForm.Group>
            <BForm.Group>
              <BForm.Label>Carga horária <span className="required">*</span></BForm.Label>
              <Field
                className="form-control"
                id="workload"
                name="workload"
                type="number"
                validate={workloadValidator}
              />
              {errors.workload && touched.workload && (<Alert className="form-error" variant="danger">{errors.workload}</Alert>)}
            </BForm.Group>
            <BForm.Group>
              <BForm.Label>Tipo de disciplina <span className="required">*</span></BForm.Label>
              <Field
                className="form-control"
                as="select"
                id="disciplineType"
                name="disciplineType"
              >
                {allDisciplineTypes.map((type) => <option value={type.id}>{type.name}</option>)}
              </Field>
            </BForm.Group>
            <BForm.Group>
              <BForm.Label>Curso pertencente <span className="required">*</span></BForm.Label>
              <Field
                as="select"
                className="form-control"
                id="disciplineCourse"
                name="disciplineCourse"
              >
                {allCourses.map((course) => <option value={course.id}>{course.name}</option>)}
              </Field>
            </BForm.Group>

            <Button type="submit">Salvar</Button>
          </Form>
        )}
      </Formik>
    </StandardCard>
  )
}

const ClassRegister: React.FC = () => (
  <StandardCard
    header="Cadastre uma nova turma"
  />
)

export default DisciplineClassRegister
