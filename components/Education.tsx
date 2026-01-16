'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

interface EducationItem {
  degree: string
  institution: string
  period: string
  status: string
  description?: string
}

export default function Education() {
  const { t } = useLanguage()
  
  const education: EducationItem[] = [
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
  ]
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-industrial-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('education.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-industrial-light flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-industrial-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.degree}
                    </h3>
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
                  <p className="text-lg font-semibold text-primary-600 dark:text-industrial-accent mb-3">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  {item.description && (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Life Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-8 h-8 text-primary-600 dark:text-industrial-accent" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('education.associative')}
            </h3>
          </div>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <p>
                <strong>{t('education.associative.member')}</strong>
                : {t('education.associative.memberDesc')}
              </p>
            </div>

            {/* AIESEC */}
            <div className="p-4 rounded-lg bg-white/50 dark:bg-industrial-dark/50">
              <p className="mb-3">
                <strong>{t('education.aiesec.title')}</strong>
              </p>
              <p className="mb-4 text-sm leading-relaxed">
                {t('education.aiesec.description')}
              </p>
              <motion.a
                href="/Certification.pdf"
                download
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-100 dark:bg-industrial-dark border border-primary-300 dark:border-industrial-light hover:bg-primary-200 dark:hover:bg-industrial-light transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium text-primary-700 dark:text-industrial-accent">
                  {t('education.aiesec.download')}
                </span>
              </motion.a>
            </div>

            {/* Bal des Projets */}
            <div className="p-4 rounded-lg bg-white/50 dark:bg-industrial-dark/50">
              <p className="mb-3">
                <strong>{t('education.bal.title')}</strong>
              </p>
              <p className="mb-4 text-sm leading-relaxed">
                {t('education.bal.description')}
              </p>
              <motion.a
                href="/ESE_attestation_Ghada_Turki dit Gara ali.pdf"
                download
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-100 dark:bg-industrial-dark border border-primary-300 dark:border-industrial-light hover:bg-primary-200 dark:hover:bg-industrial-light transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm font-medium text-primary-700 dark:text-industrial-accent">
                  {t('education.bal.download')}
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
