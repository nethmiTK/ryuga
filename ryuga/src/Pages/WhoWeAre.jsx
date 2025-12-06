import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import exam2 from '../Assets/images/exam2.jpg';
import examVideo from '../Assets/exam.mp4';

function WhoWeAre() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  // Gallery images - using placeholder for now
  const galleryImages = [
    { id: 1, title: "Training Session", category: "Education" },
    { id: 2, title: "Practical Workshop", category: "Hands-on" },
    { id: 3, title: "Graduation Ceremony", category: "Achievement" },
    { id: 4, title: "Team Building", category: "Community" },
    { id: 5, title: "Patient Care", category: "Practice" },
    { id: 6, title: "Medical Equipment", category: "Resources" },
    { id: 7, title: "Group Activity", category: "Engagement" },
    { id: 8, title: "Certification Day", category: "Success" },
    { id: 9, title: "Field Visit", category: "Experience" },
    { id: 10, title: "Classroom Learning", category: "Education" },
    { id: 11, title: "Skills Assessment", category: "Evaluation" },
    { id: 12, title: "Community Outreach", category: "Service" },
    { id: 13, title: "Workshop Session", category: "Training" },
    { id: 14, title: "Student Interaction", category: "Learning" },
    { id: 15, title: "Practical Demonstration", category: "Practice" },
    { id: 16, title: "Team Collaboration", category: "Teamwork" },
    { id: 17, title: "Expert Lecture", category: "Knowledge" },
    { id: 18, title: "Care Techniques", category: "Skills" },
    { id: 19, title: "Celebration Event", category: "Milestones" },
    { id: 20, title: "Resource Center", category: "Facilities" },
    { id: 21, title: "Study Group", category: "Collaboration" },
    { id: 22, title: "Outdoor Activity", category: "Wellness" },
    { id: 23, title: "Award Ceremony", category: "Recognition" },
    { id: 24, title: "Open House", category: "Community" }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Dr. Amara Silva",
      role: "Chief Medical Officer",
      specialty: "Geriatric Care Specialist",
      image: "👨‍⚕️",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Nimali Fernando",
      role: "Head of Training",
      specialty: "Nursing Education Expert",
      image: "👩‍⚕️",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Rohan Perera",
      role: "Clinical Coordinator",
      specialty: "Patient Care Management",
      image: "👨‍💼",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Shalini Wickramasinghe",
      role: "Program Director",
      specialty: "Caregiving Curriculum",
      image: "👩‍🏫",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Kasun Rajapaksa",
      role: "Assessment Officer",
      specialty: "Quality Assurance",
      image: "👨‍💻",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  // Certifications
  const certifications = [
    {
      title: "ISO 9001:2015 Certified",
      description: "Quality Management System",
      icon: "🏆",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Ministry of Health Approved",
      description: "Recognized Training Provider",
      icon: "✅",
      color: "from-green-500 to-green-600"
    },
    {
      title: "International Standards",
      description: "Global Care Excellence",
      icon: "🌍",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Accredited Institute",
      description: "National Qualification Framework",
      icon: "📜",
      color: "from-orange-500 to-orange-600"
    }
  ];
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAF6FB' }}>
      {/* Video Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={examVideo} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.h1 
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl" 
            style={{ fontFamily: 'Abhaya Libre, serif' }}
          >
            Who We <span style={{ color: '#5BA7D1' }}>Are</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md px-4 font-medium"
            style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
          >
            We are a dedicated caregiving education institute committed to empowering individuals with the skills, compassion, and confidence needed to provide high-quality care.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button 
              className="text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105" 
              style={{ backgroundColor: '#5BA7D1', fontFamily: 'Noto Sans Sinhala, sans-serif' }}
            >
              Join Our Courses
            </button>
            <button 
              className="border-2 border-white text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-xl transform hover:scale-105" 
              style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Our <span className="text-blue-600">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Recognized and certified by leading healthcare and educational authorities
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                className="group text-center p-8 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-300 transform hover:-translate-y-3"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white text-4xl">{cert.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                  {cert.title}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-24 text-gray-800" 
            style={{ fontFamily: 'Abhaya Libre, serif' }}
          >
            What Makes Us <span className="text-blue-600">Special</span>
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Practical Training Card */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <img src="/src/Assets/images/feature-image-1.jpg" alt="Feature Image" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-blue-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Practical Training
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Hands-on experience with real-world caregiving scenarios to build confidence and expertise
              </p>
            </motion.div>

            {/* Compassionate Care Card */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <img src="/src/Assets/images/feature-image-2.jpg" alt="Feature Image" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-pink-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Compassionate Care
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Teaching empathy and emotional intelligence as core foundations of quality caregiving
              </p>
            </motion.div>

            {/* Professional Excellence Card */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <img src="/src/Assets/images/feature-image-3.jpg" alt="Feature Image" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-green-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Professional Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Maintaining highest standards of care with certified training and continuous development
              </p>
            </motion.div>

            {/* Community Support Card */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-2"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <img src="/src/Assets/images/feature-image-4.jpg" alt="Feature Image" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-purple-600 transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Community Support
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Building a supportive community of caregivers who learn and grow together
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-28 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Our <span className="text-blue-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Transforming lives through comprehensive caregiving education
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-200"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                To provide comprehensive, compassionate caregiving education that empowers individuals to make 
                a meaningful difference in the lives of those they serve, while building a stronger, more 
                caring community.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-purple-200"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <span className="text-white text-3xl">🌟</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                To be the leading caregiving education institute, recognized for excellence in training 
                compassionate, skilled caregivers who transform the healthcare landscape with dignity 
                and professional care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Abhaya Libre, serif' }}>
            Ready to Start Your <span className="text-blue-200">Caregiving Journey?</span>
          </h2>
          <p className="text-2xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
            Join our community of dedicated caregivers and make a lasting impact in people's lives
          </p>
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="bg-white text-blue-700 px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Enroll Today
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </section>
      
     </div>
  );
}

export default WhoWeAre;
