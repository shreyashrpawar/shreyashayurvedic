'use client';
import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Home, Leaf, Heart, Award, ChevronRight } from 'lucide-react';

export default function AyurvedicHospital() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const treatments = [
    { category: "Musculoskeletal", items: ["Arthritis", "Back Pain", "Knee Pain", "Sciatica", "Spinal Diseases"] },
    { category: "Metabolic & Digestive", items: ["Diabetes", "Thyroid", "Weight Loss", "Weight Gain", "Acidity", "Hemorrhoids", "Gas & Indigestion"] },
    { category: "Respiratory & Skin", items: ["Cough & Asthma", "Allergy & Cold", "Skin Diseases", "Pimples & Blackheads"] },
    { category: "Specialized Care", items: ["Sexual Wellness", "Women's Health", "Height Increase", "Intelligence & Concentration", "Headache", "Jaundice", "Kidney Stones"] }
  ];

  const services = [
    { icon: Home, title: "Home Visiting Services", desc: "Expert care at your doorstep" },
    { icon: Leaf, title: "Naturopathy", desc: "Natural healing therapies" },
    { icon: Heart, title: "Acupuncture", desc: "Traditional pressure point therapy" },
    { icon: Award, title: "Body Massage", desc: "Therapeutic wellness treatments" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-emerald-800">Shreyash</h1>
              <p className="text-xs text-emerald-600">Ayurvedic Hospital</p>
            </div>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Book Appointment
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                Reg. No. 1548 • Serving Thane Since Years
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Healing Through
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">Ancient Wisdom</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience authentic Ayurvedic treatment with Dr. Dattatray Mutkule. 
                Specialized diagnosis, naturopathy, and personalized care delivered to your home.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:8108745305" className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="#treatments" className="flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300">
                  View Treatments
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dr. Dattatray Mutkule</h3>
                    <p className="text-emerald-600 font-semibold">Vaidya • Ayurvedic Specialist</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Home visiting services for your convenience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Proven diagnosis & naturopathy expertise</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Comprehensive body ailment diagnosis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Holistic healing through traditional Ayurvedic practices</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveService(idx)}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer ${activeService === idx ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-2xl transform scale-105' : 'bg-emerald-50 hover:bg-emerald-100'}`}
              >
                <service.icon className={`w-12 h-12 mb-4 ${activeService === idx ? 'text-white' : 'text-emerald-600'}`} />
                <h3 className={`text-xl font-bold mb-2 ${activeService === idx ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={activeService === idx ? 'text-emerald-50' : 'text-gray-600'}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Treatments We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive Ayurvedic solutions for diverse health conditions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6 pb-4 border-b-2 border-emerald-200">
                  {treatment.category}
                </h3>
                <ul className="space-y-3">
                  {treatment.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
              <p className="text-lg font-semibold text-amber-900">
                ✨ Special: Panacea medicines for Diabetes • Expert Sciatica Treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-emerald-100">Schedule your appointment today</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Phone className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="font-bold text-xl mb-3">Call Us</h3>
              <a href="tel:8108745305" className="block text-emerald-200 hover:text-white text-lg mb-1">8108745305</a>
              <a href="tel:9702088633" className="block text-emerald-200 hover:text-white text-lg">9702088633</a>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="font-bold text-xl mb-3">Visit Us</h3>
              <p className="text-emerald-200">Room No. 1100, Near Gupta Kirana Stores</p>
              <p className="text-emerald-200">Gokul Nagar, Bhavani Nagar</p>
              <p className="text-emerald-200">Thane (W) - 400 601</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="font-bold text-xl mb-3">Home Visits</h3>
              <p className="text-emerald-200">Available for patient convenience</p>
              <p className="text-emerald-200 mt-2">Call to schedule your appointment</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-emerald-200 mb-4">Registration No. 1548</p>
            <p className="text-sm text-emerald-300">© 2025 Shreyash Ayurvedic Hospital. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}