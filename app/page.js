'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
//import { HeroCarousel } from './HeroCarousel';

export default function HomePage() {

  const rareFinds = [
    {
      title: "Sports Memorabilia",
      //   image: "https://storage.googleapis.com/a1aa/image/1f7fefc4-8f37-4ea3-a21f-ef5c523202b4.jpg",
      alt: "Basketball with white signature on orange basketball surface",
      underline: true
    },
    {
      title: "Sports Trading Cards",
      //   image: "https://storage.googleapis.com/a1aa/image/90d64b44-475d-4c9c-7ce5-106145ff2a34.jpg",
      alt: "Two sports trading cards with soccer players on them"
    },
    {
      title: "Collectible Card Games",
      //  image: "https://storage.googleapis.com/a1aa/image/7a82f970-4747-41b7-70fb-69f278699823.jpg",
      alt: "Box of collectible card games with anime style art"
    },
    {
      title: "Funko",
      //   image: "https://storage.googleapis.com/a1aa/image/b8a2206e-6a6a-4651-4095-552ab0423754.jpg",
      alt: "Funko pop figure of a character with glasses and black robe holding a small white animal"
    },
    {
      title: "Comics",
      //    image: "https://storage.googleapis.com/a1aa/image/819b8a20-8923-41e0-5180-0661f7280d06.jpg",
      alt: "Naruto comic book cover with colorful anime characters"
    },
    {
      title: "Action Figures",
      //  image: "https://storage.googleapis.com/a1aa/image/966ca3d3-37c4-4ed6-5617-f4dfa2c74007.jpg",
      alt: "Wolverine action figure in yellow and blue costume with claws extended"
    },
    {
      title: "Antiques",
      //image: "https://storage.googleapis.com/a1aa/image/1a2b3707-fc18-417f-bcc5-cb003c621cd1.jpg",
      alt: "Orange antique vase with white floral patterns"
    }
  ];



  const brands = [
    {
      title: "Apple",
      //  image: "https://storage.googleapis.com/a1aa/image/d4da9b09-1b0a-4932-26e3-d635df4c8091.jpg",
      alt: "Black Apple logo on white circular background",
      size: "w-16 h-16 sm:w-20 sm:h-20"
    },
    {
      title: "Dyson",
      //  image: "https://storage.googleapis.com/a1aa/image/ec37d87f-7c71-49f6-5b8f-8836672a9fc6.jpg",
      alt: "Black Dyson logo text on white circular background",
      size: "w-20 h-10 sm:w-24 sm:h-12"
    },
    {
      title: "Samsung",
      //   image: "https://storage.googleapis.com/a1aa/image/100e8300-c058-48c7-af2b-c39b49cbdbe0.jpg",
      alt: "Blue Samsung logo text on white circular background",
      size: "w-20 h-10 sm:w-24 sm:h-12"
    },
    {
      title: "Nintendo",
      //   image: "https://storage.googleapis.com/a1aa/image/3b42b0be-6de1-44f4-ea29-60f04d04afed.jpg",
      alt: "Red Nintendo logo text inside red oval on white circular background",
      size: "w-20 h-10 sm:w-24 sm:h-12"
    },
    {
      title: "PlayStation",
      //  image: "https://storage.googleapis.com/a1aa/image/c451e725-99a1-4951-ef78-a3d151feaffa.jpg",
      alt: "PlayStation logo with red P and colorful S on white circular background",
      size: "w-20 h-16 sm:w-24 sm:h-20"
    },
    {
      title: "Lego",
      //   image: "https://storage.googleapis.com/a1aa/image/bbe790e3-9947-47bf-57a4-f84f4eee9943.jpg",
      alt: "Lego logo with white text on red square background inside white circular background",
      size: "w-20 h-20 sm:w-24 sm:h-24"
    },
    {
      title: "Pokémon",
      // image: "https://storage.googleapis.com/a1aa/image/d945fc24-9379-4125-3d0e-61bd7e695b65.jpg",
      alt: "Pokémon logo text in blue and yellow on white circular background",
      size: "w-20 h-16 sm:w-24 sm:h-20"
    }
  ];

  return (
    <div className="font-sans bg-white text-black min-h-screen">
      <Head>
        <title>eBay Clone</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Arial&display=swap" rel="stylesheet" />
      </Head>

      {/* Top bar */}
      <div className="text-xs px-4 py-1 flex flex-wrap justify-between items-center border-b border-gray-200">
        <div className="flex flex-wrap gap-1 items-center text-gray-800">
          <span>Hi!</span>
          <Link className="underline text-blue-700" href="/signin">
            Sign in
          </Link>
          <span>or</span>
          <Link className="underline text-blue-700" href="/register">
            register
          </Link>
          <Link className="ml-4 hover:underline" href="/daily-deals">
            Daily Deals
          </Link>
          <Link className="ml-4 hover:underline" href="/brand-outlet">
            Brand Outlet
          </Link>
          <Link className="ml-4 hover:underline" href="/gift-cards">
            Gift Cards
          </Link>
          <Link className="ml-4 hover:underline" href="/help">
            Help & Contact
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 items-center text-xs text-gray-800">
          <Link className="hover:underline" href="/ship-to">
            Ship to
          </Link>
          <Link className="hover:underline" href="/sell">
            Sell
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:underline">
              Watchlist
              <i className="fas fa-caret-down text-[10px]"></i>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:underline">
              My eBay
              <i className="fas fa-caret-down text-[10px]"></i>
            </button>
          </div>
          <button aria-label="Notifications" className="text-gray-800 hover:text-black">
            <i className="far fa-bell text-lg"></i>
          </button>
          <Link href="/cart" aria-label="Cart" className="text-gray-800 hover:text-black relative">
            <i className="fas fa-shopping-cart text-lg"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </Link>
        </div>
      </div>

      {/* Main header with logo and search */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-4">
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <div className="w-24 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">eBay</span>
            </div>
            <div className="text-xs text-gray-700 cursor-pointer select-none">
              Shop by
              <br />
              category
              <i className="fas fa-caret-down text-[10px]"></i>
            </div>
          </Link>
          <form aria-label="Search form" className="flex flex-grow max-w-4xl w-full" role="search">
            <label className="sr-only" htmlFor="search-input">
              Search for anything
            </label>
            <input
              className="flex-grow border border-gray-300 rounded-l-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="search-input"
              placeholder="Search for anything"
              type="search"
            />
            <button
              aria-expanded="false"
              aria-haspopup="listbox"
              className="border border-l-0 border-gray-300 rounded-r-full px-4 text-sm text-gray-600 flex items-center gap-1 hover:bg-gray-100"
              type="button"
            >
              All Categories
              <i className="fas fa-caret-down text-xs"></i>
            </button>
            <button className="ml-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-semibold" type="submit">
              Search
            </button>
            <Link className="ml-3 text-xs text-gray-600 self-center hover:underline" href="/advanced-search">
              Advanced
            </Link>
          </form>
        </div>

        {/* Secondary nav */}
        <nav className="max-w-7xl mx-auto px-4 py-2 text-xs sm:text-sm flex flex-wrap gap-4 border-t border-gray-200 overflow-x-auto">
          {[
            "eBay Live",

            "Electronics",

            "Fashion",

            "Sports",


            "Home & Garden",
            "Deals",
            "Sell"
          ].map((item, index) => (
            <Link key={index} href={`/categories/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:underline whitespace-nowrap">
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        {/* <HeroCarousel /> */}

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              {
                name: "Electronics",
                icon: "📱",
                href: "/categories/electronics",
                image: "/electronics-category.jpg"
              },
              {
                name: "Fashion",
                icon: "👗",
                href: "/categories/fashion",
                image: "/fashion-category.jpg"
              },
              {
                name: "Home & Garden",
                icon: "🏠",
                href: "/categories/home-garden",
                image: "/home-category.jpg"
              },
              {
                name: "Motors",
                icon: "🚗",
                href: "/categories/motors",
                image: "/motors-category.jpg"
              },
              {
                name: "Sports",
                icon: "⚽",
                href: "/categories/sports",
                image: "/sports-category.jpg"
              },
              {
                name: "Collectibles",
                icon: "🧸",
                href: "/categories/collectibles",
                image: "/collectibles-category.jpg"
              },
              {
                name: "Toys",
                icon: "🎮",
                href: "/categories/toys",
                image: "/toys-category.jpg"
              },
              {
                name: "Business",
                icon: "💼",
                href: "/categories/business",
                image: "/business-category.jpg"
              }
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square mb-2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-sm font-medium text-gray-700">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Rare Finds Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
          <h2 className="font-extrabold text-lg mb-6">Discover rare finds</h2>
          <ul className="flex flex-wrap gap-x-10 gap-y-8">
            {rareFinds.map((item, index) => (
              <li key={index} className="flex flex-col items-center w-24 sm:w-28">
                <div className="rounded-full bg-gray-100 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={112}
                    height={112}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>
                <span className={`mt-2 font-bold text-xs sm:text-sm text-center ${item.underline ? 'underline decoration-black decoration-2 underline-offset-2' : ''}`}>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </section>


        {/* Brands Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="font-extrabold text-lg mb-6">Best-selling brands on eBay</h2>
          <ul className="flex flex-wrap gap-x-10 gap-y-8">
            {brands.map((brand, index) => (
              <li key={index} className="flex flex-col items-center w-24 sm:w-28">
                <div className="rounded-full bg-gray-100 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.alt}
                    width={112}
                    height={112}
                    className={`${brand.size} object-contain`}
                  />
                </div>
                <span className="mt-2 font-bold text-xs sm:text-sm text-center">
                  {brand.title}
                </span>
              </li>
            ))}
          </ul>
        </section>


      </main>
      <section className="relative bg-black text-white py-12 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 overflow-hidden">
        {/* Text Content */}
        <div className="max-w-4xl">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-md">
            Endless accessories. Epic prices.
          </h2>
          <p className="mt-2 text-sm sm:text-base font-normal max-w-md">
            Browse millions of upgrades for your ride.
          </p>
          <button
            className="mt-6 bg-white text-black font-semibold rounded-full px-5 py-2 text-sm sm:text-base hover:bg-gray-200 transition"
            type="button"
            aria-label="Shop now"
          >
            Shop now
          </button>
        </div>

        {/* Stacked Product Cards */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex space-x-6" style={{ minWidth: '280px' }}>
          {[
            {
              // image: "https://storage.googleapis.com/a1aa/image/0dc59a45-06ed-4827-c291-39d389aba252.jpg",
              alt: "Black car floor mat on white rounded card",
              zIndex: 10,
              className: "w-24 sm:w-28 md:w-32 lg:w-36"
            },
            {
              // image: "https://storage.googleapis.com/a1aa/image/b66f06de-d95f-4c72-3916-5c5bcae75e59.jpg",
              alt: "Black car seat cover on white rounded card",
              zIndex: 20,
              className: "w-24 sm:w-28 md:w-32 lg:w-36 -ml-10"
            },
            {
              // image: "https://storage.googleapis.com/a1aa/image/c9210be5-3228-43b7-fa35-54f0a5a826b9.jpg",
              alt: "Car running board set on white rounded card",
              zIndex: 30,
              className: "w-24 sm:w-28 md:w-32 lg:w-36 -ml-10"
            }
          ].map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-4 flex justify-center items-center ${product.className}`}
              style={{ zIndex: product.zIndex }}
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={150}
                height={150}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute right-6 bottom-6 flex flex-col space-y-4">
          <button
            aria-label="Scroll up"
            className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-200 transition"
            type="button"
          >
            <i className="fas fa-chevron-up"></i>
          </button>
          <button
            aria-label="Help"
            className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-200 transition"
            type="button"
          >
            <i className="fas fa-question"></i>
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#f5f5f5]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 text-[13px] text-[#222222] font-sans select-none">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 max-w-[900px] mx-auto">
            {/* Buy Column */}
            <div>
              <p className="font-bold mb-2">Buy</p>
              <ul className="space-y-1 text-[#666666]">
                {['Registration', 'Bidding & buying help', 'Stores', 'Creator Collections',
                  'eBay for Charity', 'Charity Shop', 'Seasonal Sales and events', 'eBay Gift Cards']
                  .map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-blue-700 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Sell Column */}
            <div>
              <p className="font-bold mb-2">Sell</p>
              <ul className="space-y-1 text-[#666666]">
                {['Start selling', 'How to sell', 'Business sellers', 'Affiliates']
                  .map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-blue-700 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>

              <p className="font-bold mt-6 mb-2">Tools & apps</p>
              <ul className="space-y-1 text-[#666666]">
                {['Developers', 'Security center', 'Site map']
                  .map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-blue-700 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* eBay Companies Column */}
            <div>
              <p className="font-bold mb-2">eBay companies</p>
              <ul className="space-y-1 text-[#666666]">
                <li>
                  <Link href="#" className="hover:text-blue-700 hover:underline">
                    TCGplayer
                  </Link>
                </li>
              </ul>

              <p className="font-bold mt-6 mb-2">Stay connected</p>
              <ul className="space-y-1 text-[#666666]">
                <li>
                  <Link href="#" className="flex items-center space-x-2 hover:text-blue-700">
                    <span className="w-5 h-5 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-[10px]">
                      <i className="fab fa-facebook-f"></i>
                    </span>
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center space-x-2 hover:text-blue-700">
                    <span className="w-5 h-5 rounded-full bg-[#6e6e6e] flex items-center justify-center text-white text-[10px]">
                      <i className="fab fa-x-twitter"></i>
                    </span>
                    <span>X (Twitter)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* About eBay Column */}
            <div>
              <p className="font-bold mb-2">About eBay</p>
              <ul className="space-y-1 text-[#666666]">
                {['Company info', 'News', 'Deferred Prosecution Agreement with District of Massachusetts',
                  'Investors', 'Careers', 'Diversity & Inclusion', 'Global Impact', 'Government relations',
                  'Advertise with us', 'Policies', 'Verified Rights Owner (VeRO) Program', 'eCI Licenses']
                  .map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-blue-700 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Help & Contact Column */}
            <div>
              <p className="font-bold mb-2">Help & Contact</p>
              <ul className="space-y-1 text-[#666666]">
                {['Seller Center', 'Contact Us', 'eBay Returns', 'eBay Money Back Guarantee']
                  .map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-blue-700 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>

              <p className="font-bold mt-6 mb-2">Community</p>
              <ul className="space-y-1 text-[#666666]">
                {['Announcements', 'eBay Community', 'eBay for Business Podcast']
                  .map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="hover:text-blue-700 hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
              </ul>

              <p className="font-bold mt-6 mb-2">eBay Sites</p>
              <button
                className="flex items-center gap-2 border border-[#d1d1d1] rounded-md px-3 py-1 text-[13px] text-[#222222] hover:bg-[#f0f0f0] transition"
                type="button"
                aria-label="Change country"
              >
                <Image
                  //src="https://storage.googleapis.com/a1aa/image/a33fc5af-ffb6-4536-5bca-0dc61cb6faf9.jpg"
                  alt="Flag of United States"
                  width={20}
                  height={14}
                  className="w-[20px] h-[14px] object-contain"
                />
                <span>United States</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-10 text-[11px] text-[#222222] text-center max-w-[900px] mx-auto leading-tight">
            Copyright © 1995-{new Date().getFullYear()} eBay Inc. All Rights Reserved.
            {['Accessibility', 'User Agreement', 'Privacy', 'Consumer Health Data',
              'Payments Terms of Use', 'Cookies', 'CA Privacy Notice',
              'Your Privacy Choices', 'AdChoice'].map((item, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  <Link href="#" className="underline hover:text-blue-700">
                    {item}
                    {item === 'Your Privacy Choices' && (
                      <i className="fas fa-check-circle text-blue-600 ml-1"></i>
                    )}
                    {item === 'AdChoice' && (
                      <i className="fas fa-info-circle ml-1"></i>
                    )}
                  </Link>
                </span>
              ))}
          </div>
        </div>
      </footer>
    </div>
  );
}