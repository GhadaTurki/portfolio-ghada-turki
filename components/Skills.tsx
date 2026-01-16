'use client'

import { motion } from 'framer-motion'
import { Wrench, Cpu, Code2, Brain } from 'lucide-react'

interface SkillCategory {
  icon: React.ElementType
  title: string
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: Wrench,
    title: 'Mécanique & Conception',
    color: 'from-blue-500 to-cyan-500',
    skills: ['SolidWorks', 'CATIA V5', 'Blender', 'Conception 3D', 'Simulation'],
  },
  {
    icon: Cpu,
    title: 'Automatisation & Embarqué',
    color: 'from-green-500 to-emerald-500',
    skills: ['Arduino', 'ESP32', 'Capteurs industriels', 'Microcontrôleurs', 'Électronique'],
  },
  {
    icon: Code2,
    title: 'Logiciel & Data',
    color: 'from-purple-500 to-pink-500',
    skills: ['Python', 'Java', 'C#', 'Node-RED', 'MQTT', 'Développement logiciel'],
  },
  {
    icon: Brain,
    title: 'IA & AR',
    color: 'from-orange-500 to-red-500',
    skills: [
      'Intelligence Artificielle',
      'Maintenance prédictive',
      'Unity',
      'Vuforia',
      'Computer Vision',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour transformer vos idées en réalité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-effect rounded-2xl p-8 card-hover"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="p-3 rounded-lg bg-white/50 dark:bg-industrial-dark/50 hover:bg-white dark:hover:bg-industrial-dark transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Certifications
          </h3>

          {/* Certificats SOLIDWORKS téléchargeables */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Certificats SOLIDWORKS disponibles
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.a
                href="/SOLIDWORKS Simulation Professional.jpg"
                download
                className="group p-4 rounded-lg bg-white dark:bg-industrial-dark border-2 border-primary-200 dark:border-industrial-light hover:border-primary-500 dark:hover:border-industrial-accent transition-all card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-industrial-accent transition-colors">
                      SOLIDWORKS Simulation Professional
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Par SOLIDWORKS
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-industrial-accent font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger le certificat
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="/SOLIDWORKS Additive Manufacturing Associate.jpg"
                download
                className="group p-4 rounded-lg bg-white dark:bg-industrial-dark border-2 border-primary-200 dark:border-industrial-light hover:border-primary-500 dark:hover:border-industrial-accent transition-all card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-industrial-accent transition-colors">
                      SOLIDWORKS Additive Manufacturing Associate
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Par SOLIDWORKS
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-industrial-accent font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger le certificat
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="/Certified SOLIDWORKS CAD Design Associate.jpg"
                download
                className="group p-4 rounded-lg bg-white dark:bg-industrial-dark border-2 border-primary-200 dark:border-industrial-light hover:border-primary-500 dark:hover:border-industrial-accent transition-all card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-industrial-accent transition-colors">
                      SOLIDWORKS CAD Design Associate
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Par SOLIDWORKS
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-industrial-accent font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger le certificat
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Certificats téléchargeables */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Certificats NVIDIA disponibles
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.a
                href="/Certificate Applications of AI for Predictive Maintenance.pdf"
                download
                className="group p-4 rounded-lg bg-white dark:bg-industrial-dark border-2 border-primary-200 dark:border-industrial-light hover:border-primary-500 dark:hover:border-industrial-accent transition-all card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-industrial-accent transition-colors">
                      Applications of AI for Predictive Maintenance
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Par NVIDIA
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-industrial-accent font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger le certificat
                    </span>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="/Certificate Generative AI with Diffusion Models.pdf"
                download
                className="group p-4 rounded-lg bg-white dark:bg-industrial-dark border-2 border-primary-200 dark:border-industrial-light hover:border-primary-500 dark:hover:border-industrial-accent transition-all card-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-industrial-accent transition-colors">
                      Generative AI with Diffusion Models
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      Par NVIDIA
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-industrial-accent font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Télécharger le certificat
                    </span>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
