import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-6"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Estamos aquí para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">ayudarte</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Visítanos en nuestro consultorio o contáctanos por cualquiera de nuestros canales de atención.
          </motion.p>
        </div>

        {/* Contenedor Principal Centrado */}
        <div className="max-w-5xl mx-auto space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center relative inline-block w-full">
              <span className="relative z-10">Información de contacto</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-blue-100 -z-0"></span>
            </h3>
            
            {/* Grid 2x2 para los datos de contacto */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Dirección */}
              <motion.div 
                className="flex items-start p-6 rounded-2xl bg-blue-50/50 hover:bg-blue-50 transition-all duration-300 group hover:shadow-md border border-transparent hover:border-blue-100"
                whileHover={{ y: -5 }}
              >
                <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm group-hover:shadow text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Dirección</h4>
                  <p className="text-gray-600">Calle Barcala 550, Ramos Mejía</p>
                  <p className="text-gray-600">La Matanza, Buenos Aires</p>
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div 
                className="flex items-start p-6 rounded-2xl bg-blue-50/50 hover:bg-blue-50 transition-all duration-300 group hover:shadow-md border border-transparent hover:border-blue-100"
                whileHover={{ y: -5 }}
              >
                <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm group-hover:shadow text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Teléfono de Línea</h4>
                  <p className="text-gray-600 text-lg font-medium">3533-2570</p>
                </div>
              </motion.div>

              {/* Correo Electrónico */}
              <motion.div 
                className="flex items-start p-6 rounded-2xl bg-blue-50/50 hover:bg-blue-50 transition-all duration-300 group hover:shadow-md border border-transparent hover:border-blue-100"
                whileHover={{ y: -5 }}
              >
                <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm group-hover:shadow text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-5 w-full overflow-hidden">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Correo electrónico</h4>
                  
                  <div className="mb-3">
                    <span className="block text-sm font-semibold text-gray-700">Dra. Andracchi:</span>
                    <a href="mailto:consultorioritabarcala@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors block break-words text-sm sm:text-base">
                      consultorioritabarcala@gmail.com
                    </a>
                  </div>

                  <div className="mb-3">
                    <span className="block text-sm font-semibold text-gray-700">Dr. Delgado:</span>
                    <a href="mailto:vconsultorio69@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors block break-words text-sm sm:text-base">
                      vconsultorio69@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="block text-sm font-semibold text-gray-700">Lic. Melina Mater:</span>
                    <a href="mailto:pspmatermelina@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors block break-words text-sm sm:text-base">
                      pspmatermelina@gmail.com
                    </a>
                  </div>

                </div>
              </motion.div>

              {/* Horario */}
              <motion.div 
                className="flex items-start p-6 rounded-2xl bg-blue-50/50 hover:bg-blue-50 transition-all duration-300 group hover:shadow-md border border-transparent hover:border-blue-100"
                whileHover={{ y: -5 }}
              >
                <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm group-hover:shadow text-blue-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Horario de atención</h4>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium text-gray-900">Lunes a Miércoles:</span><br/>
                    13:30 - 18:00 hs
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Sábados y Domingos: Cerrado</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
          
          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-300"></div>
            <div className="p-1 bg-white">
              <iframe
                src="https://maps.google.com/maps?q=Calle+Barcala+550,+Ramos+Mejia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación del consultorio"
                className="rounded-b-xl w-full"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;