import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GalleryModalProps {
  images: string[];
  onClose: () => void;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
}

const GalleryModal = ({ images, onClose, currentImageIndex, setCurrentImageIndex }: GalleryModalProps) => {
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-7xl mx-auto p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 p-2 bg-navy/50 rounded-full hover:bg-navy/70 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative">
          <div className="overflow-hidden max-h-[80vh]">
            <img
              src={images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-navy/50 rounded-full hover:bg-navy/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-navy/50 rounded-full hover:bg-navy/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentImageIndex === index ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "Countries Explorer",
      description: "A modern web application that allows users to explore information about different countries. Built with React and TypeScript, featuring dynamic filtering, search functionality, and detailed country information.",
      year: 2024,
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      images: [
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1740422953/Landpage_c703zg.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1740422948/Detalles_kss7pc.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1740422948/Autenticaci%C3%B3n_vezoee.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1740422951/Home_valovl.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1740422950/Formulario_xis3xe.png",
      ],
      liveUrl: "https://countries-explorer-git.netlify.app/",
      githubUrl: "https://github.com/CRperez-Valenzuela/Countries-Explorer",
    },
    {
      title: "E-commerce Website (Applying the basics)",
      description: "My first website, built using only HTML5 and CSS3. This was my initial attempt at implementing CSS Grid while applying fundamental web development principles.",
      year: 2020,
      technologies: ["HTML5", "CSS3"],
      images: [
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741734650/Home_recortado_Ecomm_cygvk6.png",
      ],
      liveUrl: "https://e-commerce-curso.netlify.app/",
    },
    {
      title: "Real Estate Website (Getting better)",
      description: "A real estate platform showcasing properties with detailed information. At the time, I had no knowledge of media queries or responsive design",
      year: 2020,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      images: [
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741734651/Home_recortado_ticfrf.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741735245/anuncios_recortado_bienes_jwpp3j.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741735254/nosotros_recortado_bienes_s7chym.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741735246/Blog_recortado_bienes_tgjkqx.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741735250/contacto_recortado_bienes_mnrvni.png",
      ],
      liveUrl: "https://proyecto-bienes-raices-curso.netlify.app/",
    },
    {
      title: "Coffee Blog",
      description: "An informative blog about coffee culture and brewing techniques.",
      year: 2020,
      technologies: ["HTML", "CSS", "JavaScript"],
      images: [
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741734652/Nosotros_recortado_absbdg.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741735248/Blog_recortado_cafe_cknicl.png",
        "https://res.cloudinary.com/dmas5fdhw/image/upload/v1741735252/Contacto_recortado_cafe_ezvaw1.png",
      ],
      liveUrl: "https://blog-cafe-curso-practica.netlify.app/",
    },
  ];

  const openGallery = (projectIndex: number, imageIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setIsGalleryOpen(true);
  };

  // Ensure that the body has scroll enabled when the component mounts
  useEffect(() => {
    // Reset any possible overflow restrictions
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';

    // Remove any fixed positioning from potential parent elements
    const resetFixedElements = () => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.style.position = 'relative';
        mainElement.style.height = 'auto';
        mainElement.style.overflow = 'visible';
      }
    };

    resetFixedElements();
    
    // Attempt to force a reflow to ensure changes are applied
    window.scrollTo(0, 0);
    
    return () => {
      // Clean up any changes we've made
      document.body.style.overflow = '';
    };
  }, []);

  // Ensure we have exactly 4 projects to match the grid layout
  const displayedProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 min-h-0 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="mt-12 overflow-visible">
          {/* Para pantallas móviles, mostramos los proyectos en una sola columna */}
          <div className="lg:hidden flex flex-col gap-6">
            {displayedProjects.map((project, projectIndex) => (
              <ProjectCard 
                key={projectIndex} 
                project={project} 
                projectIndex={projectIndex} 
                openGallery={openGallery} 
              />
            ))}
          </div>

          {/* Para pantallas grandes, usamos la nueva configuración de grid */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:grid-rows-8 lg:gap-8 lg:h-[1600px]">
            {/* Proyecto 1: col-span-6 row-span-3 */}
            <div className="col-span-6 row-span-3">
              <ProjectCard 
                project={displayedProjects[0]} 
                projectIndex={0} 
                openGallery={openGallery} 
              />
            </div>
            
            {/* Proyecto 2: col-span-6 row-span-5 col-start-1 row-start-4 */}
            <div className="col-span-6 row-span-5 col-start-1 row-start-4">
              <ProjectCard 
                project={displayedProjects[1]} 
                projectIndex={1} 
                openGallery={openGallery} 
              />
            </div>
            
            {/* Proyecto 3: col-span-6 row-span-5 col-start-7 row-start-1 */}
            <div className="col-span-6 row-span-5 col-start-7 row-start-1">
              <ProjectCard 
                project={displayedProjects[2]} 
                projectIndex={2} 
                openGallery={openGallery} 
              />
            </div>
            
            {/* Proyecto 4: col-span-6 row-span-3 col-start-7 row-start-6 */}
            <div className="col-span-6 row-span-3 col-start-7 row-start-6">
              <ProjectCard 
                project={displayedProjects[3]} 
                projectIndex={3} 
                openGallery={openGallery} 
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isGalleryOpen && (
          <GalleryModal
            images={projects[currentProjectIndex].images}
            onClose={() => setIsGalleryOpen(false)}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Componente de tarjeta de proyecto extraído para reutilización
const ProjectCard = ({ project, projectIndex, openGallery }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
      className="bg-navy/30 backdrop-blur-sm rounded-lg p-6 shadow-xl h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-light hover:text-white transition-colors"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>

      <p className="text-slate-light mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-navy-light rounded-full text-sm text-slate-light"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <div 
          className="relative cursor-pointer group"
          onClick={() => openGallery(projectIndex, 0)}
        >
          <img
            src={project.images[0]}
            alt={`${project.title} screenshot 1`}
            className="rounded-lg shadow-md w-full transition-transform group-hover:scale-[1.01]"
          />
          {project.images.length > 1 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              <p className="text-white text-lg font-medium">
                View Gallery ({project.images.length} images)
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;