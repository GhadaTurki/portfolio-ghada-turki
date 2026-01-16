'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, X } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

interface Project {
  id: number
  title: string
  category: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  image: string
  color: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const { t } = useLanguage()
  
  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.project1.title'),
      category: 'IA',
      description: t('projects.project1.description'),
      problem: t('projects.project1.problem'),
      solution: t('projects.project1.solution'),
      technologies: ['SolidWorks', 'Intelligence Artificielle', 'ESP32', 'Computer Vision'],
      image: '/crac.jpg',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      category: 'AR',
      description: t('projects.project2.description'),
      problem: t('projects.project2.problem'),
      solution: t('projects.project2.solution'),
      technologies: ['Unity', 'C#', 'Vuforia', 'Blender', 'SolidWorks'],
      image: '/app.jpg',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 7,
      title: t('projects.project7.title'),
      category: 'Automatisation',
      description: t('projects.project7.description'),
      problem: t('projects.project7.problem'),
      solution: t('projects.project7.solution'),
      technologies: ['Java', 'Électronique industrielle', 'Contrôleurs', 'SolidWorks'],
      image: '/groupe.jpg',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      category: 'IoT',
      description: t('projects.project3.description'),
      problem: t('projects.project3.problem'),
      solution: t('projects.project3.solution'),
      technologies: ['Arduino', 'Capteur E3F-DS30C4', 'SolidWorks', 'VS Code / Arduino IDE', 'Automatisation industrielle'],
      image: '/gd11.png',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 8,
      title: t('projects.project8.title'),
      category: 'IoT',
      description: t('projects.project8.description'),
      problem: t('projects.project8.problem'),
      solution: t('projects.project8.solution'),
      technologies: ['Python', 'VS Code', 'QR Code', 'Reconnaissance faciale', 'CSV / Excel', 'Supervision industrielle'],
      image: '/gd.png',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 9,
      title: t('projects.project9.title'),
      category: 'Automatisation',
      description: t('projects.project9.description'),
      problem: t('projects.project9.problem'),
      solution: t('projects.project9.solution'),
      technologies: ['Application mobile', 'Maintenance industrielle', 'Groupes électrogènes'],
      image: '/cappp.jpg',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      category: 'Robotique',
      description: t('projects.project4.description'),
      problem: t('projects.project4.problem'),
      solution: t('projects.project4.solution'),
      technologies: ['Arduino', 'SolidWorks', 'Capteurs', 'Algorithmes'],
      image: '/api/placeholder/600/400',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      category: 'Robotique',
      description: t('projects.project5.description'),
      problem: t('projects.project5.problem'),
      solution: t('projects.project5.solution'),
      technologies: ['SolidWorks', 'RT Tool Box', 'Robotique industrielle', 'Teaching method'],
      image: '/rttoolbox.png',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      category: 'IoT',
      description: t('projects.project6.description'),
      problem: t('projects.project6.problem'),
      solution: t('projects.project6.solution'),
      technologies: ['Node-RED', 'MQTT', 'ESP32', 'IoT', 'Dashboard'],
      image: '/api/placeholder/600/400',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      id: 10,
      title: t('projects.project10.title'),
      category: 'Automatisation',
      description: t('projects.project10.description'),
      problem: t('projects.project10.problem'),
      solution: t('projects.project10.solution'),
      technologies: ['WinDev', 'Base de données', 'Carte d\'acquisition', 'Supervision industrielle', 'Maintenance industrielle', 'MTTR / MTBF', 'Proteus 8'],
      image: '/mes1.png',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-industrial-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>


        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-industrial-light rounded-xl overflow-hidden shadow-lg card-hover h-full flex flex-col">
                  {/* Image */}
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color}`}>
                    {project.image && project.image !== '/api/placeholder/600/400' ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold opacity-50">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-industrial-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded bg-primary-100 dark:bg-industrial-dark text-primary-700 dark:text-industrial-accent text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded bg-gray-100 dark:bg-industrial-dark text-gray-600 dark:text-gray-400 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-industrial-light">
                      <button 
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-4 py-2 bg-primary-600 dark:bg-industrial-accent text-white rounded-lg hover:bg-primary-700 dark:hover:bg-industrial-accent/90 transition-colors text-sm font-medium"
                      >
                        {t('projects.viewDetails')}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </div>

      {/* Modal de détails du projet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-industrial-dark rounded-2xl shadow-2xl"
            >
              {/* Bouton fermer */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white dark:bg-industrial-light hover:bg-gray-100 dark:hover:bg-industrial-light/80 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>

              {/* Contenu du modal */}
              <div className="p-6 md:p-8">
                {/* Titre */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 pr-10">
                  {selectedProject.title}
                </h2>

                {/* Image et description pour le projet Woodcraft */}
                {selectedProject.id === 5 && (
                  <>
                    <div className="mb-6 rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                      <img
                        src="/rttoolbox.png"
                        alt="Bras robotique Woodcraft - RT Tool Box"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mb-6 p-4 rounded-lg bg-primary-50 dark:bg-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('projects.project5.objective')}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {t('projects.project5.objectiveDesc')}
                      </p>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">1</span>
                          {t('projects.project5.step1')}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {t('projects.project5.step1Desc')}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">2</span>
                          {t('projects.project5.step2')}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {t('projects.project5.step2Desc')}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">3</span>
                          {t('projects.project5.step3')}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {t('projects.project5.step3Desc')}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">4</span>
                          {t('projects.project5.step4')}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {t('projects.project5.step4Desc')}
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-primary-100 to-primary-50 dark:from-industrial-light/50 dark:to-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        {t('projects.project5.highlights')}
                      </h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span>{t('projects.project5.highlight1')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span>{t('projects.project5.highlight2')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span>{t('projects.project5.highlight3')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span>{t('projects.project5.highlight4')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span>{t('projects.project5.highlight5')}</span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}

                {/* Image pour le projet Émulateur + AR */}
                {selectedProject.id === 2 && (
                  <div className="mb-6 rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                    <img
                      src="/8.jpg"
                      alt="Application AR - Émulateur de groupe électrogène"
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* Description technique pour le projet de détection de fissures */}
                {selectedProject.id === 1 && (
                  <div className="mb-6 p-4 rounded-lg bg-primary-50 dark:bg-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t('projects.project1.detail')}
                    </p>
                  </div>
                )}

                {/* Vidéo pour le projet de détection de fissures */}
                {selectedProject.id === 1 && (
                  <div className="mb-6 rounded-lg overflow-hidden bg-black">
                    <video
                      src="/video.mp4"
                      controls
                      autoPlay
                      className="w-full h-auto"
                      playsInline
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                )}

                {/* Vidéo et description détaillée pour le système de comptage */}
                {selectedProject.id === 3 && (
                  <>
                    <div className="mb-6 rounded-lg overflow-hidden bg-black">
                      <video
                        src="/compateg.MOV"
                        controls
                        className="w-full h-auto"
                        playsInline
                      >
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    </div>
                    <div className="mb-6 p-4 rounded-lg bg-primary-50 dark:bg-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('projects.description')}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t('projects.project3.detail')}
                      </p>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {t('projects.project3.features')}
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.feature1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.feature2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.feature3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.feature4')}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {t('projects.project3.electronic')}
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.electronic1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.electronic2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.electronic3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.electronic4')}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {t('projects.project3.programming')}
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.programming1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.programming2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.programming3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.programming4')}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {t('projects.project3.mechanical')}
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.mechanical1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.mechanical2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project3.mechanical3')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* Application desktop de gestion de production */}
                {selectedProject.id === 8 && (
                  <>
                    {/* Galerie d'images */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/gd.png"
                          alt="Application desktop - Interface principale"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/gd1.png"
                          alt="Module Administrateur"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/gd3.png"
                          alt="Gestion des ouvriers"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/gd4.png"
                          alt="Tableau de bord"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/gd5.png"
                          alt="Module Ouvrier"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/gd6.png"
                          alt="Export des données"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg md:col-span-2 lg:col-span-1">
                        <img
                          src="/GD12.png"
                          alt="Supervision de production"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    <div className="mb-6 p-4 rounded-lg bg-primary-50 dark:bg-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Description
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Application desktop intelligente dédiée à la gestion et au suivi de la production industrielle, 
                        permettant de remplacer un système manuel basé sur des fiches papier par une solution numérique 
                        automatisée, fiable et centralisée.
                      </p>
                    </div>

                    <div className="mb-6 space-y-4">
                      {/* Architecture */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🧩 Architecture de l'application
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Application développée sous <strong>VS Code</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Interface divisée en deux modules : <strong>Module Administrateur</strong> et <strong>Module Ouvrier</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Navigation simple et intuitive via des menus dédiés</span>
                          </li>
                        </ul>
                      </div>

                      {/* Module Administrateur */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🔐 Module Administrateur
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Authentification sécurisée</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Accès protégé par mot de passe</li>
                              <li>• Fenêtre modale bloquant l'accès en cas d'échec</li>
                              <li>• Gestion sécurisée des fonctionnalités sensibles</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Gestion des ouvriers</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Ajout d'un ouvrier avec saisie du nom</li>
                              <li>• Capture photo via webcam</li>
                              <li>• Génération automatique d'un <strong>QR code unique</strong></li>
                              <li>• Encodage facial pour la <strong>reconnaissance biométrique</strong></li>
                              <li>• Données sauvegardées (CSV, PNG, JSON)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Gestion des opérations</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Génération automatique de QR codes d'opérations</li>
                              <li>• Visualisation centralisée de tous les QR codes (ouvriers & opérations)</li>
                              <li>• Suppression sécurisée des ouvriers avec nettoyage complet des données</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Tableau de bord & supervision</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Vue globale des opérations en cours et terminées</li>
                              <li>• Filtrage des données par dates</li>
                              <li>• Groupement par type de câble ou par opération</li>
                              <li>• Indicateurs clés : nombre de shifts, efficacité moyenne, quantités demandées/produites/restantes</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Export des données</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Génération automatique de rapports <strong>Excel multi-feuilles</strong></li>
                              <li>• Historique des shifts, statistiques globales, liste des ouvriers</li>
                              <li>• Résumé de production par câble et par opération</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Module Ouvrier */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          👷 Module Ouvrier
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Début de shift</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Identification par <strong>reconnaissance faciale</strong> ou scan de QR code personnel</li>
                              <li>• Sélection de l'opération via QR code</li>
                              <li>• Choix du type de câble</li>
                              <li>• Saisie de la quantité demandée</li>
                              <li>• Enregistrement automatique du shift</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">Fin de shift</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Identification de l'ouvrier</li>
                              <li>• Affichage des données du shift en cours</li>
                              <li>• Saisie de la quantité réellement produite</li>
                              <li>• Validation et clôture automatique du shift</li>
                              <li>• Enregistrement sécurisé dans le système</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Valeur ajoutée */}
                      <div className="p-4 rounded-lg bg-gradient-to-r from-primary-100 to-primary-50 dark:from-industrial-light/50 dark:to-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          🎯 Valeur ajoutée du projet
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span><strong>Digitalisation complète</strong> d'un processus industriel manuel</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Amélioration de la <strong>traçabilité et de la fiabilité</strong> des données</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span><strong>Suivi en temps réel</strong> de la production</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Base solide pour l'intégration d'automatisation (comptage câbles, IoT)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* Application mobile d'interprétation des codes d'erreur */}
                {selectedProject.id === 9 && (
                  <>
                    {/* Galerie d'images de l'application mobile */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/Phone.jpg"
                          alt="Application mobile - Interface principale"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/phone1.jpg"
                          alt="Phone 1 - Saisie du code d'erreur"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/phone 2.jpg"
                          alt="Phone 2 - Interface de l'application"
                          className="w-full h-auto"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/phone 3.jpg"
                          alt="Phone 3 - Affichage de la description"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/phone 4.jpg"
                          alt="Phone 4 - Interface de l'application"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/phone 5.jpg"
                          alt="Phone 5 - Résultat de l'interprétation"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/phone 6.jpg"
                          alt="Phone 6 - Fonctionnalités de l'application"
                          className="w-full h-auto"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div className="mb-6 p-4 rounded-lg bg-primary-50 dark:bg-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Description
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Application mobile simple permettant aux techniciens de saisir un code d'erreur affiché sur le 
                        contrôleur <strong>Guard Revolution AMF25</strong> d'un groupe électrogène et d'afficher instantanément 
                        la description détaillée du défaut correspondant.
                      </p>
                    </div>

                    <div className="mb-6 space-y-4">
                      {/* Fonctionnalité principale */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Fonctionnalité principale
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span><strong>Saisie manuelle du code d'erreur</strong> affiché sur le générateur</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span><strong>Affichage instantané</strong> de la description correspondante</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Aucun paramétrage complexe, <strong>utilisation rapide sur le terrain</strong></span>
                          </li>
                        </ul>
                      </div>

                      {/* Développement & Programmation */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Développement & Programmation
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Application mobile développée</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Gestion des entrées utilisateur (code d'erreur)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Association code → description via une <strong>base de données locale</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Affichage dynamique du résultat à l'écran</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Tests fonctionnels pour garantir la fiabilité de l'affichage</span>
                          </li>
                        </ul>
                      </div>

                      {/* Contexte industriel */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Contexte industriel
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Utilisation en <strong>maintenance de groupes électrogènes</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Outil d'<strong>assistance rapide</strong> pour les techniciens</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Complément direct à l'afficheur <strong>Guard Revolution AMF25</strong></span>
                          </li>
                        </ul>
                      </div>

                      {/* Avantages */}
                      <div className="p-4 rounded-lg bg-gradient-to-r from-primary-100 to-primary-50 dark:from-industrial-light/50 dark:to-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          Avantages de la solution
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span><strong>Gain de temps</strong> lors des interventions de maintenance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span><strong>Interprétation instantanée</strong> des codes d'erreur techniques</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Application <strong>légère et intuitive</strong>, facile à utiliser sur le terrain</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Fonctionne <strong>hors ligne</strong> grâce à la base de données locale</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* Application de supervision industrielle */}
                {selectedProject.id === 10 && (
                  <>
                    {/* Galerie d'images */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/mes1.png"
                          alt="Application de supervision - Interface principale"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/MES2.png"
                          alt="Fenêtre Arrêts & Maintenance"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/MES3.png"
                          alt="Fenêtre Suivi de la production"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/mes4.png"
                          alt="Fenêtre Suivi process"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    <div className="mb-6 p-4 rounded-lg bg-primary-50 dark:bg-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {t('projects.description')}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t('projects.project10.detail')}
                      </p>
                    </div>

                    <div className="mb-6 space-y-4">
                      {/* Problématique */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🎯 {t('projects.project10.problematic')}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          {t('projects.project10.problematicDesc')}
                        </p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.problematic1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.problematic2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.problematic3')}</span>
                          </li>
                        </ul>
                      </div>

                      {/* Solution */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          💡 {t('projects.project10.solutionTitle')}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          {t('projects.project10.solutionDesc')}
                        </p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.solution1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.solution2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.solution3')}</span>
                          </li>
                        </ul>
                      </div>

                      {/* Acquisition des arrêts machine */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          ⚙️ {t('projects.project10.acquisition')}
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.acquisition1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.acquisition2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.acquisition3')}</span>
                          </li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          ➡️ {t('projects.project10.acquisitionDesc')}
                        </p>
                      </div>

                      {/* Interface graphique */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🖥️ {t('projects.project10.interface')}
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{t('projects.project10.window1')}</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{t('projects.project10.window1Desc')}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{t('projects.project10.window2')}</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{t('projects.project10.window2Desc')}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{t('projects.project10.window3')}</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{t('projects.project10.window3Desc')}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">{t('projects.project10.windowMain')}</h5>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{t('projects.project10.windowMainDesc')}</p>
                          </div>
                        </div>
                      </div>

                      {/* Développement & Programmation */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          💻 {t('projects.project10.development')}
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.dev1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.dev2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.dev3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>{t('projects.project10.dev4')}</span>
                          </li>
                        </ul>
                      </div>

                      {/* Valeur ajoutée */}
                      <div className="p-4 rounded-lg bg-gradient-to-r from-primary-100 to-primary-50 dark:from-industrial-light/50 dark:to-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          🎯 {t('projects.project10.value')}
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>{t('projects.project10.value1')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>{t('projects.project10.value2')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>{t('projects.project10.value3')}</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>{t('projects.project10.value4')}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* Photo et galerie vidéo pour le simulateur de pannes */}
                {selectedProject.id === 7 && (
                  <>
                    {/* Photos du projet */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/groupe.jpg"
                          alt="Simulateur de pannes de groupe électrogène"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-industrial-light shadow-lg">
                        <img
                          src="/projet  groupe.jpg"
                          alt="Projet simulateur de pannes - Vue d'ensemble"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Galerie vidéo professionnelle */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Présentation du projet
                      </h3>

                      {/* Grille de miniatures pour les vidéos */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Vidéo de réalisation */}
                        <motion.button
                          onClick={() => setPlayingVideo('/realisation.mp4')}
                          className="group relative rounded-lg overflow-hidden bg-gray-900 dark:bg-industrial-light border-2 border-transparent hover:border-primary-500 dark:hover:border-industrial-accent transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="aspect-video relative">
                            <video
                              src="/realisation.mp4"
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                              preload="metadata"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-800 dark:bg-industrial-dark">
                            <p className="text-sm font-medium text-white text-center">
                              Vidéo de réalisation
                            </p>
                          </div>
                        </motion.button>

                        {/* Vidéo de présentation 1 */}
                        <motion.button
                          onClick={() => setPlayingVideo('/video1.mp4')}
                          className="group relative rounded-lg overflow-hidden bg-gray-900 dark:bg-industrial-light border-2 border-transparent hover:border-primary-500 dark:hover:border-industrial-accent transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="aspect-video relative">
                            <video
                              src="/video1.mp4"
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                              preload="metadata"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-800 dark:bg-industrial-dark">
                            <p className="text-sm font-medium text-white text-center">
                              Présentation du projet
                            </p>
                          </div>
                        </motion.button>

                        {/* Vidéo de présentation 2 */}
                        <motion.button
                          onClick={() => setPlayingVideo('/video2.mp4')}
                          className="group relative rounded-lg overflow-hidden bg-gray-900 dark:bg-industrial-light border-2 border-transparent hover:border-primary-500 dark:hover:border-industrial-accent transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="aspect-video relative">
                            <video
                              src="/video2.mp4"
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                              preload="metadata"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-800 dark:bg-industrial-dark">
                            <p className="text-sm font-medium text-white text-center">
                              Présentation du projet
                            </p>
                          </div>
                        </motion.button>

                        {/* Vidéo de présentation 3 */}
                        <motion.button
                          onClick={() => setPlayingVideo('/video3.mp4')}
                          className="group relative rounded-lg overflow-hidden bg-gray-900 dark:bg-industrial-light border-2 border-transparent hover:border-primary-500 dark:hover:border-industrial-accent transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="aspect-video relative">
                            <video
                              src="/video3.mp4"
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                              preload="metadata"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-800 dark:bg-industrial-dark">
                            <p className="text-sm font-medium text-white text-center">
                              Présentation du projet
                            </p>
                          </div>
                        </motion.button>
                      </div>
                    </div>
                  </>
                )}

                {/* Description générale */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('projects.description')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Problématique */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('projects.problem')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {t('projects.solution')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {t('projects.technologies')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-primary-100 dark:bg-industrial-light text-primary-700 dark:text-industrial-accent text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal vidéo pour la lecture */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setPlayingVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="rounded-lg overflow-hidden bg-black shadow-2xl">
                <video
                  src={playingVideo}
                  controls
                  autoPlay
                  className="w-full h-auto"
                  playsInline
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
