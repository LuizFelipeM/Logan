import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Field, FieldArray, Form, Formik
} from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import {
  Alert, Button, Modal, Form as BForm, Row, Col
} from 'react-bootstrap'
import { WrapperContext } from '../../../../contexts/WrapperContext'
import { IProfessorEditDto } from '../../../../interfaces/contracts/IProfessorEditDto'
import { IClass } from '../../../../interfaces/models/IClass'
import { IDiscipline } from '../../../../interfaces/models/IDiscipline'
import { IProfile } from '../../../../interfaces/models/IProfile'
import { ISemester } from '../../../../interfaces/models/ISemester'
import classService from '../../../../services/classService'
import disciplineService from '../../../../services/disciplineService'
import professorService from '../../../../services/professorsService'
import profileService from '../../../../services/profileService'
import semesterService from '../../../../services/semesterService'
import { IProfessorView } from '../IProfessorView'
import './style.scss'

interface EditProfessorProps {
  professor: IProfessorView | undefined
  onClose?: () => void
}

interface EditProfessorFormValues {
  first_name: string
  last_name: string
  profile: string
}

const EditProfessor: React.FC<EditProfessorProps> = ({ professor, onClose }) => {
  const { notification, setLoading } = useContext(WrapperContext)

  const [show, setShow] = useState(!!professor)

  const [profileList, setProfileList] = useState<IProfile[]>([])
  const [classList, setClassList] = useState<IClass[]>([])
  const [disciplineList, setDisciplineList] = useState<IDiscipline[]>([])
  const [semesterList, setSemesterList] = useState<ISemester[]>([])

  const [professorEdit, setProfessorEdit] = useState<IProfessorEditDto | undefined>(undefined)

  useEffect(() => {
    setShow(!!professor)

    if (professor) {
      setLoading(true)
      fetchData(professor.id)
        .then(([
          allProfiles,
          professorEditDetails,
          allClasses,
          allDisciplines,
          allSemester
        ]) => {
          setProfileList(allProfiles)
          setClassList(allClasses)
          setDisciplineList(allDisciplines)
          setSemesterList(allSemester)
          setProfessorEdit(professorEditDetails)
        })
        .catch(() => {
          notification.error(
            'Erro ao obter perfis',
            'Ocorreu um erro ao tentar obter registros de perfis disponíveis, por favor, tente recarregar a página.'
          )
          handleClose()
        })
        .finally(() => setLoading(false))
    }
  }, [professor])

  const fetchData = (id: number) => Promise.all([
    profileService.getAll(),
    professorService.getProfessorToEdit(id),
    classService.getAll(),
    disciplineService.getAll(),
    semesterService.getAll()
  ])

  const handleClose = () => {
    setShow(false)
    if (onClose) {
      onClose()
    }
  }

  const handleSubmit = ({
    first_name, last_name, profile
  }: EditProfessorFormValues) => {
    const editedProfessor: IProfessorEditDto = {
      id: professor?.id as number,
      first_name,
      last_name,
      profile: parseInt(profile, 10),
      subjects: [{
        class: 1,
        class_time: 120,
        discipline: 1,
        semester: 2
      }]
    }

    professorService.update(editedProfessor)
      .then(() => notification.info('Disciplina cadastrada', 'A disciplina cadastrada foi criada com sucesso.'))
      .catch(() => notification.error('Erro ao cadastrar disciplina', 'Ocorreu um erro ao tentar realizar o cadastro da disciplina, por favor, tente novamente realizar o cadastro.'))
      .finally(() => handleClose())
  }

  const nameValidator = (value: string) => (value.trim() === '' ? 'O nome da disciplina não pode estar vazio' : undefined)
  const classTimeValidator = (value: number) => (value < 50 ? 'É necessário um mínimo de 50 minutos de aula' : undefined)

  return (
    <>
      {professorEdit
      && (
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          backdrop="static"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Editar registro de professor de {professor?.full_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              onSubmit={handleSubmit}
              initialValues={{
                first_name: professorEdit.first_name,
                last_name: professorEdit.last_name,
                profile: professorEdit.profile.toString(),
                subjects: professorEdit.subjects
              }}
            >
              {({ values, errors, touched }) => (
                <Form>
                  <BForm.Group>
                    <BForm.Label>Primeiro nome <span className="required">*</span></BForm.Label>
                    <Field
                      className="form-control"
                      id="first-name"
                      name="first_name"
                      validate={nameValidator}
                    />
                    {errors.first_name && touched.first_name && (<Alert className="form-error" variant="danger">{errors.first_name}</Alert>)}
                  </BForm.Group>
                  <BForm.Group>
                    <BForm.Label>Ultimo nome <span className="required">*</span></BForm.Label>
                    <Field
                      className="form-control"
                      id="last-name"
                      name="last_name"
                      validate={nameValidator}
                    />
                    {errors.last_name && touched.last_name && (<Alert className="form-error" variant="danger">{errors.last_name}</Alert>)}
                  </BForm.Group>
                  <BForm.Group>
                    <BForm.Label>Perfil <span className="required">*</span></BForm.Label>
                    <Field
                      className="form-control"
                      as="select"
                      id="profile"
                      name="profile"
                    >
                      {profileList.map((profile, i) => <option key={`${profile.id}-${i}`} value={profile.id}>{profile.name}</option>)}
                    </Field>
                  </BForm.Group>

                  {/* MATÉRIAS */}
                  <BForm.Group>
                    <FieldArray
                      name="subjects"
                      render={(arrayHelpers) => (
                        <>
                          <div className="students-label">
                            <BForm.Label>Matérias {/* <span className="required">*</span> */}</BForm.Label>
                            <Button className="add-subject" type="button" onClick={() => arrayHelpers.push({})}>
                              Adicionar matéria
                            </Button>
                          </div>
                          {values.subjects.map((_, i) => (
                            <Row className="subjects-row">
                              <Col>
                                <Field
                                  as="select"
                                  className="form-control"
                                  name={`subjects[${i}].class`}
                                >
                                  {classList.map((classOpt, i) => <option key={`${classOpt.id}-${i}`} value={classOpt.id}>{classOpt.id}</option>)}
                                </Field>
                              </Col>
                              <Col>
                                <Field
                                  as="select"
                                  className="form-control"
                                  name={`subjects[${i}].discipline`}
                                >
                                  {disciplineList.map((discipline, i) => <option key={`${discipline.id}-${i}`} value={discipline.id}>{discipline.name}</option>)}
                                </Field>
                              </Col>
                              <Col>
                                <Field
                                  as="select"
                                  className="form-control"
                                  name={`subjects[${i}].semester`}
                                >
                                  {semesterList.map((semester, i) => (
                                    <option
                                      key={`${semester.id}-${i}`}
                                      value={semester.id}
                                    >
                                      Curso {semester.semester_course} - {semester.semester_year}/{new Date(semester.year).getFullYear()}
                                    </option>
                                  ))}
                                </Field>
                              </Col>
                              <Col>
                                <Field
                                  className="form-control"
                                  type="number"
                                  name={`subjects[${i}].class_time`}
                                  validate={classTimeValidator}
                                />
                              </Col>
                              <Col xs={1}>
                                <Button
                                  type="button"
                                  variant="danger"
                                  onClick={() => arrayHelpers.remove(i)}
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </Button>
                              </Col>
                            </Row>
                          ))}
                        </>
                      )}
                    />
                  </BForm.Group>

                  <Button type="submit">Salvar</Button>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      )}
    </>
  )
}

export default EditProfessor
