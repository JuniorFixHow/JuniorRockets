type menuProps = {
    showMenu:string,
    setShowMenu:React.Dispatch<React.SetStateAction<string>>
}
const MobileMenu = ({showMenu, setShowMenu}:menuProps) =>{
    const menulass = "flex-col absolute top-0 bg-black w-full text-5xl justify-center origin-top animate-open-menu " + showMenu
  return (
    <section onClick={()=>setShowMenu('hidden')} className={menulass} id="mobile-menu" >
        <button onClick={()=>setShowMenu('hidden')} className="text-6xl self-end px-6">&times;</button>
        <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile" >
            <a onClick={()=>setShowMenu('hidden')} href="#hero" className="w-full text-center py-6 hover:opacity-90" >Home</a>
            <a onClick={()=>setShowMenu('hidden')} href="#rockets" className="w-full text-center py-6 hover:opacity-90" >Our Rockets</a>
            <a onClick={()=>setShowMenu('hidden')} href="#testimonials" className="w-full text-center py-6 hover:opacity-90" >Testimonials</a>
            <a onClick={()=>setShowMenu('hidden')} href="#contact" className="w-full text-center py-6 hover:opacity-90" >Contact Us</a>
            <a onClick={()=>setShowMenu('hidden')} href="#footer" className="w-full text-center py-6 hover:opacity-90" >Legal</a>
        </nav>
    </section>
  )
}

export default MobileMenu