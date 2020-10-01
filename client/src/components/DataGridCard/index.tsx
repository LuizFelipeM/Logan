import React from 'react'
import { Table } from 'react-bootstrap'
import AppCard, { AppCardProps } from '../AppCard'

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

const DataGridCard: React.FC<TableCardProps & AppCardProps> = (props) => (
  <AppCard
    header={props.header}
    footer={props.footer}
    title={props.title}
    img={props.img}
  >
    <Table striped borderless hover>
      <thead>
        <tr>
          {props.columnConfig.map((column, i) => (
            <th
              key={i}
              className={`table-header identifier-${column.key}`}
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.dataSource.map((val, i) => (
          <tr key={i}>
            {props.columnConfig.map((config, index) => <td key={`${config.key}-${index}`}>{val[config.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  </AppCard>
)

export default DataGridCard;