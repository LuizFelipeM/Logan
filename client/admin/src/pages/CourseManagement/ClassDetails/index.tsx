import { DataGridCard, Title } from 'bootstrap-based-components'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { WrapperContext } from '../../../contexts/WrapperContext'
import { IClassDetailedViewDto } from '../../../interfaces/contracts/IClassDetailedViewDto'
import SafeRoute from '../../../Routes/SafeRoute'
import classService from '../../../services/classService'

import './style.scss'

const ClassDetails: React.FC = () => {
  const { id } = useParams<{id?: string}>()
  const { notification, setLoading } = useContext(WrapperContext)

  const [classDetails, setClassDetails] = useState<IClassDetailedViewDto[]>([])

  useEffect(() => {
    setLoading(true)

    classService.getWithDetails(Number(id))
      .then((details) => setClassDetails(details))
      .catch(() => notification.error('Falha ao carregar', 'Erro ao carregar a página, por favor tente novamente mais tarde.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SafeRoute>
      <Row>
        <Col>
          <Title>Turma - {id}</Title>
          <DataGridCard
            className="discipline-class-grid"
            header="Informações da turma"
            dataSource={classDetails}
            columnConfig={[
              { name: 'RA', key: 'ra' },
              { name: 'Aluno', key: 'full_name' },
              { name: 'Curso', key: 'course_name' },
              { name: 'Disciplina', key: 'discipline_name' },
              { name: 'Faltas', key: 'fouls' },
              { name: 'Nota P1', key: 'note_p1' },
              { name: 'Nota P2', key: 'note_p2' },
              { name: 'Nota Substitutiva', key: 'note_sub' },
              { name: 'Nota Exame', key: 'note_exam' },
              { name: 'Nota Final', key: 'final_note' }
            ]}
          />
        </Col>
      </Row>
    </SafeRoute>
  )
}
export default ClassDetails
