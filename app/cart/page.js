'use client';
import Head from 'next/head';
import Link from 'next/link';
import { FaCaretDown, FaBell, FaShoppingCart, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';

export default function ShoppingCart() {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>eBay Shopping Cart</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Arial&display=swap" rel="stylesheet"/>
        <style>{`
          body {
            font-family: Arial, sans-serif;
          }
        `}</style>
      </Head>
      
      <body className="bg-white text-black">
        {/* Top Navigation */}
        <div className="text-xs px-4 py-1 flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-3 border-b border-gray-200">
          <span>
            Hi!
            <Link className="text-blue-700 underline" href="/signin">
              Sign in
            </Link>
            or
            <Link className="text-blue-700 underline" href="/register">
              register
            </Link>
          </span>
          <Link className="hover:underline" href="#">
            Daily Deals
          </Link>
          <Link className="hover:underline" href="#">
            Brand Outlet
          </Link>
          <Link className="hover:underline" href="#">
            Gift Cards
          </Link>
          <Link className="hover:underline" href="#">
            Help &amp; Contact
          </Link>
          <div className="flex-grow"></div>
          <Link className="hover:underline" href="#">
            Ship to
          </Link>
          <Link className="hover:underline" href="#">
            Sell
          </Link>
          <div className="relative group inline-block">
            <button className="flex items-center gap-1 hover:underline">
              Watchlist
              <FaCaretDown className="text-[10px]"/>
            </button>
          </div>
          <div className="relative group inline-block">
            <button className="flex items-center gap-1 hover:underline">
              My eBay
              <FaCaretDown className="text-[10px]"/>
            </button>
          </div>
          <button aria-label="Notifications" className="relative">
            <FaBell className="text-lg"/>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
          <button aria-label="Cart" className="relative">
            <FaShoppingCart className="text-lg"/>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* Main Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 border-b border-gray-200 gap-3">
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* <img alt="eBay logo" className="object-contain" height="30" src="https://storage.googleapis.com/a1aa/image/d7e85031-c904-4fac-65cf-f1ea13077e7c.jpg" width="80"/> */}
            <div className="w-20 h-7 bg-gray-200 rounded"></div>
            <button className="flex items-center gap-1 text-xs text-gray-600 hover:underline">
              Shop by category
              <FaCaretDown className="text-[10px]"/>
            </button>
          </div>
          <form className="flex flex-grow max-w-4xl w-full gap-2">
            <input 
              aria-label="Search for anything" 
              className="flex-grow border border-gray-300 rounded-l-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" 
              placeholder="Search for anything" 
              type="text" 
            />
            <select 
              aria-label="Select category" 
              className="border border-l-0 border-gray-300 rounded-r-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option>All Categories</option>
            </select>
            <button 
              className="bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" 
              type="submit"
            >
              Search
            </button>
          </form>
          <Link className="text-xs text-gray-600 hover:underline" href="#">
            Advanced
          </Link>
        </header>

        <main className="px-4 max-w-7xl mx-auto mt-6 mb-12">
          <h1 className="text-2xl font-extrabold mb-3">Shopping cart</h1>
          
          <div className="bg-blue-700 text-white text-sm rounded px-4 py-2 mb-6 max-w-full overflow-x-auto">
            <FaInfoCircle className="inline mr-2"/>
            You are signed out right now. To save these items or see your previously saved items,
            <Link className="underline font-semibold ml-1" href="/signin">
              sign in
            </Link>.
          </div>

          <section className="border border-gray-300 rounded-lg p-4 space-y-6 max-w-full overflow-x-auto">
            {/* Item 1 */}
            <article className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-lg p-4 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-grow min-w-0">
                {/* <img alt="John Deere product" className="flex-shrink-0 rounded" height="100" src="https://storage.googleapis.com/a1aa/image/25097ea6-b357-4dcb-03a3-2996a6ed56ec.jpg" width="100"/> */}
                <div className="w-24 h-24 bg-gray-200 rounded"></div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {/* <img alt="transauto-18 user avatar" className="rounded" height="24" src="https://storage.googleapis.com/a1aa/image/a0394a9d-f7e2-4cbf-5e01-a03f5dbab562.jpg" width="24"/> */}
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <Link className="text-xs text-blue-700 hover:underline truncate max-w-[150px] block" href="#">
                      transauto-18
                    </Link>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">98.8% positive feedback</p>
                  <div className="text-xs font-semibold text-red-600 border border-red-600 rounded-full px-2 py-[1px] inline-block mb-1">
                    610 SOLD
                  </div>
                  <p className="text-sm font-bold mb-1 max-w-[250px] truncate">
                    For John Deere X300 X500 Front Bumper Brush Guard Kit Lawn Tractors
                  </p>
                  <p className="text-xs text-gray-600 mb-1">New</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-xs text-gray-500 whitespace-nowrap">
                <button className="underline text-xs self-end mb-1">Pay only this seller</button>
                <label className="text-gray-700 font-normal mb-1" htmlFor="qty1">
                  Qty
                </label>
                <select className="border border-gray-300 rounded text-xs px-2 py-1 w-16 text-center" id="qty1">
                  <option>1</option>
                </select>
                <p className="text-center mt-1 text-gray-400">eBay International Shipping</p>
              </div>
              <div className="flex flex-col items-end gap-1 text-xs text-gray-700 whitespace-nowrap min-w-[90px]">
                <span className="text-lg font-semibold">US $64.00</span>
                <span className="text-gray-400">+ US $271.23</span>
                <p className="text-gray-400 text-[10px]">Returns accepted</p>
                <div className="flex gap-3 mt-2">
                  <button className="underline text-xs">Buy it now</button>
                  <button className="underline text-xs">Save for later</button>
                  <button className="underline text-xs">Remove</button>
                </div>
              </div>
            </article>

            {/* Item 2 */}
            <article className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-lg p-4 gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-grow min-w-0">
                {/* <img alt="Porter & Ash product" className="flex-shrink-0 rounded" height="100" src="https://storage.googleapis.com/a1aa/image/c24fd454-a0e5-453d-3afe-225e046335b9.jpg" width="100"/> */}
                <div className="w-24 h-24 bg-gray-200 rounded"></div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    {/* <img alt="saml23085 user avatar" className="rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/21bdee64-2f41-4e50-19db-e04bfc71d767.jpg" width="24"/> */}
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <Link className="text-xs text-blue-700 hover:underline truncate max-w-[150px] block" href="#">
                      saml23085
                    </Link>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">100% positive feedback</p>
                  <div className="text-xs font-semibold text-red-600 border border-red-600 rounded-full px-2 py-[1px] inline-block mb-1">
                    LAST ONE
                  </div>
                  <p className="text-sm font-bold mb-1 max-w-[250px] truncate">
                    Porter &amp; Ash Men s Linen Shorts Size 30 BLUE NEW WITH TAGS
                  </p>
                  <p className="text-xs text-gray-600 mb-1">New with tags</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-xs text-gray-500 whitespace-nowrap">
                <button className="underline text-xs self-end mb-1">Pay only this seller</button>
                <span className="mb-6 font-normal">Qty 1</span>
                <p className="text-center mt-1 text-gray-400">eBay International Shipping</p>
              </div>
              <div className="flex flex-col items-end gap-1 text-xs text-gray-700 whitespace-nowrap min-w-[90px]">
                <span className="text-lg font-semibold">US $18.70</span>
                <span className="text-gray-400">+ US $61.26</span>
                <div className="flex gap-3 mt-2">
                  <button className="underline text-xs">Buy it now</button>
                  <button className="underline text-xs">Save for later</button>
                  <button className="underline text-xs">Remove</button>
                </div>
              </div>
            </article>
          </section>

          {/* Order Summary */}
          <div className="flex flex-col lg:flex-row lg:justify-end gap-6 mt-6 max-w-full">
            <aside className="lg:w-80 bg-gray-50 rounded-lg p-4 text-sm text-gray-900">
              <div className="flex justify-between mb-1">
                <span>Items (2)</span>
                <span>US $82.70</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span>Shipping to 30000</span>
                <button aria-label="Shipping info" className="text-gray-500 hover:text-gray-700">
                  <FaInfoCircle/>
                </button>
                <span>US $332.49</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-2 mb-4">
                <span>Subtotal</span>
                <span>US $415.19</span>
              </div>
              <button className="w-full bg-blue-600 text-white rounded-full py-3 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                Go to checkout
              </button>
              <p className="text-xs text-gray-600 mt-2 flex items-center justify-center gap-1">
                <FaShieldAlt/>
                Purchase protected by{' '}
                <Link className="text-blue-700 underline" href="#">
                  eBay Money Back Guarantee
                </Link>
              </p>
            </aside>

            <aside className="lg:w-80 bg-blue-100 rounded-lg p-4 text-xs text-gray-900 flex items-center gap-3">
              {/* <img alt="eBay Mastercard" className="flex-shrink-0" height="32" src="https://storage.googleapis.com/a1aa/image/98b874da-6b1a-4903-70ab-7bc41286ba79.jpg" width="48"/> */}
              <div className="w-12 h-8 bg-gray-300"></div>
              <div>
                <p>Earn up to 5X points with your eBay Mastercard ®.</p>
                <Link className="font-bold text-blue-700 hover:underline" href="#">
                  See details
                </Link>
              </div>
            </aside>
          </div>

          {/* Related Items */}
          <section className="mt-12 max-w-full overflow-x-auto">
            <h2 className="font-bold text-lg mb-1">Explore related items</h2>
            <p className="text-xs text-gray-600 mb-3">Sponsored</p>
            <div className="flex gap-4 min-w-max">
              {[1, 2, 3, 4, 5].map((item) => (
                <article key={item} className="w-40 flex-shrink-0">
                  <div className="w-40 h-30 bg-gray-200 rounded mb-1"></div>
                  <p className="text-xs mb-1 truncate">
                    {item === 1 && "For John Deere X300 X500 Front Bumper Brush Guard Kit Lawn Tractors"}
                    {item === 2 && "For John Deere X300 X500 Front Bumper Brush Guard Kit Lawn Tractors OEM..."}
                    {item === 3 && "Brush Guard Bumper For John Deere Lawn Tractors X300 X500 Replace For..."}
                    {item === 4 && "ELITEWILL Brush Guard Bumper For John Deere Lawn Tractors X300 X500..."}
                    {item === 5 && "Brush Guard Bumper For John Deere Lawn Tractors X300 X500..."}
                  </p>
                  <p className="text-xs text-gray-600 mb-1">New</p>
                  <p className="text-sm font-semibold mb-0">
                    {item === 1 && "$78.56"}
                    {item === 2 && "$59.99"}
                    {item === 3 && "$64.99"}
                    {item === 4 && "$64.99"}
                    {item === 5 && "$65.99"}
                  </p>
                  {item !== 1 && (
                    <>
                      <p className="text-xs line-through text-gray-400 mb-0">
                        {item === 2 && "$79.99"}
                        {item === 3 && "$84.99"}
                        {item === 4 && "$84.99"}
                        {item === 5 && "$85.99"}
                      </p>
                      <p className="text-xs line-through text-gray-400 mb-0">
                        {item === 2 && "25% off"}
                        {item === 3 && "24% off"}
                        {item === 4 && "24% off"}
                        {item === 5 && "23% off"}
                      </p>
                    </>
                  )}
                  <p className="text-xs text-gray-600 mb-0">
                    + US $
                    {item === 1 && "271.66"}
                    {item === 2 && "165.94"}
                    {item === 3 && "126.30"}
                    {item === 4 && "141.78"}
                    {item === 5 && "130.00"}
                    shipping
                  </p>
                  <p className="text-xs font-semibold text-gray-700">
                    {item === 1 && "Last one"}
                    {item === 2 && "27 sold"}
                    {item === 3 && "280 sold"}
                    {item === 4 && "192 sold"}
                    {item === 5 && "92 sold"}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 text-xs text-gray-600 px-4 max-w-7xl mx-auto">
            <nav className="flex flex-wrap gap-3 mb-2">
              <Link className="hover:underline" href="#">About eBay</Link>
              <Link className="hover:underline" href="#">Announcements</Link>
              <Link className="hover:underline" href="#">Community</Link>
              <Link className="hover:underline" href="#">Security Center</Link>
              <Link className="hover:underline" href="#">Seller Center</Link>
              <Link className="hover:underline" href="#">Policies</Link>
              <Link className="hover:underline" href="#">Affiliates</Link>
              <Link className="hover:underline" href="#">Help &amp; Contact</Link>
              <Link className="hover:underline" href="#">Site Map</Link>
            </nav>
            <p className="mb-1">
              Copyright © 1995-2025 eBay Inc. All Rights Reserved.
              <Link className="hover:underline ml-1" href="#">Accessibility</Link>,
              <Link className="hover:underline ml-1" href="#">User Agreement</Link>,
              <Link className="hover:underline ml-1" href="#">Privacy</Link>,
              <Link className="hover:underline ml-1" href="#">Consumer Health Data</Link>,
              <Link className="hover:underline ml-1" href="#">Payments Terms of Use</Link>,
              <Link className="hover:underline ml-1" href="#">Cookies</Link>,
              <Link className="hover:underline ml-1" href="#">CA Privacy Notice</Link>,
              <Link className="hover:underline ml-1" href="#">Your Privacy Choices</Link> and
              <Link className="hover:underline ml-1" href="#">AdChoice</Link>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}