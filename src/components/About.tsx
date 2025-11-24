import { motion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Clock, Users, Stethoscope, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Atención Personalizada',
    description: 'Cada paciente recibe un trato único según sus necesidades específicas.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Profesionales Certificados',
    description: 'Equipo altamente calificado en constante actualización.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Horarios Flexibles',
    description: 'Amplia disponibilidad para adaptarnos a tu agenda.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Enfoque Familiar',
    description: 'Cuidado integral para toda la familia.'
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-6"
          >
            <Stethoscope className="w-4 h-4 mr-2" />
            Excelencia en Salud
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto"
          >
            Cuidamos de ti y tu familia con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">amor y profesionalismo</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            En el consultorio barcala combinamos tecnología de punta con un trato humano excepcional para ofrecerte la mejor atención médica integral.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-24 px-4">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white max-w-xl mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Equipo médico"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
              
              {/* Tarjeta flotante */}
              <motion.div 
                /* CAMBIO AQUÍ: de "-bottom-8" a "bottom-4" para subir la caja */
                className="absolute bottom-4 right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">15+ años de experiencia</h4>
                </div>
                <p className="text-gray-600 text-sm">Más de una década brindando atención médica.</p>
              </motion.div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -z-10 w-40 h-40 bg-blue-100 rounded-full -bottom-10 -left-10 opacity-70"></div>
            <div className="absolute -z-10 w-24 h-24 bg-yellow-100 rounded-full -top-8 -right-8 opacity-70"></div>
          </motion.div>

          <motion.div 
            className="space-y-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Nuestro compromiso con tu <span className="text-blue-600">bienestar integral</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              En el consultorio barcala nos dedicamos a ofrecer atención médica de excelencia, combinando los últimos avances tecnológicos con un trato humano y cercano. Nuestro equipo de profesionales altamente capacitados está comprometido con tu salud y bienestar.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="p-5 h-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl text-blue-600 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


        {/* Sección de Testimonios */}
        <motion.div 
          className="mt-24 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros pacientes</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Experiencias reales de personas que han confiado en nuestra atención médica</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Excelente atención y profesionales muy capacitados. Siempre me siento bien atendido.",
                author: "María González",
                role: "Paciente desde 2018"
              },
              {
                quote: "El personal es muy amable y el trato es excepcional. Totalmente recomendado.",
                author: "Carlos López",
                role: "Paciente familiar"
              },
              {
                quote: "Instalaciones modernas y limpias. La mejor atención médica que he recibido.",
                author: "Ana Martínez",
                role: "Paciente frecuente"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-yellow-400 text-2xl mb-4">"</div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
