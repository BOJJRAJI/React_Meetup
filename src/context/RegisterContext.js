import React from 'react'

const RegisterContext = React.createContext({
  userName: '',
  getName: {},
  topic: '',
  changeTopic: {},
  isRegistered: false,
  toggleRegister: {},
})

export default RegisterContext
