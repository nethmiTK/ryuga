import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const courses = [
    {
      title: "Professional Caregiver Training",
      duration: "3 Months",
      description: "Comprehensive training in elderly care, patient assistance, and daily living support",
      icon: "👨‍⚕️",
      color: "#5BA7D1"
    },
    {
      title: "Advanced Nursing Care",
      duration: "6 Months",
      description: "Specialized nursing skills including medication management, wound care, and vital signs monitoring",
      icon: "💉",
      color: "#A8DFC7"
    },
    {
      title: "Dementia & Alzheimer's Care",
      duration: "2 Months",
      description: "Specialized training in caring for patients with cognitive impairments and memory disorders",
      icon: "🧠",
      color: "#EC4899"
    },
    {
      title: "Pediatric Care Training",
      duration: "3 Months",
      description: "Professional training in infant and child care, including nutrition and developmental support",
      icon: "👶",
      color: "#F59E0B"
    },
    {
      title: "Palliative Care Specialist",
      duration: "4 Months",
      description: "Compassionate end-of-life care training focusing on comfort and quality of life",
      icon: "🤲",
      color: "#22C55E"
    },
    {
      title: "Home Healthcare Management",
      duration: "2 Months",
      description: "Complete home care management including hygiene, nutrition, and emergency response",
      icon: "🏠",
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAF6FB' }}>
      {/* Video Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-20 pb-16 md:pt-32 md:pb-24 min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-15"
          >
            <source src="/Assets/Vedio/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-indigo-500/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              Our <span style={{ color: '#5BA7D1' }}>Caregiving</span> Courses
            </h1>
            <div className="w-24 md:w-32 h-1 mx-auto rounded-full" style={{ backgroundColor: '#5BA7D1' }}></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed px-4 font-medium" 
            style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}
          >
            Professional caregiving education designed to equip you with the skills, knowledge, and compassion needed for a rewarding healthcare career
          </motion.p>
        </div>
      </motion.section>

      {/* Courses Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent"
                style={{ 
                  borderColor: 'transparent',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = course.color}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
              >
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-4 md:mb-6 mx-auto shadow-md"
                  style={{ backgroundColor: `${course.color}20` }}
                >
                  {course.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-center" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                  {course.title}
                </h3>
                
                <div className="text-center mb-3 md:mb-4">
                  <span 
                    className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: course.color }}
                  >
                    {course.duration}
                  </span>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed text-center" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                  {course.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You Will Learn */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 px-4 md:px-6" 
        style={{ backgroundColor: '#E3F2F9' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16" 
            style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}
          >
            What You Will <span style={{ color: '#5BA7D1' }}>Learn</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { icon: "🩺", title: "Patient Care Fundamentals", desc: "Basic and advanced patient care techniques" },
              { icon: "💊", title: "Medication Management", desc: "Safe medication administration and monitoring" },
              { icon: "🧪", title: "Vital Signs Monitoring", desc: "Accurate assessment of patient vital signs" },
              { icon: "🍽️", title: "Nutrition & Meal Planning", desc: "Dietary care and nutritional support" },
              { icon: "❤️", title: "Emotional Support Skills", desc: "Compassionate communication and empathy" },
              { icon: "🚨", title: "Emergency Response", desc: "Quick response to medical emergencies" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl md:text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#2C3E50' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: '#34495E' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Training Facilities */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16" 
            style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}
          >
            World-Class <span style={{ color: '#5BA7D1' }}>Facilities</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "🏥", title: "Modern Training Labs", color: "#5BA7D1" },
              { icon: "👨‍🏫", title: "Expert Instructors", color: "#A8DFC7" },
              { icon: "📚", title: "Comprehensive Resources", color: "#EC4899" },
              { icon: "🌐", title: "Online Learning Platform", color: "#F59E0B" }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg"
              >
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl mx-auto mb-4"
                  style={{ backgroundColor: `${facility.color}20` }}
                >
                  {facility.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold" style={{ color: '#2C3E50' }}>
                  {facility.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Job Placement */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 px-4 md:px-6" 
        style={{ backgroundColor: '#E3F2F9' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="text-4xl md:text-5xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              Job Placement <span style={{ color: '#5BA7D1' }}>Support</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 px-4" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
              We provide comprehensive career guidance, resume building, interview preparation, and connect you with top healthcare employers locally and internationally including opportunities in Japan, Middle East, and other countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="px-4 md:px-6 py-2 md:py-3 rounded-full font-medium" style={{ backgroundColor: '#5BA7D120', color: '#5BA7D1' }}>
                Career Counseling
              </span>
              <span className="px-4 md:px-6 py-2 md:py-3 rounded-full font-medium" style={{ backgroundColor: '#A8DFC720', color: '#2C3E50' }}>
                Interview Prep
              </span>
              <span className="px-4 md:px-6 py-2 md:py-3 rounded-full font-medium" style={{ backgroundColor: '#EC489920', color: '#EC4899' }}>
                Global Opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16" 
            style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}
          >
            Student <span style={{ color: '#5BA7D1' }}>Success Stories</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { 
                name: "Priyanka Silva", 
                role: "Professional Caregiver - Japan", 
                text: "RYUGA's training gave me the confidence and skills to secure a caregiver position in Japan. The practical training was excellent!",
                rating: 5
              },
              { 
                name: "Chandana Perera", 
                role: "Home Healthcare Nurse", 
                text: "The instructors were knowledgeable and supportive. I now run my own home healthcare service thanks to this training.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg md:text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 italic" style={{ color: '#34495E' }}>
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4" style={{ borderColor: '#E3F2F9' }}>
                  <p className="font-bold text-base md:text-lg" style={{ color: '#2C3E50' }}>{testimonial.name}</p>
                  <p className="text-xs md:text-sm" style={{ color: '#5BA7D1' }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #5BA7D1, #A8DFC7)' }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Ready to Start Your Caregiving Career?
            </h2>
            <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed px-4" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Join RYUGA today and embark on a rewarding journey in professional healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-white rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ color: '#5BA7D1' }}
                >
                  Contact Us Now
                </motion.button>
              </Link>
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-base md:text-lg hover:bg-white transition-all duration-300"
                  style={{ 
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#5BA7D1'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  Enroll Today
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/10 blur-2xl"></div>
      </motion.section>
    </div>
  );
};

export default Services;
