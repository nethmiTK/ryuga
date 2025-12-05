 import React, { useEffect } from "react";

export default function Contact() {

  // ---------- GOOGLE SHEET FORM SUBMIT ----------
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxDBfweoBfxsIzjt3AVdj67NzfG1yqTqC4YXn9c7vTOeeq9XHqoVYom_KU-VT-ZSivm/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      await fetch(scriptURL, { method: "POST", body: new FormData(form) });
      alert("Success! Your message has been sent.");
      form.reset();
    } catch (error) {
      alert("Error! Please try again.");
      console.error("Error!", error.message);
    }
  };

  // ---------- COMPONENT UI ----------
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EAF6FB" }}>
      {/* HERO SECTION */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Assets/exam.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="text-center px-4 relative z-20">
          <h1
            className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg animate-fade-in-up"
            style={{ fontFamily: "Abhaya Libre, serif" }}
          >
            Contact{" "}
            <span className="relative" style={{ color: "#5BA7D1" }}>
              RYUGA
              <div
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full animate-slide-in"
                style={{
                  background: "linear-gradient(to right, #5BA7D1, #A8DFC7)",
                }}
              ></div>
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-white/90 leading-relaxed drop-shadow-md animate-fade-in-up"
            style={{ fontFamily: "Noto Sans Sinhala, sans-serif" }}
          >
            Get in touch with us for professional nursing and caregiving education
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: "#E3F2F9" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "Abhaya Libre, serif", color: "#2C3E50" }}
            >
              Get in <span style={{ color: "#5BA7D1" }}>Touch</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: "Noto Sans Sinhala, sans-serif",
                color: "#34495E",
              }}
            >
              Ready to start your nursing education journey? Contact us today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT INFO BOXES */}
            <div className="space-y-8">
              {/* ADDRESS BOX */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#5BA7D1" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2C3E50" }}
                  >
                    Address
                  </h4>
                  <p style={{ color: "#34495E" }}>
                    RYUGA Nursing Institute <br />
                    123 Main Street <br />
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              {/* PHONE BOX */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#A8DFC7" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2C3E50" }}
                  >
                    Phone
                  </h4>
                  <p style={{ color: "#34495E" }}>
                    +94 11 123 4567
                    <br />
                    +94 70 123 4567
                  </p>
                </div>
              </div>

              {/* EMAIL BOX */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#5BA7D1" }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2C3E50" }}
                  >
                    Email
                  </h4>
                  <p style={{ color: "#34495E" }}>
                    info@ryuga.lk <br />
                    admissions@ryuga.lk
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div
              className="bg-white rounded-3xl p-8 shadow-2xl border"
              style={{ borderColor: "#E3F2F9" }}
            >
              <h3
                className="text-3xl font-bold mb-8 text-center"
                style={{ fontFamily: "Abhaya Libre, serif", color: "#2C3E50" }}
              >
                Send us a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* FIRST + LAST NAME */}
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    className="px-4 py-3 w-full border rounded-lg"
                  />
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="px-4 py-3 w-full border rounded-lg"
                  />
                </div>

                {/* EMAIL */}
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="px-4 py-3 w-full border rounded-lg"
                />

                {/* PHONE */}
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="px-4 py-3 w-full border rounded-lg"
                />

                {/* COURSE SELECT */}
                <select
                  name="course"
                  className="px-4 py-3 w-full border rounded-lg"
                >
                  <option value="">Select a Course</option>
                  <option value="nursing">Professional Nursing Course</option>
                  <option value="caregiving">Caregiving Training</option>
                  <option value="elderly-care">Elderly Care Specialist</option>
                  <option value="pediatric">Pediatric Care</option>
                </select>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows="4"
                  className="px-4 py-3 w-full border rounded-lg"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-semibold"
                  style={{ backgroundColor: "#5BA7D1" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
