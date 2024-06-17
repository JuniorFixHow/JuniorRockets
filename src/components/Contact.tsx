const Contact = () => {
  return (
    <>
    <section id="contact" className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height" >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Contact Us</h2>
        <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4" >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required maxLength={60} minLength={3} className="w-full text-black text-2xl sm::text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none" placeholder="Your full name" />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" required maxLength={60} minLength={3} className="w-full text-black text-2xl sm::text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none" placeholder="Message subject" />
          <label htmlFor="message">Message</label>
          <textarea cols={30} rows={10} id="message" required  className="w-full text-black text-2xl sm::text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none" placeholder="your message" ></textarea>
          <button className='bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl'  >Submit</button>
        </form>
    </section>
    <hr className="mx-auto bg-black sm:bg-white" />
    </>
  )
}

export default Contact