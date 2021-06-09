import { createContext, useEffect, useState } from 'react'
import netlifyItentity from 'netlify-identity-widget'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    netlifyItentity.on('login', (user) => {
      setUser(user)
      netlifyItentity.close()
      console.log('login event')
    })

    netlifyItentity.on('logout', () => {
      setUser(null)
      console.log('logout event')
    })

    netlifyItentity.on('init', (user) => {
      setUser(user)
      setAuthReady(true)
      console.log('init event');
    })

    // init netlify identity connection
    netlifyItentity.init()

    return () => {
      netlifyItentity.off('login')
      netlifyItentity.off('logout')
    }

  },[])

  const login = () => {
    netlifyItentity.open()
  }

  const logout = () => {
    netlifyItentity.logout()
  }

const context = { user, login, logout, authReady }

  return (
    <AuthContext.Provider value={ context }>
      { children }
    </AuthContext.Provider>
  )
}

export default  AuthContext
