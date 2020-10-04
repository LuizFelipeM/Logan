import React from 'react'
import { Card } from 'react-bootstrap'

import './style.scss'

const {
  Header, Body, Footer, Title, Img
} = Card

type CommonTypes = string | number | React.ReactNode

export interface AppCardProps {
  header?: CommonTypes
  footer?: CommonTypes
  title?: CommonTypes
  img?: string
}

const AppCard: React.FC<AppCardProps> = ({
  header, img, title, footer, children
}) => (
  <Card className="app-card">
    {header && <Header className="app-card-header" as="h4">{header}</Header>}
    <Body className="app-card-body">
      {img && <Img className="app-card-img" variant="top" src={img} />}
      {title && <Title className="app-card-title">{title}</Title>}
      {children}
      {footer && <Footer className="app-card-footer">{footer}</Footer>}
    </Body>
  </Card>
)

export default AppCard
