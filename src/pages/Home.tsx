import React, { useState } from 'react'; // Importamos useState para el estado del modal
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

// --- DEFINICIÓN DE INTERFACE PARA RESOLVER EL ERROR TS(7031) ---
interface ZoomModalProps {
    isOpen: boolean;
    onClose: () => void; // Función que no devuelve nada
    imageSrc: string;
}

// --- COMPONENTE MODAL DE ZOOM (Agregado para la imagen) ---
// La modal aparece al hacer clic en la imagen del QR.
const ZoomModal = ({ isOpen, onClose, imageSrc }: ZoomModalProps) => { // APLICAMOS EL TIPO AQUÍ
    if (!isOpen) return null;

    return (
        // Overlay de fondo oscuro
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 cursor-pointer"
            onClick={onClose} // Cerrar al hacer clic fuera
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                // CLASES MODIFICADAS: Usamos max-w-xl (más ancho) y max-h-[90vh] para limitar la altura a la vista,
                // y overflow-y-auto para que se pueda hacer scroll si la imagen es muy larga.
                className="bg-white p-2 rounded-xl shadow-2xl max-w-xl w-full relative max-h-[90vh] overflow-y-auto" 
                onClick={e => e.stopPropagation()} // Evita cerrar al hacer clic en la imagen
            >
                {/* Botón de cerrar */}
                <button
                    className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold transition-colors z-10"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    &times;
                </button>
                
                {/* Imagen ampliada - Aseguramos object-contain para que no se recorte */}
                <img 
                    src={imageSrc} 
                    alt="Información detallada del Taller (Zoom)" 
                    // Aseguramos que la imagen no se salga de su contenedor y se ajuste
                    className="w-full h-auto rounded-lg object-contain block" 
                />
            </motion.div>
        </div>
    );
};


// --- SECCIÓN DEL TALLER INTEGRADA (DEFINIDA LOCALMENTE) ---
const TallerVidaSaludable = () => {
    // Estado para controlar la apertura del modal de zoom
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Lista de puntos de cuidado
    const carePoints = [
        "LA ALIMENTACIÓN", 
        "EL DESCANSO", 
        "LA MEMORIA", 
        "EL STRESS", 
        "EL MOVIMIENTO", 
    ];

    // Ruta de la imagen, que es fija
    const imagePath = '/TallerMemoria.png'; 

    return (
        // El id="talleres" es crucial para el enlace de la Navbar
        <section id="talleres" className="py-20 bg-gray-50 border-t-8 border-blue-600">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Título Principal */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-extrabold text-blue-600 mb-2">
                        TALLER DE VIDA SALUDABLE
                    </h2>
                    <p className="text-xl text-gray-700">
                        PARA TENER UNA VIDA SALUDABLE A PARTIR DE LOS 60 AÑOS HAY QUE CUIDAR:
                    </p>
                </motion.header>

                <div className="grid md:grid-cols-2 gap-10">
                    
                    {/* Puntos a Cuidar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 bg-white rounded-xl shadow-lg h-full"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Áreas de Enfoque</h3>
                        <ol className="space-y-3 list-decimal list-inside text-lg text-gray-600">
                            {carePoints.map((point, index) => (
                                <li key={index} className="font-medium text-blue-800">
                                    {point}
                                </li>
                            ))}
                        </ol>
                    </motion.div>

                    {/* Información e Inscripción */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="p-6 bg-blue-50 rounded-xl shadow-lg border-l-4 border-blue-600 h-full flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-700 mb-4">TALLER SEMIPRESENCIAL</h3>
                            <p className="text-lg mb-4 text-gray-700">
                                (L. BARCALA 550 R. MEJIA)
                            </p>
                            
                            <p className="font-bold text-xl text-gray-800 mt-4 border-t pt-3">INFORMES E INSCRIPCIÓN:</p>
                            <p className="text-red-600 font-semibold mb-3">LUNES A MIÉRCOLES DE 13 A 17:00HS</p>
                        </div>
                        
                        <p className="text-2xl font-extrabold text-green-700 p-2 bg-green-100 rounded-lg text-center">
                            SOLO POR WHATSAPP 11 36984389
                        </p>
                    </motion.div>
                </div>

                {/* Info de la Dra. y QR */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 p-8 bg-white rounded-xl shadow-2xl text-center"
                >
                    <p className="text-xl font-semibold text-gray-800 mb-2">Dictado por:</p>
                    <p className="text-2xl font-bold text-blue-600">Dra. Rita Andracchi</p>
                    <p className="text-xl italic text-gray-600 mb-6">Neuróloga</p>
                    
                    <h4 className="text-lg font-bold text-gray-800 mt-4">PARA MÁS INFORMACIÓN ESCANEE EL QR:</h4>
                    
                    <div className="my-4">
                        {/* IMAGEN CLICKEABLE */}
                        <img 
                            src={imagePath} 
                            alt="Código QR y Ficha del Taller. Haga clic para ampliar." 
                            className="mx-auto w-40 h-40 object-contain shadow-md rounded-lg cursor-pointer transform hover:scale-105 transition-transform"
                            onClick={() => setIsModalOpen(true)} // ABRIR MODAL
                        />
                    </div>
                    
                    <a 
                        href="https://consultorio-barcala-nuevo-5u28.vercel.app..."
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:text-blue-700 transition-colors text-sm underline"
                    >
                        {`https://consultorio-barcala-nuevo-5u28.vercel.app...`}
                    </a>
                </motion.div>
            </div>

            {/* Invocación de la Modal de Zoom */}
            <ZoomModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                imageSrc={imagePath} 
            />
        </section>
    );
};

// --- COMPONENTE HOME ---

const Home = () => {
    return (
        <div className="pt-20">
            <Hero />
            <About />
            {/* Llamamos la función directamente aquí */}
            <TallerVidaSaludable /> 
            <Team />
            <Contact />
        </div>
    );
};

export default Home;