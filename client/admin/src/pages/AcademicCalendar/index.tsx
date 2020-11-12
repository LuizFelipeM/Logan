import React from 'react'
import { DataGridCard } from 'bootstrap-based-components'
import { Link } from 'react-router-dom'

const AcademicCalendar: React.FC = () => (
  <>
    <Link to="academicCalendar/teste">Teste</Link>
    <DataGridCard
      header="Teste"
      columnConfig={[
        {
          name: 'ID',
          key: 'id'
        }, {
          name: 'Nome',
          key: 'name'
        }, {
          name: 'Custo',
          key: 'value'
        }
      ]}
      dataSource={[{
        id: 1,
        name: 'caneta',
        value: 1.99
      }]}
    />
  </>
)

export default AcademicCalendar
