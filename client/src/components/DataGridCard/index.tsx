import React from 'react'
import { Table } from 'react-bootstrap'
import AppCard, { AppCardProps } from '../StandardCard'

import './style.scss'

interface ColumnConfig {
  key: string
  name: string
}

interface TableCardProps {
  header?: string
  columnConfig: ColumnConfig[]
  dataSource: any[]
}

const DataGridCard: React.FC<TableCardProps & AppCardProps> = ({
  header, img, title, footer, columnConfig, dataSource
}) => (
  <AppCard
    header={header}
    footer={footer}
    title={title}
    img={img}
  >
    <Table striped borderless hover>
      <thead>
        <tr>
          {columnConfig.map((column, index) => (
            <th
              key={index}
              className={`table-header identifier-${column.key}`}
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((val, index) => (
          <tr key={index}>
            {columnConfig.map((config, i) => <td key={`${config.key}-${i}`}>{val[config.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  </AppCard>
)

export default DataGridCard
