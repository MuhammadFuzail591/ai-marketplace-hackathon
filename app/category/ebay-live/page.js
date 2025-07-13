export default function EbayLivePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <div className="px-4 py-6 mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-5xl font-bold text-gray-900">eBay Live</h1>
          <a href="#" className="text-blue-600 hover:underline">Pause automation</a>
        </div>

        <div className="flex gap-8">
          {/* Categories Sidebar */}
          <div className="flex-shrink-0 w-64">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Categories</h2>
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
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Live now</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {/* Auction Card 1 */}
              <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Luxury Bags Auction"
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute flex items-center px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-full top-2 right-2">
                    <span className="w-2 h-2 mr-1 bg-white rounded-full"></span>
                    3503
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-medium text-gray-900">99 AUCTIONS CHANEL LV & PRISTINE LUXURY FRIDAY BAG ...</h3>
                  <p className="text-sm text-gray-600">reservedluxury</p>
                </div>
              </div>

              {/* Auction Card 2 */}
              <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Slab Auctions"
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute flex items-center px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-full top-2 right-2">
                    <span className="w-2 h-2 mr-1 bg-white rounded-full"></span>
                    2256
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-medium text-gray-900">Slab Auctions All Night w/ Reef! PSA & CGC!</h3>
                  <p className="text-sm text-gray-600">theslabvault</p>
                </div>
              </div>

              {/* Auction Card 3 */}
              <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Coin Auctions"
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute flex items-center px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-full top-2 right-2">
                    <span className="w-2 h-2 mr-1 bg-white rounded-full"></span>
                    873
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-medium text-gray-900">$1 AND GO COIN AUCTIONS W/NVCOIN 7/11/25</h3>
                  <p className="text-sm text-gray-600">nvcoinq</p>
                </div>
              </div>

              {/* Auction Card 4 */}
              <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <div className="relative">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Grail Sale"
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute flex items-center px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-full top-2 right-2">
                    <span className="w-2 h-2 mr-1 bg-white rounded-full"></span>
                    836
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-medium text-gray-900">SLABMEHARDER GRAIL SALE!!!!</h3>
                  <p className="text-sm text-gray-600">slab_me_harder</p>
                </div>
              </div>
            </div>

            {/* Next Up Section */}
            <div className="mt-8">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Next up</h2>
                <a href="#" className="text-blue-600 hover:underline">See all</a>
              </div>

              {/* Subtitle */}
              <p className="mb-6 text-gray-600">Set an alert and never miss a Live event.</p>

              {/* Next Up Cards Grid */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {/* Card 1 - Crazy Streetwear */}
                <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Crazy Streetwear Blowouts"
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute flex items-center px-2 py-1 text-sm text-white bg-gray-800 rounded top-2 right-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 11am
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-medium text-gray-900">🚨CRAZY STREETWEAR BLOWOUTS🚨</h3>
                    <p className="text-sm text-gray-600">topstylesnyc</p>
                  </div>
                </div>

                {/* Card 2 - Singles with Aaron */}
                <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Singles with Aaron"
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute flex items-center px-2 py-1 text-sm text-white bg-gray-800 rounded top-2 right-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 11am
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-medium text-gray-900">Value Auctions W/ AARON! Slabs, packs and more!</h3>
                    <p className="text-sm text-gray-600">bmt_university</p>
                  </div>
                </div>

                {/* Card 3 - Topps Japan Break */}
                <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Topps Japan Break"
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute flex items-center px-2 py-1 text-sm text-white bg-gray-800 rounded top-2 right-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 11:59am
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-medium text-gray-900">07-11-2025 2024 Topps Japan Break</h3>
                    <p className="text-sm text-gray-600">bakersfield_hobby</p>
                  </div>
                </div>

                {/* Card 4 - Afshari Comics */}
                <div className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                  <div className="relative">
                    <img
                      src="/api/placeholder/300/200"
                      alt="Afshari Comics Wake Up Show"
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute flex items-center px-2 py-1 text-sm text-white bg-gray-800 rounded top-2 right-2">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      Jul 12, 4pm
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-medium text-gray-900">AFSHARI COMICS: The Wake Up Show with Joey</h3>
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