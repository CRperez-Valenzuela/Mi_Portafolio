import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ onSectionChange }) => {  // Añade este prop
  const { t } = useTranslation();
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="text-center relative z-10"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          Ciro R. Pérez Valenzuela
        </motion.h1>
       
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-slate mb-8"
        >
          {t('hero.role')}
        </motion.p>
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
         
          <button
            onClick={() => onSectionChange('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            {t('hero.cta')}
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8"
      >
        {/* También deberías cambiar este Link */}
        <button
          onClick={() => onSectionChange('about')}
          className="animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </motion.div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;