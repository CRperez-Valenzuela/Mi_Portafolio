import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const { t } = useTranslation();
  const [currentCategory, setCurrentCategory] = useState(0);

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Redux', level: 80 },
        { name: 'Styled-Components', level: 85 },
      ],
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 85 },
        { name: 'Sequelize', level: 80 },
        { name: 'JWT/Bcrypt', level: 85 },
      ],
    },
    {
      title: t('skills.database'),
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Microsoft Azure', level: 75 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % skillCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('skills.title')}
        </motion.h2>
        
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevCategory}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light transition-colors"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-semibold">
              {skillCategories[currentCategory].title}
            </h3>
            <button
              onClick={nextCategory}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-navy-light transition-colors"
              aria-label="Next category"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {skillCategories[currentCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCategory(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentCategory === index
                    ? 'bg-navy dark:bg-white'
                    : 'bg-gray-300 dark:bg-navy-light'
                }`}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;