import React from 'react';
import Footer from '../Components/Footer';

function WhoWeAre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Floating heart icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <span className="text-white text-3xl">💝</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extrabold mb-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent" style={{ fontFamily: 'Abhaya Libre, serif' }}>
            Who <span className="text-blue-600">We Are</span>
          </h1>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-xl">
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              We are a dedicated 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">caregiving education institute</span>
              committed to empowering individuals with the 
              <span className="text-blue-600 font-semibold"> skills</span>, 
              <span className="text-pink-600 font-semibold"> compassion</span>, and 
              <span className="text-purple-600 font-semibold"> confidence</span> needed to provide high-quality care.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 overflow-hidden" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              <span className="relative z-10">Join Our Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button className="group relative border-3 border-blue-600 text-blue-600 px-12 py-5 rounded-full text-xl font-bold hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 overflow-hidden bg-white/80 backdrop-blur-sm" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-24 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
            What Makes Us <span className="text-blue-600">Special</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Practical Training Card */}
            <div className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-blue-600 text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Practical Training
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Hands-on experience with real-world caregiving scenarios to build confidence and expertise
              </p>
            </div>

            {/* Compassionate Care Card */}
            <div className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-pink-600 text-4xl">💖</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-pink-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Compassionate Care
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Teaching empathy and emotional intelligence as core foundations of quality caregiving
              </p>
            </div>

            {/* Professional Excellence Card */}
            <div className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-green-600 text-4xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-green-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Professional Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Maintaining highest standards of care with certified training and continuous development
              </p>
            </div>

            {/* Community Support Card */}
            <div className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-purple-600 text-4xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-purple-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Community Support
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Building a supportive community of caregivers who learn and grow together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-28 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Our <span className="text-blue-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Transforming lives through comprehensive caregiving education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-8">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                To provide comprehensive, compassionate caregiving education that empowers individuals to make 
                a meaningful difference in the lives of those they serve, while building a stronger, more 
                caring community.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-8">
                <span className="text-white text-3xl">🌟</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                To be the leading caregiving education institute, recognized for excellence in training 
                compassionate, skilled caregivers who transform the healthcare landscape with dignity 
                and professional care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Abhaya Libre, serif' }}>
            Ready to Start Your <span className="text-blue-200">Caregiving Journey?</span>
          </h2>
          <p className="text-2xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
            Join our community of dedicated caregivers and make a lasting impact in people's lives
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-blue-700 px-12 py-5 rounded-full text-xl font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Enroll Today
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-full text-xl font-medium hover:bg-white hover:text-blue-700 transition-all duration-300" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default WhoWeAre;
