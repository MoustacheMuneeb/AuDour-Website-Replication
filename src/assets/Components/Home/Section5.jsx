import React, { useState } from 'react';
import { FaBolt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const [mainImage, setMainImage] = useState(product.defaultImg);
    const [badge, setBadge] = useState(product.thumbs.find(t => t.badge)?.badge);
    const [isHovered, setIsHovered] = useState(false);

    const handleThumbClick = (thumb) => {
        setMainImage(thumb.src);
        if (thumb.badge) {
            setBadge(thumb.badge);
        }
    };

    const renderBadge = () => {
        if (!badge) return null;
        return (
            <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs rounded z-10 flex items-center gap-1">
                {badge === 'flash' ? <FaBolt className="text-yellow-400" /> : null}
                {badge !== 'flash' ? badge : 'Flash'}
            </div>
        );
    };

    return (
        <div className="bg-white shadow p-4 rounded group">
            <div
                className="relative w-full h-40 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {renderBadge()}
                <img
                    src={mainImage}
                    alt="Product"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'
                        }`}
                />
                <img
                    src={product.hoverImg}
                    alt="Product Hover"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            </div>
            <h3 className="mt-2 text-sm font-semibold text-center">{product.title}</h3>
            <p className="text-gray-400 text-center text-sm">{product.price}</p>
            <div className="flex justify-center gap-2 mt-3">
                {product.thumbs.map((thumb, i) => (
                    <img
                        key={i}
                        src={thumb.src}
                        onClick={() => handleThumbClick(thumb)}
                        className="w-8 h-8 object-cover rounded border hover:border-black cursor-pointer"
                        alt={`thumb-${i}`}
                    />
                ))}
            </div>
        </div>
    );
};

const Section5 = () => {
    const products = [
        {
            id: 1,
            defaultImg: "1.webp",
            hoverImg: "11.webp",
            title: "CORDUOROY MULTI POCKET TOTE BAG",
            price: "from Rs 9,873",
            thumbs: [
                { src: "111.webp", badge: "-15%" },
                { src: "111_2.webp", badge: null },
                { src: "111_4.webp", badge: null }
            ]
        },
        {
            id: 2,
            defaultImg: "2.webp",
            hoverImg: "22.webp",
            title: "CONTRAST COLOR LARGE CAPACITY BAG",
            price: "from Rs 6,845",
            thumbs: [
                { src: "22_1.webp", badge: "-20%" },
                { src: "22_2.webp", badge: null },
            ]
        },
        {
            id: 3,
            defaultImg: "Outdoor_1.webp",
            hoverImg: "Outdoor_2.webp",
            title: "RETRO MOTHER AND CHILD HANDBAG TOTE",
            price: "from Rs 12,900",
            thumbs: [
                { src: "Outdoor_1.webp", badge: null },
                { src: "Outdoor_2.webp", badge: "-10%" },
                { src: "Men_1.webp", badge: null }
            ]
        },
        {
            id: 4,
            defaultImg: "Men_1.webp",
            hoverImg: "Men_2.webp",
            title: "NEW SIMPLE TOTE BAG",
            price: "from Rs 13,600",
            thumbs: [
                { src: "Men_1.webp", badge: "flash" },
                { src: "Men_2.webp", badge: null },
                { src: "lum_2.webp", badge: "-30%" }
            ]
        },
        {
            id: 5,
            defaultImg: "lum_1.webp",
            hoverImg: "lum_2.webp",
            title: "Trendy Two-Tone PU Leather Tote ...",
            price: "from Rs 4,009",
            thumbs: [
                { src: "lum_1.webp", badge: "-10%" },
                { src: "lum_2.webp", badge: null },
                { src: "Elegent_Women's_Watch_1.webp", badge: "flash" }
            ]
        }
    ];

    return (
        <section className="pt-4 pb-4">
            <div className="items-center text-center gap-4">
                <h2 className="font-semibold">Our Most Loved. Your Next Statement</h2>
                <div className="flex gap-6 text-center items-center justify-between ps-110 pe-110">
                    <h1 className="font-bold text-[40px] pb-6">TOTE</h1>
                    <h1 className="font-bold text-[40px] pb-6">WATCHES</h1>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-6 cursor-pointer ps-8 pe-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button className="!cursor-pointer relative overflow-hidden border border-black px-6 py-2 text-black font-medium group">
                    <span className="absolute inset-0 bg-black transition-all duration-500 group-hover:w-full w-0 h-full left-0 top-0 z-0"></span>
                    <span className="relative z-10 group-hover:text-white transition duration-300">
                        Carry Confidence
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Section5;
