import { StandardCard } from 'bootstrap-based-components'
import { Field, Form, Formik } from 'formik'
import React, { useContext } from 'react'
import { Button, Form as BForm, Alert } from 'react-bootstrap'
import { WrapperContext } from '../../contexts/WrapperContext'
import { ICourse } from '../../interfaces/models/ICourse'
import { IDiscipline } from '../../interfaces/models/IDiscipline'
import { ITypeDiscipline } from '../../interfaces/models/ITypeDicipline'
import disciplineService from '../../services/disciplineService'

interface DisciplineRegisterFormValues {
  name: string;
  workload: number;
  disciplineType: string;
  disciplineCourse: string;
}

interface DisciplineRegisterProps {
  disciplineTypeList: ITypeDiscipline[]
  courseList: ICourse[]
}

const DisciplineRegister: React.FC<DisciplineRegisterProps> = ({ courseList, disciplineTypeList }) => {
  const { notification } = useContext(WrapperContext)

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
                {disciplineTypeList.map((type, i) => <option key={`${type.id}-${i}`} value={type.id}>{type.name}</option>)}
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
                {courseList.map((course, i) => <option key={`${course.id}-${i}`} value={course.id}>{course.name}</option>)}
              </Field>
            </BForm.Group>

            <Button type="submit">Salvar</Button>
          </Form>
        )}
      </Formik>
    </StandardCard>
  )
}

export default DisciplineRegister
