import React, { useState } from 'react';
import { FaBolt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.defaultImg);
    const [badge, setBadge] = useState(product.thumbs.find(t => t.badge)?.badge);
    const [isHovered, setIsHovered] = useState(false);

    const handleThumbClick = (thumb) => {
        setMainImage(thumb.src);
        setBadge(thumb.badge || null);
    };

    const renderBadge = () => {
        if (!badge) return null;
        return (
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded-sm z-10 flex items-center gap-1">
                {badge === 'flash' ? <FaBolt className="text-yellow-400" /> : null}
                {badge !== 'flash' ? badge : 'Flash'}
            </div>
        );
    };

    return (
        <section>
            <div>
                <p className="text-center text-[14px] font-bold mb-6">Precision. Poise. Patchee</p>
                <h2 className='text-center text-2xl font-bold mb-6'>Bag the Vibe</h2>
            </div>
            <div className="flex flex-col sm:flex-row bg-white p-6 rounded shadow-md max-w-4xl mx-auto items-center gap-6">
                {/* Model Image */}
                <div className="w-full sm:w-1/2">
                    <img
                        src={product.modelImg}
                        alt="Model"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>

                {/* Product Content */}
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                    {/* Product Image with Hover */}
                    <div
                        className="relative w-full h-64 overflow-hidden mb-4"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {renderBadge()}
                        <img
                            src="./Section6/1.webp"
                            alt="Product"
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'
                                }`}
                        />
                        <img
                            src="./Section6/1_2.webp.webp"
                            alt="Product Hover"
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    </div>

                    {/* Product Title */}
                    <h3 className="text-sm font-semibold tracking-wide text-gray-800 mb-1">
                        {product.title}
                    </h3>

                    {/* Price */}
                    <p className="text-sm text-red-600 font-bold mb-4">{product.price}</p>

                    {/* Thumbnails */}
                    <div className="flex justify-center sm:justify-start gap-2 mb-4 ms-33">
                        {product.thumbs.map((thumb, i) => (
                            <div key={i} className="relative">
                                <img
                                    src={thumb.src}
                                    onClick={() => handleThumbClick(thumb)}
                                    className="w-10 h-10 object-cover border cursor-pointer p-1 hover:border-black"
                                    alt={`thumb-${i}`}
                                />
                                {thumb.badge && (
                                    <div className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded-full font-bold">
                                        {thumb.badge}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* View Product Button */}
                    <button className="relative overflow-hidden ms-30 px-8 py-3 bg-black text-white font-semibold uppercase text-sm border border-black transition-all duration-300 ease-in-out group">
                        <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-black">
                            View Product
                        </span>
                        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                    </button>

                </div>
            </div>
        </section>
    );
};

const Section5 = () => {
    const products = [
        {
            id: 1,
            modelImg: "section6.webp", // Replace with your actual model image
            defaultImg: "./Section6/1.webp",
            hoverImg: "./Section6/1_2.webp.webp",
            title: "SOLID LOCK BUCKLE UNDERARM SMALL BAG",
            price: "FROM RS. 4,807",
            thumbs: [
                { src: "./Section6/2.webp", badge: "-25%" },
                { src: "./Section6/3.webp", badge: null },
                { src: "./Section6/4.webp", badge: null }
            ]
        }
    ];

    return (
        <div className="py-8 px-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Section5;
