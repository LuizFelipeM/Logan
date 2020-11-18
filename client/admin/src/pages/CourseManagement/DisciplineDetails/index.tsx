import { DataGridCard, Title } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { WrapperContext } from '../../../contexts/WrapperContext'
import { IDisciplineDetailedDto } from '../../../interfaces/contracts/IDisciplineDetailedDto'
import SafeRoute from '../../../Routes/SafeRoute'
import disciplineService from '../../../services/disciplineService'

import './style.scss'

const DisciplineDetails: React.FC = () => {
  const { id } = useParams<{id?: string}>()
  const { notification, setLoading } = useContext(WrapperContext)

  const [disciplineDetails, setDisciplineDetails] = useState<IDisciplineDetailedDto[]>([])

  useEffect(() => {
    setLoading(true)

    disciplineService.getWithDetails(Number(id))
      .then((details) => setDisciplineDetails(details))
      .catch(() => notification.error('Falha ao carregar', 'Erro ao carregar a página, por favor tente novamente mais tarde.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SafeRoute>
      <Row>
        <Col>
          <Title>{disciplineDetails[0]?.discipline_name}</Title>
          <DataGridCard
            className="discipline-class-grid"
            header="Informações da disciplina por turma"
            dataSource={disciplineDetails}
            columnConfig={[
              { name: 'Turma', key: 'class_id' },
              { name: 'Qtd. Alunos', key: 'students_count' },
              { name: 'Semestre', key: 'semester_course' },
              { name: 'Frequência (%)', key: 'frequency' },
              { name: 'Média de notas', key: 'final_note_avg' }
            ]}
          />
        </Col>
      </Row>
    </SafeRoute>
  )
}
export default DisciplineDetails
