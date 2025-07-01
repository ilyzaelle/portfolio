import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">Léo Rodriguez</Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">À propos</Link>
            <Link to="/skills" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Compétences</Link>
            <Link to="/projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Projets</Link>
            <Link to="/experience" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Expérience</Link>
            <Link to="/education" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Formation</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Contact</Link>
          </div>
          {/*<button*/}
          {/*  onClick={() => setDarkMode(!darkMode)}*/}
          {/*  className="p-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"*/}
          {/*  aria-label="Toggle dark mode"*/}
          {/*>*/}
          {/*  {darkMode ? '☀️' : '🌙'}*/}
          {/*</button>*/}
        </div>
      </div>
    </nav>
  )
}
