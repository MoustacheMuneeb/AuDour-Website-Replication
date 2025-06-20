import React, { useEffect, useState } from 'react';
import Offerbar from './Offerbar';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section>
            <Offerbar />
            <div
                className="w-100% h-[547.49px] bg-contain bg-no-repeat cursor-pointer bg-[url('Main_Banner.webp')]"
                style={{ position: 'relative', zIndex: 1 }}>
                <div className={`ps-12 pe-12 pt-5 pb-5 flex justify-between items-center flex-wrap z-50 fixed container transition duration-500 ${isScrolled ? 'bg-white opacity-90': 'bg-transparent'} `}>
                    <div className='w-[120px] h-[38.5px]'>
                        <img src="Aodour-Logo-New-Final-01.avif" alt="logo" />
                    </div>
                    <div className='flex gap-5 text-sm font-medium pe-70'>
                        <p>WOMEN</p>
                        <p>MEN</p>
                        <p>UNISEX</p>
                        <p>GYM & SPORTS</p>
                        <p>NEW ARRIVALS</p>
                        <p>SKINCARE TOOLS</p>
                        <p>CLEARENCE SALE</p>
                        <p>FLAT 20% OFF</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
