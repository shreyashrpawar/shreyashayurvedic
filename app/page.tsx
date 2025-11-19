'use client';
import React, { useState } from 'react';
import { Phone, Mail, Leaf,MapPin, Clock, Calendar, Users, Award, Shield, Heart, Activity, Stethoscope, Home, ChevronRight, Menu, X } from 'lucide-react';

export default function ShreyashHospital() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const specialties = [
    { title: "मस्क्युलोस्केलेटल केअर", icon: Activity, treatments: ["संधिवात (आर्थराइटिस)", "पाठदुखी", "गुडघेदुखी", "सायटिका", "मणक्याचे रोग"] },
    { title: "चयापचय आरोग्य", icon: Heart, treatments: ["मधुमेह व्यवस्थापन", "थायरॉइड उपचार", "वजन व्यवस्थापन", "पाचन विकार"] },
    { title: "श्वसन केअर", icon: Stethoscope, treatments: ["दमा", "जुनाट खोकला", "ऍलर्जी उपचार", "श्वसन निरोगीकरण"] },
    { title: "सामान्य निरोगीकरण", icon: Shield, treatments: ["त्वचा रोग", "प्रतिबंधात्मक काळजी", "महिलांचे आरोग्य", "मानसिक निरोगीकरण"] }
  ];

  const services = [
    { icon: Home, title: "घरगुती आरोग्य सेवा", description: "तुमच्या घरापर्यंत व्यावसायिक वैद्यकीय सेवा" },
    { icon: Stethoscope, title: "निदान आणि सल्ला", description: "सर्वसमावेशक आरोग्य मूल्यांकन आणि उपचार योजना" },
    { icon: Activity, title: "अ‍ॅक्युपंक्चर थेरपी", description: "पारंपरिक दबाव बिंदू उपचार तंत्र" },
    { icon: Heart, title: "निसर्गोपचार", description: "नैसर्गिक उपचार आणि समग्र निरोगीकरण कार्यक्रम" }
  ];

  const stats = [
    { number: "१५+", label: "वर्षांचा अनुभव" },
    { number: "५०००+", label: "रुग्णांवर उपचार" },
    { number: "५०+", label: "आरोग्य स्थिती" },
    { number: "१००%", label: "नैसर्गिक उपचार" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>आपत्कालीन: 8108745305</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>सोम-रवि: घरगुती भेटी उपलब्ध</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>नोंदणी क्र: 1548</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">श्रेयश आयुर्वेदिक रुग्णालय</h1>
                <p className="text-sm text-gray-600">पारंपरिक आरोग्यसेवेतील उत्कृष्टता</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">आमच्याबद्दल</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">सेवा</a>
              <a href="#specialties" className="text-gray-700 hover:text-blue-600 font-medium">विशेषता</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">संपर्क</a>
              <a href="tel:8108745305" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                भेट बुक करा
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">आमच्याबद्दल</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">सेवा</a>
              <a href="#specialties" className="block py-2 text-gray-700 hover:text-blue-600">विशेषता</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">संपर्क</a>
              <a href="tel:8108745305" className="block bg-blue-600 text-white px-4 py-3 rounded-md text-center font-semibold">
                भेट बुक करा
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold mb-4">
                विश्वसनीय आयुर्वेदिक आरोग्यसेवा प्रदाता
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                सर्वसमावेशक आयुर्वेदिक उपचार आणि घरगुती आरोग्य सेवा
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                श्रेयश आयुर्वेदिक रुग्णालय विशेष निदान, निसर्गोपचार, अ‍ॅक्युपंक्चर थेरपी आणि ५० पेक्षा जास्त आरोग्य स्थितींसाठी वैयक्तिक उपचार योजना प्रदान करते. अनुभवी वैद्य दत्तात्रय मुटकुळे यांच्या मार्गदर्शनाखाली.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:8108745305" className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  कॉल करा: 8108745305
                </a>
                <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  भेट नियोजित करा
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">वैद्य दत्तात्रय मुटकुळे</h3>
                    <p className="text-gray-600">मुख्य आयुर्वेदिक वैद्य, नाडी तज्ञ

</p>
                    <p className="text-sm text-blue-600 font-semibold">नोंदणी क्र: 1548</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">सिद्ध अनुभव</h4>
                      <p className="text-sm text-gray-600">अनेक वर्षांच्या क्लिनिकल सरावासह निदान आणि निसर्गोपचार तज्ञ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Home className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">घरगुती भेट सेवा</h4>
                      <p className="text-sm text-gray-600">तुमच्या निवासस्थानी सोयीस्कर आरोग्यसेवा वितरण</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">समग्र दृष्टीकोन</h4>
                      <p className="text-sm text-gray-600">संपूर्ण शरीर विकार निदान आणि नैसर्गिक उपचार</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">आमच्या आरोग्य सेवा</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              प्राचीन ज्ञान आणि आधुनिक निदान तंत्रांचे संयोजन करणारे सर्वसमावेशक आयुर्वेदिक उपचार
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">वैद्यकीय विशेषता</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              पारंपरिक आयुर्वेदिक पद्धती वापरून विविध आरोग्य स्थितींसाठी तज्ञ उपचार
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <specialty.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{specialty.title}</h3>
                </div>
                <ul className="space-y-3">
                  {specialty.treatments.map((treatment, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Treatments */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">अतिरिक्त उपचार क्षेत्रे</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">पाचन आरोग्य</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• आम्लपित्त आणि मूळव्याध</li>
                  <li>• गॅस आणि अपचन</li>
                  <li>• पाचन विकार</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">विशेष काळजी</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• लैंगिक निरोगीकरण</li>
                  <li>• महिलांचे आरोग्य</li>
                  <li>• प्रसूती समर्थन</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">इतर स्थिती</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• मूत्रपिंडातील खडे</li>
                  <li>• कावीळ उपचार</li>
                  <li>• उंची वाढ</li>
                  <li>• मानसिक एकाग्रता</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Highlight */}
          <div className="mt-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">विशेष मधुमेह काळजी कार्यक्रम</h3>
            <p className="text-lg">मधुमेह रुग्णांसाठी रामबाण औषधे आणि सर्वसमावेशक व्यवस्थापन</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">आमच्याशी संपर्क साधा</h2>
            <p className="text-lg text-gray-300">भेटी आणि सल्लामसलत साठी संपर्कात रहा</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">आम्हाला कॉल करा</h3>
              <a href="tel:8108745305" className="block text-blue-400 hover:text-blue-300 text-lg mb-2">8108745305</a>
              <a href="tel:9702088633" className="block text-blue-400 hover:text-blue-300 text-lg">9702088633</a>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">आम्हाला भेट द्या</h3>
              <p className="text-gray-300">रूम नं. 1100</p>
              <p className="text-gray-300">गुप्ता किराणा स्टोअर्स जवळ</p>
              <p className="text-gray-300">गोकुळ नगर, भवानी नगर</p>
              <p className="text-gray-300">ठाणे (पश्चिम) - 400 601</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">कार्य वेळ</h3>
              <p className="text-gray-300 mb-2">घरगुती भेटी उपलब्ध</p>
              <p className="text-gray-300">सोमवार - रविवार</p>
              <p className="text-gray-300 text-sm mt-4">तुमची भेट नियोजित करण्यासाठी कॉल करा</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2024 श्रेयस आयुर्वेदिक रुग्णालय. सर्व हक्क राखीव.</p>
          <p className="text-sm">नोंदणीकृत आयुर्वेदिक रुग्णालय - नोंदणी क्र: 1548</p>
        </div>
      </footer>
    </div>
  );
}