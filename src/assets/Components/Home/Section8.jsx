const Section8 = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-screen mb-20">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full">
                <img
                    src="section8.webp" // Replace with actual image path
                    alt="Model with bags"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Text Section */}
            <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center px-6 md:px-16 text-center md:text-left">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
                        OWN IT. LEAD IT.
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        At Aodour, we’re driven by the belief that your bag is not just an accessory—it’s a statement.
                        We design bags that empower you to take on the world with confidence, style, and ease.
                        We're constantly ahead of the curve, delivering the latest trends with unparalleled quality.
                    </p>
                    {/* Animated button */}
                    <button className="relative overflow-hidden px-6 py-3 bg-black text-white font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                        <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black">
                            Our Story
                        </span>
                        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Section8;
