const Footer = () => {
  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl" >
        <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between" >
            <address className="text-sm sm:text-2xl" >
                <h2 >Junior Rocket-Powered Products, Inc.</h2>
                555 Astro Way <br />
                Fairfield, New Jersey 12345-5555 <br />
                Email: <a href="mailto:juniorfixhow@gmail.com">Inquiries@juniorrockets.com</a> <br />
                Phone: <a href="tel:+233257737537">+233 357-737-537</a>
            </address>
            <nav className="hidden md:flex flex-col gap-2" aria-label="footer" >
                <a className="hover:opacity-90" href="#rockets">Our Rockets</a>
                <a className="hover:opacity-90" href="#testimonials">Testimonials</a>
                <a className="hover:opacity-90" href="#contact">Contact Us</a>
            </nav>
            <div className="flex flex-col sm::gap-2 text-sm sm:text-2xl" >
                <p className="text-right">Copyright &copy; <span id="year">{new Date().getFullYear()}</span> </p>
                <p className="text-right">All Rights Reserved</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer