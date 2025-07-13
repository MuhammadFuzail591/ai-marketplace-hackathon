import React from 'react'

function Header() {
   return (
      <header className="border-b border-gray-200">
         {/* Top Navigation */}
         <div className="py-2 bg-gray-50">
            <div className="flex items-center justify-between px-4 mx-auto text-sm max-w-7xl">
               <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Hi! <a href="#" className="text-blue-600 hover:underline">Sign in</a> or <a href="#" className="text-blue-600 hover:underline">register</a></span>
                  <a href="#" className="text-gray-700 hover:text-blue-600">Daily Deals</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600">Brand Outlet</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600">Gift Cards</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600">Help & Contact</a>
               </div>
               <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-700 hover:text-blue-600">Ship to</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600">Sell</a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                     Watchlist
                     <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                     </svg>
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                     My eBay
                     <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                     </svg>
                  </a>
                  <button className="text-gray-700 hover:text-blue-600">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z" />
                     </svg>
                  </button>
                  <button className="text-gray-700 hover:text-blue-600">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>

         {/* Main Header */}
         <div className="py-3">
            <div className="flex items-center justify-between px-4 mx-auto max-w-7xl">
               {/* Logo */}
               <div className="flex items-center">
                  <div className="mr-4 text-4xl font-bold">
                     <span className="text-red-500">e</span>
                     <span className="text-blue-500">B</span>
                     <span className="text-yellow-500">a</span>
                     <span className="text-green-500">y</span>
                  </div>
                  <button className="flex items-center text-gray-700 hover:text-blue-600">
                     Shop by category
                     <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                     </svg>
                  </button>
               </div>

               {/* Search Bar */}
               <div className="flex-1 max-w-4xl mx-8">
                  <div className="flex">
                     <div className="relative">
                        <select className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                           <option>All Categories</option>
                        </select>
                     </div>
                     <input
                        type="text"
                        placeholder="Search for anything"
                        className="flex-1 px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                     <button className="px-8 py-2 font-medium text-white bg-blue-600 rounded-r-lg hover:bg-blue-700">
                        Search
                     </button>
                  </div>
                  <div className="mt-1">
                     <a href="#" className="text-xs text-blue-600 hover:underline">Advanced</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header