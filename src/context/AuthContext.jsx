import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  // Mock login function - in production, this would be an API call
  const login = async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Mock users database
    const mockUsers = [
      { id: 1, email: 'agent@example.com', password: 'agent123', role: 'agent', name: 'John Agent' },
      { id: 2, email: 'admin@example.com', password: 'admin123', role: 'admin', name: 'Jane Admin' },
      { id: 3, email: 'user@example.com', password: 'user123', role: 'user', name: 'Bob User' }
    ]

    const foundUser = mockUsers.find(u => u.email === email && u.password === password)

    if (foundUser) {
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
        name: foundUser.name
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true, user: userData }
    } else {
      return { success: false, error: 'Invalid email or password' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const isAgent = () => {
    return user && user.role === 'agent'
  }

  const value = {
    user,
    login,
    logout,
    isAgent,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

