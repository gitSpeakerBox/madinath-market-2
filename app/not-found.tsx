import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-sans text-center">
      {/* Animated 404 Text */}
      <div className="relative">
        <h1 className="text-[120px] md:text-[200px] font-black text-gray-100 tracking-tighter select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-mm-red tracking-wide drop-shadow-md">
            Oops!
          </h2>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2 mb-4">
        Page Not Found
      </h3>

      <p className="text-gray-500 max-w-[500px] mb-8 text-sm md:text-base leading-relaxed">
        We can't seem to find the page you're looking for. It might have been
        removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <button className="bg-mm-red hover:bg-red-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-md w-full sm:w-auto">
            Back to Home
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-transparent hover:bg-gray-50 text-gray-700 border-2 border-gray-200 font-medium py-3 px-8 rounded-xl transition-all duration-300 hover:border-gray-300 w-full sm:w-auto">
            Contact Support
          </button>
        </Link>
      </div>
    </div>
  );
}
