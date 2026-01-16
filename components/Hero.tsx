'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-industrial-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <motion.path
              d="M50,50 L350,50 M50,150 L350,150 M50,250 L350,250 M50,350 L350,350 M50,50 L50,350 M150,50 L150,350 M250,50 L250,350 M350,50 L350,350"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Photo de profil dans le Hero */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-500/20 dark:border-industrial-accent/30 shadow-2xl bg-gray-200 dark:bg-gray-800"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/ghada-turki-photo.jpg"
                alt="Ghada Turki"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Erreur de chargement de l\'image:', e)
                }}
              />
            </motion.div>
          </motion.div>

          {/* Texte sous la photo */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Ghada Turki
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-2">
              Étudiante ingénieure en Électromécanique – 5ᵉ année à ESPRIT
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
              Titulaire d'un Master professionnel en Mécatronique
            </p>
            <p className="text-xl md:text-2xl text-primary-600 dark:text-industrial-accent font-semibold italic">
              Je transforme les idées en prototypes… et les problèmes industriels en solutions intelligentes
            </p>
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="#projects"
              className="group px-8 py-4 bg-primary-600 dark:bg-industrial-accent text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-700 dark:hover:bg-industrial-accent/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Voir mes projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/CV_Ghada_Turki.pdf"
              download
              className="px-8 py-4 border-2 border-primary-600 dark:border-industrial-accent text-primary-600 dark:text-industrial-accent rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-50 dark:hover:bg-industrial-light/10 transition-all"
            >
              <Download className="w-5 h-5" />
              Télécharger mon CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
