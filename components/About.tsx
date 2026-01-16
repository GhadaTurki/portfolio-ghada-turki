'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Target, Users } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const domains = [
    {
      icon: Cpu,
      title: 'Automatisation industrielle',
      description: 'Conception et développement de systèmes automatisés pour l\'industrie 4.0',
    },
    {
      icon: Zap,
      title: 'Robotique',
      description: 'Développement de robots autonomes et systèmes robotiques intelligents',
    },
    {
      icon: Target,
      title: 'IoT & Systèmes embarqués',
      description: 'Intégration de capteurs, microcontrôleurs et protocoles de communication',
    },
    {
      icon: Users,
      title: 'Réalité augmentée',
      description: 'Applications AR pour la formation et la maintenance industrielle',
    },
  ]

  const softSkills = [
    'Innovation',
    'Travail d\'équipe',
    'Autonomie',
    'Esprit analytique',
    'Résolution de problèmes',
    'Leadership',
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-industrial-dark">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">À propos</span>
            </h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                <motion.div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl mb-6 lg:mb-0 bg-gray-200 dark:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/ghada-turki-photo.jpg"
                    alt="Ghada Turki - Ingénieure en Électromécanique"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Erreur de chargement de l\'image:', e)
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Profil professionnel
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Titulaire d'un <strong>Master professionnel en Mécatronique</strong> et{' '}
                <strong>ingénieure en Génie Électromécanique</strong>, avec une expertise en
                conception mécanique, automatisation et développement logiciel. Passionnée par
                l'innovation et les systèmes automatisés, je cherche à appliquer mes compétences
                dans un environnement dynamique à travers un stage de fin d'études.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Mon objectif est de contribuer à la transformation digitale de l'industrie en
                développant des solutions intelligentes qui combinent mécanique, électronique et
                intelligence artificielle.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8 card-hover"
            >
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Domaines clés
              </h4>
              <div className="space-y-4">
                {domains.map((domain, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-industrial-light/50 hover:bg-white dark:hover:bg-industrial-light transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <domain.icon className="w-6 h-6 text-primary-600 dark:text-industrial-accent flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {domain.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {domain.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <h4 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Soft Skills
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary-100 dark:bg-industrial-light text-primary-700 dark:text-industrial-accent font-medium text-sm"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
