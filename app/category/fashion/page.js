export default function FashionPage() {
    return (
        <div className="min-h-screen bg-white">
            

            {/* Main Content */}
            <div className="px-4 py-6 mx-auto max-w-7xl">
                {/* Breadcrumbs */}
                <div className="flex items-center mb-4 text-sm text-gray-600">
                    <a href="#" className="text-blue-600 hover:underline">eBay</a>
                    <span className="mx-2">›</span>
                    <a href="#" className="text-blue-600 hover:underline">Fashion</a>
                </div>
                <div className="px-4 py-6 mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                        {/* Categories Sidebar */}
                        <div className="flex-shrink-0 w-full lg:w-64">
                            <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">Fashion</h1>

                        </div>


                        {/* Categories Grid */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 gap-4 mb-6  sm:grid-cols-3">
                                {/* Women's Clothing */}
                                <div className="flex flex-col p-3 bg-gray-100 rounded-lg">
                                    <span className="mb-2 text-xs font-semibold">
                                        Womens<br />Clothing
                                    </span>
                                    <img
                                        alt="Blue denim jacket front view on white background"
                                        className="object-contain w-full h-auto rounded-md"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/c44d9efe-0c62-43b9-676d-d39eda93e7e5.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Women's Bags & Handbags */}
                                <div className="flex flex-col p-3 bg-gray-100 rounded-lg">
                                    <span className="mb-2 text-xs font-semibold">
                                        Womens Bags<br />& Handbags
                                    </span>
                                    <img
                                        alt="Green quilted handbag with gold chain on white background"
                                        className="object-contain w-full h-auto rounded-md"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/e8bc15a4-d123-490b-d192-fc92596f700d.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Women's Shoes */}
                                <div className="flex flex-col p-3 bg-gray-100 rounded-lg">
                                    <span className="mb-2 text-xs font-semibold">
                                        Womens<br />Shoes
                                    </span>
                                    <img
                                        alt="Black boots side view on white background"
                                        className="object-contain w-full h-auto rounded-md"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/0457cdd2-badb-46cd-5636-05bd8ac5c55f.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Men's Clothing */}
                                <div className="flex flex-col p-3 bg-gray-100 rounded-lg">
                                    <span className="mb-2 text-xs font-semibold">
                                        Mens<br />Clothing
                                    </span>
                                    <img
                                        alt="Orange polo shirt front view on white background"
                                        className="object-contain w-full h-auto rounded-md"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/b94ce756-1184-4d74-43f6-62a11d55aa4f.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Men's Accessories */}
                                <div className="flex flex-col p-3 bg-gray-100 rounded-lg">
                                    <span className="mb-2 text-xs font-semibold">
                                        Mens<br />Accessories
                                    </span>
                                    <img
                                        alt="Black leather belt with silver buckle on white background"
                                        className="object-contain w-full h-auto rounded-md"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/06855711-3cc1-4886-ffe2-0f6d6cdb36d5.jpg"
                                        width="300"
                                    />
                                </div>

                                {/* Men's Shoes */}
                                <div className="flex flex-col p-3 bg-gray-100 rounded-lg">
                                    <span className="mb-2 text-xs font-semibold">
                                        Mens<br />Shoes
                                    </span>
                                    <img
                                        alt="Yellow and white sneakers side view on white background"
                                        className="object-contain w-full h-auto rounded-md"
                                        height="180"
                                        src="https://storage.googleapis.com/a1aa/image/81fa3575-ca43-465c-cd93-b42e12feecb4.jpg"
                                        width="300"
                                    />
                                </div>
                            </div>

                            {/* Filters and Results */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <div className="flex space-x-1">
                                    <button className="px-3 py-1 text-xs font-semibold text-white bg-black rounded-full">
                                        All Listings
                                    </button>
                                    <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                        Auction
                                    </button>
                                    <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                        Buy It Now
                                    </button>
                                    <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                        Best Offer
                                    </button>
                                </div>
                                <div className="text-xs text-gray-600">
                                    3,821,148 results
                                </div>
                                <div className="flex items-center space-x-2">
                                    <select aria-label="Sort" className="px-3 py-1 text-xs border border-gray-300 rounded-full">
                                        <option>Sort: Best Match</option>
                                    </select>
                                    <button aria-label="View options" className="p-1 text-gray-600 border border-gray-300 rounded-full">
                                        <i className="text-xs fas fa-th-list"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Additional Filters */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <button className="flex items-center px-3 py-1 space-x-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    <span>Filter</span>
                                    <i className="fas fa-filter text-[10px]"></i>
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Size
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Color
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Brand
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Material
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Department
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Condition
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Price
                                </button>
                                <button className="px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full">
                                    Delivery Options
                                </button>
                            </div>

                            {/* Product Listings */}
                            <div className="flex flex-col space-y-4">
                                {/* Product 1 */}
                                <div className="flex space-x-3">
                                    <img
                                        alt="Black quilted pattern book cover with white text 'COCO CHANEL' and author info"
                                        className="object-contain w-20 h-20 rounded"
                                        height="80"
                                        src="https://storage.googleapis.com/a1aa/image/31991aa2-7595-47e3-530c-ffb465db1224.jpg"
                                        width="80"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <h2 className="font-semibold text-xs max-w-[85%] leading-tight">
                                                Coco Chanel: The Style Principles - Hardcover, by Rogers Hannah - Very Good
                                            </h2>
                                            <button aria-label="Add to favorites" className="text-gray-400 hover:text-red-600">
                                                <i className="far fa-heart"></i>
                                            </button>
                                        </div>
                                        <p className="text-[9px] text-gray-600 mt-0.5">Pre-Owned</p>
                                        <p className="mt-1 text-sm font-semibold">$8.84</p>
                                        <p className="text-[9px] text-blue-600 mt-0.5">Free shipping</p>
                                        <p className="text-[9px] text-red-600 mt-0.5">8 watching</p>
                                        <p className="text-[7px] text-gray-400 mt-1">Sponsored</p>
                                    </div>
                                </div>

                                {/* Product 2 */}
                                <div className="flex space-x-3">
                                    <img
                                        alt="Four pairs of men's denim shorts in blue and black arranged in two rows"
                                        className="object-contain w-20 h-20 rounded"
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
                                <div className="flex items-center justify-center mt-8 mb-8">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-gray-400 hover:text-gray-600">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className="w-8 h-8 font-medium text-white bg-black rounded">1</button>
                                        <button className="w-8 h-8 font-medium text-gray-600 rounded hover:text-gray-900">2</button>
                                        <button className="w-8 h-8 font-medium text-gray-600 rounded hover:text-gray-900">3</button>
                                        <button className="w-8 h-8 font-medium text-gray-600 rounded hover:text-gray-900">4</button>
                                        <button className="w-8 h-8 font-medium text-gray-600 rounded hover:text-gray-900">5</button>
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