import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Solutions from './components/Solutions/Solutions'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
}

function App() {
  const isAboutPage = window.location.pathname.replace(/\/$/, '') === '/about'

  return isAboutPage ? <AboutPage /> : <HomePage />
}

export default App
