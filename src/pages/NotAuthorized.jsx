import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { FiAlertTriangle, FiArrowLeft } from 'react-icons/fi'

const NotAuthorized = () => {
  const navigate = useNavigate()

  // Clear any invalid session when page loads
  useEffect(() => {
    localStorage.removeItem('user')
  }, [])

  const handleBackToLogin = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-500 rounded-full mb-6">
          <FiAlertTriangle className="w-12 h-12 text-white" />
        </div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-white mb-4"
        >
          403
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold text-white mb-4"
        >
          Access Denied
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mb-8 max-w-md mx-auto"
        >
          You don't have permission to access this page. This area is restricted to Agent users only.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleBackToLogin}
            className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Back to Login
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotAuthorized

