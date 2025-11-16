import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import WhoWeAre from './Pages/WhoWeAre'
import Register from './Pages/Authentication/Register'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
