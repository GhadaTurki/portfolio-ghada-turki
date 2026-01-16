'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Code, Cpu, Smartphone, Settings } from 'lucide-react'

interface Experience {
  company: string
  position: string
  location: string
  period: string
  description: string
  technologies: string[]
  icon: React.ElementType
}

const experiences: Experience[] = [
  {
    company: 'MATECH',
    position: 'Mémoire de fin d\'études',
    location: 'Megrine, Tunisie',
    period: '03/2025 - 09/2025',
    description:
      'Conception et réalisation d\'un émulateur de groupe électrogène et développement de son application mobile en réalité augmentée',
    technologies: ['Unity', 'C#', 'Vuforia', 'Arduino', 'SolidWorks', 'Blender'],
    icon: Smartphone,
  },
  {
    company: 'GD Tunisie',
    position: 'Stage d\'ingénieur',
    location: 'Birbouragba, Tunisie',
    period: '07/2025 - 08/2025',
    description:
      'Développement d\'une solution innovante de supervision de la production avec application desktop Python et système de comptage automatisé',
    technologies: ['Python', 'Arduino', 'SolidWorks', 'Capteurs'],
    icon: Settings,
  },
  {
    company: 'MATECH',
    position: 'Stage de fin d\'études',
    location: 'Megrine, Tunisie',
    period: '02/2023 - 06/2023',
    description:
      'Conception et réalisation d\'un simulateur de pannes d\'un groupe électrogène avec application mobile Java',
    technologies: ['Java', 'Électronique industrielle', 'Contrôleurs'],
    icon: Cpu,
  },
  {
    company: 'CSM-GIAS',
    position: 'Stage de technicien',
    location: 'Bouargoub, Tunisie',
    period: '01/2022 - 02/2022',
    description:
      'Amélioration de la machine Trepko Seau - Conception d\'une machine pour la mise en place des récipients sur le tapis',
    technologies: ['SolidWorks', 'Arduino'],
    icon: Code,
  },
  {
    company: 'WEWIRE',
    position: 'Stage d\'initiation',
    location: 'Hammamet, Tunisie',
    period: '07/2021 - 07/2021',
    description:
      'Découverte des activités de l\'entreprise, apprentissage de la fabrication des câbles et application des principes du Lean',
    technologies: ['Lean Manufacturing'],
    icon: Settings,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Expérience</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-600 dark:from-industrial-accent dark:via-industrial-accent/80 dark:to-industrial-accent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-industrial-accent rounded-full border-4 border-white dark:border-industrial-dark z-10" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      className="glass-effect rounded-xl p-6 card-hover"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary-100 dark:bg-industrial-light">
                          <Icon className="w-6 h-6 text-primary-600 dark:text-industrial-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg font-semibold text-primary-600 dark:text-industrial-accent mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full bg-primary-100 dark:bg-industrial-light text-primary-700 dark:text-industrial-accent text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
