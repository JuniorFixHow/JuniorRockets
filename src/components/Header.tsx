import { useState } from "react"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const [showMenu, setShowMenu] = useState<string>('hidden');
  return (
    <header className='bg-teal-700  max-w-full text-white sticky top-0 z-10' >
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium"> <a href="#hero">🚀 Junior Rockets</a></h1>
            <div>
              <button onClick={()=>setShowMenu('flex')} id="mobile-open-button" className="text-3xl md:hidden cursor-pointer">&#9776;</button>
              <nav className="hidden md:block space-x-8 text-xl" aria-label='main'>
                <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                <a href="#contact" className="hover:opacity-90">Contact Us</a>
              </nav>
            </div>
        </section>
        <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  )
}

export default Header