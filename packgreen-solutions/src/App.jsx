import { useState } from 'react'
import './App.css'
import { Reveal } from './components/Reveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import WhySustainable from './components/whysus'
import Services from './components/Services'
import Products from './components/Products'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="overflow-x-hidden antialised text-neutral-800">
      <Navbar />

      <Reveal width="100%">
        <Hero />
      </Reveal>

      <Reveal width="100%">
        <About />
      </Reveal>

      <Reveal width="100%">
        <WhySustainable />
      </Reveal>

      <Reveal width="100%">
        <Services />
      </Reveal>

      <Reveal width="100%">
        <Products />
      </Reveal>

      <Contact />
    </main>
  )
}

export default App
