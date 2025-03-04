import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileDown, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const resumeUrl = i18n.language === 'es'
    ? 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1737931066/CV_Ciro_P%C3%A9rez_Desarrollador_-_Full_stack_x5f5ho.pdf'
    : 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1737931065/CV_Ciro_P%C3%A9rez_Full_Stack_Developer_himz8l.pdf';

  const techStack = [
    {
      name: 'React',
      icon: 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1738707006/react-original_vxr4oc.svg',
      color: '#61DAFB'
    },
    {
      name: 'TypeScript',
      icon: 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1738707007/typescript-original_ypwfdk.svg',
      color: '#3178C6'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1738709797/tailwind-css-2_w4q1q5.svg',
      color: '#06B6D4'
    },
    {
      name: 'Vite',
      icon: 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1738707008/vite_vnqtvm.svg',
      color: '#646CFF'
    },
    {
      name: 'Cloudinary',
      icon: 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1738709679/cloudinary-2_kdzlzg.svg',
      color: '#646CFF'
    },
    {
      name: 'Framer Motion',
      icon: 'https://res.cloudinary.com/dmas5fdhw/image/upload/v1738709682/framer-motion_iayx56.svg',
      color: '#FF0055'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/CRperez-Valenzuela',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ciro-ricardo-perez-valenzuela-9776b81a5/?trk=public-profile-join-page',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="fixed bottom-0 w-full py-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.2 }}
                className="relative group"
              >
                <motion.img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-light hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <FileDown className="w-4 h-4" />
              <span>{t('resume.download')}</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;