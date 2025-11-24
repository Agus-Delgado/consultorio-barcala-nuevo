import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, ChevronDown, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false); // Estado para el menú de WhatsApp

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 -mt-16 pt-16">
      {/* Imagen de fondo con superposición */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Médicos profesionales"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full mb-8 border border-white/20"
          >
            <Stethoscope className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Atencion de calidad</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Cuidamos de tu salud
            <span className="text-blue-300"> con excelencia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            En nuestro consultorio medico, tu bienestar es nuestra prioridad. Ofrecemos atención médica integral con un equipo de profesionales altamente calificados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-transparent hover:bg-white/10 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
            >
              Conocer más sobre nosotros
            </a>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
          >
            {[
              { number: "15+", label: "Años de experiencia" },
              { number: "7k+", label: "Pacientes atendidos" },
              { number: "3", label: "Profesionales" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* --- INICIO MENU WHATSAPP --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {showWhatsapp && (
            <>
              {/* Opción 1 */}
              <motion.a
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                /* CORREGIDO: Enlace directo a API de WhatsApp */
                href="https://wa.me/5491124699914"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* Texto modificado */}
                <span className="text-sm font-semibold pr-2">WhatsApp - Línea 1</span>
                <div className="bg-green-500 rounded-full p-1.5 shadow-sm">
                   {/* Logo Whatsapp SVG */}
                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.605.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.55 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.467h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
              </motion.a>

              {/* Opción 2 */}
              <motion.a
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ delay: 0.05 }}
                /* CORREGIDO: Enlace directo a API de WhatsApp */
                href="https://wa.me/5491136984389"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* Texto modificado */}
                <span className="text-sm font-semibold pr-2">WhatsApp - Línea 2</span>
                <div className="bg-green-500 rounded-full p-1.5 shadow-sm">
                   {/* Logo Whatsapp SVG */}
                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.605.136-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.55 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.467h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Botón Principal (Toggle) */}
        <motion.button
          onClick={() => setShowWhatsapp(!showWhatsapp)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contactar por WhatsApp"
        >
           {showWhatsapp ? (
             <X className="w-8 h-8" />
           ) : (
             <MessageCircle className="w-8 h-8" />
           )}
        </motion.button>
      </div>

      {/* Indicador de desplazamiento */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default Hero;