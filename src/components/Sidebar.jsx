import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiZap, FiX, FiBarChart2, FiCheckSquare, FiTrendingUp, FiSettings, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Sidebar = ({ isOpen, setIsOpen, collapsed, setCollapsed }) => {
  const location = useLocation()
  
  const menuItems = [
    { name: 'Dashboard', icon: FiBarChart2, path: '/dashboard' },
    { name: 'Tasks', icon: FiCheckSquare, path: '/tasks' },
    { name: 'Analytics', icon: FiTrendingUp, path: '/analytics' },
    { name: 'Settings', icon: FiSettings, path: '/settings' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed top-0 left-0 h-full bg-slate-900 border-r border-slate-700 z-50 lg:translate-x-0 lg:static lg:z-auto transition-all duration-300 ${
          collapsed ? 'lg:w-20' : 'w-70'
        }`}
      >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center justify-between px-6 py-[22px] border-b border-slate-700">
              <div className={`flex items-center space-x-3 ${collapsed ? 'lg:justify-center' : ''}`}>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <FiZap className="text-2xl text-white font-bold" strokeWidth={2.5} />
                </div>
                {!collapsed && (
                  <div className="lg:block hidden">
                    <h2 className="text-lg font-bold text-white">AgentHub</h2>
                    <p className="text-xs text-gray-400">Dashboard</p>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className="hidden lg:flex text-gray-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-all duration-200 hover:scale-110"
                  title={collapsed ? 'Expand' : 'Collapse'}
                >
                  {collapsed ? <FiChevronRight className="w-5 h-5 font-bold" strokeWidth={2.5} /> : <FiChevronLeft className="w-5 h-5 font-bold" strokeWidth={2.5} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="lg:hidden text-gray-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-all duration-200 hover:scale-110"
                >
                  <FiX className="w-6 h-6 font-bold" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                      collapsed ? 'lg:justify-center' : 'space-x-3'
                    } ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
                        : 'text-gray-400 hover:bg-slate-800 hover:text-white'
                    }`}
                    title={collapsed ? item.name : ''}
                  >
                    <item.icon className={`flex-shrink-0 transition-all duration-200 ${
                      isActive(item.path) 
                        ? 'text-2xl font-bold' 
                        : 'text-xl group-hover:text-2xl group-hover:font-bold'
                    }`} />
                    {!collapsed && (
                      <span className={`font-semibold lg:block hidden transition-all duration-200 ${
                        isActive(item.path) ? 'text-base' : 'text-sm group-hover:text-base'
                      }`}>
                        {item.name}
                      </span>
                    )}
                    {isActive(item.path) && (
                      <div className="absolute right-0 w-1 h-8 bg-white rounded-l-full"></div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <div className={`px-4 py-4 border-t border-slate-700 ${collapsed ? 'lg:hidden' : ''}`}>
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-1">Need help?</p>
                <p className="text-sm text-white font-medium">Contact Support</p>
              </div>
            </div>
          </div>
        </motion.aside>
    </>
  )
}

export default Sidebar

