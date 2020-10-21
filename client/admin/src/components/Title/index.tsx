import React from 'react'

import './style.scss'

interface TitleProps {
  className?: string
}

const Title: React.FC<TitleProps> = ({ children, className }) => <h1 className={`title ${className}`}>{children}</h1>

export default Title
