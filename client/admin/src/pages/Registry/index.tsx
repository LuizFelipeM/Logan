import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DataGridCard, Title } from 'bootstrap-based-components'
import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { IRegistryDetailedDto } from '../../interfaces/contracts/IRegistryDetailedDto'
import registryService from '../../services/registryService'
import './style.scss'

const Registry: React.FC = () => {
  const [registries, setRegistries] = useState<IRegistryDetailedDto[]>([])
  const [text, setText] = useState('')
  useEffect(() => {
    searchWithoutFilter()
  }, [])
  const searchWithoutFilter = () => registryService.getRegistryDetailed()
    .then((registry) => setRegistries(registry))

  function search() {
    registryService.getDetailedSearch(text)
      .then((registry) => setRegistries(registry))
  }

  return (
    <> <Title> Matriculas</Title>
      <DataGridCard
        header="Informaçoes matricula"
        className="card-registry"
        dataSource={
          registries
        }
        columnConfig={[
          { name: 'Matricula', key: 'ra' },
          { name: 'Nome do aluno', key: 'full_name' },
          { name: 'Campus', key: 'campus_name' },
          { name: 'Turma', key: 'class_id' },
          { name: 'Curso', key: 'course_name' },
          { name: 'Situação', key: 'registry_status' },
          { name: 'Ingresso', key: 'start_registry' },
          { name: 'Término', key: 'end_estimate' }
        ]}
      >

        <InputGroup className="mb-3">
          <input
            className="form-control"
            placeholder="Digite sua busca"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={text}
            onChange={(event) => {
              setText(event.target.value)
              if (!event.target.value.length) {
                searchWithoutFilter()
              }
            }}
            onKeyPress={(event) => (event.key === 'Enter' ? search() : null)}
          />
          <InputGroup.Append>
            <Button onClick={() => search()}> <FontAwesomeIcon icon={faSearch} /> </Button>
          </InputGroup.Append>
        </InputGroup>

      </DataGridCard>
    </>

  )
}

export default Registry
