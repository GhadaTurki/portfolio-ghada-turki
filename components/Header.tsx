'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Projets', href: '#projects' },
  { name: 'Formation', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-industrial-dark/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className={`container-custom transition-all duration-300 ${
        isScrolled 
          ? 'py-1 px-4 sm:px-6 lg:px-8' 
          : 'py-4 px-4 sm:px-6 lg:px-8'
      }`}>
        <div className="flex items-center justify-between">
          <Link href="#home" className={`font-bold text-gradient transition-all duration-300 ${
            isScrolled ? 'text-lg' : 'text-2xl'
          }`}>
            GT
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${
            isScrolled ? 'gap-3' : 'gap-8'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-industrial-accent transition-colors relative group ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-industrial-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`rounded-lg bg-gray-100 dark:bg-industrial-light hover:bg-gray-200 dark:hover:bg-industrial-light/80 transition-colors ${
                isScrolled ? 'p-1.5' : 'p-2'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className={`text-yellow-500 transition-all duration-300 ${
                  isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                }`} />
              ) : (
                <Moon className={`text-gray-700 transition-all duration-300 ${
                  isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                }`} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-industrial-light"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-industrial-light"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-industrial-dark border-t border-gray-200 dark:border-industrial-light"
          >
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-industrial-accent transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
