// import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Rockets from './components/Rockets'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='bg-slate-50 min-h-screen dark:bg-black dark:text-white'>
      <Header />
      <main className='max-w-4xl mx-auto' >
        <Hero />
        <Rockets />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
