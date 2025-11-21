import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';
import { SKILL_DATA_EN, SKILL_DATA_ZH } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const SkillsChart: React.FC = () => {
  const { language } = useLanguage();
  const data = language === 'zh' ? SKILL_DATA_ZH : SKILL_DATA_EN;

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name={language === 'zh' ? "燧标" : "Ybhsoft"}
            dataKey="A"
            stroke="#d946ef"
            strokeWidth={3}
            fill="#d946ef"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;