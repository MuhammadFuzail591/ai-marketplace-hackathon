export default function EbayElectronicsPage () {
  return (
    <div className='min-h-screen bg-white'>
      {/* Main Content */}
      <div className='px-4 py-6 mx-auto max-w-7xl'>
        <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
          {/* Categories Sidebar */}
          <div className='flex-shrink-0 w-full lg:w-64'>
            <h1 className='mb-6 text-4xl font-bold text-gray-900 lg:text-5xl'>
              Electronics
            </h1>
            <h2 className='mb-4 text-xl font-semibold text-gray-900'>
              Shop by category
            </h2>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Cameras & Photo
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Cell Phones & Accessories
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Computers/Tablets & Networking
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Home Surveillance
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Major Appliances
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Portable Audio & Headphones
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Surveillance & Smart Home Electronics
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  TV, Video & Home Audio
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Vehicle Electronics & GPS
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Video Games & Consoles
                </a>
              </li>
              <li>
                <a href='#' className='block text-gray-700 hover:text-blue-600'>
                  Virtual Reality
                </a>
              </li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div className='flex-1'>
            {/* Hero Banner */}
            <div className='relative mb-8 overflow-hidden rounded-lg bg-gradient-to-r from-purple-100 to-pink-100'>
              <div className='absolute inset-0 bg-black bg-opacity-10'></div>
              <div className='relative px-6 py-8 sm:px-12 sm:py-16'>
                <div className='max-w-md'>
                  <h2 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                    Reconditioned tech
                  </h2>
                  <p className='mb-6 text-gray-700'>
                    See the savings on refurb devices
                  </p>
                  <button className='px-6 py-3 font-medium text-white transition-colors bg-gray-900 rounded-lg hover:bg-gray-800'>
                    View the deal
                  </button>
                </div>
              </div>
              <div className='absolute top-0 right-0 hidden w-1/2 h-full sm:block'>
                <img
                  src='/api/placeholder/400/300'
                  alt='People using laptop'
                  className='object-cover w-full h-full'
                />
              </div>
            </div>

            {/* Product Categories Grid */}
            <div className='grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3'>
              {/* Smartphones & Smartwatches */}
              <div className='p-6 transition-shadow bg-gray-100 rounded-lg hover:shadow-md'>
                <div className='mb-4'>
                  <svg
                    className='w-12 h-12 text-gray-600'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z' />
                  </svg>
                </div>
                <h3 className='mb-2 text-xl font-bold text-gray-900'>
                  Smartphones
                </h3>
                <p className='text-xl font-bold text-gray-900'>
                  & Smartwatches
                </p>
              </div>

              {/* Computers & Accessories */}
              <div className='p-6 transition-shadow bg-gray-100 rounded-lg hover:shadow-md'>
                <div className='mb-4'>
                  <svg
                    className='w-12 h-12 text-gray-600'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z' />
                  </svg>
                </div>
                <h3 className='mb-2 text-xl font-bold text-gray-900'>
                  Computers
                </h3>
                <p className='text-xl font-bold text-gray-900'>& Accessories</p>
              </div>

              {/* Tablets & eReaders */}
              <div className='p-6 transition-shadow bg-gray-100 rounded-lg hover:shadow-md'>
                <div className='mb-4'>
                  <svg
                    className='w-12 h-12 text-gray-600'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z' />
                  </svg>
                </div>
                <h3 className='mb-2 text-xl font-bold text-gray-900'>
                  Tablets
                </h3>
                <p className='text-xl font-bold text-gray-900'>& eReaders</p>
                <div className='mt-2'>
                  <span className='text-2xl'>?</span>
                </div>
              </div>
            </div>

            {/* Listings Section */}
            <div className='bg-white'>
              {/* Filter Bar */}
              <div className='flex flex-wrap items-center gap-2 pb-4 mb-4 border-b border-gray-200 sm:gap-4'>
                <div className='flex items-center gap-2 sm:gap-4'>
                  <button className='px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-full sm:px-4'>
                    All Listings
                  </button>
                  <button className='px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full hover:text-gray-900 sm:px-4'>
                    Auction
                  </button>
                  <button className='px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full hover:text-gray-900 sm:px-4'>
                    Buy It Now
                  </button>
                  <button className='px-3 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-full hover:text-gray-900 sm:px-4'>
                    Best Offer
                  </button>
                </div>
                <div className='flex items-center gap-2 ml-auto sm:gap-4'>
                  <span className='text-sm text-gray-600'>
                    1,430,065 results
                  </span>
                  <select className='px-2 py-1 text-sm border border-gray-300 rounded'>
                    <option>Sort: Best Match</option>
                  </select>
                </div>
              </div>

              {/* Filter Options */}
              <div className='flex flex-wrap items-center gap-2 mb-6 sm:gap-4'>
                <button className='flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50'>
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Filter
                </button>
                <button className='flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50'>
                  Condition
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50'>
                  Price
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button className='flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50'>
                  Delivery Options
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>

              {/* Product Listings */}
              <div className='space-y-4'>
                {/* Nintendo 64 Console Listing */}
                <div className='flex flex-col gap-4 p-4 transition-shadow border border-gray-200 rounded-lg sm:flex-row hover:shadow-md'>
                  <div className='flex-shrink-0 w-full sm:w-48'>
                    <div className='relative'>
                      <img
                        src='/api/placeholder/200/150'
                        alt='Nintendo 64 Console'
                        className='object-cover w-full h-32 rounded-lg sm:h-36'
                      />
                      <div className='absolute px-2 py-1 text-xs text-white bg-black bg-opacity-75 rounded top-2 left-2'>
                        1 Day Shipping
                      </div>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-2 text-lg font-medium text-gray-900 cursor-pointer hover:text-blue-600'>
                      Nintendo 64 Black Console + Controller + Accessory Region
                      Free Used Tested
                    </h3>
                    <div className='flex items-center gap-2 mb-2 text-sm text-gray-600'>
                      <span>Pre-Owned</span>
                      <span>•</span>
                      <span>Nintendo</span>
                    </div>
                    <div className='flex flex-col gap-2 mb-2 sm:flex-row sm:items-center'>
                      <span className='text-xl font-bold text-gray-900'>
                        $55.49 to $137.49
                      </span>
                      <span className='text-sm text-gray-600'>
                        Free shipping
                      </span>
                    </div>
                    <div className='flex items-center gap-4 text-sm text-gray-600'>
                      <span className='text-red-500'>237 sold</span>
                      <span className='px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded'>
                        Sponsored
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sony PlayStation PSP Listing */}
                <div className='flex flex-col gap-4 p-4 transition-shadow border border-gray-200 rounded-lg sm:flex-row hover:shadow-md'>
                  <div className='flex-shrink-0 w-full sm:w-48'>
                    <img
                      src='/api/placeholder/200/150'
                      alt='Sony PlayStation PSP'
                      className='object-cover w-full h-32 rounded-lg sm:h-36'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-2 text-lg font-medium text-gray-900 cursor-pointer hover:text-blue-600'>
                      Sony PlayStation PSP 1000/2000/3000 Console with
                      Charger/New Battery Region Free
                    </h3>
                    <div className='flex items-center gap-2 mb-2 text-sm text-gray-600'>
                      <span>Good - Refurbished</span>
                      <span>•</span>
                      <span>Sony</span>
                    </div>
                    <div className='flex flex-col gap-2 mb-2 sm:flex-row sm:items-center'>
                      <span className='text-xl font-bold text-gray-900'>
                        $109.99 to $209.99
                      </span>
                      <span className='text-sm text-gray-600'>
                        Free shipping
                      </span>
                    </div>
                    <div className='flex items-center gap-4 text-sm text-gray-600'>
                      <span className='text-red-500'>135 sold</span>
                      <div className='flex items-center gap-1'>
                        <div className='flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full'>
                          <svg
                            className='w-2 h-2 text-white'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <span className='font-medium text-blue-600'>
                          eBay Refurbished
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Listings */}
                <div className='flex flex-col gap-4 p-4 transition-shadow border border-gray-200 rounded-lg sm:flex-row hover:shadow-md'>
                  <div className='flex-shrink-0 w-full sm:w-48'>
                    <img
                      src='/api/placeholder/200/150'
                      alt='Gaming Headset'
                      className='object-cover w-full h-32 rounded-lg sm:h-36'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-2 text-lg font-medium text-gray-900 cursor-pointer hover:text-blue-600'>
                      Gaming Headset with Microphone RGB LED Light for PC PS4
                      Xbox One Switch
                    </h3>
                    <div className='flex items-center gap-2 mb-2 text-sm text-gray-600'>
                      <span>Brand New</span>
                      <span>•</span>
                      <span>Generic</span>
                    </div>
                    <div className='flex flex-col gap-2 mb-2 sm:flex-row sm:items-center'>
                      <span className='text-xl font-bold text-gray-900'>
                        $24.99
                      </span>
                      <span className='text-sm text-gray-600'>
                        Free shipping
                      </span>
                    </div>
                    <div className='flex items-center gap-4 text-sm text-gray-600'>
                      <span className='text-red-500'>1.2k sold</span>
                      <div className='flex items-center gap-1'>
                        <span className='text-yellow-500'>★★★★☆</span>
                        <span>(4.2)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-4 p-4 transition-shadow border border-gray-200 rounded-lg sm:flex-row hover:shadow-md'>
                  <div className='flex-shrink-0 w-full sm:w-48'>
                    <img
                      src='/api/placeholder/200/150'
                      alt='Wireless Bluetooth Earbuds'
                      className='object-cover w-full h-32 rounded-lg sm:h-36'
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='mb-2 text-lg font-medium text-gray-900 cursor-pointer hover:text-blue-600'>
                      Wireless Bluetooth Earbuds Noise Cancelling Headphones
                      with Charging Case
                    </h3>
                    <div className='flex items-center gap-2 mb-2 text-sm text-gray-600'>
                      <span>Brand New</span>
                      <span>•</span>
                      <span>Apple</span>
                    </div>
                    <div className='flex flex-col gap-2 mb-2 sm:flex-row sm:items-center'>
                      <span className='text-xl font-bold text-gray-900'>
                        $89.99
                      </span>
                      <span className='text-sm text-gray-600 line-through'>
                        $179.99
                      </span>
                      <span className='text-sm text-gray-600'>
                        Free shipping
                      </span>
                    </div>
                    <div className='flex items-center gap-4 text-sm text-gray-600'>
                      <span className='text-red-500'>3.4k sold</span>
                      <div className='flex items-center gap-1'>
                        <span className='text-yellow-500'>★★★★★</span>
                        <span>(4.8)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Load More Button */}
              <div className='mt-8 text-center'>
                <button className='px-8 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700'>
                  Load More Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
