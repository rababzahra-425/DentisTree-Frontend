import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component — renders all <head> tags for any page
 *
 * Props:
 *   title        {string}  — Page title (already formatted)
 *   description  {string}  — Meta description (≤160 chars recommended)
 *   keywords     {string}  — Comma-separated keywords
 *   canonical    {string}  — Canonical URL (full https://...)
 *   og           {object}  — { title, description, image, url, type }
 *   twitter      {object}  — { card, title, description, image }
 *   robots       {string}  — e.g. "index, follow" or "noindex, follow"
 *   schemas      {Array}   — Array of JSON-LD schema objects
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  og = {},
  twitter = {},
  robots = 'index, follow',
  schemas = [],
}) => {
  return (
    <Helmet>
      {/* ── Primary Meta ── */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content="DentisTree Dental Clinic" />
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Sahiwal, Punjab, Pakistan" />
      <meta name="geo.position" content="30.675154;73.0815546" />
      <meta name="ICBM" content="30.675154, 73.0815546" />

      {/* ── Canonical ── */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ── Open Graph ── */}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.description && <meta property="og:description" content={og.description} />}
      {og.image && <meta property="og:image" content={og.image} />}
      {og.url && <meta property="og:url" content={og.url} />}
      {og.type && <meta property="og:type" content={og.type} />}
      <meta property="og:site_name" content="DentisTree Dental Clinic" />
      <meta property="og:locale" content="en_PK" />

      {/* ── Twitter Card ── */}
      {twitter.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter.description && (
        <meta name="twitter:description" content={twitter.description} />
      )}
      {twitter.image && <meta name="twitter:image" content={twitter.image} />}

      {/* ── JSON-LD Structured Data ── */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </Helmet>
  );
};

export default SEO;
