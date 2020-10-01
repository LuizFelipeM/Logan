import React from 'react'
import { Card } from 'react-bootstrap'

import './style.scss'

const Header = Card.Header
const Body = Card.Body
const Footer = Card.Footer
const Title = Card.Title
const Img = Card.Img

type CommonTypes = string | number | React.ReactNode

export interface AppCardProps {
  header?: CommonTypes
  footer?: CommonTypes
  title?: CommonTypes
  img?: string
}

const AppCard: React.FC<AppCardProps> = (props) => (
  <Card className="app-card">
    {props.header && <Header className="app-card-header" as="h4">{props.header}</Header>}
    <Body className="app-card-body">
      {props.img && <Img className="app-card-img" variant="top" src={props.img} />}
      {props.title && <Title className="app-card-title">{props.title}</Title>}
      {props.children}
      {props.footer && <Footer className="app-card-footer">{props.footer}</Footer>}
    </Body>
  </Card>
)

export default AppCard

