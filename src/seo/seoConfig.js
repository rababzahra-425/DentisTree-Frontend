/**
 * DentisTree Clinic — Per-Page SEO Configuration
 * All title tags, meta descriptions, keywords, OG, Twitter, canonical, robots
 */

const BASE_URL = 'https://dentistree.pk';
const SITE_NAME = 'DentisTree Dental Clinic';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

/* ─────────────────────────────────────────────────────────────
   Helper: Build full title with brand suffix
   Format: "Page Title | DentisTree Dental Clinic Sahiwal"
───────────────────────────────────────────────────────────── */
const t = (title) => `${title} | ${SITE_NAME} Sahiwal`;

/* ─────────────────────────────────────────────────────────────
   SEO Config Map — keyed by route path
───────────────────────────────────────────────────────────── */
export const seoConfig = {

  /* ── HOME ── */
  '/': {
    title: t('Best Dental Clinic in Sahiwal | Female Dentist Available'),
    description:
      'Looking for the best dental clinic in Sahiwal? DentisTree offers expert dental care — teeth whitening, braces, scaling, implants & more. Qualified female dentist available. Book your appointment today! ☎ +92-321-7450249',
    keywords:
      'best dental clinic in Sahiwal, female dentist Sahiwal, lady dentist Sahiwal, dental hospital Sahiwal, teeth cleaning Sahiwal, braces Sahiwal, DentisTree Clinic Sahiwal, teeth whitening Sahiwal, dental implants Sahiwal, orthodontics Sahiwal, root canal Sahiwal',
    canonical: `${BASE_URL}/`,
    og: {
      title: 'Best Dental Clinic in Sahiwal | Female Dentist | DentisTree',
      description:
        'DentisTree — Sahiwal\'s top dental clinic. Qualified female dentists, teeth whitening, braces, implants & more. Book now!',
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Dental Clinic in Sahiwal | DentisTree',
      description:
        'Expert dental care in Sahiwal — female dentist available, teeth whitening, braces & more.',
      image: DEFAULT_OG_IMAGE,
    },
  },

  /* ── ABOUT ── */
  '/about': {
    title: t('About Us | Expert Dentists in Sahiwal | Female Dentist Available'),
    description:
      'Meet the qualified dental team at DentisTree Clinic Sahiwal. Our expert dentists including female dental surgeons have 5+ years of experience. Serving Sahiwal, Farid Town, and all of Punjab.',
    keywords:
      'about DentisTree Sahiwal, dentist team Sahiwal, female dental surgeon Sahiwal, Dr Iqra Rasool dentist, expert dentist Sahiwal Punjab, dental clinic about page',
    canonical: `${BASE_URL}/about`,
    og: {
      title: 'About DentisTree | Expert Female & Male Dentists in Sahiwal',
      description:
        'Our qualified dental team in Sahiwal includes female dentists specializing in orthodontics, implants, and more.',
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/about`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About DentisTree Dental Clinic Sahiwal',
      description: 'Meet our expert dental team in Sahiwal, Punjab.',
      image: DEFAULT_OG_IMAGE,
    },
  },

  /* ── GALLERY ── */
  '/gallery': {
    title: t('Patient Gallery | Smile Transformations in Sahiwal'),
    description:
      'Browse real patient before-and-after results from DentisTree Clinic Sahiwal. See our teeth whitening, braces, implants, and smile makeover results. Book your transformation today.',
    keywords:
      'dental gallery Sahiwal, before after teeth Sahiwal, smile transformation Sahiwal, teeth whitening results, braces results Sahiwal, dental photos Sahiwal',
    canonical: `${BASE_URL}/gallery`,
    og: {
      title: 'Patient Gallery | DentisTree Dental Clinic Sahiwal',
      description:
        'See real smile transformations — teeth whitening, braces, implants. DentisTree Clinic Sahiwal.',
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/gallery`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Smile Transformations Gallery | DentisTree Sahiwal',
      description: 'Real patient results from the best dental clinic in Sahiwal.',
      image: DEFAULT_OG_IMAGE,
    },
  },

  /* ── CONTACT ── */
  '/contact': {
    title: t('Contact Us | Book Dental Appointment in Sahiwal'),
    description:
      'Contact DentisTree Dental Clinic in Sahiwal, Punjab. Call or WhatsApp +92-321-7450249. Located at Main Market, Farid Town, Sahiwal. Female dentist available. Open Mon–Sat, 2 PM – 9 PM.',
    keywords:
      'contact DentisTree Sahiwal, dental clinic contact Sahiwal, dentist phone number Sahiwal, book dentist appointment Sahiwal, dental clinic address Sahiwal Farid Town',
    canonical: `${BASE_URL}/contact`,
    og: {
      title: 'Contact DentisTree | Dental Clinic in Farid Town, Sahiwal',
      description:
        'Reach us at Main Market, Farid Town, Sahiwal. Call +92-321-7450249. Female dentist available.',
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/contact`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Contact DentisTree Clinic Sahiwal',
      description: 'Book a dental appointment in Sahiwal. Call +92-321-7450249.',
      image: DEFAULT_OG_IMAGE,
    },
  },

  /* ── BOOK APPOINTMENT ── */
  '/book-appointment': {
    title: t('Book Dental Appointment in Sahiwal | Online Booking'),
    description:
      'Book your dental appointment online at DentisTree Clinic Sahiwal. Choose from teeth whitening, braces, scaling, implants & more. Qualified female dentist available. Easy online booking!',
    keywords:
      'book dental appointment Sahiwal, online dental booking Sahiwal, dentist appointment Sahiwal, book appointment female dentist Sahiwal',
    canonical: `${BASE_URL}/book-appointment`,
    og: {
      title: 'Book Dental Appointment | DentisTree Clinic Sahiwal',
      description:
        'Easy online dental appointment booking at DentisTree Sahiwal. Female dentist available.',
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/book-appointment`,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: 'Book Appointment | DentisTree Sahiwal',
      description: 'Quick online dental appointment booking in Sahiwal.',
      image: DEFAULT_OG_IMAGE,
    },
  },

  /* ── PRIVACY POLICY ── */
  '/privacy-policy': {
    title: t('Privacy Policy'),
    description: 'Privacy policy for DentisTree Dental Clinic website. Learn how we handle your data.',
    keywords: 'DentisTree privacy policy, dental clinic privacy',
    canonical: `${BASE_URL}/privacy-policy`,
    robots: 'noindex, follow',
    og: {
      title: 'Privacy Policy | DentisTree Dental Clinic',
      description: 'Privacy policy for DentisTree Dental Clinic Sahiwal.',
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/privacy-policy`,
      type: 'website',
    },
  },

  /* ── COOKIE POLICY ── */
  '/cookie-policy': {
    title: t('Cookie Policy'),
    description: 'Cookie policy for DentisTree Dental Clinic website.',
    keywords: 'DentisTree cookie policy',
    canonical: `${BASE_URL}/cookie-policy`,
    robots: 'noindex, follow',
    og: {
      title: 'Cookie Policy | DentisTree Dental Clinic',
      description: 'Cookie policy for DentisTree Dental Clinic Sahiwal.',
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/cookie-policy`,
      type: 'website',
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   Per-Service SEO generator
   Usage: getServiceSEO(service) → { title, description, keywords, ... }
───────────────────────────────────────────────────────────── */
export const getServiceSEO = (service) => {
  if (!service) return seoConfig['/'];

  const serviceKeywords = {
    'teeth-whitening': 'teeth whitening Sahiwal, dental whitening Sahiwal, professional teeth cleaning Sahiwal',
    braces: 'braces Sahiwal, dental braces Sahiwal, teeth straightening Sahiwal, orthodontics Sahiwal',
    orthodontics: 'orthodontics Sahiwal, braces Sahiwal, teeth alignment Sahiwal',
    scaling: 'teeth cleaning Sahiwal, scaling Sahiwal, tartar removal Sahiwal, deep cleaning teeth Sahiwal',
    'dental-implants': 'dental implants Sahiwal, teeth implants Sahiwal, permanent teeth Sahiwal',
    'root-canal-treatment': 'root canal Sahiwal, root canal treatment Sahiwal, infected tooth treatment Sahiwal',
    'pediatric-dentistry': 'child dentist Sahiwal, kids dentist Sahiwal, pediatric dentistry Sahiwal, baby teeth Sahiwal',
    'wisdom-tooth-surgery': 'wisdom tooth removal Sahiwal, wisdom tooth surgery Sahiwal',
    veneers: 'dental veneers Sahiwal, porcelain veneers Sahiwal, smile makeover Sahiwal',
    'zirconia-crown': 'zirconia crown Sahiwal, dental crown Sahiwal, metal free crown Sahiwal',
    aligners: 'clear aligners Sahiwal, invisible braces Sahiwal, teeth aligners Sahiwal',
    'laser-filling': 'laser filling Sahiwal, laser dentistry Sahiwal, cavity laser treatment Sahiwal',
    extractions: 'tooth extraction Sahiwal, tooth removal Sahiwal, dental extraction Sahiwal',
    dentures: 'dentures Sahiwal, false teeth Sahiwal, dental prosthetics Sahiwal',
    'crown-bridges': 'dental crown Sahiwal, dental bridge Sahiwal, crown and bridge Sahiwal',
    'cavity-filling': 'cavity filling Sahiwal, tooth filling Sahiwal, composite filling Sahiwal',
  };

  const specificKeywords = serviceKeywords[service.slug] || `${service.title} Sahiwal, dental ${service.title.toLowerCase()} Sahiwal`;

  return {
    title: t(`${service.title} in Sahiwal | Expert Dental Treatment`),
    description: `Get professional ${service.title.toLowerCase()} treatment at DentisTree Clinic in Sahiwal, Punjab. ${service.description} Qualified dentists, affordable pricing. Book your appointment today!`,
    keywords: `${specificKeywords}, DentisTree Sahiwal, best dental clinic Sahiwal, dental clinic Sahiwal Punjab`,
    canonical: `${BASE_URL}/services/${service.slug}`,
    og: {
      title: `${service.title} in Sahiwal | DentisTree Clinic`,
      description: service.description,
      image: DEFAULT_OG_IMAGE,
      url: `${BASE_URL}/services/${service.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | DentisTree Sahiwal`,
      description: service.description,
      image: DEFAULT_OG_IMAGE,
    },
  };
};

export { BASE_URL, SITE_NAME };
