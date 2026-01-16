'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, X } from 'lucide-react'

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

const projects: Project[] = [
  {
    id: 1,
    title: 'Robot autonome de détection de fissures',
    category: 'IA',
    description:
      'Robot intelligent utilisant l\'IA pour détecter automatiquement les fissures dans les structures',
    problem:
      'Détection manuelle des fissures coûteuse et sujette aux erreurs dans les inspections industrielles',
    solution:
      'Développement d\'un robot autonome équipé de caméras et d\'algorithmes d\'IA pour la détection automatique',
    technologies: ['SolidWorks', 'Intelligence Artificielle', 'ESP32', 'Computer Vision'],
    image: '/crac.jpg',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Émulateur de groupe électrogène + AR',
    category: 'AR',
    description:
      'Application mobile en réalité augmentée pour explorer virtuellement les composants d\'un groupe électrogène',
    problem:
      'Formation technique complexe et coûteuse pour les techniciens sur les groupes électrogènes',
    solution:
      'Application AR immersive avec quiz intégré permettant l\'apprentissage interactif des composants',
    technologies: ['Unity', 'C#', 'Vuforia', 'Blender', 'SolidWorks'],
    image: '/app.jpg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 7,
    title: 'Simulateur de pannes de groupe électrogène',
    category: 'Automatisation',
    description:
      'Conception et réalisation d\'un simulateur de pannes d\'un groupe électrogène avec application mobile',
    problem:
      'Formation des techniciens sur les pannes de groupes électrogènes nécessite un équipement réel coûteux et complexe',
    solution:
      'Développement d\'un simulateur de pannes avec contrôleur Guardrevolution et application mobile Java pour l\'apprentissage',
    technologies: ['Java', 'Électronique industrielle', 'Contrôleurs', 'SolidWorks'],
    image: '/groupe.jpg',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 3,
    title: 'Système automatisé de comptage des câbles',
    category: 'IoT',
    description:
      'Système automatisé de comptage des câbles en environnement industriel, intégrant une solution électronique, logicielle et mécanique',
    problem:
      'Le comptage manuel des câbles produits est chronophage, sujet aux erreurs humaines et peu fiable pour le suivi en temps réel de la production',
    solution:
      'Développement d\'un poste de comptage automatisé basé sur un capteur de proximité, une carte Arduino et une communication série pour la transmission des données',
    technologies: ['Arduino', 'Capteur E3F-DS30C4', 'SolidWorks', 'VS Code / Arduino IDE', 'Automatisation industrielle'],
    image: '/gd11.png',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 8,
    title: 'Application desktop intelligente de gestion et suivi de production',
    category: 'IoT',
    description:
      'Application desktop intelligente dédiée à la gestion et au suivi de la production industrielle, permettant de remplacer un système manuel basé sur des fiches papier par une solution numérique automatisée',
    problem:
      'Le suivi reposait sur des fiches papier remplies manuellement, un comptage physique via des courroies numérotées et un calcul a posteriori. Ce système était chronophage, sujet aux erreurs humaines et peu adapté au suivi en temps réel',
    solution:
      'Développement d\'une application desktop complète intégrant la gestion des ouvriers, le suivi des shifts, la collecte et l\'analyse des données, avec reconnaissance faciale et QR codes',
    technologies: ['Python', 'VS Code', 'QR Code', 'Reconnaissance faciale', 'CSV / Excel', 'Supervision industrielle'],
    image: '/gd.png',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    id: 9,
    title: 'Application mobile d\'interprétation des codes d\'erreur d\'un groupe électrogène',
    category: 'Automatisation',
    description:
      'Application mobile simple permettant aux techniciens de saisir un code d\'erreur affiché sur le contrôleur Guard Revolution AMF25 et d\'afficher instantanément la description détaillée du défaut',
    problem:
      'Les codes d\'erreur affichés sur le contrôleur sont techniques et peu explicites, difficiles à interpréter sans documentation, source de perte de temps pour les techniciens lors des interventions',
    solution:
      'Développement d\'une application mobile légère et intuitive permettant la saisie manuelle du code d\'erreur et l\'affichage instantané de sa signification détaillée',
    technologies: ['Application mobile', 'Maintenance industrielle', 'Groupes électrogènes'],
    image: '/cappp.jpg',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Suiveur de ligne & détecteur d\'obstacles',
    category: 'Robotique',
    description:
      'Robot autonome capable de suivre une ligne et d\'éviter les obstacles de manière intelligente',
    problem:
      'Besoin de robots autonomes pour la navigation dans des environnements structurés',
    solution:
      'Développement d\'un robot avec algorithmes de suivi de ligne et détection d\'obstacles',
    technologies: ['Arduino', 'SolidWorks', 'Capteurs', 'Algorithmes'],
    image: '/api/placeholder/600/400',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Bras robotique dessinant sur bois (Woodcraft)',
    category: 'Robotique',
    description:
      'Commande précise d\'un bras robotique pour réaliser des motifs complexes sur le bois',
    problem:
      'Réalisation manuelle de motifs complexes sur bois longue et imprécise',
    solution:
      'Programmation d\'un bras robotique avec trajectoires précises pour l\'usinage artistique',
    technologies: ['SolidWorks', 'RT Tool Box', 'Robotique industrielle', 'Teaching method'],
    image: '/rttoolbox.png',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 6,
    title: 'Réservoir intelligent avec Node-RED',
    category: 'IoT',
    description:
      'Système de monitoring intelligent d\'un réservoir avec dashboard temps réel et alertes',
    problem:
      'Surveillance manuelle des réservoirs inefficace et risque de débordement ou de pénurie',
    solution:
      'Dashboard Node-RED avec MQTT et ESP32 pour le monitoring en temps réel et alertes automatiques',
    technologies: ['Node-RED', 'MQTT', 'ESP32', 'IoT', 'Dashboard'],
    image: '/api/placeholder/600/400',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 10,
    title: 'Application de supervision industrielle & indicateurs de maintenance',
    category: 'Automatisation',
    description:
      'Application de supervision industrielle permettant l\'acquisition, l\'enregistrement et l\'analyse des arrêts machine, données de production et paramètres process, avec calcul automatique des indicateurs de maintenance MTTR et MTBF',
    problem:
      'Dans un environnement industriel, l\'absence d\'un système de supervision structuré entraîne une mauvaise traçabilité des arrêts machine, un suivi limité de la production et de la consommation matière, et une difficulté à analyser les performances et la maintenance',
    solution:
      'Développement d\'une application de supervision centralisée intégrant l\'acquisition des signaux d\'arrêt via une carte d\'acquisition, l\'enregistrement des données process dans une base de données, et une interface graphique multi-fenêtres pour le suivi, l\'analyse et la prise de décision',
    technologies: ['WinDev', 'Base de données', 'Carte d\'acquisition', 'Supervision industrielle', 'Maintenance industrielle', 'MTTR / MTBF', 'Siemens'],
    image: '/mes1.png',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

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
            <span className="text-gradient">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-industrial-accent mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mes réalisations en ingénierie, de la robotique à l'intelligence artificielle
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
                        Voir détails
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
                        Objectif du Projet
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Le but de notre projet est de créer un <strong>woodcraft</strong>, où un robot sera capable 
                        d'écrire un mot ou de dessiner sur du bois de manière artisanale. Dans notre cas, le robot 
                        sera chargé d'écrire le mot <strong>"meca"</strong> sur une surface en bois.
                      </p>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">1</span>
                          Conception sur SolidWorks
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          La première étape consiste à concevoir la table de travail, l'emplacement du robot et la pièce 
                          sur laquelle il écrira le mot "meca". Cette conception détaillée a été réalisée à l'aide du 
                          logiciel <strong>SolidWorks</strong>.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">2</span>
                          Programmation avec RT Tool Box - Création du Hand
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Nous avons utilisé le logiciel <strong>RT Tool Box</strong> pour programmer le robot. Dans un premier temps, 
                          nous avons créé notre hand, définissant ainsi la configuration des outils et des effecteurs que 
                          le robot utilisera pour l'écriture sur bois.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">3</span>
                          Intégration des Pièces à RT Tool Box
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Suite à la création du hand, nous avons intégré les pièces conçues précédemment sur 
                          SolidWorks dans le logiciel RT Tool Box. Cette étape garantit la <strong>synchronisation entre les 
                          éléments mécaniques et la programmation</strong>, assurant une exécution cohérente des mouvements 
                          du robot.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary-600 dark:bg-industrial-accent text-white flex items-center justify-center text-sm font-bold">4</span>
                          Programmation Avancée avec la Méthode de Teaching de Robot
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Enfin, par le biais de la <strong>méthode de teaching de robot</strong>, nous avons affiné la programmation du 
                          robot. Cette approche interactive a permis au robot d'apprendre et de s'adapter 
                          dynamiquement à la surface du bois, améliorant ainsi sa capacité à écrire le mot "meca" avec 
                          <strong>précision et efficacité</strong>.
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-primary-100 to-primary-50 dark:from-industrial-light/50 dark:to-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        Points forts du projet
                      </h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span><strong>Intégration complète</strong> : De la conception 3D (SolidWorks) à la programmation robotique (RT Tool Box)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span><strong>Précision artisanale</strong> : Réalisation de motifs complexes avec une grande précision</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span><strong>Méthode de teaching</strong> : Adaptation dynamique du robot à la surface du bois</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span><strong>Automatisation</strong> : Réduction du temps de production et amélioration de la reproductibilité</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                          <span><strong>Application industrielle</strong> : Solution applicable à la personnalisation de produits en bois</span>
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
                      <strong>Robot de détection des fissures</strong> réalisé par <strong>VGG16</strong>, 
                      qui est un modèle de réseau de neurones convolutifs profond (CNN) spécialisé dans 
                      la classification d'images. Le système utilise une <strong>carte ESP32</strong> pour 
                      le contrôle du robot et le traitement en temps réel des images capturées par la caméra. 
                      Le modèle VGG16, pré-entraîné sur ImageNet, a été fine-tuné pour détecter et classifier 
                      les fissures dans les structures, permettant une inspection automatisée et précise.
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
                        Description
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Système automatisé de comptage des câbles en environnement industriel, intégrant une solution 
                        électronique, logicielle et mécanique pour améliorer la supervision de la production et la 
                        fiabilité des données de fabrication.
                      </p>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Fonctionnalités principales
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Détection automatique du passage des câbles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Comptage fiable et précis en temps réel</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Transmission des données vers une application de supervision</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Intégration facile dans une ligne de production existante</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Conception électronique
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Remplacement de la carte initiale par une <strong>carte Arduino</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Intégration d'un <strong>capteur de proximité E3F-DS30C4</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Réalisation du schéma de câblage complet</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Tests de fiabilité en conditions industrielles</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Programmation
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Programmation sous <strong>Arduino IDE</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Implémentation d'un <strong>algorithme de détection de front descendant</strong> pour garantir un comptage précis et éviter les doublons</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Incrémentation automatique du compteur</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Communication série pour l'affichage et l'exploitation des données</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Conception mécanique & Réalisation
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Conception complète du poste de travail sous <strong>SolidWorks</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Montage complet du système (Arduino + capteur + structure mécanique)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Validation du bon fonctionnement du comptage automatique</span>
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
                        Description
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Application de supervision industrielle permettant l'acquisition, l'enregistrement et l'analyse 
                        des arrêts machine, données de production et paramètres process, avec calcul automatique des 
                        indicateurs de maintenance <strong>MTTR</strong> et <strong>MTBF</strong>, développée sous <strong>WinDev</strong>.
                      </p>
                    </div>

                    <div className="mb-6 space-y-4">
                      {/* Problématique */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🎯 Problématique
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          Dans un environnement industriel, l'absence d'un système de supervision structuré entraîne :
                        </p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>une <strong>mauvaise traçabilité des arrêts machine</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>un <strong>suivi limité de la production et de la consommation matière</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>une <strong>difficulté à analyser les performances et la maintenance</strong></span>
                          </li>
                        </ul>
                      </div>

                      {/* Solution */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          💡 Solution
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                          Développement d'une application de supervision centralisée intégrant :
                        </p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>l'<strong>acquisition des signaux d'arrêt</strong> via une carte d'acquisition</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>l'<strong>enregistrement des données process</strong> dans une base de données</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>une <strong>interface graphique multi-fenêtres</strong> pour le suivi, l'analyse et la prise de décision</span>
                          </li>
                        </ul>
                      </div>

                      {/* Acquisition des arrêts machine */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          ⚙️ Acquisition des arrêts machine
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-3">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span><strong>Pin 11</strong> : Arrêt défaut alimentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span><strong>Pin 10</strong> : Arrêt défaut pression</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span><strong>Pin 9</strong> : Arrêt opérateur</span>
                          </li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          ➡️ Chaque arrêt est enregistré avec : <strong>type d'arrêt</strong>, <strong>date et heure</strong>, 
                          <strong>historique consultable</strong>
                        </p>
                      </div>

                      {/* Interface graphique */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🖥️ Interface graphique (WinDev)
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Fenêtre 1 – Arrêts & Maintenance</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Liste des arrêts avec type, date, heure</li>
                              <li>• Filtrage par type et par période</li>
                              <li>• Calcul et affichage des indicateurs : <strong>MTTR</strong> (Mean Time To Repair) et <strong>MTBF</strong> (Mean Time Between Failures)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Fenêtre 2 – Suivi de la production</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Affichage de la production journalière : pièces conformes, pièces non conformes, production totale</li>
                              <li>• Analyse rapide de la performance de production</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Fenêtre 3 – Suivi process</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Suivi de la consommation de matière première en fonction du temps (par jour)</li>
                              <li>• Historique de la température</li>
                              <li>• Détection et enregistrement des dépassements de seuil (température &gt; 70 °C)</li>
                              <li>• Filtrage des données par date</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Fenêtre principale</h5>
                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                              <li>• Menu central permettant l'accès aux différentes fenêtres</li>
                              <li>• Navigation simple et intuitive</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Développement & Programmation */}
                      <div className="p-4 rounded-lg bg-white dark:bg-industrial-light border border-gray-200 dark:border-industrial-light">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          💻 Développement & Programmation
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Programmation de la <strong>carte d'acquisition</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Acquisition et enregistrement : des arrêts machine, des données de production, des données de température, de la consommation de matière première</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Développement de l'interface graphique et de la base de données sous <strong>WinDev</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">•</span>
                            <span>Implémentation des filtres et calculs statistiques</span>
                          </li>
                        </ul>
                      </div>

                      {/* Valeur ajoutée */}
                      <div className="p-4 rounded-lg bg-gradient-to-r from-primary-100 to-primary-50 dark:from-industrial-light/50 dark:to-industrial-light/30 border border-primary-200 dark:border-industrial-light">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                          🎯 Valeur ajoutée du projet
                        </h4>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span><strong>Vision complète</strong> acquisition → supervision → analyse</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Compétences en <strong>maintenance industrielle</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Exploitation des données pour <strong>l'aide à la décision</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Projet très apprécié en <strong>industrie & automatisation</strong></span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-600 dark:text-industrial-accent font-bold">✓</span>
                            <span>Intégration <strong>WinDev</strong> et <strong>Siemens</strong></span>
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
                    Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Problématique */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Problématique
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Solution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies utilisées
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
