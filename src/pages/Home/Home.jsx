import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Solutions from './components/Solutions/Solutions'
import Testimonials from './components/Testimonials/Testimonials'

function Home() {
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

export default Home
