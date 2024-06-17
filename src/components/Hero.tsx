import ROCKET from '../assets/img/rocketdab.png';

const Hero = () => {
    //  `npm i --save-dev @types/node`
  return (
    <>
    <section className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height' id='hero' >
        <article className="sm:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900  dark:text-white">
                We Boldly Go <span className="text-indigo-700 dark:text-indigo-300">Where No Rocket Has Gone Before...</span> 
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">We're building rockets for the next century today. From Mars, Jupiter and beyond...</p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Think Junior Rockets.</p>
        </article>
        <img  className='w-1/2' src={ROCKET} alt="Rocket Dab" />
    </section>
    <hr className="mx-auto bg-black dark:bg-white" />
    </>
  )
}

export default Hero