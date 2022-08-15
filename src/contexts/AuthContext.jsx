import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
//{}
const AuthContextProvider = ({ children }) => {
  //State
  const [isAuthenticated, setAuthenticated] = useState(false)

  const toggleAuth = () => {
    setAuthenticated(!isAuthenticated)
  }

  //context data
  const authContextData = {
    isAuthenticated,
    toggleAuth
  }

  //return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider