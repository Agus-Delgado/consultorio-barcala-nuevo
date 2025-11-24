import { Facebook, Instagram, Twitter, Linkedin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Equipo', href: '#team' },
    { name: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20 pb-12 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
              Consultorio Barcala
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ofrecemos atención médica de excelencia con calidez humana y tecnología de punta para el cuidado integral de tu salud.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Enlaces rápidos
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Horario
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Lunes - Miercoles</p>
                  <p className="text-gray-400 text-sm">13:30 - 17:00 hs</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Sábados</p>
                  <p className="text-gray-400 text-sm">Cerrado</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Domingos</p>
                  <p className="text-gray-400 text-sm">Cerrado</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Síguenos
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-blue-400 rounded-full"></span>
            </h4>
            <p className="text-gray-300 mb-4">Conecta con nosotros en nuestras redes sociales</p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-gradient-to-br from-blue-500 to-blue-600 transition-all duration-300 p-3 rounded-xl group"
                  aria-label={`Red social ${index + 1}`}
                  whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.3)' }}
                >
                  {React.cloneElement(social.icon, {
                    className: 'h-5 w-5 text-gray-300 group-hover:text-white transition-colors'
                  })}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Consultorio Barcala. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-blue-300 text-sm transition-colors relative group"
                whileHover={{ scale: 1.02 }}
              >
                Política de privacidad
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-blue-300 text-sm transition-colors relative group"
                whileHover={{ scale: 1.02 }}
              >
                Términos de servicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
