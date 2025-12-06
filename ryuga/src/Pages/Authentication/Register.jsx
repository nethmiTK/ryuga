import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    emergencyContact: '',
    courseInterest: '',
    experience: ''
  });

  const [errors, setErrors] = useState({});
  // Removed password visibility states

  const courseOptions = [
    'Basic Caregiving Certificate',
    'Advanced Care Techniques',
    'Elderly Care Specialization',
    'Disability Support Care',
    'Mental Health Support',
    'First Aid & CPR Training',
    'Palliative Care Training',
    'Child Care & Development'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.courseInterest) newErrors.courseInterest = 'Please select a course interest';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzd3cdPva7rZXaAnakUEPaDMtVz5qS37RjzR5kPLcosA8tpA9MaefTXNDBVIuf2mSpD/exec';
      const formElement = e.target;
      // Create FormData from formData state
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      fetch(scriptURL, { method: 'POST', body: data })
        .then(response => {
          alert('Registration successful! Welcome to RYUGA Caregiving Institute.');
          setFormData({
            firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', address: '', emergencyContact: '', courseInterest: '', experience: ''
          });
        })
        .catch(error => {
          alert('Error! Please try again.');
          console.error('Error!', error.message);
        });
    }
  };

  return (
    <div className="min-h-screen relative py-20">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Assets/Vedio/course.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-indigo-900/70"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white text-3xl">📝</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Abhaya Libre, serif' }}>
            Join RYUGA
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
            Start your journey in professional caregiving education
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                <span className="text-blue-600 text-2xl mr-3">👤</span>
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      errors.dateOfBirth ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>

                {/* Emergency Contact */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 focus:outline-none"
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                    placeholder="Emergency contact number"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 focus:outline-none"
                  style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                  placeholder="Enter your full address"
                />
              </div>
            </div>

            {/* Course Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center" style={{ fontFamily: 'Abhaya Libre, serif' }}>
                <span className="text-blue-600 text-2xl mr-3">📚</span>
                Course Information
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                {/* Course Interest */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    Course Interest *
                  </label>
                  <select
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                      errors.courseInterest ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                  {errors.courseInterest && <p className="text-red-500 text-sm mt-1">{errors.courseInterest}</p>}
                </div>

                {/* Previous Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
                    Previous Caregiving Experience (Optional)
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 focus:outline-none"
                    style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
                    placeholder="Tell us about your previous experience in caregiving or healthcare (if any)"
                  />
                </div>
              </div>
            </div>

            {/* Removed Account Security and Terms/Updates sections */}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}
              >
                Register
              </button>
              
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-600" style={{ fontFamily: 'Noto Sans Sinhala, sans-serif' }}>
            Need help? <Link to="/contact" className="text-blue-600 hover:underline font-medium">Contact our support team</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
