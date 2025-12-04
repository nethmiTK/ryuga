import React from 'react';

function Homepage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAF6FB' }}>
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
         <video 
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/src/Assets/Vedio/course.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="text-center px-4 relative z-20">
          {/* Animated Title */}
          <div className="relative inline-block mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg animate-fade-in-up" style={{ fontFamily: 'Abhaya Libre, serif', animationDelay: '0.2s' }}>
              Welcome to{' '}
              <span className="relative" style={{ color: '#5BA7D1' }}>
                RYUGA
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full animate-slide-in" style={{ background: 'linear-gradient(to right, #5BA7D1, #A8DFC7)', animationDelay: '1s' }}></div>
                {/* Glowing effect */}
                <div className="absolute -bottom-2 left-0 w-full h-1 rounded-full opacity-50 animate-pulse" style={{ backgroundColor: '#5BA7D1' }}></div>
              </span>
            </h1>
            {/* Decorative lines */}
            <div className="absolute -top-4 -left-4 w-12 h-0.5 animate-slide-in-left" style={{ backgroundColor: '#5BA7D1', animationDelay: '0.8s' }}></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-0.5 animate-slide-in-right" style={{ backgroundColor: '#5BA7D1', animationDelay: '0.8s' }}></div>
          </div>

          {/* Animated Description */}
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', animationDelay: '0.6s' }}>
            Empowering caregivers with professional education, compassionate training, and practical skills for quality healthcare
          </p>

          {/* Animated Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <button className="text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', backgroundColor: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
              <span className="relative z-10">Get Started</span>
              {/* Button highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Professional Care Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#E3F2F9' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Excellence in{' '}
                <span className="relative" style={{ color: '#5BA7D1' }}>
                  Caregiving
                  <div className="absolute -bottom-1 left-0 w-full h-0.5" style={{ backgroundColor: '#5BA7D1' }}></div>
                </span>
              </h2>
              
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                Professional training that combines medical expertise with compassionate care delivery.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2C3E50' }}></div>
                  <span className="font-medium" style={{ color: '#2C3E50' }}>Comprehensive Training Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2C3E50' }}></div>
                  <span className="font-medium" style={{ color: '#2C3E50' }}>Clinical Excellence Standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2C3E50' }}></div>
                  <span className="font-medium" style={{ color: '#2C3E50' }}>Professional Development</span>
                </div>
              </div>

              <button className="text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', backgroundColor: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
                Learn More
              </button>
            </div>

            {/* Image Side */}
            <div className="relative flex justify-center">
              <div className="relative rounded-full overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl w-80 h-80">
                <div className="aspect-square relative">
                  <img 
                    src="/src/Assets/images/chooses.jpeg" 
                    alt="RYUGA Professional Nursing Training Environment" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-full"
                  />
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  
                  
                
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-28 border-t" style={{ backgroundColor: '#EAF6FB', borderTopColor: '#A8DFC7' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-24" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
            What Makes Us <span style={{ color: '#5BA7D1' }}>Special</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Practical Training Card */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border transform hover:-translate-y-2 opacity-0 translate-y-8 animate-fade-in-up" style={{ borderColor: '#E5F3FF', animationDelay: '0.2s', animationFillMode: 'forwards' }} onMouseEnter={(e) => { e.target.style.borderColor = '#5BA7D1'; }} onMouseLeave={(e) => { e.target.style.borderColor = '#E5F3FF'; }}>
              
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-all duration-300 shadow-md">
                <img src="/src/Assets/images/chooses.jpeg" alt="Practical Training" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Practical Training
              </h3>
              <p className="leading-relaxed text-sm" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                Hands-on experience with real-world caregiving scenarios to build confidence and expertise
              </p>
            </div>

            {/* Compassionate Care Card */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border transform hover:-translate-y-2 opacity-0 translate-y-8 animate-fade-in-up" style={{ borderColor: '#FFF0F5', animationDelay: '0.6s', animationFillMode: 'forwards' }} onMouseEnter={(e) => { e.target.style.borderColor = '#EC4899'; }} onMouseLeave={(e) => { e.target.style.borderColor = '#FFF0F5'; }}>
              
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-all duration-300 shadow-md">
                <img src="/src/Assets/images/chooses.jpeg" alt="Compassionate Care" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Compassionate Care
              </h3>
              <p className="leading-relaxed text-sm" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                Teaching empathy and emotional intelligence as core foundations of quality caregiving
              </p>
            </div>

            {/* Professional Excellence Card */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border transform hover:-translate-y-2 opacity-0 translate-y-8 animate-fade-in-up" style={{ borderColor: '#FFFBEB', animationDelay: '1.0s', animationFillMode: 'forwards' }} onMouseEnter={(e) => { e.target.style.borderColor = '#F59E0B'; }} onMouseLeave={(e) => { e.target.style.borderColor = '#FFFBEB'; }}>
              
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-all duration-300 shadow-md">
                <img src="/src/Assets/images/chooses.jpeg" alt="Professional Excellence" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Professional Excellence
              </h3>
              <p className="leading-relaxed text-sm" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                Maintaining highest standards of care with certified training and continuous development
              </p>
            </div>

            {/* Community Support Card */}
            <div className="group text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 border transform hover:-translate-y-2 opacity-0 translate-y-8 animate-fade-in-up" style={{ borderColor: '#F0FDF4', animationDelay: '1.4s', animationFillMode: 'forwards' }} onMouseEnter={(e) => { e.target.style.borderColor = '#22C55E'; }} onMouseLeave={(e) => { e.target.style.borderColor = '#F0FDF4'; }}>
              
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-all duration-300 shadow-md">
                <img src="/src/Assets/images/chooses.jpeg" alt="Community Support" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Community Support
              </h3>
              <p className="leading-relaxed text-sm" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                Building a supportive community of caregivers who learn and grow together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RYUGA At a Glance Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#E3F2F9' }}>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              RYUGA <span style={{ color: '#5BA7D1' }}>At a Glance</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
              Professional nursing education excellence
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Student Satisfaction */}
            <div className="group rounded-xl p-8 text-center border transition-all duration-500 transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: '#5BA7D1', borderColor: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500" style={{ backgroundColor: '#AEE1F9' }}>
                <div className="text-2xl animate-pulse">📊</div>
              </div>
              <div className="relative overflow-hidden">
                <h3 className="text-4xl font-bold mb-2 animate-bounce" style={{ fontFamily: 'Abhaya Libre, serif', color: '#AEE1F9', animationDuration: '2s' }}>98%</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <p className="text-sm font-medium" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: 'white' }}>Student Satisfaction</p>
            </div>

            {/* Years Experience */}
            <div className="group rounded-xl p-8 text-center border transition-all duration-500 transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: '#5BA7D1', borderColor: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:-rotate-12 transition-transform duration-500" style={{ backgroundColor: '#AEE1F9' }}>
                <div className="text-2xl animate-spin" style={{ animationDuration: '3s' }}>⏰</div>
              </div>
              <div className="relative overflow-hidden">
                <h3 className="text-4xl font-bold mb-2 animate-pulse" style={{ fontFamily: 'Abhaya Libre, serif', color: '#AEE1F9', animationDuration: '1.5s' }}>3+</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <p className="text-sm font-medium" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: 'white' }}>Years Experience</p>
            </div>

            {/* Training Success */}
            <div className="group rounded-xl p-8 text-center border transition-all duration-500 transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: '#5BA7D1', borderColor: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: '#AEE1F9' }}>
                <div className="text-2xl animate-bounce">✅</div>
              </div>
              <div className="relative overflow-hidden">
                <h3 className="text-4xl font-bold mb-2 animate-pulse" style={{ fontFamily: 'Abhaya Libre, serif', color: '#AEE1F9', animationDuration: '1.8s' }}>100%</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <p className="text-sm font-medium" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: 'white' }}>Training Success</p>
            </div>

            {/* Certification Rate */}
            <div className="group rounded-xl p-8 text-center border transition-all duration-500 transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: '#5BA7D1', borderColor: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-180 transition-transform duration-700" style={{ backgroundColor: '#AEE1F9' }}>
                <div className="text-2xl animate-ping" style={{ animationDuration: '2.5s' }}>🏆</div>
              </div>
              <div className="relative overflow-hidden">
                <h3 className="text-4xl font-bold mb-2 animate-pulse" style={{ fontFamily: 'Abhaya Libre, serif', color: '#AEE1F9', animationDuration: '2.2s' }}>98%</h3>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <p className="text-sm font-medium" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: 'white' }}>Certification Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/src/Assets/exam.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Abhaya Libre, serif', color: 'white' }}>
              Why Choose <span style={{ color: '#5BA7D1' }}>RYUGA?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: 'rgba(255, 255, 255, 0.9)' }}>
              Your trusted partner for professional nursing and caregiving education
            </p>
          </div>

          {/* Content Side */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: '#60A5FA' }}>
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Government-Recognized Training</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    Our programs follow certified caregiving and nursing standards accepted locally and internationally.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: '#60A5FA' }}>
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Experienced & Qualified Instructors</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    You'll learn from trained nurses and caregiving professionals with real-world experience.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: '#60A5FA' }}>
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Practical, Hands-On Learning</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    We provide real caregiving practice sessions, simulations, and skill-based training.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: '#60A5FA' }}>
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Supportive & Comfort-Focused Learning</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    A calm learning environment designed to help students learn with confidence and ease.
                  </p>
                </div>
              </div>

              {/* Point 5 */}
              <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: '#60A5FA' }}>
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Job-Ready Training for Local & Overseas Careers</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    We prepare you for caregiving roles in Sri Lanka, Japan, and other international destinations.
                  </p>
                </div>
              </div>

              {/* Point 6 */}
              <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animationDelay: '1.8s', animationFillMode: 'forwards' }}>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: '#60A5FA' }}>
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Easy Registration & Student Guidance</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    No complicated steps—simple registration, friendly support, and guidance throughout your studies.
                  </p>
                </div>
              </div>

              {/* Point 7 */}
              <div className="flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg opacity-0 translate-y-8 animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', animationDelay: '2.1s', animationFillMode: 'forwards' }}>
                <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl" style={{ backgroundColor: '#60A5FA' }}>
                  7
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>Affordable Fees & Installment Options</h3>
                  <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    We offer flexible fee structures suited for all students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Case Studies Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#EAF6FB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              Professional <span style={{ color: '#5BA7D1' }}>Case Studies</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
              Discover how our healthcare solutions transform operations and enhance efficiency
            </p>
          </div>

          {/* Auto Swipe Container */}
          <div className="relative">
            <div className="case-study-slider overflow-hidden rounded-2xl">
              <div className="case-study-track flex transition-transform duration-1000 ease-in-out">
                
                {/* Case Study Card 1 - RYUGA Healthcare Solutions */}
                <div className="case-study-slide min-w-full px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-xl mx-auto max-w-5xl border" style={{ borderColor: '#E3F2F9' }}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative">
                        <div className="aspect-4/3 rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: '#E3F2F9' }}>
                          <div className="h-full flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #5BA7D1, #A8DFC7)' }}>
                            <div className="text-center space-y-4">
                              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                                <div className="flex items-center space-x-1">
                                  <div className="w-3 h-8 rounded" style={{ backgroundColor: '#5BA7D1' }}></div>
                                  <div className="w-3 h-6 rounded" style={{ backgroundColor: '#A8DFC7' }}></div>
                                  <div className="w-3 h-10 rounded" style={{ backgroundColor: '#5BA7D1' }}></div>
                                  <div className="w-3 h-4 rounded" style={{ backgroundColor: '#A8DFC7' }}></div>
                                </div>
                              </div>
                              <p className="text-white font-bold text-lg">RYUGA Healthcare</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                            RYUGA Healthcare Solutions
                          </h3>
                          <p className="text-sm text-gray-500 mb-4">Since 2021</p>
                        </div>
                        
                        <p className="text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                          See how RYUGA's Healthcare Management System transformed Sri Lanka's medical operations, automating patient processes and centralizing medical data for improved care delivery.
                        </p>

                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#5BA7D1', color: 'white' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4A96C0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#5BA7D1'}>
                          <span>Read More</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Card 2 - Digital Nursing */}
                <div className="case-study-slide min-w-full px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-xl mx-auto max-w-5xl border" style={{ borderColor: '#E3F2F9' }}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative">
                        <div className="aspect-4/3 rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: '#E3F2F9' }}>
                          <div className="h-full flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #A8DFC7, #5BA7D1)' }}>
                            <div className="text-center space-y-4">
                              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                                <div className="relative">
                                  <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#FF4757' }}></div>
                                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#A8DFC7' }}></div>
                                  </div>
                                </div>
                              </div>
                              <p className="text-white font-bold text-lg">Digital Care</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                            Digital Nursing (Pvt) Ltd
                          </h3>
                          <p className="text-sm text-gray-500 mb-4">Since 2020</p>
                        </div>
                        
                        <p className="text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                          Discover how our Digital Care Management System digitized nursing operations, enhancing efficiency and scalability across multiple healthcare facilities in Sri Lanka.
                        </p>

                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#A8DFC7', color: '#2C3E50' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#95D3BF'} onMouseLeave={(e) => e.target.style.backgroundColor = '#A8DFC7'}>
                          <span>Read More</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Card 3 - MediCare Solutions */}
                <div className="case-study-slide min-w-full px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-xl mx-auto max-w-5xl border" style={{ borderColor: '#E3F2F9' }}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative">
                        <div className="aspect-4/3 rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: '#E3F2F9' }}>
                          <div className="h-full flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #2C3E50, #5BA7D1)' }}>
                            <div className="text-center space-y-4">
                              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                                <div className="relative">
                                  <div className="w-8 h-8 rounded border-4" style={{ borderColor: '#5BA7D1' }}>
                                    <div className="w-full h-1 bg-blue-500 mt-3"></div>
                                    <div className="w-full h-1 bg-blue-300 mt-1"></div>
                                    <div className="w-full h-1 bg-blue-200 mt-1"></div>
                                  </div>
                                </div>
                              </div>
                              <p className="text-white font-bold text-lg">MediCare Plus</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                            MediCare Plus (Pvt) Ltd
                          </h3>
                          <p className="text-sm text-gray-500 mb-4">Since 2019</p>
                        </div>
                        
                        <p className="text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                          Learn how RYUGA's Comprehensive Care System helped MediCare Plus achieve faster treatment approvals and enhanced operational efficiency across their healthcare network.
                        </p>

                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#2C3E50', color: 'white' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#1A2530'} onMouseLeave={(e) => e.target.style.backgroundColor = '#2C3E50'}>
                          <span>Read More</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'rgba(91, 167, 209, 0.1)', color: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(91, 167, 209, 0.2)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(91, 167, 209, 0.1)'}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: 'rgba(91, 167, 209, 0.1)', color: '#5BA7D1' }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(91, 167, 209, 0.2)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(91, 167, 209, 0.1)'}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              <div className="slide-indicator w-3 h-3 rounded-full transition-colors duration-300" style={{ backgroundColor: '#5BA7D1' }}></div>
              <div className="slide-indicator w-3 h-3 rounded-full transition-colors duration-300" style={{ backgroundColor: '#A8DFC7' }}></div>
              <div className="slide-indicator w-3 h-3 rounded-full transition-colors duration-300" style={{ backgroundColor: '#A8DFC7' }}></div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Homepage;