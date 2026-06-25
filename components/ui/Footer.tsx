import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoFooter from "@/assets/images/logo-footer.svg";
import { getContactInfo } from "@/sanity/sanityClient";

const Footer = async () => {
  const contactInfo = await getContactInfo();
  const socialLinks = contactInfo?.socialLinks || {};

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
            <div className="flex items-center gap-5">
              {socialLinks.instagram && (
                <Link href={socialLinks.instagram} target="_blank" className="hover:opacity-60 transition-opacity text-gray-900">
                  {/* Instagram */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              )}
              {socialLinks.facebook && (
                <Link href={socialLinks.facebook} target="_blank" className="hover:opacity-60 transition-opacity text-gray-900">
                  {/* Facebook */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              )}
              {socialLinks.tiktok && (
                <Link href={socialLinks.tiktok} target="_blank" className="hover:opacity-60 transition-opacity text-gray-900">
                  {/* TikTok */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                  </svg>
                </Link>
              )}
              {socialLinks.youtube && (
                <Link href={socialLinks.youtube} target="_blank" className="hover:opacity-60 transition-opacity text-gray-900">
                  {/* YouTube */}
                  <svg width="22" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </Link>
              )}
              {socialLinks.linkedin && (
                <Link href={socialLinks.linkedin} target="_blank" className="hover:opacity-60 transition-opacity text-gray-900">
                  {/* LinkedIn */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </Link>
              )}
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
