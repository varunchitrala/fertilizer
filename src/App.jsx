import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Solutions from './components/Solutions/Solutions'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Testimonials />
      </main>
    </>
  )
}

export default App
