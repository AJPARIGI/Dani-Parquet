import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Parquet a Spina di Pesce Italiana – Massello Wengè",
    description: "Un'elegante pavimentazione in legno massello di Wengè, caratterizzata dal tipico schema a spina di pesce italiana, con listelli posizionati a 90 gradi tra loro. Il Wengè, con il suo colore scuro e venature marcate, dona un tocco di lusso e raffinatezza agli ambienti, perfetto per interni classici e moderni",
    image: "https://res.cloudinary.com/disiccvxz/image/upload/v1743092935/d21ace63-fcab-4ae5-826b-034ad9071246_owesj3.jpg"
  },
  {
    title: "Parquet a Spina di Pesce Francese – Massello Rovere",
    description: "Un design sofisticato in legno massello di Rovere, lavorato con la posa a spina di pesce francese, dove i listelli vengono tagliati con un’inclinazione di 45° o 60° e incastrati con precisione. Questo stile crea un effetto dinamico ed elegante, esaltando la naturale bellezza del Rovere e adattandosi a qualsiasi tipo di arredamento.",
    image: "https://res.cloudinary.com/disiccvxz/image/upload/v1743092937/f9c5eb45-6ba2-4769-adf0-3ba53e8b9324_ryuzbg.jpg"
  },
  {
    title: "Rivestimento Scale in Parquet – Massello Doussiè",
    description: "Realizzazione di scale rivestite in parquet massello di Doussiè, un legno pregiato noto per la sua resistenza e tonalità calde che variano dal marrone dorato al rosso intenso. Questa soluzione garantisce un risultato estetico armonioso e una continuità visiva perfetta tra i pavimenti e le scale.",
    image: "https://res.cloudinary.com/disiccvxz/image/upload/v1743092924/030f8f4b-891c-4c4b-9a6b-d8056a7ea98c_hlgpnr.jpg"
  },
  {
    title: "Posa di Listoni in Rovere Incollato – Trattato con Cera",
    description: "Installazione di listoni in legno di Rovere, fissati con la tecnica dell’incollaggio per una maggiore stabilità e durata nel tempo. Il trattamento con cera naturale esalta la venatura del legno, donando una finitura setosa e proteggendo la superficie dall’usura, mantenendo un aspetto autentico e naturale.",
    image: "https://res.cloudinary.com/disiccvxz/image/upload/v1743092924/39ca6987-a483-4da2-be41-d1f4ea5f4d54_q2n7py.jpg"
  },
  {
    title: "Parquet Prefinito Flottante",
    description: "Posa di parquet prefinito con sistema flottante, un metodo rapido e pratico che non richiede l’uso di colle o chiodi. Questa tipologia di parquet è composta da strati di legno nobile e supporti stabilizzanti, garantendo un'ottima resistenza e un’installazione veloce. Ideale per chi desidera un pavimento elegante con la possibilità di una posa meno invasiva.",
    image: "https://res.cloudinary.com/disiccvxz/image/upload/v1743092925/0871e108-bb70-42e7-a002-c81a64b2083c_vjnd0a.jpg"
  },
  {
    title: "Posa Pavimento in Rovere con Motivi Geometrici",
    description: "Realizzazione di un pavimento in Rovere massello con motivi geometrici personalizzati, che arricchiscono l’ambiente con un design raffinato e originale. Grazie all’uso di tecniche di posa avanzate, è possibile creare disegni unici come intrecci, quadri o modelli decorativi su misura, esaltando la naturale bellezza del legno e conferendo carattere agli spazi.",
    image: "https://res.cloudinary.com/disiccvxz/image/upload/v1743092931/ae9746b2-46e2-4478-8230-20eb6983e724_s2lejq.jpg"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">I Nostri Lavori</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;