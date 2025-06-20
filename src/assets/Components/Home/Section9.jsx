import React from "react";

const blogs = [
  {
    category: "CLUTCH BAGS",
    title: "ULTIMATE GUIDE TO WEDDING CLUTCH BAGS IN PAKISTAN",
    description:
      "Complete your wedding look with Aodour Pakistan’s elegant clutch bags—perfect for brides, bridesmaids, and guests seeking style, tradition, and functional beauty.",
    image: "./blog/1.webp", // replace with your actual image path
    link: "#",
  },
  {
    category: "SKINCARE TOOLS",
    title: "TOP 5 SKINCARE DEVICES EVERY PAKISTANI WOMAN SHOULD TRY",
    description:
      "Upgrade your skincare with top devices from Aodour Pakistan. Enjoy painless hair removal, wrinkle-smoothing, and glowing skin—all from the comfort of your home!",
    image: "./blog/2.webp", // replace with your actual image path
    link: "#",
  },
  {
    category: "DIY",
    title: "DIY FIXES FOR DAMAGED LEATHER HANDBAGS AT HOME",
    description:
      "With easy DIY tips, you can fix scratches, water stains, and cracks on your leather handbag at home. This will keep your bag looking fresh, shiny and durable.",
    image: "./blog/3.webp", // replace with your actual image path
    link: "#",
  },
];

const BlogPosts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-semibold mb-12 tracking-wide">
        BLOG POSTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogs.map((post, index) => (
          <div key={index} className="group">
            {/* Image with zoom effect */}
            <div className="overflow-hidden rounded">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <p className="text-xs tracking-widest text-gray-500 uppercase mt-4 mb-2">
              {post.category}
            </p>
            <h3 className="text-lg font-semibold mb-3 leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-sm underline underline-offset-4 hover:text-black"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;
