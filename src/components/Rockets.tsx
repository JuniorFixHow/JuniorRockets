import ROCKET from '../assets/img/rocketman.png'
import ROCKET2 from '../assets/img/rocketride.png'
import ROCKET3 from '../assets/img/rocketlaunch.png'
const Rockets = () => {
  return (
    <>
    <section id="rockets" className="p-6 my-12 scroll-mt-12 widescreen:section-min-height tallscreen:section-min-height" >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">Our Rockets</h2>
        
        <ul className="list-none mx-auto my-12 flex flex-col justify-center sm:flex-row items-center gap-8">

            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black ">
            <img src={ROCKET} className='w-1/2 mb-6' alt="Explorer" />
            <h3 className="text-slate-900 text-3xl text-center dark:text-white">Explorer</h3>
            <p className="hidden sm:block text-slate-500 mt-2 text-3xl text-center dark:text-slate-400">$</p>
            <p className="sm:hidden text-slate-500 text-xl mt-2 text-center dark:text-slate-400">Affordable Exploration</p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
            <img src={ROCKET2} className='w-1/2 mb-6' alt="Adventure" />
            <h3 className="text-slate-900 text-3xl text-center dark:text-white">Adventure</h3>
            <p className="hidden sm:block text-slate-500 mt-2 text-3xl text-center dark:text-slate-400">$$</p>
            <p className="sm:hidden text-slate-500 text-xl mt-2 text-center dark:text-slate-400">Best Selling Rockets!</p>
            </li>
            <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
            <img src={ROCKET3} className='w-1/2 mb-6' alt="Rocket man" />
            <h3 className="text-slate-900 text-3xl text-center dark:text-white">Infinity</h3>
            <p className="hidden sm:block text-slate-500 mt-2 text-3xl text-center dark:text-slate-400">$$$</p>
            <p className="sm:hidden text-slate-500 text-xl mt-2 text-center dark:text-slate-400">Luxury Starship</p>
            </li>
        </ul>
    </section>
    <hr className="mx-auto bg-black sm:bg-white" />
    </>
  )
}

export default Rockets