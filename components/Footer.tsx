'use client'

import { Linkedin, Mail, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-industrial-dark dark:bg-industrial-darker border-t border-industrial-light section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Ghada Turki</h3>
            <p className="text-gray-400 text-sm">
              Transformer la mécanique en systèmes intelligents
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-industrial-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-industrial-accent transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-industrial-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Réseaux sociaux</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/ghada-turki-20319b217"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-industrial-light hover:bg-industrial-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ghada.turkiditgaraali@esprit.tn"
                className="p-2 rounded-lg bg-industrial-light hover:bg-industrial-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-industrial-light pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            "L'innovation distingue un leader d'un suiveur." - Steve Jobs
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Ghada Turki. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
