import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SectionId } from '../types';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id={SectionId.TEAM} className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-slate-800 group-hover:ring-cyan-500/50 transition-all">
                    <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-950 px-3 py-1 rounded-full border border-slate-700 text-xs font-mono text-cyan-400">
                    {member.role.split(' ')[0]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-purple-400 mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {member.bio}
                </p>

                <div className="flex gap-4 mt-auto">
                    {member.socials?.github && (
                        <a href={member.socials.github} className="text-slate-500 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                     <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;