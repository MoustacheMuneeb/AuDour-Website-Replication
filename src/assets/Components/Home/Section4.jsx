import React from 'react'

const Section4 = () => {
    return (
        <section className='ps-20 pe-20 pt-9 pb-12 w-full h-142'>
            <div className='items-center text-center font-bold text-[40px]'>
                <h2 className='pb-6'>
                    Stories that Lead
                </h2>
            </div>
            <div className="grid grid-cols-5 grid-rows-5 gap-4 items-center justify-between relative">
                <div className="row-span-5">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <video autoPlay loop muted playsInline
                            src="video4.mp4"
                            className="w-full h-full object-cover brightness-85 rounded-3xl"
                        ></video>
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 overflow-hidden px-2 py-3 ps-2 bg-black text-white font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                            <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black">
                               Add to Cart
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                        </button>
                    </div>
                </div>
                <div className="row-span-5">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <video autoPlay loop muted playsInline
                            src="video5.mp4"
                            className="w-full h-full object-cover brightness-85 rounded-3xl"
                        ></video>
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 overflow-hidden px-2 py-3 ps-2 bg-black text-white font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                            <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black">
                               Add to Cart
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                        </button>
                    </div>
                </div>
                <div className="row-span-5">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <video autoPlay loop muted playsInline
                            src="video3.mp4"
                            className="w-full h-full object-cover brightness-85 rounded-3xl"
                        ></video>
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 overflow-hidden px-2 py-3 ps-2 bg-black text-white font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                            <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black">
                               Add to Cart
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                        </button>
                    </div>
                </div>
                <div className="row-span-5">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <video autoPlay loop muted playsInline
                            src="video1.mp4"
                            className="w-full h-full object-cover brightness-85 rounded-3xl"
                        ></video>
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 overflow-hidden px-2 py-3 ps-2 bg-black text-white font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                            <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black">
                               Add to Cart
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                        </button>
                    </div>
                </div>
                <div className="row-span-5">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                        <video autoPlay loop muted playsInline
                            src="video2.mp4"
                            className="w-full h-full object-cover brightness-85 rounded-3xl"
                        ></video>
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 overflow-hidden px-2 py-3 ps-2 bg-black text-white font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                            <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black">
                               Add to Cart
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4