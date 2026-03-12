import { HashRouter, Routes, Route } from 'react-router-dom'
import CyberpunkGridBackground from './components/layout/CyberpunkGridBackground'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import LabrynthPage from './pages/LabrynthPage'
import AxplorerPage from './pages/AxplorerPage'

export default function App() {
  return (
    <HashRouter>
      <CyberpunkGridBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/labrynth" element={<LabrynthPage />} />
            <Route path="/axplorer" element={<AxplorerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
