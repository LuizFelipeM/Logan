import React, { useEffect } from 'react'
import userService from '../../../../services/userService'

const Login: React.FC = () => {
  useEffect(() => {
    userService.getAll().then(console.log)
  }, [])

  return <p>Login</p>
}

export default Login
