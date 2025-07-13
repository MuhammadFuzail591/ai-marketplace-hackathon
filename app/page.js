'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Categories from './components/Categories'
import AISearch from './components/AiSearch'
//import { HeroCarousel } from './HeroCarousel';

export default function HomePage () {
  const rareFinds = [
    {
      title: 'Sports Memorabilia',
      image:
        'https://storage.googleapis.com/a1aa/image/1f7fefc4-8f37-4ea3-a21f-ef5c523202b4.jpg',
      alt: 'Basketball with white signature on orange basketball surface',
      underline: true
    },
    {
      title: 'Sports Trading Cards',
      image:
        'https://storage.googleapis.com/a1aa/image/90d64b44-475d-4c9c-7ce5-106145ff2a34.jpg',
      alt: 'Two sports trading cards with soccer players on them'
    },
    {
      title: 'Collectible Card Games',
      image:
        'https://storage.googleapis.com/a1aa/image/7a82f970-4747-41b7-70fb-69f278699823.jpg',
      alt: 'Box of collectible card games with anime style art'
    },
    {
      title: 'Funko',
      image:
        'https://storage.googleapis.com/a1aa/image/b8a2206e-6a6a-4651-4095-552ab0423754.jpg',
      alt: 'Funko pop figure of a character with glasses and black robe holding a small white animal'
    },
    {
      title: 'Comics',
      image:
        'https://storage.googleapis.com/a1aa/image/819b8a20-8923-41e0-5180-0661f7280d06.jpg',
      alt: 'Naruto comic book cover with colorful anime characters'
    },
    {
      title: 'Action Figures',
      image:
        'https://storage.googleapis.com/a1aa/image/966ca3d3-37c4-4ed6-5617-f4dfa2c74007.jpg',
      alt: 'Wolverine action figure in yellow and blue costume with claws extended'
    },
    {
      title: 'Antiques',
      image:
        'https://storage.googleapis.com/a1aa/image/1a2b3707-fc18-417f-bcc5-cb003c621cd1.jpg',
      alt: 'Orange antique vase with white floral patterns'
    }
  ]

  const brands = [
    {
      title: 'Apple',
      image:
        'https://storage.googleapis.com/a1aa/image/d4da9b09-1b0a-4932-26e3-d635df4c8091.jpg',
      alt: 'Black Apple logo on white circular background',
      size: 'w-16 h-16 sm:w-20 sm:h-20'
    },
    {
      title: 'Dyson',
      image:
        'https://storage.googleapis.com/a1aa/image/ec37d87f-7c71-49f6-5b8f-8836672a9fc6.jpg',
      alt: 'Black Dyson logo text on white circular background',
      size: 'w-20 h-10 sm:w-24 sm:h-12'
    },
    {
      title: 'Samsung',
      image:
        'https://storage.googleapis.com/a1aa/image/100e8300-c058-48c7-af2b-c39b49cbdbe0.jpg',
      alt: 'Blue Samsung logo text on white circular background',
      size: 'w-20 h-10 sm:w-24 sm:h-12'
    },
    {
      title: 'Nintendo',
      image:
        'https://storage.googleapis.com/a1aa/image/3b42b0be-6de1-44f4-ea29-60f04d04afed.jpg',
      alt: 'Red Nintendo logo text inside red oval on white circular background',
      size: 'w-20 h-10 sm:w-24 sm:h-12'
    },
    {
      title: 'PlayStation',
      image:
        'https://storage.googleapis.com/a1aa/image/c451e725-99a1-4951-ef78-a3d151feaffa.jpg',
      alt: 'PlayStation logo with red P and colorful S on white circular background',
      size: 'w-20 h-16 sm:w-24 sm:h-20'
    },
    {
      title: 'Lego',
      image:
        'https://storage.googleapis.com/a1aa/image/bbe790e3-9947-47bf-57a4-f84f4eee9943.jpg',
      alt: 'Lego logo with white text on red square background inside white circular background',
      size: 'w-20 h-20 sm:w-24 sm:h-24'
    },
    {
      title: 'Pokémon',
      image:
        'https://storage.googleapis.com/a1aa/image/d945fc24-9379-4125-3d0e-61bd7e695b65.jpg',
      alt: 'Pokémon logo text in blue and yellow on white circular background',
      size: 'w-20 h-16 sm:w-24 sm:h-20'
    }
  ]

  return (
    <div className='min-h-screen font-sans text-black bg-white'>
      <Head>
        <title>eBay Clone</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        />
      </Head>

      {/* Top bar */}
      <div className='flex flex-wrap items-center justify-between px-4 py-1 text-xs border-b border-gray-200'>
        <div className='flex flex-wrap items-center gap-1 text-gray-800'>
          <span>Hi!</span>
          <Link className='text-blue-700 underline' href='/signin'>
            Sign in
          </Link>
          <span>or</span>
          <Link className='text-blue-700 underline' href='/register'>
            register
          </Link>
          <Link className='ml-4 hover:underline' href='/daily-deals'>
            Daily Deals
          </Link>
          <Link className='ml-4 hover:underline' href='/brand-outlet'>
            Brand Outlet
          </Link>
          <Link className='ml-4 hover:underline' href='/gift-cards'>
            Gift Cards
          </Link>
          <Link className='ml-4 hover:underline' href='/help'>
            Help & Contact
          </Link>
        </div>
        <div className='flex flex-wrap items-center gap-4 text-xs text-gray-800'>
          <Link className='hover:underline' href='/ship-to'>
            Ship to
          </Link>
          <Link className='hover:underline' href='/sell'>
            Sell
          </Link>
          <div className='relative group'>
            <button className='flex items-center gap-1 hover:underline'>
              Watchlist
              <i className='fas fa-caret-down text-[10px]'></i>
            </button>
          </div>
          <div className='relative group'>
            <button className='flex items-center gap-1 hover:underline'>
              My eBay
              <i className='fas fa-caret-down text-[10px]'></i>
            </button>
          </div>
          <button
            aria-label='Notifications'
            className='text-gray-800 hover:text-black'
          >
            <i className='text-lg far fa-bell'></i>
          </button>
          <Link
            href='/cart'
            aria-label='Cart'
            className='relative text-gray-800 hover:text-black'
          >
            <i className='text-lg fas fa-shopping-cart'></i>
            <span className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1'>
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <Link
          href={'/ai-search'}
          className='flex justify-center w-[50%] p-4 mx-auto font-bold text-white bg-blue-500 rounded-lg'
        >
          AI Search
        </Link>
        <Categories />

        {/* Rare Finds Section */}
        {/* <section className='px-4 py-8 mx-auto mb-12 max-w-7xl sm:px-6 lg:px-8'>
          <h2 className='mb-6 text-lg font-extrabold'>Discover rare finds</h2>
          <ul className='flex flex-wrap gap-x-10 gap-y-8'>
            {rareFinds.map((item, index) => (
              <li
                key={index}
                className='flex flex-col items-center w-24 sm:w-28'
              >
                <div className='flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full sm:w-28 sm:h-28'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={112}
                    height={112}
                    className='object-contain w-20 h-20 sm:w-24 sm:h-24'
                  />
                </div>
                <span
                  className={`mt-2 font-bold text-xs sm:text-sm text-center ${
                    item.underline
                      ? 'underline decoration-black decoration-2 underline-offset-2'
                      : ''
                  }`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Brands Section */}
        {/* <section className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <h2 className='mb-6 text-lg font-extrabold'>
            Best-selling brands on eBay
          </h2>
          <ul className='flex flex-wrap gap-x-10 gap-y-8'>
            {brands.map((brand, index) => (
              <li
                key={index}
                className='flex flex-col items-center w-24 sm:w-28'
              >
                <div className='flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full sm:w-28 sm:h-28'>
                  <Image
                    src={brand.image}
                    alt={brand.alt}
                    width={112}
                    height={112}
                    className={`${brand.size} object-contain`}
                  />
                </div>
                <span className='mt-2 text-xs font-bold text-center sm:text-sm'>
                  {brand.title}
                </span>
              </li>
            ))}
          </ul>
        </section> */}
      </main>
      <section className='relative px-6 py-12 overflow-hidden text-white bg-black sm:px-12 md:px-20 lg:px-28 xl:px-36'>
        {/* Text Content */}
        <div className='max-w-4xl'>
          <h2 className='max-w-md text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl'>
            Endless accessories. Epic prices.
          </h2>
          <p className='max-w-md mt-2 text-sm font-normal sm:text-base'>
            Browse millions of upgrades for your ride.
          </p>
          <button
            className='px-5 py-2 mt-6 text-sm font-semibold text-black transition bg-white rounded-full sm:text-base hover:bg-gray-200'
            type='button'
            aria-label='Shop now'
          >
            Shop now
          </button>
        </div>

        {/* Stacked Product Cards */}
        <div
          className='absolute flex space-x-6 transform -translate-y-1/2 right-6 top-1/2'
          style={{ minWidth: '280px' }}
        >
          {[
            {
              image:
                'https://storage.googleapis.com/a1aa/image/0dc59a45-06ed-4827-c291-39d389aba252.jpg',
              alt: 'Black car floor mat on white rounded card',
              zIndex: 10,
              className: 'w-24 sm:w-28 md:w-32 lg:w-36'
            },
            {
              image:
                'https://storage.googleapis.com/a1aa/image/b66f06de-d95f-4c72-3916-5c5bcae75e59.jpg',
              alt: 'Black car seat cover on white rounded card',
              zIndex: 20,
              className: 'w-24 sm:w-28 md:w-32 lg:w-36 -ml-10'
            },
            {
              image:
                'https://storage.googleapis.com/a1aa/image/c9210be5-3228-43b7-fa35-54f0a5a826b9.jpg',
              alt: 'Car running board set on white rounded card',
              zIndex: 30,
              className: 'w-24 sm:w-28 md:w-32 lg:w-36 -ml-10'
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
                className='object-contain w-full h-auto'
              />
            </div>
          ))}
        </div>

        {/* Floating Action Buttons */}
        <div className='absolute flex flex-col space-y-4 right-6 bottom-6'>
          <button
            aria-label='Scroll up'
            className='flex items-center justify-center w-10 h-10 text-black transition bg-white rounded-full shadow-md hover:bg-gray-200'
            type='button'
          >
            <i className='fas fa-chevron-up'></i>
          </button>
          <button
            aria-label='Help'
            className='flex items-center justify-center w-10 h-10 text-black transition bg-white rounded-full shadow-md hover:bg-gray-200'
            type='button'
          >
            <i className='fas fa-question'></i>
          </button>
        </div>
      </section>
    </div>
  )
}
