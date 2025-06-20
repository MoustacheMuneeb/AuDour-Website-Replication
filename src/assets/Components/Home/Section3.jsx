import React from 'react'

const Section3 = () => {
    return (
        <section className='pt-10 pb-10'>
            <div className='items-center text-center font-bold text-[40px]'>
                <h2>
                    Elegant, timeless & functional Bags
                </h2>
            </div>
            <div className='backpack-card ps-5 pe-5 md:ps-20 md:pe-25 pt-10 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 grid-rows-6 gap-4'>
                <div className="col-span-1 sm:col-span-3 row-span-6 overflow-hidden">
                    <img
                        src="backpack.webp"
                        alt="backpack"
                        className='h-[650px] w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105'
                    />
                </div>
                <div className="col-span-1 sm:col-span-2 row-span-3 col-start-1 sm:col-start-4 overflow-hidden">
                    <img
                        src="shoulder.webp"
                        alt="Shoulder"
                        className='w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105'
                    />
                </div>
                <div className="col-span-1 sm:col-span-2 row-span-3 col-start-1 sm:col-start-4 row-start-1 sm:row-start-4 overflow-hidden">
                    <img
                        src="handbag.webp"
                        alt="HandBag"
                        className='w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105'
                    />
                </div>
            </div>
        </section>
    )
}

export default Section3
