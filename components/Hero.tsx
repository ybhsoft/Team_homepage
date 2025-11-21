import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { SectionId } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToProjects = () => {
    document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">{t.hero.tag}</span>
          </div>
          
          <div className="flex justify-center mb-6">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500"
            >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <img 
                        src="https://github.com/ybhsoft.png" 
                        alt="Ybhsoft Logo" 
                        className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6">
            <span className="block text-white">{t.hero.title_prefix}</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              {t.hero.title_suffix}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light text-slate-400 mb-12 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-300 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                {t.hero.cta_explore} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold text-lg rounded-xl hover:bg-slate-800 transition-all hover:border-slate-500"
            >
              {t.hero.cta_contact}
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Bottom fade to smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default Hero;