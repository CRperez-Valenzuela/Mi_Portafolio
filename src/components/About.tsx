import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/CRperez-Valenzuela',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ciro-ricardo-p%C3%A9rez-valenzuela-9776b81a5/',
      label: 'LinkedIn',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('about.title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="content-section"
        >
          <Code2 className="w-12 h-12 mx-auto mb-6 text-white" />
          <div className="space-y-4 text-slate-light">
            {t('about.description').split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;