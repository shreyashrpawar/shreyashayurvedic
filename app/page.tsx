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
    { category: "हाड व स्नायू संबंधित", items: ["गठिया", "मागदुखी", "घुडघ्याचे दुखणे", "सायकॅटिका", "मज्जासंस्था रोग"], class: "bone-muscle" },
    { category: "चयापचय व पचन", items: ["मधुमेह", "थायरॉईड", "वजन कमी करणे", "वजन वाढवणे", "अम्लता", "बवासीर", "गॅस व अपचन"], class: "metabolism-digestion" },
    { category: "श्वसन व त्वचा", items: ["खोकला व दम", "अलर्जि व सर्दी", "त्वचेचे रोग", "मुरुम व काळे डाग"],class: "respiratory-skin" },
    { category: "विशेष उपचार", items: ["लैंगिक आरोग्य", "महिला आरोग्य", "उंची वाढ", "बुद्धी व एकाग्रता", "डोकेदुखी", "पित्तज्वर (जॉन्डिस)", "मूत्रपिंड दगड"],class: "special-treatments" },
  ];

  const services = [
    { icon: Home, title: "होम व्हिजिट सेवा", desc: "तुमच्या घरावर तज्ञांचा उपचार" },
    { icon: Leaf, title: "नॅचरोपॅथी", desc: "प्राकृतिक आरोग्य उपचार" },
    { icon: Heart, title: "एक्यूपंक्चर", desc: "परंपरागत बिंदू-आधारित उपचार" },
    { icon: Award, title: "शरीर मालिश", desc: "उपचारात्मक वेलनेस उपचार" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
{/* Enhanced Header */}
<header
  className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-4'}`}
  role="banner"
>
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-sm">
        <Leaf className="w-6 h-6 text-white" />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold text-emerald-800 leading-none">Shreyash</h1>
        <p className="text-xs text-emerald-600">आयुर्वेदिक हॉस्पिटल</p>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <a
        href="tel:8108745305"
        className="hidden sm:inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-full font-medium border border-emerald-200 hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label="Call clinic"
      >
        <Phone className="w-4 h-4" /> 81087 45305
      </a>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Book Appointment"
      >
        अपॉइंटमेंट बुक करा
      </a>
    </div>
  </div>
</header>

{/* Enhanced Hero */}
<section className="pt-36 pb-20 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Copy */}
    <div className="space-y-6 max-w-[60ch]">
      <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
        नोंदणी क्र. 1548 • ठाण्यात अनेक वर्षे सेवा
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        उपचार
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
          प्राचीन ज्ञानाद्वारे
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600">
        वैद्य. दत्तात्रय मुटकुळे—प्रामाणिक आयुर्वेदिक उपचार, वैयक्तिकृत निदान व नॅचरोपॅथी. क्लिनिक किंवा तुमच्या घरावर सुलभ उपचार.
      </p>

      <div className="flex flex-wrap gap-4 items-center">
        <a
          href="tel:8108745305"
          className="flex items-center gap-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-200"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5" /> आता कॉल करा
        </a>

        <a
          href="#treatments"
          className="flex items-center gap-2 bg-white text-emerald-700 px-5 py-3 rounded-full font-semibold border-2 border-emerald-200 hover:bg-emerald-50 transition"
        >
          उपचार पहा
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>

    {/* Right: Image card */}
    <div className="relative">
      <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-102 transition-all duration-500">
        {/* Replace src with an actual image asset */}
        <img
          src="/images/ayurveda-hero.jpg"
          alt="Ayurvedic treatment illustration"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Floating doctor card */}
      <div className="absolute -bottom-8 left-6 bg-white rounded-2xl p-6 shadow-md w-[86%] md:w-3/4 transform translate-y-0">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
            <Award className="w-7 h-7 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">वैद्य. दत्तात्रय मुटकुळे</h4>
            <p className="text-emerald-600 text-sm">आयुर्वेदिक विशेषज्ञ, नाडी तज्ञ</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">आमच्या सेवा</h2>
            <p className="text-xl text-gray-600">परंपरागत आयुर्वेदिक पद्धतींच्या माध्यमातून सर्वांगीण उपचार</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">आम्ही देणारे उपचार</h2>
            <p className="text-xl text-gray-600">विविध आरोग्य समस्या साठी व्यापक आयुर्वेदिक उपाय</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, idx) => (
              <div key={idx} id={treatment.class} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 pb-4 border-b-2 border-emerald-200">
                  {treatment.category}
                </h3>
                <ul className="space-y-3">
                  {treatment.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full"></div>
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
                ✨ विशेष: मधुमेहासाठी पॅनासिया औषधे • सायकॅटिकासाठी तज्ञ उपचार
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">संपर्क करा</h2>
            <p className="text-xl text-emerald-100">आजच तुमची अपॉइंटमेंट ठरवा</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Phone className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="font-bold text-xl mb-3">आम्हाला कॉल करा</h3>
              <a href="tel:8108745305" className="block text-emerald-200 hover:text-white text-lg mb-1">8108745305</a>
              <a href="tel:9702088633" className="block text-emerald-200 hover:text-white text-lg">9702088633</a>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="font-bold text-xl mb-3">आम्हाला भेट द्या</h3>
              <p className="text-emerald-200">Room No. 1100, Near Gupta Kirana Stores</p>
              <p className="text-emerald-200">Gokul Nagar, Bhavani Nagar</p>
              <p className="text-emerald-200">Thane (W) - 400 601</p>
            </div>
            <div className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Clock className="w-12 h-12 mx-auto mb-4 text-emerald-300" />
              <h3 className="font-bold text-xl mb-3">होम व्हिजिट्स</h3>
              <p className="text-emerald-200">रुग्णांची सोय लक्षात घेऊन उपलब्ध</p>
              <p className="text-emerald-200 mt-2">अपॉइंटमेंटसाठी कॉल करा</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-emerald-200 mb-4">नोंदणी क्र. 1548</p>
            <p className="text-sm text-emerald-300">© 2025 Shreyash आयुर्वेदिक हॉस्पिटल. सर्व हक्क राखीव.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
