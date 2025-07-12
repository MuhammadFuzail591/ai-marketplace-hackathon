export default function EbayLivePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        {/* Top Navigation */}
        <div className="bg-gray-50 py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
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
              <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
                Watchlist
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
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
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-4xl font-bold mr-4">
                <span className="text-red-500">e</span>
                <span className="text-blue-500">B</span>
                <span className="text-yellow-500">a</span>
                <span className="text-green-500">y</span>
              </div>
              <button className="text-gray-700 hover:text-blue-600 flex items-center">
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
                  <select className="border border-gray-300 rounded-l-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Categories</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="flex-1 border-t border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-8 py-2 rounded-r-lg hover:bg-blue-700 font-medium">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl font-bold text-gray-900">eBay Live</h1>
          <a href="#" className="text-blue-600 hover:underline">Pause automation</a>
        </div>

        <div className="flex gap-8">
          {/* Categories Sidebar */}
          <div className="w-64 flex-shrink-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">New Seller Spotlight</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Labubu Madness</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Fashion Fridays</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Gem Mint Night</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Pokémon Night</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">All-Star Breaks for All-Star Week</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Marquee Coins Week: Roundtable Auctions</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Trading Card Games</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Breaks</a></li>
            </ul>
          </div>

          {/* Live Auctions */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Live now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

              {/* Auction Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Luxury Bags Auction"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                    3503
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">99 AUCTIONS CHANEL LV & PRISTINE LUXURY FRIDAY BAG ...</h3>
                  <p className="text-sm text-gray-600">reservedluxury</p>
                </div>
              </div>

              {/* Auction Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Slab Auctions"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                    2256
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Slab Auctions All Night w/ Reef! PSA & CGC!</h3>
                  <p className="text-sm text-gray-600">theslabvault</p>
                </div>
              </div>

              {/* Auction Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Coin Auctions"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                    873
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">$1 AND GO COIN AUCTIONS W/NVCOIN 7/11/25</h3>
                  <p className="text-sm text-gray-600">nvcoinq</p>
                </div>
              </div>

              {/* Auction Card 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Grail Sale"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                    836
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">SLABMEHARDER GRAIL SALE!!!!</h3>
                  <p className="text-sm text-gray-600">slab_me_harder</p>
                </div>
              </div>
            </div>

            {/* Next Up Section */}
            <div className="mt-8">
              {/* Section Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Next up</h2>
                <a href="#" className="text-blue-600 hover:underline">See all</a>
              </div>

              {/* Subtitle */}
              <p className="text-gray-600 mb-6">Set an alert and never miss a Live event.</p>

              {/* Next Up Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                {/* Card 1 - Crazy Streetwear */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Crazy Streetwear Blowouts"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 11am
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">🚨CRAZY STREETWEAR BLOWOUTS🚨</h3>
                    <p className="text-sm text-gray-600">topstylesnyc</p>
                  </div>
                </div>

                {/* Card 2 - Singles with Aaron */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Singles with Aaron"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 11am
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Value Auctions W/ AARON! Slabs, packs and more!</h3>
                    <p className="text-sm text-gray-600">bmt_university</p>
                  </div>
                </div>

                {/* Card 3 - Topps Japan Break */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Topps Japan Break"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 11:59am
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">07-11-2025 2024 Topps Japan Break</h3>
                    <p className="text-sm text-gray-600">bakersfield_hobby</p>
                  </div>
                </div>

                {/* Card 4 - Afshari Comics */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Afshari Comics Wake Up Show"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 4pm
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">AFSHARI COMICS: The Wake Up Show with Joey</h3>
                    <p className="text-sm text-gray-600">comicbookshoppingnetwork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}