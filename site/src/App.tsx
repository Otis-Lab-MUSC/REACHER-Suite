import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import CyberpunkGridBackground from './components/layout/CyberpunkGridBackground'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import LabrynthPage from './pages/LabrynthPage'
import ContactPage from './pages/ContactPage'

function AppShell() {
  const location = useLocation()
  return (
    <>
      <CyberpunkGridBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main key={location.pathname} className="flex-1 flex flex-col page-enter">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/labrynth" element={<LabrynthPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  )
}
