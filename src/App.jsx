import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header   from './components/Header'
import NavBar   from './components/NavBar'
import Footer   from './components/Footer'
import Home     from './pages/Home'
import Services from './pages/Services'
import About    from './pages/About'
import Contact  from './pages/Contact'
import Privacy  from './pages/Privacy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about"    element={<About />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/privacy"  element={<Privacy />} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App