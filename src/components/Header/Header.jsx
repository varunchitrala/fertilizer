import { useState } from 'react'
import TopBar from './TopBar'
import BrandHeader from './BrandHeader'
import Navbar from './Navbar'
import './Header.css'

function Header() {
  const [language, setLanguage] = useState('en')
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <TopBar />
      <BrandHeader language={language} setLanguage={setLanguage} />
      <Navbar
        language={language}
        productsOpen={productsOpen}
        setProductsOpen={setProductsOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
    </header>
  )
}

export default Header
