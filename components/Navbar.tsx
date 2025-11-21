import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getLabel = (id: string) => {
    switch (id) {
      case SectionId.HOME: return t.nav.home;
      case SectionId.ABOUT: return t.nav.about;
      case SectionId.PROJECTS: return t.nav.updates;
      case SectionId.CONTACT: return t.nav.contact;
      default: return '';
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-white flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-slate-800 group-hover:ring-cyan-500/50 transition-all shadow-lg shadow-cyan-500/20">
             <img 
              src="https://github.com/ybhsoft.png" 
              alt="Ybhsoft Logo" 
              className="w-full h-full object-cover"
             />
          </div>
          <span className="tracking-tight">Ybhsoft<span className="hidden sm:inline text-cyan-400 font-light">.Innovation</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {getLabel(link.id)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
            </button>
          ))}
          
          <button 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-bold text-cyan-400 hover:bg-slate-800 transition-all"
          >
            <Languages className="w-3 h-3" />
            {language === 'en' ? '中' : 'EN'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-bold text-cyan-400 hover:bg-slate-800 transition-all"
            >
                {language === 'en' ? '中' : 'EN'}
            </button>
            <button 
                className="text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-lg font-medium text-slate-300 hover:text-white"
                >
                  {getLabel(link.id)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;