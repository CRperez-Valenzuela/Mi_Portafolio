import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState('welcome');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      setCurrentSection('hero');
    }, 2000); // Reduced to 2 seconds for better UX

    return () => clearTimeout(timer);
  }, []);

  const welcomeText = "¡BIENVENIDO!";
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const sections = {
    welcome: (
      <motion.div 
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          {welcomeText.split('').map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-6xl md:text-8xl font-bold text-white inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    ),
    hero: <Hero />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <div className="min-h-screen relative">
      <div className="binary-rain" />
      {!showWelcome && <Navbar currentSection={currentSection} onSectionChange={setCurrentSection} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="h-screen"
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>
      {!showWelcome && <Footer />}
    </div>
  );
}

export default App;