import { Field, Form, Formik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import {
  Alert, Button, Modal, Form as BForm
} from 'react-bootstrap'
import { WrapperContext } from '../../../../contexts/WrapperContext'
import { IProfessorEditDto } from '../../../../interfaces/contracts/IProfessorEditDto'
import { IProfessor } from '../../../../interfaces/models/IProfessor'
import { IProfile } from '../../../../interfaces/models/IProfile'
import professorService from '../../../../services/professorsService'
import profileService from '../../../../services/profileService'
import { IProfessorView } from '../IProfessorView'

interface EditProfessorProps {
  professor: IProfessorView | undefined
  show: boolean
  onClose: () => void
}

interface EditProfessorFormValues {
  first_name: string
  last_name: string
  profile: string
}

const EditProfessor: React.FC<EditProfessorProps> = ({ show, professor, onClose }) => {
  const { notification, setLoading } = useContext(WrapperContext)

  const [profileList, setProfileList] = useState<IProfile[]>([])
  const [professorEdit, setProfessorEdit] = useState<IProfessorEditDto | undefined>(undefined)

  useEffect(() => {
    setLoading(true)

    fetchData()
      .then(([allProfiles, professorEditDetails]) => {
        setProfileList(allProfiles)
        setProfessorEdit(professorEditDetails)
      })
      .catch(() => {
        notification.error(
          'Erro ao obter perfis',
          'Ocorreu um erro ao tentar obter registros de perfis disponíveis, por favor, tente recarregar a página.'
        )
        onClose()
      })
      .finally(() => setLoading(false))
  }, [])

  const fetchData = () => Promise.all([
    profileService.getAll(),
    professorService.getProfessorToEdit(professor?.id as number)
  ])

  const handleSubmit = ({
    first_name, last_name, profile
  }: EditProfessorFormValues) => {
    const editedProfessor: IProfessorEditDto = {
      id: professor?.id as number,
      first_name,
      last_name,
      profile: parseInt(profile, 10),
      subject: {
        class: 1,
        class_time: 120,
        discipline: 1,
        semester: 2
      }
    }

    professorService.update(editedProfessor)
      .then(() => notification.info('Disciplina cadastrada', 'A disciplina cadastrada foi criada com sucesso.'))
      .catch(() => notification.error('Erro ao cadastrar disciplina', 'Ocorreu um erro ao tentar realizar o cadastro da disciplina, por favor, tente novamente realizar o cadastro.'))
  }

  const nameValidator = (value: string) => (value.trim() === '' ? 'O nome da disciplina não pode estar vazio' : undefined)

  return (
    <Modal
      show={show}
      onHide={onClose}
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
            first_name: professorEdit?.first_name as string,
            last_name: professorEdit?.last_name as string,
            profile: professorEdit?.profile.toString() as string
          }}
        >
          {({ errors, touched }) => (
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
              {/* <BForm.Group>
                <BForm.Label>Curso pertencente <span className="required">*</span></BForm.Label>
                <Field
                  as="select"
                  className="form-control"
                  id="disciplineCourse"
                  name="disciplineCourse"
                >
                  {courseList.map((course, i) => <option key={`${course.id}-${i}`} value={course.id}>{course.name}</option>)}
                </Field>
              </BForm.Group> */}

              <Button type="submit">Salvar</Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}

export default EditProfessor
