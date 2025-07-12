export default function EbayElectronicsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200">
                {/* Top Navigation */}
                <div className="bg-gray-50 py-2">
                    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">Hi! <a href="#" className="text-blue-600 hover:underline">Sign in</a> or <a href="#" className="text-blue-600 hover:underline">register</a></span>
                            <a href="#" className="text-gray-700 hover:text-blue-600 hidden sm:inline">Daily Deals</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 hidden sm:inline">Brand Outlet</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 hidden sm:inline">Gift Cards</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 hidden sm:inline">Help & Contact</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-700 hover:text-blue-600 hidden sm:inline">Ship to</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600">Sell</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
                                <span className="hidden sm:inline">Watchlist</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
                                <span className="hidden sm:inline">My eBay</span>
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
                            <div className="text-3xl sm:text-4xl font-bold mr-2 sm:mr-4">
                                <span className="text-red-500">e</span>
                                <span className="text-blue-500">B</span>
                                <span className="text-yellow-500">a</span>
                                <span className="text-green-500">y</span>
                            </div>
                            <button className="text-gray-700 hover:text-blue-600 flex items-center text-sm">
                                <span className="hidden sm:inline">Shop by category</span>
                                <span className="sm:hidden">Shop</span>
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 max-w-4xl mx-2 sm:mx-8">
                            <div className="flex">
                                <div className="relative hidden sm:block">
                                    <select className="border border-gray-300 rounded-l-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option>All Categories</option>
                                    </select>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search for anything"
                                    className="flex-1 border border-gray-300 sm:border-t sm:border-b sm:border-l-0 sm:rounded-l-none rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-600 text-white px-4 sm:px-8 py-2 rounded-r-lg hover:bg-blue-700 font-medium">
                                    Search
                                </button>
                            </div>
                            <div className="mt-1 hidden sm:block">
                                <a href="#" className="text-xs text-blue-600 hover:underline">Advanced</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Categories Sidebar */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Electronics</h1>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Shop by category</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Cameras & Photo</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Cell Phones & Accessories</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Computers/Tablets & Networking</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Home Surveillance</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Major Appliances</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Portable Audio & Headphones</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Surveillance & Smart Home Electronics</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">TV, Video & Home Audio</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Vehicle Electronics & GPS</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Video Games & Consoles</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-blue-600 block">Virtual Reality</a></li>
                        </ul>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Hero Banner */}
                        <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg overflow-hidden mb-8">
                            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                            <div className="relative px-6 py-8 sm:px-12 sm:py-16">
                                <div className="max-w-md">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Reconditioned tech</h2>
                                    <p className="text-gray-700 mb-6">See the savings on refurb devices</p>
                                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 font-medium transition-colors">
                                        View the deal
                                    </button>
                                </div>
                            </div>
                            <div className="absolute right-0 top-0 h-full w-1/2 hidden sm:block">
                                <img
                                    src="/api/placeholder/400/300"
                                    alt="People using laptop"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Product Categories Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {/* Smartphones & Smartwatches */}
                            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Smartphones</h3>
                                <p className="text-xl font-bold text-gray-900">& Smartwatches</p>
                            </div>

                            {/* Computers & Accessories */}
                            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Computers</h3>
                                <p className="text-xl font-bold text-gray-900">& Accessories</p>
                            </div>

                            {/* Tablets & eReaders */}
                            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div className="mb-4">
                                    <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Tablets</h3>
                                <p className="text-xl font-bold text-gray-900">& eReaders</p>
                                <div className="mt-2">
                                    <span className="text-2xl">?</span>
                                </div>
                            </div>
                        </div>

                        {/* Listings Section */}
                        <div className="bg-white">
                            {/* Filter Bar */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 pb-4 border-b border-gray-200">
                                <div className="flex items-center gap-2 sm:gap-4">
                                    <button className="bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium">
                                        All Listings
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-900 px-3 sm:px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                                        Auction
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-900 px-3 sm:px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                                        Buy It Now
                                    </button>
                                    <button className="text-gray-600 hover:text-gray-900 px-3 sm:px-4 py-2 rounded-full text-sm font-medium border border-gray-300">
                                        Best Offer
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-4 ml-auto">
                                    <span className="text-sm text-gray-600">1,430,065 results</span>
                                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                                        <option>Sort: Best Match</option>
                                    </select>
                                </div>
                            </div>

                            {/* Filter Options */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
                                <button className="flex items-center gap-2 text-sm border border-gray-300 rounded px-3 py-2 hover:bg-gray-50">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                    </svg>
                                    Filter
                                </button>
                                <button className="flex items-center gap-2 text-sm border border-gray-300 rounded px-3 py-2 hover:bg-gray-50">
                                    Condition
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="flex items-center gap-2 text-sm border border-gray-300 rounded px-3 py-2 hover:bg-gray-50">
                                    Price
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="flex items-center gap-2 text-sm border border-gray-300 rounded px-3 py-2 hover:bg-gray-50">
                                    Delivery Options
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Product Listings */}
                            <div className="space-y-4">
                                {/* Nintendo 64 Console Listing */}
                                <div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-full sm:w-48">
                                        <div className="relative">
                                            <img
                                                src="/api/placeholder/200/150"
                                                alt="Nintendo 64 Console"
                                                className="w-full h-32 sm:h-36 object-cover rounded-lg"
                                            />
                                            <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                                1 Day Shipping
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                            Nintendo 64 Black Console + Controller + Accessory Region Free Used Tested
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <span>Pre-Owned</span>
                                            <span>•</span>
                                            <span>Nintendo</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                            <span className="text-xl font-bold text-gray-900">$55.49 to $137.49</span>
                                            <span className="text-sm text-gray-600">Free shipping</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="text-red-500">237 sold</span>
                                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sponsored</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Sony PlayStation PSP Listing */}
                                <div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-full sm:w-48">
                                        <img
                                            src="/api/placeholder/200/150"
                                            alt="Sony PlayStation PSP"
                                            className="w-full h-32 sm:h-36 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                            Sony PlayStation PSP 1000/2000/3000 Console with Charger/New Battery Region Free
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <span>Good - Refurbished</span>
                                            <span>•</span>
                                            <span>Sony</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                            <span className="text-xl font-bold text-gray-900">$109.99 to $209.99</span>
                                            <span className="text-sm text-gray-600">Free shipping</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="text-red-500">135 sold</span>
                                            <div className="flex items-center gap-1">
                                                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-blue-600 font-medium">eBay Refurbished</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Listings */}
                                <div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-full sm:w-48">
                                        <img
                                            src="/api/placeholder/200/150"
                                            alt="Gaming Headset"
                                            className="w-full h-32 sm:h-36 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                            Gaming Headset with Microphone RGB LED Light for PC PS4 Xbox One Switch
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <span>Brand New</span>
                                            <span>•</span>
                                            <span>Generic</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                            <span className="text-xl font-bold text-gray-900">$24.99</span>
                                            <span className="text-sm text-gray-600">Free shipping</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="text-red-500">1.2k sold</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500">★★★★☆</span>
                                                <span>(4.2)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-full sm:w-48">
                                        <img
                                            src="/api/placeholder/200/150"
                                            alt="Wireless Bluetooth Earbuds"
                                            className="w-full h-32 sm:h-36 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                            Wireless Bluetooth Earbuds Noise Cancelling Headphones with Charging Case
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                            <span>Brand New</span>
                                            <span>•</span>
                                            <span>Apple</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                            <span className="text-xl font-bold text-gray-900">$89.99</span>
                                            <span className="text-sm text-gray-600 line-through">$179.99</span>
                                            <span className="text-sm text-gray-600">Free shipping</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className="text-red-500">3.4k sold</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500">★★★★★</span>
                                                <span>(4.8)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Load More Button */}
                            <div className="text-center mt-8">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors">
                                    Load More Results
                                </button>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}