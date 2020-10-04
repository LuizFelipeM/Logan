import React from 'react'
import DataGridCard from '../../../../components/DataGridCard'

const AcademicCalendar: React.FC = () => (
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
        key: 'val'
      }
    ]}
    dataSource={[{
      id: 1,
      name: 'caneta',
      value: 1.99
    }]}
  />
)

export default AcademicCalendar
