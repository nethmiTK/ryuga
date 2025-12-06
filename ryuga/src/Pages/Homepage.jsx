import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import choosesImg from '../Assets/images/chooses.jpeg';
import exam2Img from '../Assets/images/exam2.jpg';
 
function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  // Auto slide for case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto rotate team images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
        staggerChildren: 0.15
      }
    }
  };

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
          <source src="/Assets/Vedio/course.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="text-center px-4 relative z-20 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Welcome to{' '}
              <span className="relative" style={{ color: '#5BA7D1' }}>
                RYUGA
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-1 rounded-full" 
                  style={{ background: 'linear-gradient(to right, #5BA7D1, #A8DFC7)' }}
                ></motion.div>
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto text-white/95 leading-relaxed drop-shadow-md px-4 font-medium" 
            style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
          >
            Empowering caregivers with professional education, compassionate training, and practical skills for quality healthcare
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/services">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden group" 
                style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', backgroundColor: '#5BA7D1' }} 
              >
                <span className="relative z-10">Get Started</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Professional Care Section - Light Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                Excellence in{' '}
                <span className="relative" style={{ color: '#5BA7D1' }}>
                  Caregiving
                  <div className="absolute -bottom-2 left-0 w-full h-1" style={{ backgroundColor: '#5BA7D1' }}></div>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl leading-relaxed font-medium" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
                Professional training that combines medical expertise with compassionate care delivery.
              </p>

              <div className="space-y-5">
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5BA7D1' }}></div>
                  <span className="font-semibold text-lg" style={{ color: '#2C3E50' }}>Comprehensive Training Programs</span>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5BA7D1' }}></div>
                  <span className="font-semibold text-lg" style={{ color: '#2C3E50' }}>Clinical Excellence Standards</span>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5BA7D1' }}></div>
                  <span className="font-semibold text-lg" style={{ color: '#2C3E50' }}>Professional Development</span>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <Link to="/who-we-are">
                  <button className="text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', backgroundColor: '#5BA7D1' }}>
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="relative flex justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group transition-all duration-500 hover:shadow-3xl w-full max-w-lg">
                <div className="aspect-square relative">
                  <img 
                    src={choosesImg}
                    alt="RYUGA Professional Nursing Training" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Special Section - Dark Blue Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20"
            style={{ fontFamily: 'Abhaya Libre, serif', color: '#FFFFFF' }}
          >
            What Makes Us <span style={{ color: '#5BA7D1' }}>Special</span>
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Practical Training", desc: "Hands-on experience with real-world caregiving scenarios to build confidence and expertise", color: "#5BA7D1" },
              { title: "Compassionate Care", desc: "Teaching empathy and emotional intelligence as core foundations of quality caregiving", color: "#EC4899" },
              { title: "Professional Excellence", desc: "Maintaining highest standards of care with certified training and continuous development", color: "#F59E0B" },
              { title: "Community Support", desc: "Building a supportive community of caregivers who learn and grow together", color: "#22C55E" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg ring-4 ring-white/20">
                  <img src={choosesImg} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed text-lg text-white/90" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RYUGA At a Glance Section - Light Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F0F9FF' }}>
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              RYUGA <span style={{ color: '#5BA7D1' }}>At a Glance</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
              Professional nursing education excellence
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: "98%", label: "Student Satisfaction", icon: "📊", delay: 0 },
              { value: "3+", label: "Years Experience", icon: "⏰", delay: 0.2 },
              { value: "100%", label: "Training Success", icon: "✅", delay: 0.4 },
              { value: "98%", label: "Certification Rate", icon: "🏆", delay: 0.6 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group rounded-3xl p-10 text-center border-2 transition-all duration-500 shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: '#5BA7D1', borderColor: '#4A96C0' }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-6xl font-bold mb-3 text-white" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-white/90" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Certifications Section - Dark Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Our <span style={{ color: '#5BA7D1' }}>Certifications</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Recognized and certified by leading healthcare authorities
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="group text-center space-y-8"
            >
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 ring-8 ring-blue-500/30">
                  <img src={choosesImg} alt="ISO Certification" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg">
                  ISO Certified
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mt-8" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                ISO 9001:2015 Certified
              </h3>
              <p className="text-xl text-white/80" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                International Quality Management System Standard
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="group text-center space-y-8"
            >
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 ring-8 ring-green-500/30">
                  <img src={choosesImg} alt="Government Approved" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg">
                  Approved
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mt-8" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Ministry of Health Approved
              </h3>
              <p className="text-xl text-white/80" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                Recognized Training Provider by Healthcare Authorities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Purpose Section - Light Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Our <span style={{ color: '#5BA7D1' }}>Purpose</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Transforming lives through comprehensive caregiving education
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="relative p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group"
              style={{ backgroundColor: '#EBF5FF' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -mr-20 -mt-20"></div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative z-10" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Our Mission
              </h3>
              <p className="text-xl leading-relaxed text-gray-700 relative z-10" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                To provide comprehensive, compassionate caregiving education that empowers individuals to make 
                a meaningful difference in the lives of those they serve, while building a stronger, more 
                caring community.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="relative p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group"
              style={{ backgroundColor: '#F3E8FF' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full -mr-20 -mt-20"></div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 relative z-10" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                Our Vision
              </h3>
              <p className="text-xl leading-relaxed text-gray-700 relative z-10" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                To be the leading caregiving education institute, recognized for excellence in training 
                compassionate, skilled caregivers who transform the healthcare landscape with dignity 
                and professional care.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Expert Team Section - Blue Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#1E40AF' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Meet Our <span style={{ color: '#5BA7D1' }}>Expert Team</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Dedicated professionals committed to excellence in caregiving education
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              { name: "Dr. Amara Silva", role: "Chief Medical Officer", specialty: "Geriatric Care" },
              { name: "Nimali Fernando", role: "Head of Training", specialty: "Nursing Education" },
              { name: "Rohan Perera", role: "Clinical Coordinator", specialty: "Patient Care" },
              { name: "Shalini Wickramasinghe", role: "Program Director", specialty: "Curriculum Development" },
              { name: "Kasun Rajapaksa", role: "Assessment Officer", specialty: "Quality Assurance" },
              { name: "Dilini Jayawardena", role: "Student Counselor", specialty: "Student Support" }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center transition-all duration-500 shadow-xl hover:shadow-2xl border border-white/20"
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-xl ring-4 ring-white/30 group-hover:ring-8 transition-all duration-500">
                  <img 
                    src={choosesImg}
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                  {member.name}
                </h3>
                <p className="text-blue-300 font-semibold mb-2 text-lg" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                  {member.role}
                </p>
                <p className="text-white/80 text-base" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                  {member.specialty}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Activities Gallery Section - Light Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Our <span style={{ color: '#5BA7D1' }}>Activities Gallery</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Glimpses of our training sessions, workshops, and community activities
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { title: "Training Workshop", desc: "Hands-on training session", size: "col-span-2 row-span-2" },
              { title: "Clinical Practice", desc: "Real-world scenarios", size: "col-span-1 row-span-1" },
              { title: "Team Building", desc: "Community activities", size: "col-span-1 row-span-1" },
              { title: "Expert Lecture", desc: "Knowledge sharing", size: "col-span-1 row-span-1" },
              { title: "Skill Assessment", desc: "Performance evaluation", size: "col-span-1 row-span-1" },
              { title: "Graduation Day", desc: "Celebrating success", size: "col-span-2 row-span-1" },
              { title: "Field Visit", desc: "Practical exposure", size: "col-span-1 row-span-1" },
              { title: "Group Study", desc: "Collaborative learning", size: "col-span-1 row-span-1" },
              { title: "Medical Equipment", desc: "Resource training", size: "col-span-1 row-span-2" },
              { title: "Community Service", desc: "Outreach programs", size: "col-span-1 row-span-1" },
              { title: "Certification", desc: "Achievement ceremony", size: "col-span-2 row-span-1" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className={`group relative ${item.size} overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
                style={{ minHeight: item.size.includes('row-span-2') ? '400px' : '200px' }}
              >
                <img
                  src={index % 2 === 0 ? choosesImg : exam2Img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-2" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-blue-300 text-sm md:text-base font-semibold" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Success Stories Section - Dark Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#111827' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Student <span style={{ color: '#5BA7D1' }}>Success Stories</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Hear from our graduates who are making a difference
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: "Priyanka Silva", role: "Professional Caregiver - Japan", text: "RYUGA's training gave me the confidence and skills to secure a caregiver position in Japan. Life-changing experience!", rating: 5 },
              { name: "Chandana Perera", role: "Home Healthcare Nurse", text: "The instructors were amazing! I now run my own home healthcare service thanks to this training.", rating: 5 },
              { name: "Nimal Fernando", role: "Elder Care Specialist", text: "Best decision of my career. The practical training prepared me for real-world challenges perfectly.", rating: 5 },
              { name: "Sanduni Jayawardena", role: "Palliative Care Nurse", text: "Learned not just skills, but compassion and empathy. RYUGA changed my life and career.", rating: 5 },
              { name: "Kasun Wickramasinghe", role: "Disability Care Provider", text: "Comprehensive training with excellent instructors. Now working in a reputed care facility.", rating: 5 },
              { name: "Dilini Rathnayake", role: "Pediatric Care Specialist", text: "The course exceeded my expectations. Highly recommend to anyone interested in caregiving.", rating: 5 },
              { name: "Rukshan Bandara", role: "Medical Assistant - UAE", text: "RYUGA opened doors internationally for me. Professional training with global recognition.", rating: 5 },
              { name: "Malini Dissanayake", role: "Senior Care Coordinator", text: "Grateful for the knowledge and skills gained. Best caregiving institute in Sri Lanka!", rating: 5 }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 flex-1">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    <p className="text-white/90 leading-relaxed mb-6 italic text-base">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="bg-white/10 p-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20 flex-shrink-0">
                      <img src={choosesImg} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                        {testimonial.name}
                      </p>
                      <p className="text-blue-300 text-sm font-semibold" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Professional Case Studies Section - Light Background */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#EAF6FB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
              Professional <span style={{ color: '#5BA7D1' }}>Case Studies</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif', color: '#34495E' }}>
              Discover how our healthcare solutions transform operations
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <motion.div 
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex"
              >
                {[
                  { title: "RYUGA Healthcare Solutions", subtitle: "Since 2021", desc: "See how RYUGA's Healthcare Management System transformed Sri Lanka's medical operations, automating patient processes.", color: "linear-gradient(135deg, #5BA7D1, #A8DFC7)" },
                  { title: "Digital Nursing (Pvt) Ltd", subtitle: "Since 2020", desc: "Discover how our Digital Care Management System digitized nursing operations, enhancing efficiency across facilities.", color: "linear-gradient(135deg, #A8DFC7, #5BA7D1)" },
                  { title: "MediCare Plus (Pvt) Ltd", subtitle: "Since 2019", desc: "Learn how RYUGA's Comprehensive Care System helped achieve faster treatment approvals and enhanced efficiency.", color: "linear-gradient(135deg, #2C3E50, #5BA7D1)" }
                ].map((study, index) => (
                  <div key={index} className="min-w-full">
                    <div className="bg-white rounded-3xl p-12">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-xl" style={{ background: study.color }}>
                          <div className="h-full flex items-center justify-center p-8">
                            <img src={choosesImg} alt={study.title} className="w-full h-full object-cover rounded-xl shadow-2xl" />
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Abhaya Libre, serif', color: '#2C3E50' }}>
                              {study.title}
                            </h3>
                            <p className="text-gray-500 text-lg">{study.subtitle}</p>
                          </div>
                          <p className="text-xl leading-relaxed text-gray-700" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                            {study.desc}
                          </p>
                          <button className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: '#5BA7D1', color: 'white' }}>
                            Read More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="flex justify-center space-x-3 mt-8">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-12 bg-blue-600' : 'bg-blue-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - Gradient Background */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #5BA7D1, #A8DFC7)' }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Abhaya Libre, serif' }}>
              Start Your Caregiving Journey Today
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto font-medium" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
              Join RYUGA and transform your passion for helping others into a professional healthcare career
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-12 py-5 bg-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                  style={{ color: '#5BA7D1' }}
                >
                  Contact Us Now
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-12 py-5 bg-transparent border-3 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl"
                >
                  View Courses
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
      </motion.section>
      
    </div>
  );
}

export default Homepage;
