import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import WhoWeAre from './Pages/WhoWeAre'
import Contact from './Pages/Contact'
import Register from './Pages/Authentication/Register'
import Footer from './Components/Footer'
import Services from './Pages/Services'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
