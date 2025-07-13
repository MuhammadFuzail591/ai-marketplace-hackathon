'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaQuestion, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';

export default function ListItemPage() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
    

      <header className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-6 border-b border-gray-200">
        <Link href="/">
          <Image 
            alt="eBay logo with letters e in red, b in blue, a in yellow, y in green"
           // src="/ebay-logo.png" // Replace with your actual logo path
            width={110}
            height={30}
            className="object-contain"
          />
        </Link>
        <button 
          aria-label="Help" 
          className="text-black text-xl border border-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
        >
          <FaQuestion className="text-lg" />
        </button>
      </header>

      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 py-8">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
          Start your listing
        </h1>
        
        <form className="flex mb-8 sm:mb-16 max-w-5xl">
          <input 
            className="flex-grow rounded-lg border border-gray-300 px-4 py-2 sm:py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400" 
            placeholder="Tell us what you're selling" 
            type="text"
          />
          <button 
            aria-label="Search" 
            className="ml-3 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-12 sm:w-16 h-12 flex items-center justify-center" 
            type="submit"
          >
            <FaSearch className="text-lg" />
          </button>
        </form>
        
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl">
          <article className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center">
            <div className="relative w-full h-[120px] sm:h-[140px] mb-4 sm:mb-6">
              <Image
                alt="Side view of beige sneaker with purple stripes on a light gray background"
                //src="/sneaker-image-1.jpg" // Replace with your actual image path
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 mb-1 tracking-wide">
              STEP 1
            </p>
            <p className="font-bold mb-1 text-sm sm:text-base">
              Share item details
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Use keywords like brand, model, or unique info (ISBN, MPN, VIN).
            </p>
          </article>
          
          <article className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center">
            <div className="relative w-full h-[120px] sm:h-[140px] mb-4 sm:mb-6">
              <Image
                alt="Three overlapping images of sneakers with purple laces and a green checkmark on a light gray background"
               // src="/sneaker-image-2.jpg" // Replace with your actual image path
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 mb-1 tracking-wide">
              STEP 2
            </p>
            <p className="font-bold mb-1 text-sm sm:text-base">
              Find a match
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              We will search our catalog to find similar items.
            </p>
          </article>
          
          <article className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col items-center text-center">
            <div className="relative w-full h-[120px] sm:h-[140px] mb-4 sm:mb-6">
              <Image
                alt="eBay search results page with sneaker thumbnail and search bar"
                src="/search-results-image.jpg" // Replace with your actual image path
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-gray-500 mb-1 tracking-wide">
              STEP 3
            </p>
            <p className="font-bold mb-1 text-sm sm:text-base">
              Edit and list
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              You can preview or make changes before listing your item.
            </p>
          </article>
        </section>
      </main>

      <footer className="px-4 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-6 text-xs text-gray-700 max-w-7xl border-t border-gray-200">
        <p>
          Copyright © 1995-2025 eBay Inc. All Rights Reserved.
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            Accessibility
          </Link>
          ,
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            User Agreement
          </Link>
          ,
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            Privacy
          </Link>
          ,
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            Consumer Health Data
          </Link>
          ,
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            Payments Terms of Use
          </Link>
          ,
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            Cookies
          </Link>
          ,
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            CA Privacy Notice
          </Link>
          ,
          <Link className="underline hover:text-blue-700 ml-1" href="#">
            Your Privacy Choices
          </Link>
        </p>
        <p className="mt-1">
          <Link className="underline hover:text-blue-700" href="#">
            <FaCheckCircle className="inline mr-1" />
            and AdChoice
            <FaInfoCircle className="inline ml-1" />
          </Link>
        </p>
      </footer>
    </div>
  );
}