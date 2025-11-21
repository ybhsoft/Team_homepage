import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import SkillsChart from './SkillsChart';
import { Cpu, Globe, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 -top-32 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              {t.about.title_line1}<br />
              <span className="text-cyan-400">{t.about.title_line2}</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              {t.about.p1_pre}<strong className="text-white">{t.about.p1_strong}</strong>{t.about.p1_post}
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <Rocket className="w-8 h-8 text-purple-500 mb-3" />
                    <h3 className="text-white font-semibold mb-1">{t.about.cards.speed_title}</h3>
                    <p className="text-sm text-slate-500">{t.about.cards.speed_desc}</p>
                </div>
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <Cpu className="w-8 h-8 text-cyan-500 mb-3" />
                    <h3 className="text-white font-semibold mb-1">{t.about.cards.tech_title}</h3>
                    <p className="text-sm text-slate-500">{t.about.cards.tech_desc}</p>
                </div>
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <Globe className="w-8 h-8 text-pink-500 mb-3" />
                    <h3 className="text-white font-semibold mb-1">{t.about.cards.global_title}</h3>
                    <p className="text-sm text-slate-500">{t.about.cards.global_desc}</p>
                </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />
             <div className="relative z-10 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-6">
                <h3 className="text-xl font-bold text-center text-white mb-4">{t.about.chart_title}</h3>
                <SkillsChart />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;