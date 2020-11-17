import { DataGridCard, Title } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { WrapperContext } from '../../../contexts/WrapperContext'
import { IStudentDetailedDto } from '../../../interfaces/contracts/IStudentDetailedDto'
import SafeRoute from '../../../Routes/SafeRoute'
import professorService from '../../../services/professorsService'
import studentService from '../../../services/studentService'
import EditProfessor from './EditProfessor'
import EditStudent from './EditStudent'
import { IProfessorView } from './IProfessorView'

const AccountControl: React.FC = () => {
  const { notification, setLoading } = useContext(WrapperContext)

  const [students, setStudents] = useState<IStudentDetailedDto[]>([])
  const [professors, setProfessors] = useState<IProfessorView[]>([])

  const [selectedStudent, setSelectedStudent] = useState<IStudentDetailedDto | undefined>(undefined)
  const [selectedProfessor, setSelectedProfessor] = useState<IProfessorView | undefined>(undefined)

  useEffect(() => {
    setLoading(true)

    fetchData()
      .then(([studentsList, professorsList]) => {
        const profs: IProfessorView[] = professorsList.map(({
          id, user, full_name, discipline_names
        }) => ({
          id,
          user,
          full_name,
          disciplines: discipline_names.length > 2 ? `${discipline_names.slice(0, 2).join(', ')}...` : discipline_names.join(', ')
        }))

        setStudents(studentsList)
        setProfessors(profs)
      })
      .catch(() => notification.error(
        'Erro ao obter registros',
        'Ocorreu um erro ao tentar obter registros de professores e alunos, por favor, tente carregar a página novamente.'
      ))
      .finally(() => setLoading(false))
  }, [])

  const fetchData = () => Promise.all([
    studentService.getAllDetailed(),
    professorService.getAllMinified()
  ])

  return (
    <SafeRoute>
      <Row>
        <Col>
          <Title className="control-panel">Controle de contas</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataGridCard
            header="Estudantes matriculados"
            dataSource={students}
            onClick={(_, student) => setSelectedStudent(student)}
            columnConfig={[
              { name: 'RA', key: 'ra' },
              { name: 'Nome', key: 'full_name' },
              { name: 'Curso', key: 'course_name' },
              { name: 'Matricula', key: 'registry_status' },
              { name: 'Turma', key: 'class' }
            ]}
          />
        </Col>
        <Col>
          <DataGridCard
            header="Professores"
            dataSource={professors}
            onClick={(_, professor) => setSelectedProfessor(professor)}
            columnConfig={[
              { name: 'Identificação', key: 'id' },
              { name: 'Nome', key: 'full_name' },
              { name: 'Disciplinas', key: 'disciplines' }
            ]}
          />
        </Col>
      </Row>

      <EditStudent />
      <EditProfessor professor={selectedProfessor} />
    </SafeRoute>
  )
}

export default AccountControl
