import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Alessandro Ricci",
    location: "Bologna",
    rating: 5,
    text: "Il parquet della mia casa è stato installato alla perfezione! Grande attenzione ai dettagli e materiali di altissima qualità."
  },
  {
    name: "Giovanni Esposito",
    location: "Modena",
    rating: 5,
    text: "Dani e il suo team hanno realizzato un lavoro eccezionale sul mio parquet. Eleganza e precisione in ogni tavola posata!"
  },
  {
    name: "Francesco Moretti",
    location: "Reggio Emilia",
    rating: 5,
    text: "Lavoro rapido e pulito, il parquet è stato installato con estrema precisione. Consigliatissimo per chi cerca qualità e professionalità!"
  },
  {
    name: "Giulia Ferri",
    location: "Bologna",
    rating: 5,
    text: "Ho scelto un parquet a spina di pesce e il risultato è stato oltre le aspettative. La posa è perfetta e il design incredibile!"
  },
  {
    name: "James Walker",
    location: "London",
    rating: 5,
    text: "Dani and his team did an outstanding job installing parquet flooring in our London apartment. Their craftsmanship and attention to detail were second to none. Highly recommended!"
  },
  {
    name: "Ardian Prejsi",
    location: "Barcellona",
    rating: 5,
    text: "Dani ha installato il parquet in tutta casa con una precisione incredibile. Risultato bellissimo e tempi rispettati."
  },
  {
    name: "Davide Conti",
    location: "Ferrara",
    rating: 5,
    text: "Restauro del mio vecchio parquet riuscito alla perfezione! Ora sembra nuovo di zecca, senza alcun difetto visibile."
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // cambia ogni 3 secondi

    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
  }, []);

  const displayedReviews = [
    reviews[(currentIndex) % reviews.length],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  return (
    <section className="py-20 px-4 bg-stone-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Recensioni dei Clienti</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayedReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg w-72" // W-72 ensures each review has the same width
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <div className="text-sm">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-500">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
