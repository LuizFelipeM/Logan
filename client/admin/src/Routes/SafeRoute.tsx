import React from 'react'
import { useHistory } from 'react-router-dom'

const SafeRoute: React.FC = ({ children }) => {
  const history = useHistory()

  const token = localStorage.getItem('validated')

  if (!token) {
    history.push('/login')
  }

  return (
    <>
      {children}
    </>
  )
}

export default SafeRoute
