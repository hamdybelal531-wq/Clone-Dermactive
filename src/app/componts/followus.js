"use client";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="w-full py-5 px-6">
      {/* Title */}
      <h2 className="text-center text-xl lg:text-3xl tracking-wide text-gray-600 mb-5">
        FOLLOW US ON INSTAGRAM
      </h2>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center  gap-10">
        {/* Left Text Content */}
        <div className="px-6">
          <h3 className="text-4xl font-light mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-8">
            Subscribe Now To Get Our Updates And Latest News
          </p>

          <div className="flex border border-black w-full max-w-md justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 outline-none"
            />
            <button className="px-6 bg-black text-white text-sm tracking-wide">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full flex justify-center md:justify-start">
          <Image
            src="https://derm-active.com/wp-content/uploads/2023/02/Newsletter.jpg" // ضع صورتك هنا
            width={500}
            height={300}
            alt="newsletter"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
