import React from 'react';
import { Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Ybhsoft Innovation</h3>
            <p className="text-slate-500">
                &copy; {new Date().getFullYear()} {t.footer.rights}
            </p>
            <p className="text-slate-600 text-sm mt-2">{t.footer.tagline}</p>
            <p className="text-slate-700 text-xs mt-2">{t.footer.disclaimer}</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/ybhsoft" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:team@xtyin.com" className="text-slate-400 hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;