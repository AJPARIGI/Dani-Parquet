import { Helmet } from 'react-helmet-async';

const SeoSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dani Parquet",
    "image": "https://res.cloudinary.com/disiccvxz/image/upload/v1743161108/DANI_PARQUET_2025_vhly3a.png",
    "description": "Artigiano specializzato nell'installazione, restauro e manutenzione di pavimenti in legno dal 1993. Esperti in parquet massello, laminato e prefinito.",
    "@id": "https://www.daniparquet.com",
    "url": "https://www.daniparquet.com",
    "telephone": "+393395713027",
    "email": "daniparquet63@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Anzola dell'Emilia",
      "addressLocality": "Bologna",
      "addressRegion": "Emilia-Romagna",
      "postalCode": "40011",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.5479,
      "longitude": 11.1937
    },
    "areaServed": ["Emilia-Romagna", "London", "Barcelona"],
    "priceRange": "€€-€€€",
    "sameAs": [],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Parquet",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installazione Parquet",
            "description": "Posa professionale di parquet massello, prefinito e laminato con tecniche tradizionali e innovative"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restauro Parquet",
            "description": "Recupero e restauro di pavimenti in legno antichi e danneggiati"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Levigatura e Verniciatura",
            "description": "Trattamenti professionali di finitura e protezione per pavimenti in legno"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <title>Dani Parquet - Artigiano del Parquet dal 1993 | Bologna</title>
      <meta name="description" content="Specialisti nell'installazione, restauro e manutenzione di pavimenti in legno a Bologna e in tutta l'Emilia-Romagna. Servizi professionali di posa parquet." />
      <meta name="keywords" content="parquet bologna, installazione parquet, posa parquet, restauro parquet, levigatura parquet, verniciatura parquet, pavimenti in legno, parquet massello, parquet prefinito, artigiano parquet" />
      <meta property="og:title" content="Dani Parquet - Artigiano del Parquet dal 1993 | Bologna" />
      <meta property="og:description" content="Specialisti nell'installazione, restauro e manutenzione di pavimenti in legno a Bologna e in tutta l'Emilia-Romagna. Servizi professionali di posa parquet." />
      <meta property="og:image" content="https://res.cloudinary.com/disiccvxz/image/upload/v1743161108/DANI_PARQUET_2025_vhly3a.png" />
      <meta property="og:url" content="https://www.daniparquet.com" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.daniparquet.com" />
    </Helmet>
  );
};

export default SeoSchema;