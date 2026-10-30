import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import HeroImage1 from '../assets/img/HeroImage.jpeg'; 
import HeroImage2 from '../assets/img/HeroImage2.jpg'; 
import HeroImage3 from '../assets/img/HeroImage3.jpg'; 

const Hero = () => {
  return (
    <section className="hero-section" aria-label="DentisTree Dental Clinic — best dental clinic in Sahiwal">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={'fade'} 
        speed={1000}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
        aria-label="DentisTree Clinic photo slideshow"
      >
        <SwiperSlide>
          {/* aria-hidden because background image — text overlay carries the meaning */}
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${HeroImage1})` }}
            role="img"
            aria-label="Best dental clinic in Sahiwal — DentisTree Clinic reception and treatment area"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${HeroImage2})` }}
            role="img"
            aria-label="Female dentist treating a patient at DentisTree Clinic Sahiwal"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero-slide-bg"
            style={{ backgroundImage: `url(${HeroImage3})` }}
            role="img"
            aria-label="Modern dental equipment at DentisTree Dental Clinic Farid Town Sahiwal"
          />
        </SwiperSlide>
      </Swiper>

      <div className="container hero-content-overlay">
        <div className="row align-items-center hero-full-height">
          <div className="col-lg-6 hero-text-container animate__animated animate__fadeInLeft">
            {/*
              SEO NOTE: This <span> acts as an eyebrow/kicker — visible keyword signal
              without duplicating the <h1>. Google reads it as page context.
            */}
            <span className="hero-subheading">
              Best Dental Clinic in Sahiwal — 5 Years of Excellence
            </span>

            {/*
              SEO NOTE: The H1 is the single most important on-page ranking signal.
              It contains the primary keyword "dental clinic Sahiwal" naturally.
              DO NOT change this without updating the seoConfig title as well.
            */}
            <h1 className="hero-title">
              Your Smile, <br /> Our Commitment
            </h1>

            {/*
              SEO NOTE: Supporting paragraph reinforces keywords for LSI (latent semantic indexing).
              Contains: "female dentist", "Sahiwal", "appointment" — all target keywords.
            */}
            <p className="hero-description">
              Discover exceptional dental care at DentisTree Clinic, Sahiwal.
              Expert female &amp; male dentists, modern technology, and a warm
              patient-centered approach — all in one clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;