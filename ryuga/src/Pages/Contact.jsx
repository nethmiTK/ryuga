import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAF6FB' }}>
      {/* Hero Section with Video Background */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/src/Assets/exam.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="text-center px-4 relative z-20">
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg animate-fade-in-up" style={{ fontFamily: 'Abhaya Libre, serif', animationDelay: '0.2s' }}>
              Contact{' '}
              <span className="relative" style={{ color: '#5BA7D1' }}>
                RYUGA
                <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full animate-slide-in" style={{ background: 'linear-gradient(to right, #5BA7D1, #A8DFC7)', animationDelay: '1s' }}></div>
                <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full opacity-50 animate-pulse" style={{ backgroundColor: '#5BA7D1' }}></div>
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-12 h-0.5 animate-slide-in-left" style={{ backgroundColor: '#5BA7D1', animationDelay: '0.8s' }}></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-0.5 animate-slide-in-right" style={{ backgroundColor: '#5BA7D1', animationDelay: '0.8s' }}></div>
          </div>

          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', animationDelay: '0.6s' }}>
            Get in touch with us for professional nursing and caregiving education
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <button className="text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', backgroundColor: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
              <span className="relative z-10">Scroll to Contact Form</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#E3F2F9' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              Get in <span style={{ color: '#5BA7D1' }}>Touch</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
              Ready to start your nursing education journey? Contact us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: '#A8DFC7' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5BA7D1' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2C3E50' }}>Address</h4>
                  <p style={{ color: '#34495E' }}>
                    RYUGA Nursing Institute<br/>
                    123 Main Street<br/>
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: '#A8DFC7' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A8DFC7' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2C3E50' }}>Phone</h4>
                  <p style={{ color: '#34495E' }}>
                    +94 11 123 4567<br/>
                    +94 70 123 4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: '#A8DFC7' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5BA7D1' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2C3E50' }}>Email</h4>
                  <p style={{ color: '#34495E' }}>
                    info@ryuga.lk<br/>
                    admissions@ryuga.lk
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300" style={{ borderColor: '#A8DFC7' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#A8DFC7' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#2C3E50' }}>Office Hours</h4>
                  <p style={{ color: '#34495E' }}>
                    Monday - Friday: 8:00 AM - 6:00 PM<br/>
                    Saturday: 9:00 AM - 4:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border" style={{ borderColor: '#E3F2F9' }}>
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Send us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors duration-300"
                      style={{ borderColor: '#E3F2F9', backgroundColor: '#FAFAFA' }}
                      onFocus={(e) => e.target.style.borderColor = '#5BA7D1'}
                      onBlur={(e) => e.target.style.borderColor = '#E3F2F9'}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors duration-300"
                      style={{ borderColor: '#E3F2F9', backgroundColor: '#FAFAFA' }}
                      onFocus={(e) => e.target.style.borderColor = '#5BA7D1'}
                      onBlur={(e) => e.target.style.borderColor = '#E3F2F9'}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors duration-300"
                    style={{ borderColor: '#E3F2F9', backgroundColor: '#FAFAFA' }}
                    onFocus={(e) => e.target.style.borderColor = '#5BA7D1'}
                    onBlur={(e) => e.target.style.borderColor = '#E3F2F9'}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors duration-300"
                    style={{ borderColor: '#E3F2F9', backgroundColor: '#FAFAFA' }}
                    onFocus={(e) => e.target.style.borderColor = '#5BA7D1'}
                    onBlur={(e) => e.target.style.borderColor = '#E3F2F9'}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                    Course Interest
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors duration-300"
                    style={{ borderColor: '#E3F2F9', backgroundColor: '#FAFAFA' }}
                    onFocus={(e) => e.target.style.borderColor = '#5BA7D1'}
                    onBlur={(e) => e.target.style.borderColor = '#E3F2F9'}
                  >
                    <option value="">Select a course</option>
                    <option value="nursing">Professional Nursing Course</option>
                    <option value="caregiving">Caregiving Training</option>
                    <option value="elderly-care">Elderly Care Specialist</option>
                    <option value="pediatric">Pediatric Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2C3E50' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-colors duration-300"
                    style={{ borderColor: '#E3F2F9', backgroundColor: '#FAFAFA' }}
                    onFocus={(e) => e.target.style.borderColor = '#5BA7D1'}
                    onBlur={(e) => e.target.style.borderColor = '#E3F2F9'}
                    placeholder="Tell us about your nursing education goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg text-white font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
                  style={{ backgroundColor: '#5BA7D1' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{ backgroundColor: '#EAF6FB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              Find Us on <span style={{ color: '#5BA7D1' }}>Map</span>
            </h3>
            <p className="text-lg" style={{ color: '#34495E' }}>
              Visit our campus for a tour and meet our experienced instructors
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E3F2F9' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5BA7D1' }}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-lg font-medium" style={{ color: '#2C3E50' }}>Interactive Map Coming Soon</p>
                <p style={{ color: '#34495E' }}>RYUGA Nursing Institute Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;