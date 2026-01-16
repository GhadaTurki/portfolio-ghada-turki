'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.info')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {t('contact.infoDesc')}
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:ghada.turkiditgaraali@esprit.tn"
                className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-industrial-light hover:bg-gray-50 dark:hover:bg-industrial-light/80 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-industrial-dark group-hover:bg-primary-200 dark:group-hover:bg-industrial-light transition-colors">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-industrial-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.email')}</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    ghada.turkiditgaraali@esprit.tn
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-industrial-light">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-industrial-dark">
                  <Phone className="w-5 h-5 text-primary-600 dark:text-industrial-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.phone')}</p>
                  <p className="font-medium text-gray-900 dark:text-white">216-26-016-352</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-industrial-light">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-industrial-dark">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-industrial-accent" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('contact.location')}</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Hammamet, Nabeul, Tunisia
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{t('contact.social')}</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/ghada-turki-20319b217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary-100 dark:bg-industrial-dark hover:bg-primary-200 dark:hover:bg-industrial-light transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary-600 dark:text-industrial-accent" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-effect rounded-2xl p-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('contact.fullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-industrial-dark border border-gray-300 dark:border-industrial-light focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-industrial-accent text-gray-900 dark:text-white"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-industrial-dark border border-gray-300 dark:border-industrial-light focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-industrial-accent text-gray-900 dark:text-white"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-industrial-dark border border-gray-300 dark:border-industrial-light focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-industrial-accent text-gray-900 dark:text-white"
                  placeholder={t('contact.subjectPlaceholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-industrial-dark border border-gray-300 dark:border-industrial-light focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-industrial-accent text-gray-900 dark:text-white resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-6 py-4 bg-primary-600 dark:bg-industrial-accent text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary-700 dark:hover:bg-industrial-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t('contact.sent')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('contact.send')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
