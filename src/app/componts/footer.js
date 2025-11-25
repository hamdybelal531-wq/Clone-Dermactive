"use client";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="h-auto w-auto">
          <Image
            src="https://derm-active.com/wp-content/uploads/2023/01/Untitled-2-01.png-W3-300x71.png"
            width={160}
            height={80}
            alt="Dermactive Logo"
            className="mb-4"
            sizes="160px"
          />
          <p className="text-sm leading-6">
            Dermactive Is A Dermo-Cosmetics Brand That Understands Quality,
            Effectiveness, And Safety. Offers An Integrated Skin Care Solutions.
          </p>
        </div>

        {/* Dermactive Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">DERMACTIVE</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href={"/aboutus"}>
                <span className="hover:text-white">About</span>
              </Link>
            </li>
            <li>
              <Link href={"/contactus"}>
                <span className="hover:text-white">Contact us</span>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Our Range */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Our Range</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href={"/products/acti-clear"}>
                <span className="hover:text-white">ACTI-CLEAR</span>
              </Link>
            </li>
            <li>
              <Link href={"/products/acti-white"}>
                <span className="hover:text-white">ACTI-WHITE</span>
              </Link>
            </li>
            <li>
              <Link href={"/products/acti-solaire"}>
                <span className="hover:text-white">ACTI-SOLAIRE </span>
              </Link>
            </li>
            <li>
              <Link href={"/products/acti-repair"}>
                <span className="hover:text-white">ACTI-REPAIR </span>
              </Link>
            </li>
            <li>
              <Link href={"/products/tricho-act"}>
                <span className="hover:text-white">TRICHO-ACT </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Skin Concerns */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Skin Concerns
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href={"/products/acti-clear"}>
                <span className="hover:text-white">
                  Oily & Acne - prone skin
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/products/acti-white"}>
                <span className="hover:text-white">
                  Un-Even & Pigmented Skin
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/products/acti-solaire"}>
                <span className="hover:text-white">Sun Exposure</span>
              </Link>
            </li>
            <li>
              <Link href={"/products/acti-repair"}>
                <span className="hover:text-white">
                  Irritated & Damaged Skin
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/products/tricho-act"}>
                <span className="hover:text-white">Hair Loss</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <div className="flex justify-center space-x-6 mb-4 text-xl text-white">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaTiktok />
        </div>
        <p className="text-sm">Developed By Belal Hamdy ^_^</p>
        <p className="text-sm">DermActive © 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
}
