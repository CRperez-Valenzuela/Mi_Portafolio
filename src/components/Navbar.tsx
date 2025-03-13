import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = ({ currentSection, onSectionChange }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'skills', label: t('nav.skills') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 cursor-pointer relative group"
            onClick={() => onSectionChange('hero')}
          >
            
            <motion.img
              src="https://res.cloudinary.com/dmas5fdhw/image/upload/v1741296378/newlogo_wfrtiz.png"
              alt="CRP Logo"
              className="relative h-20 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.key}
                  onClick={() => onSectionChange(item.key)}
                  className={`relative group px-4 py-2 text-sm font-medium transition-colors ${
                    currentSection === item.key ? 'text-white' : 'text-slate-light hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                    initial={false}
                    animate={currentSection === item.key ? { opacity: 0.3 } : { opacity: 0 }}
                  />
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                onClick={toggleLanguage}
                className="relative group p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="Toggle language"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"
                />
                <Globe className="w-5 h-5 relative z-10 text-slate-light group-hover:text-white transition-colors" />
              </motion.button>
              <motion.button
                onClick={toggleDarkMode}
                className="relative group p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="Toggle dark mode"
              >
                
                {/*<motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"
                />
                {isDark ? (
                  <Sun className="w-5 h-5 relative z-10 text-slate-light group-hover:text-white transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 relative z-10 text-slate-light group-hover:text-white transition-colors" />
                )}*/}
              </motion.button>
            </div>
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative group p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle menu"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
            />
            {isOpen ? (
              <X className="w-6 h-6 relative z-10 text-slate-light group-hover:text-white transition-colors" />
            ) : (
              <Menu className="w-6 h-6 relative z-10 text-slate-light group-hover:text-white transition-colors" />
            )}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/20 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => {
                  onSectionChange(item.key);
                  setIsOpen(false);
                }}
                className={`relative group w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                  currentSection === item.key ? 'text-white' : 'text-slate-light hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                  initial={false}
                  animate={currentSection === item.key ? { opacity: 0.3 } : { opacity: 0 }}
                />
                {item.label}
              </motion.button>
            ))}
            
            {/* Botón de cambio de idioma en móvil */}
            <motion.button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="relative group w-full flex items-center px-4 py-2 text-sm font-medium text-slate-light hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
              aria-label="Toggle language"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
              />
              <Globe className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">
                {i18n.language === 'en' ? 'Español' : 'English'}
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;