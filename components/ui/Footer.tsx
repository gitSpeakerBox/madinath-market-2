import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoFooter from "@/assets/images/logo-footer.svg";
import instagramIcon from "@/assets/images/instagram.svg";
import facebookIcon from "@/assets/images/facebook.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-white py-12 md:py-16 px-4 font-sans flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-8">
          <Image
            src={logoFooter}
            alt="Madinath Group Logo"
            width={180}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-800 mb-10">
          <Link href="/about" className="hover:text-mm-red transition-colors duration-300">About us</Link>
          <Link href="/news" className="hover:text-mm-red transition-colors duration-300">News & Events</Link>
          <Link href="/gallery" className="hover:text-mm-red transition-colors duration-300">Gallery</Link>
          <Link href="/careers" className="hover:text-mm-red transition-colors duration-300">Careers</Link>
          <Link href="/store" className="hover:text-mm-red transition-colors duration-300">Store</Link>
          <Link href="/branches" className="hover:text-mm-red transition-colors duration-300">Branches</Link>
          <Link href="/contact" className="hover:text-mm-red transition-colors duration-300">Contact Us</Link>
        </nav>

        {/* Location and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-16 text-sm font-semibold w-full">

          {/* We Are In */}
          <div className="flex items-center gap-3">
            <span className="text-mm-red tracking-wide uppercase">WE ARE IN:</span>
            <div className="flex items-center gap-3 text-gray-800">
              <span>UAE</span>
              <span className="text-mm-red font-normal">|</span>
              <span>INDIA</span>
            </div>
          </div>

          {/* Follow Us On */}
          <div className="flex items-center gap-3">
            <span className="text-mm-red tracking-wide uppercase">FOLLOW US ON:</span>
            <div className="flex items-center gap-3">
              <Link href="https://www.instagram.com/madinathgroup" target="_blank" className="hover:opacity-75 transition-opacity">
                <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
              </Link>
              <span className="text-mm-red font-normal">|</span>
              <Link href="https://m.facebook.com/madinathgroup.ae" target="_blank" className="hover:opacity-75 transition-opacity">
                <Image src={facebookIcon} alt="Facebook" width={10} height={20} />
              </Link>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-xs font-medium flex items-center justify-center">
          <span>© 2019 Madinath Group. All rights reserved.</span>
        </div>

      </footer>
    </>
  );
};

export default Footer;
