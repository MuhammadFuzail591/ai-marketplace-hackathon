export default function FashionPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header - Same as EbayLivePage */}
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
                {/* Breadcrumbs */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <a href="#" className="text-blue-600 hover:underline">eBay</a>
                    <span className="mx-2">›</span>
                    <a href="#" className="text-blue-600 hover:underline">Fashion</a>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        {/* Categories Sidebar */}
                        <div className="w-full lg:w-64 flex-shrink-0">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Fashion</h1>

                        </div>


                        {/* Categories Grid */}
                        <div className="flex-1">
                            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                {/* Women's Clothing */}
                                <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
                                    <span className="font-semibold text-xs mb-2">
                                        Womens<br />Clothing
                                    </span>
                                    <img
                                        alt="Blue denim jacket front view on white background"
                                        className="w-full h-auto rounded-md object-contain"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/c44d9efe-0c62-43b9-676d-d39eda93e7e5.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Women's Bags & Handbags */}
                                <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
                                    <span className="font-semibold text-xs mb-2">
                                        Womens Bags<br />& Handbags
                                    </span>
                                    <img
                                        alt="Green quilted handbag with gold chain on white background"
                                        className="w-full h-auto rounded-md object-contain"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/e8bc15a4-d123-490b-d192-fc92596f700d.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Women's Shoes */}
                                <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
                                    <span className="font-semibold text-xs mb-2">
                                        Womens<br />Shoes
                                    </span>
                                    <img
                                        alt="Black boots side view on white background"
                                        className="w-full h-auto rounded-md object-contain"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/0457cdd2-badb-46cd-5636-05bd8ac5c55f.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Men's Clothing */}
                                <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
                                    <span className="font-semibold text-xs mb-2">
                                        Mens<br />Clothing
                                    </span>
                                    <img
                                        alt="Orange polo shirt front view on white background"
                                        className="w-full h-auto rounded-md object-contain"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/b94ce756-1184-4d74-43f6-62a11d55aa4f.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Men's Accessories */}
                                <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
                                    <span className="font-semibold text-xs mb-2">
                                        Mens<br />Accessories
                                    </span>
                                    <img
                                        alt="Black leather belt with silver buckle on white background"
                                        className="w-full h-auto rounded-md object-contain"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/06855711-3cc1-4886-ffe2-0f6d6cdb36d5.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Men's Shoes */}
                                <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
                                    <span className="font-semibold text-xs mb-2">
                                        Mens<br />Shoes
                                    </span>
                                    <img
                                        alt="Yellow and white sneakers side view on white background"
                                        className="w-full h-auto rounded-md object-contain"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/81fa3575-ca43-465c-cd93-b42e12feecb4.jpg"
                                        width="300"
                                    />
                                </div>
                            </div>

                            {/* Filters and Results */}
                            <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                                <div className="flex space-x-1">
                                    <button className="bg-black text-white text-xs rounded-full px-3 py-1 font-semibold">
                                        All Listings
                                    </button>
                                    <button className="text-xs rounded-full px-3 py-1 border border-gray-300 font-semibold">
                                        Auction
                                    </button>
                                    <button className="text-xs rounded-full px-3 py-1 border border-gray-300 font-semibold">
                                        Buy It Now
                                    </button>
                                    <button className="text-xs rounded-full px-3 py-1 border border-gray-300 font-semibold">
                                        Best Offer
                                    </button>
                                </div>
                                <div className="text-xs text-gray-600">
                                    3,821,148 results
                                </div>
                                <div className="flex items-center space-x-2">
                                    <select aria-label="Sort" className="text-xs border border-gray-300 rounded-full px-3 py-1">
                                        <option>Sort: Best Match</option>
                                    </select>
                                    <button aria-label="View options" className="border border-gray-300 rounded-full p-1 text-gray-600">
                                        <i className="fas fa-th-list text-xs"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Additional Filters */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold flex items-center space-x-1">
                                    <span>Filter</span>
                                    <i className="fas fa-filter text-[10px]"></i>
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Size
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Color
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Brand
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Material
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Department
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Condition
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Price
                                </button>
                                <button className="text-xs border border-gray-300 rounded-full px-3 py-1 font-semibold">
                                    Delivery Options
                                </button>
                            </div>

                            {/* Product Listings */}
                            <div className="flex flex-col space-y-4">
                                {/* Product 1 */}
                                <div className="flex space-x-3">
                                    <img
                                        alt="Black quilted pattern book cover with white text 'COCO CHANEL' and author info"
                                        className="w-20 h-20 object-contain rounded"
                                        height="80"
                                        src="https://storage.googleapis.com/a1aa/image/31991aa2-7595-47e3-530c-ffb465db1224.jpg"
                                        width="80"
                                    />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h2 className="font-semibold text-xs max-w-[85%] leading-tight">
                                                Coco Chanel: The Style Principles - Hardcover, by Rogers Hannah - Very Good
                                            </h2>
                                            <button aria-label="Add to favorites" className="text-gray-400 hover:text-red-600">
                                                <i className="far fa-heart"></i>
                                            </button>
                                        </div>
                                        <p className="text-[9px] text-gray-600 mt-0.5">Pre-Owned</p>
                                        <p className="font-semibold text-sm mt-1">$8.84</p>
                                        <p className="text-[9px] text-blue-600 mt-0.5">Free shipping</p>
                                        <p className="text-[9px] text-red-600 mt-0.5">8 watching</p>
                                        <p className="text-[7px] text-gray-400 mt-1">Sponsored</p>
                                    </div>
                                </div>

                                {/* Product 2 */}
                                <div className="flex space-x-3">
                                    <img
                                        alt="Four pairs of men's denim shorts in blue and black arranged in two rows"
                                        className="w-20 h-20 object-contain rounded"
                                        height="80"
                                        src="https://storage.googleapis.com/a1aa/image/ffb167e6-8757-4f64-8089-4ac9dc822a5a.jpg"
                                        width="80"
                                    />
                                    <div className="flex-1">
                                        <p className="text-[9px] text-gray-600 mb-0.5">
                                            Fashion Purple Brand Mens Personality Jeans Casual Chain Denim Shorts
                                        </p>
                                        <p className="text-[7px] text-gray-600 mb-0.5">Brand New</p>
                                        <p className="font-semibold text-sm mb-0.5">$63.89</p>
                                        <p className="text-[9px] text-blue-600">Free shipping</p>
                                        <p className="text-[9px] text-red-600 mt-0.5">3 watching</p>
                                    </div>
                                </div>

                                {/* Pagination */}
                                <div className="flex justify-center items-center mt-8 mb-8">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-gray-400 hover:text-gray-600">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="w-8 h-8 bg-black text-white rounded font-medium">1</button>
                                        <button className="w-8 h-8 text-gray-600 hover:text-gray-900 rounded font-medium">2</button>
                                        <button className="w-8 h-8 text-gray-600 hover:text-gray-900 rounded font-medium">3</button>
                                        <button className="w-8 h-8 text-gray-600 hover:text-gray-900 rounded font-medium">4</button>
                                        <button className="w-8 h-8 text-gray-600 hover:text-gray-900 rounded font-medium">5</button>
                                        <button className="p-2 text-gray-600 hover:text-gray-900">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
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