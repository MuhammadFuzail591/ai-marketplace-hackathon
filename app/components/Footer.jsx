import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
   return (
      <footer className='bg-[#f5f5f5]'>
         <div className='max-w-[1280px] mx-auto px-6 py-10 text-[13px] text-[#222222] font-sans select-none'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 max-w-[900px] mx-auto'>
               {/* Buy Column */}
               <div>
                  <p className='mb-2 font-bold'>Buy</p>
                  <ul className='space-y-1 text-[#666666]'>
                     {[
                        'Registration',
                        'Bidding & buying help',
                        'Stores',
                        'Creator Collections',
                        'eBay for Charity',
                        'Charity Shop',
                        'Seasonal Sales and events',
                        'eBay Gift Cards'
                     ].map((item, index) => (
                        <li key={index}>
                           <Link
                              href='#'
                              className='hover:text-blue-700 hover:underline'
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Sell Column */}
               <div>
                  <p className='mb-2 font-bold'>Sell</p>
                  <ul className='space-y-1 text-[#666666]'>
                     {[
                        'Start selling',
                        'How to sell',
                        'Business sellers',
                        'Affiliates'
                     ].map((item, index) => (
                        <li key={index}>
                           <Link
                              href='#'
                              className='hover:text-blue-700 hover:underline'
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>

                  <p className='mt-6 mb-2 font-bold'>Tools & apps</p>
                  <ul className='space-y-1 text-[#666666]'>
                     {['Developers', 'Security center', 'Site map'].map(
                        (item, index) => (
                           <li key={index}>
                              <Link
                                 href='#'
                                 className='hover:text-blue-700 hover:underline'
                              >
                                 {item}
                              </Link>
                           </li>
                        )
                     )}
                  </ul>
               </div>

               {/* eBay Companies Column */}
               <div>
                  <p className='mb-2 font-bold'>eBay companies</p>
                  <ul className='space-y-1 text-[#666666]'>
                     <li>
                        <Link
                           href='#'
                           className='hover:text-blue-700 hover:underline'
                        >
                           TCGplayer
                        </Link>
                     </li>
                  </ul>

                  <p className='mt-6 mb-2 font-bold'>Stay connected</p>
                  <ul className='space-y-1 text-[#666666]'>
                     <li>
                        <Link
                           href='#'
                           className='flex items-center space-x-2 hover:text-blue-700'
                        >
                           <span className='w-5 h-5 rounded-full bg-[#3b5998] flex items-center justify-center text-white text-[10px]'>
                              <i className='fab fa-facebook-f'></i>
                           </span>
                           <span>Facebook</span>
                        </Link>
                     </li>
                     <li>
                        <Link
                           href='#'
                           className='flex items-center space-x-2 hover:text-blue-700'
                        >
                           <span className='w-5 h-5 rounded-full bg-[#6e6e6e] flex items-center justify-center text-white text-[10px]'>
                              <i className='fab fa-x-twitter'></i>
                           </span>
                           <span>X (Twitter)</span>
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* About eBay Column */}
               <div>
                  <p className='mb-2 font-bold'>About eBay</p>
                  <ul className='space-y-1 text-[#666666]'>
                     {[
                        'Company info',
                        'News',
                        'Deferred Prosecution Agreement with District of Massachusetts',
                        'Investors',
                        'Careers',
                        'Diversity & Inclusion',
                        'Global Impact',
                        'Government relations',
                        'Advertise with us',
                        'Policies',
                        'Verified Rights Owner (VeRO) Program',
                        'eCI Licenses'
                     ].map((item, index) => (
                        <li key={index}>
                           <Link
                              href='#'
                              className='hover:text-blue-700 hover:underline'
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Help & Contact Column */}
               <div>
                  <p className='mb-2 font-bold'>Help & Contact</p>
                  <ul className='space-y-1 text-[#666666]'>
                     {[
                        'Seller Center',
                        'Contact Us',
                        'eBay Returns',
                        'eBay Money Back Guarantee'
                     ].map((item, index) => (
                        <li key={index}>
                           <Link
                              href='#'
                              className='hover:text-blue-700 hover:underline'
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>

                  <p className='mt-6 mb-2 font-bold'>Community</p>
                  <ul className='space-y-1 text-[#666666]'>
                     {[
                        'Announcements',
                        'eBay Community',
                        'eBay for Business Podcast'
                     ].map((item, index) => (
                        <li key={index}>
                           <Link
                              href='#'
                              className='hover:text-blue-700 hover:underline'
                           >
                              {item}
                           </Link>
                        </li>
                     ))}
                  </ul>

                  <p className='mt-6 mb-2 font-bold'>eBay Sites</p>
                  <button
                     className='flex items-center gap-2 border border-[#d1d1d1] rounded-md px-3 py-1 text-[13px] text-[#222222] hover:bg-[#f0f0f0] transition'
                     type='button'
                     aria-label='Change country'
                  >
                     <Image
                        src="https://storage.googleapis.com/a1aa/image/a33fc5af-ffb6-4536-5bca-0dc61cb6faf9.jpg"
                        alt='Flag of United States'
                        width={20}
                        height={14}
                        className='w-[20px] h-[14px] object-contain'
                     />
                     <span>United States</span>
                     <svg
                        className='w-3 h-3'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        viewBox='0 0 24 24'
                     >
                        <path
                           d='M19 9l-7 7-7-7'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        />
                     </svg>
                  </button>
               </div>
            </div>

            {/* Copyright Section */}
            <div className='mt-10 text-[11px] text-[#222222] text-center max-w-[900px] mx-auto leading-tight'>
               Copyright © 1995-{new Date().getFullYear()} eBay Inc. All Rights
               Reserved.
               {[
                  'Accessibility',
                  'User Agreement',
                  'Privacy',
                  'Consumer Health Data',
                  'Payments Terms of Use',
                  'Cookies',
                  'CA Privacy Notice',
                  'Your Privacy Choices',
                  'AdChoice'
               ].map((item, index) => (
                  <span key={index}>
                     {index > 0 && ', '}
                     <Link href='#' className='underline hover:text-blue-700'>
                        {item}
                        {item === 'Your Privacy Choices' && (
                           <i className='ml-1 text-blue-600 fas fa-check-circle'></i>
                        )}
                        {item === 'AdChoice' && (
                           <i className='ml-1 fas fa-info-circle'></i>
                        )}
                     </Link>
                  </span>
               ))}
            </div>
         </div>
      </footer>
   )
}

export default Footer