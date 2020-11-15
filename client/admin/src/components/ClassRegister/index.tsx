import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StandardCard } from 'bootstrap-based-components'
import {
  Field, FieldArray, Form, Formik
} from 'formik'
import React, { useContext } from 'react'
import {
  Button, Form as BForm, InputGroup
} from 'react-bootstrap'
import './style.scss'
import { WrapperContext } from '../../contexts/WrapperContext'
import { IClass } from '../../interfaces/models/IClass'
import { ICourse } from '../../interfaces/models/ICourse'
import classService from '../../services/classService'
import { IStudent } from '../../interfaces/models/IStudent'
import studentService from '../../services/studentService'

interface ClassRegisterFormValues {
  classCourse: string
  students: string[]
}

interface ClassRegisterProps {
  courseList: ICourse[]
  studentList: IStudent[]
}

const ClassRegister: React.FC<ClassRegisterProps> = ({ courseList, studentList }) => {
  const { notification } = useContext(WrapperContext)

  const handleSubmit = ({ classCourse, students }: ClassRegisterFormValues) => {
    const course = parseInt(classCourse, 10)
    const classStudents: number[] = students.map((student) => (student === '' ? studentList[0].id : parseInt(student, 10)))

    const newClass: Omit<IClass, 'id'> = { course }

    classService.create(newClass)
      .then(({ id }) => {
        notification.info('Turma cadastrada', 'A turma cadastrada foi criada com sucesso.')

        Promise.all(
          classStudents.map((student) => studentService.update({
            id: student,
            class: id
          }))
        )
          .then(() => notification.info('Alunos cadastrados a turma', 'Os alunos cadastrados a essa turma foram atribuidos com sucesso.'))
          .catch(() => notification.error('Erro ao atribuir alunos a turma', 'Ocorreu um erro ao tentar realizar a atribuição de alunos a turma, por favor, tente realizar o cadastro novamente.'))
      })
      .catch(() => notification.error('Erro ao cadastrar turma', 'Ocorreu um erro ao tentar realizar o cadastro da turma, por favor, tente realizar o cadastro novamente.'))
  }

  return (
    <StandardCard
      header="Cadastre uma nova turma"
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          classCourse: '1',
          students: []
        }}
      >
        {({ values }) => (
          <Form>
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
            <BForm.Group>
              <FieldArray
                name="students"
                render={(arrayHelpers) => (
                  <>
                    <div className="students-label">
                      <BForm.Label>Alunos da turma</BForm.Label>
                      <Button className="add-student" type="button" onClick={() => arrayHelpers.push('')}>
                        Adicionar aluno
                      </Button>
                    </div>
                    {values.students?.map((_, index) => (
                      <InputGroup
                        key={index}
                        className="student-field"
                      >
                        <Field
                          as="select"
                          className="form-control"
                          name={`students.${index}`}
                        >
                          {studentList.map((student, i) => (
                            <option
                              key={`${student.id}-${i}`}
                              value={student.id}
                            >
                              {student.ra}-nome
                            </option>
                          ))}
                        </Field>
                        <InputGroup.Prepend>
                          <Button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </Button>
                        </InputGroup.Prepend>
                      </InputGroup>
                    ))}
                  </>
                )}
              />
            </BForm.Group>

            <Button type="submit">Salvar</Button>
          </Form>
        )}
      </Formik>
    </StandardCard>
  )
}

export default ClassRegister
