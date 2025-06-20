import React from 'react'
import Offerbar from '../Share/Offerbar'
import Navbar from '../Share/Navbar'

const Section1 = () => {
    return (
        <section className='pt-4 pb-4'>
            <div className='items-center text-center gap-4'>
                <h2 className='font-semibold'>
                    New trend starts here
                </h2>
                <h1 className='font-bold text-[40px] pb-6'>
                    New Arrivals
                </h1>
            </div>
            <div className='grid grid-cols-5 gap-6 cursor-pointer ps-8 pe-8'>
                <div className='bg-white shadow p-4 rounded group'>
                    <div className='relative w-full h-40 overflow-hidden'>
                    <img src="Elegent_Women's_Watch_1.webp" alt="Product1" className='w-full h-40 object-cover transition-opacity duration-100 group-hover:opacity-0' />
                    <img src="Elegent_Women's_Watch_2.webp" alt="Product1 Hover" className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    </div>
                    <h3 className='mt-2 text-sm font-semibold text-center'>
                        Elegent fit Women's Smart Watch
                    </h3>
                    <p className='text-gray-400 text-center text-sm '>
                        from Rs 9,873
                    </p>
                </div>
                <div className='bg-white shadow p-4 rounded group'>
                    <div className='relative w-full h-40 overflow-hidden'>
                    <img src="ZL_Smart_1.webp" alt="Product2" className='w-full h-40 object-cover transition-opacity duration-100 group-hover:opacity-0' />
                    <img src="ZL_Smart_2.webp" alt="Product1 Hover" className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    </div>
                    <h3 className='mt-2 text-sm font-semibold text-center'>
                        ZL Smart Pro Bluetooth Call Smart Watch
                    </h3>
                    <p className='text-gray-400 text-center text-sm '>
                        from Rs 6,845
                    </p>
                </div>
                <div className='bg-white shadow p-4 rounded group'>
                    <div className='relative w-full h-40 overflow-hidden'>
                    <img src="Outdoor_1.webp" alt="Product2" className='w-full h-40 object-cover transition-opacity duration-100 group-hover:opacity-0' />
                    <img src="Outdoor_2.webp" alt="Product1 Hover" className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    </div>
                    <h3 className='mt-2 text-sm font-semibold text-center'>
                        Outdoor Pro Bluetooth Smart Watch
                    </h3>
                    <p className='text-gray-400 text-center text-sm '>
                        from Rs 12,900
                    </p>
                </div>
                <div className='bg-white shadow p-4 rounded group'>
                    <div className='relative w-full h-40 overflow-hidden'>
                    <img src="Men_1.webp" alt="Product2" className='w-full h-40 object-cover transition-opacity duration-100 group-hover:opacity-0' />
                    <img src="Men_2.webp" alt="Product1 Hover" className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    </div>
                    <h3 className='mt-2 text-sm font-semibold text-center'>
                       Men's Bluetooth Smart Watch with Rotating Bezel and Health Tracker
                    </h3>
                    <p className='text-gray-400 text-center text-sm '>
                        from Rs 13,600
                    </p>
                </div>
                <div className='bg-white shadow p-4 rounded group'>
                    <div className='relative w-full h-40 overflow-hidden'>
                    <img src="lum_1.webp" alt="Product2" className='w-full h-40 object-cover transition-opacity duration-100 group-hover:opacity-0' />
                    <img src="lum_2.webp" alt="Product1 Hover" className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    </div>
                    <h3 className='mt-2 text-sm font-semibold text-center'>
                        Luminous Quartz Waterproof Men's Watch With Calendar
                    </h3>
                    <p className='text-gray-400 text-center text-sm '>
                        from Rs 4,009
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-10 ">
                <button className="!cursor-pointer relative overflow-hidden border border-black px-6 py-2 text-black font-medium group">
                    <span className="absolute inset-0 bg-black transition-all duration-500 group-hover:w-full w-0 h-full left-0 top-0 z-0"></span>
                    <span className="relative z-10 group-hover:text-white transition duration-300">
                        View All
                    </span>
                </button>
            </div>
        </section>
    )
}

export default Section1