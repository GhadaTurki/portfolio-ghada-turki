'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Languages } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

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
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className={`font-bold text-gradient transition-all duration-300 cursor-pointer ${
              isScrolled ? 'text-lg' : 'text-2xl'
            }`}
          >
            GT
          </a>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${
            isScrolled ? 'gap-3' : 'gap-8'
          }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-industrial-accent transition-colors relative group cursor-pointer ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-industrial-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`rounded-lg bg-gray-100 dark:bg-industrial-light hover:bg-gray-200 dark:hover:bg-industrial-light/80 transition-colors flex items-center gap-1 ${
                  isScrolled ? 'p-1.5' : 'p-2'
                }`}
                aria-label="Change language"
              >
                <Languages className={`transition-all duration-300 ${
                  isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                } text-gray-700 dark:text-gray-300`} />
                <span className={`font-medium transition-all duration-300 ${
                  isScrolled ? 'text-xs' : 'text-sm'
                } text-gray-700 dark:text-gray-300`}>
                  {language.toUpperCase()}
                </span>
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-white dark:bg-industrial-dark rounded-lg shadow-lg border border-gray-200 dark:border-industrial-light overflow-hidden z-50"
                  >
                    <button
                      onClick={() => {
                        setLanguage('fr')
                        setIsLangMenuOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-industrial-light transition-colors ${
                        language === 'fr' ? 'bg-primary-50 dark:bg-industrial-light/50 text-primary-600 dark:text-industrial-accent' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Français
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setIsLangMenuOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-industrial-light transition-colors ${
                        language === 'en' ? 'bg-primary-50 dark:bg-industrial-light/50 text-primary-600 dark:text-industrial-accent' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
          <div className="flex items-center gap-2 md:hidden">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-industrial-light flex items-center gap-1"
                aria-label="Change language"
              >
                <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{language.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 bg-white dark:bg-industrial-dark rounded-lg shadow-lg border border-gray-200 dark:border-industrial-light overflow-hidden z-50"
                  >
                    <button
                      onClick={() => {
                        setLanguage('fr')
                        setIsLangMenuOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-industrial-light transition-colors ${
                        language === 'fr' ? 'bg-primary-50 dark:bg-industrial-light/50 text-primary-600 dark:text-industrial-accent' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Français
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en')
                        setIsLangMenuOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-industrial-light transition-colors ${
                        language === 'en' ? 'bg-primary-50 dark:bg-industrial-light/50 text-primary-600 dark:text-industrial-accent' : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-industrial-accent transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
