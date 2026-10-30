/**
 * DentisTree Clinic — Local Business & Medical JSON-LD Schemas
 * Targets: "Best dental clinic Sahiwal", "Female dentist Sahiwal",
 *          "Teeth cleaning and braces Sahiwal", "Dental hospital Sahiwal"
 */

const CLINIC_URL = 'https://dentistree.pk';
const CLINIC_NAME = 'DentisTree Dental Clinic';
const CLINIC_PHONE = '+92-321-7450249';
const CLINIC_EMAIL = 'dentistreeclinic123@gmail.com';

/* ─────────────────────────────────────────────────────────────
   1. PRIMARY: Dentist + MedicalClinic (dual @type for max coverage)
───────────────────────────────────────────────────────────── */
export const dentistSchema = {
  '@context': 'https://schema.org',
  '@type': ['Dentist', 'MedicalClinic'],
  '@id': `${CLINIC_URL}/#dentist`,
  name: CLINIC_NAME,
  alternateName: [
    'Dentistree Clinic Sahiwal',
    'DentisTree',
    'Best Dental Clinic Sahiwal',
  ],
  description:
    'DentisTree is the best dental clinic in Sahiwal, Punjab, Pakistan. We offer expert dental care including teeth whitening, braces, orthodontics, scaling, dental implants, and root canal treatment. Female dentist available.',
  url: CLINIC_URL,
  telephone: CLINIC_PHONE,
  email: CLINIC_EMAIL,
  priceRange: 'PKR 500 – PKR 150,000',

  /* ── Address ── */
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Main Market, Farid Town',
    addressLocality: 'Sahiwal',
    addressRegion: 'Punjab',
    postalCode: '57000',
    addressCountry: 'PK',
  },

  /* ── Geo Coordinates ── */
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '30.675154',
    longitude: '73.0815546',
  },

  /* ── Map link ── */
  hasMap: 'https://www.google.com/maps?q=30.675154,73.0815546',

  /* ── Opening Hours ── */
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '14:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '00:00',
    },
  ],

  /* ── Medical Specialties ── */
  medicalSpecialty: [
    'Dentistry',
    'Orthodontics',
    'Oral Surgery',
    'Pediatric Dentistry',
    'Cosmetic Dentistry',
    'Endodontics',
    'Periodontics',
    'Prosthodontics',
  ],

  /* ── KEY for "Female Dentist" ranking ── */
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Female Dentist Available',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Female Doctor',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Lady Dentist',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Appointment Booking',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Online Appointment',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'WhatsApp Consultation',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Laser Dentistry',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Digital X-Ray',
      value: true,
    },
  ],

  /* ── What the clinic knows / is about ── */
  knowsAbout: [
    'Female Dentist Sahiwal',
    'Best Dentist Sahiwal',
    'Dental Clinic Sahiwal',
    'Teeth Cleaning Sahiwal',
    'Braces Sahiwal',
    'Teeth Whitening',
    'Dental Implants',
    'Root Canal Treatment',
    'Orthodontics',
    'Scaling and Polishing',
    'Pediatric Dentistry',
    'Wisdom Tooth Surgery',
    'Dental Veneers',
    'Zirconia Crown',
    'Clear Aligners',
  ],

  /* ── Service Catalog ── */
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dental Services at DentisTree Sahiwal',
    itemListElement: [
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/teeth-whitening`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Teeth Whitening',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/braces`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Dental Braces & Orthodontics',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/scaling`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Teeth Cleaning (Scaling)',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/dental-implants`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Dental Implants',
          procedureType: 'https://schema.org/SurgicalProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/root-canal-treatment`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Root Canal Treatment',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/orthodontics`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Orthodontics',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/pediatric-dentistry`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Pediatric Dentistry (Child Dental Care)',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/wisdom-tooth-surgery`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Wisdom Tooth Surgery',
          procedureType: 'https://schema.org/SurgicalProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/veneers`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Dental Veneers',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/zirconia-crown`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Zirconia Crown',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/aligners`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Clear Aligners',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/laser-filling`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Laser Filling',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/extractions`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Tooth Extraction',
          procedureType: 'https://schema.org/SurgicalProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/dentures`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Dentures',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
      {
        '@type': 'Offer',
        url: `${CLINIC_URL}/services/crown-bridges`,
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Crowns & Bridges',
          procedureType: 'https://schema.org/TherapeuticProcedure',
        },
      },
    ],
  },

  /* ── Social Profiles ── */
  sameAs: [
    'https://www.facebook.com/share/191yAcqH9L/',
    'https://www.instagram.com/dentistree_swl',
    'https://wa.me/923217450249',
    'https://www.google.com/maps?q=30.675154,73.0815546',
  ],

  /* ── Aggregate Rating (helps CTR — update when you collect reviews) ── */
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
};

/* ─────────────────────────────────────────────────────────────
   2. WEBSITE schema — enables Google Sitelinks Search Box
───────────────────────────────────────────────────────────── */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${CLINIC_URL}/#website`,
  url: CLINIC_URL,
  name: CLINIC_NAME,
  description:
    'Best dental clinic in Sahiwal — teeth whitening, braces, implants, scaling. Female dentist available.',
  publisher: { '@id': `${CLINIC_URL}/#dentist` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${CLINIC_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-PK',
};

/* ─────────────────────────────────────────────────────────────
   3. BREADCRUMB helper — call per page
───────────────────────────────────────────────────────────── */
export const buildBreadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.name,
    item: `${CLINIC_URL}${crumb.path}`,
  })),
});

/* ─────────────────────────────────────────────────────────────
   4. FAQ schema — for rich snippets on Google
───────────────────────────────────────────────────────────── */
export const homeFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a female dentist at DentisTree Clinic Sahiwal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! DentisTree Clinic has qualified female dental surgeons including Dr. Iqra Rasool (BDS, C-Ortho) and Dr. Qurat-ul-Ain Abdullah. Female patients are welcome and all treatments are performed with full privacy and comfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dental services are available at DentisTree Sahiwal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DentisTree offers teeth whitening, dental braces, clear aligners, scaling (teeth cleaning), dental implants, root canal treatment, pediatric dentistry, wisdom tooth surgery, veneers, zirconia crowns, laser fillings, extractions, and dentures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the clinic timings for DentisTree Sahiwal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DentisTree Dental Clinic is open Monday to Saturday from 2:00 PM to 9:00 PM (Pakistan Standard Time). The clinic is closed on Sundays. You can book an appointment online or via WhatsApp at +92 321 7450249.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book an appointment at DentisTree Dental Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book an appointment by filling the appointment form on our website, calling +92 321 7450249, or messaging us on WhatsApp. Walk-ins are also welcome during clinic hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is DentisTree Clinic located in Sahiwal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DentisTree Dental Clinic is located at Main Market, Farid Town, Sahiwal, Punjab, Pakistan. You can find us on Google Maps by searching "DentisTree Sahiwal".',
      },
    },
  ],
};
