import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Star, ChevronDown, Hammer, Shield, PenTool as Tool, Paintbrush } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
 import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/disiccvxz/image/upload/v1743161108/DANI_PARQUET_2025_vhly3a.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.6)'
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dani Parquet
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Artigiano del Parquet dal 1993
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a href="tel:+393395713027" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone size={20} />
              +39 339 571 3027
            </a>
            <a href="mailto:daniparquet63@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail size={20} />
              daniparquet63@gmail.com
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-white" size={32} />
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">I Nostri Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
    icon: <Hammer className="w-12 h-12 text-yellow-700" />,
    title: "Preparazione",
    description: "Rimozione accurata dei pavimenti esistenti, livellamento dei sottofondi."
  },
  {
    icon: <Tool className="w-12 h-12 text-yellow-700" />,
    title: "Installazione",
    description: "Posa professionale per una vasta gamma di parquet, inclusi massello, laminato, PVC e Coretex."
  },
  {
    icon: <Paintbrush className="w-12 h-12 text-yellow-700" />,
    title: "Finitura",
    description: "Applicazione di trattamenti di verniciatura, oliatura, ceratura e levigatura, per proteggere e valorizzare il pavimento."
  },
  {
    icon: <Shield className="w-12 h-12 text-yellow-700" />,
    title: "Manutenzione",
    description: "Servizi di riparazione e restauro."
  }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Form Section */}
    

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">Dani Parquet - Anzola dell'Emilia (BO)</p>
          <div className="flex justify-center gap-6">
            <a href="tel:+393395713027" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Phone size={20} />
              +39 339 571 3027
            </a>
            <a href="mailto:daniparquet63@gmail.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail size={20} />
              daniparquet63@gmail.com
            </a>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}

export default App;