'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Target, Users, GraduationCap, Award, Calendar } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { t } = useLanguage()
  
  const domains = [
    {
      icon: Cpu,
      title: t('about.industrialAutomation'),
      description: t('about.industrialAutomationDesc'),
    },
    {
      icon: Zap,
      title: t('about.robotics'),
      description: t('about.roboticsDesc'),
    },
    {
      icon: Target,
      title: t('about.iot'),
      description: t('about.iotDesc'),
    },
    {
      icon: Users,
      title: t('about.ar'),
      description: t('about.arDesc'),
    },
  ]

  const softSkills = [
    t('about.innovation'),
    t('about.teamwork'),
    t('about.autonomy'),
    t('about.analytical'),
    t('about.problemSolving'),
    t('about.leadership'),
  ]
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
              <span className="text-gradient">{t('about.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
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
                {t('about.professionalProfile')}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.objective')}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8 card-hover lg:col-span-2"
            >
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('about.keyDomains')}
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

          {/* Education Section - Full Width */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-industrial-light">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('education.title')}
              </h3>
              <div className="space-y-6">
                {[
                  {
                    degree: t('education.esprit.degree'),
                    institution: t('education.esprit.institution'),
                    period: t('education.esprit.period'),
                    status: t('education.esprit.status'),
                    description: t('education.esprit.description'),
                  },
                  {
                    degree: t('education.istic.degree'),
                    institution: t('education.istic.institution'),
                    period: t('education.istic.period'),
                    status: t('education.istic.status'),
                    description: t('education.istic.description'),
                  },
                  {
                    degree: t('education.isetn.degree'),
                    institution: t('education.isetn.institution'),
                    period: t('education.isetn.period'),
                    status: t('education.isetn.status'),
                    description: t('education.isetn.description'),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-white/50 dark:bg-industrial-light/30 border border-gray-200 dark:border-industrial-light"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.degree}
                      </h4>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === t('education.esprit.status')
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                            : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-primary-600 dark:text-industrial-accent mb-2">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h4 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              {t('about.softSkills')}
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
