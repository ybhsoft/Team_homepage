import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const UPDATES_URL = "https://updates.team.xtyin.com";
  
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">{t.projects.title}</h2>
            <p className="text-slate-400">{t.projects.desc}</p>
          </div>
          <a 
            href={UPDATES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {t.projects.link} <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[800px] bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden relative shadow-2xl"
        >
           <iframe 
              src={UPDATES_URL}
              title="Team Updates"
              className="w-full h-full border-0"
              loading="lazy"
           />
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
            <a 
            href={UPDATES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {t.projects.link} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;