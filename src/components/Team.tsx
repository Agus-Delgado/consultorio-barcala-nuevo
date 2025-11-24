import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, Brain, Baby, Facebook, Twitter, Instagram } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Dra. Rita Alicia Andracchi",
    role: "Neurologa",
    // NUEVA SOLUCIÓN: Usamos la URL que siempre funcionó (la que tenía Melina).
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=RitaV3&skinColor=f3d4cf&hairColor=e6c67b&top=straight01&accessories=prescription02&mouth=smile&clothing=blazerAndShirt&eyes=default", 
    description: "Médica de cabecera de PAMI · Neuróloga por obra social (consultar).",
    experience: "15+ años",
    patients: "5,000+",
    specialties: ["Evaluación, diagnóstico y seguimiento de trastornos del sistema nervioso: cefaleas, epilepsia, ACV, neuropatías y trastornos del sueño."],
    social: { facebook: "#", twitter: "#", instagram: "#" },
    icon: <Brain className="w-5 h-5" />
  },
  {
    id: 2,
    name: "Dr. Victor Angel Delgado",
    role: "Medico Clinico",
    image: "https://avatar.iran.liara.run/public/15", // Esta sigue funcionando bien
    description: "Médico de cabecera de PAMI.",
    experience: "12+ años",
    patients: "8,000+",
    specialties: ["Diagnóstico y tratamiento de enfermedades comunes con un enfoque integral y personalizado."],
    social: { facebook: "#", "twitter": "#", instagram: "#" },
    icon: <HeartPulse className="w-5 h-5" />
  },
  {
    id: 3,
    name: "Lic. Melina Mater",
    role: "Psicopedagoga",
    // NUEVA URL para Melina: Similar a la anterior, pero con un seed distinto (Kiki) para diferenciarlas.
    image: "https://api.dicebear.com/9.x/avataaars/svg?seed=MelinaFinal&skinColor=f3d4cf&hairColor=fdd835&top=shaggyMullet&accessories=prescription01&mouth=smile&clothing=blazerAndShirt&eyes=default",
    description: "Experta profesional de la psicopedagogía, especializada de la educación que evalúa, diagnostica e interviene en las dificultades de aprendizaje.",
    experience: "10+ años",
    patients: "6,500+",
    specialties: ["Evaluación, orientación y acompañamiento del aprendizaje en niños, adolescentes y adultos."],
    social: { facebook: "#", twitter: "#", instagram: "#" },
    icon: <Baby className="w-5 h-5" />
  }
];

const Team = () => {
  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-6"
          >
            <Stethoscope className="w-4 h-4 mr-2" />
            Nuestro Equipo
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto"
          >
            Conoce a nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">especialistas</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Un equipo de profesionales altamente calificados, comprometidos con tu salud y bienestar integral.
          </motion.p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center border border-gray-100"
            >
              {/* Avatar Circular con Fondo Blanco Puro */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-50 shadow-md bg-white">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                </div>
                {/* Icono pequeño flotante */}
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full border-2 border-white shadow-sm">
                    {member.icon}
                </div>
              </div>

              <div className="text-center w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.specialties.map((specialty, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-4 border-t border-gray-100 pt-6 mt-auto">
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="w-5 h-5"/></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5"/></a>
                    <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5"/></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;