'use client';

import Head from 'next/head';

export default function HomeAndGardenPage() {
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

                {/* Page title */}
                <h1 className="text-3xl font-extrabold px-4 mb-6 select-none">
                    Home & Garden
                </h1>

                <main className="px-4 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left sidebar category list */}
                        <aside className="flex-shrink-0 w-full lg:w-48">
                            <h2 className="font-bold text-sm mb-3 select-none">
                                Shop by category
                            </h2>
                            <ul className="text-xs space-y-2 text-gray-900">
                                <li>
                                    <a className="hover:underline" href="#">
                                        Bath
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Bedding
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Candles & Home Fragrance
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Food & Beverages
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Fresh Cut Flowers
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Furniture
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Greeting Cards & Party Supply
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Holiday & Seasonal Décor
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Home Décor
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Home Improvement
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:underline" href="#">
                                        Household Supplies & Cleaning
                                    </a>
                                </li>
                            </ul>
                        </aside>

                        {/* Main content area */}
                        <div className="flex-1">
                            {/* Main content image banner */}
                            <div className="relative rounded-xl overflow-hidden mb-6 style={{ height: '100px' }}">
                                <img
                                    alt="Outdoor pool with clear blue water and BBQ grill with open lid on patio surrounded by green trees and plants in garden"
                                    className="w-[400px] max-w-full h-full object-cover rounded-xl"
                                    height="50"
                                    loading="lazy"
                                    src="https://storage.googleapis.com/a1aa/image/fbff1ca1-5312-4d6f-94b9-b40f81ff286b.jpg"
                                    width="500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 rounded-xl p-6 flex flex-col justify-center max-w-[600px]">
                                    <h3 className="text-white font-bold text-xl mb-2 select-none">
                                        Just what your garden needs
                                    </h3>
                                    <p className="text-white text-sm mb-6 select-none">
                                        Discover BBQ, pools and garden furniture on eBay.
                                    </p>
                                    <a
                                        className="inline-block border border-white rounded-full text-white text-sm px-5 py-2 hover:bg-white hover:text-black transition select-none"
                                        href="#"
                                    >
                                        Shop now→
                                    </a>
                                </div>
                            </div>

                            {/* Best Selling Section */}
                            <div className="max-w-full py-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="font-extrabold text-lg leading-6">Best selling</h2>
                                    <a className="text-xs underline" href="#">
                                        See All
                                    </a>
                                </div>
                                <div className="flex items-center mb-4">
                                    <button
                                        aria-label="More options"
                                        className="flex items-center text-sm font-bold border border-gray-300 rounded px-2 py-1 mr-4"
                                    >
                                        More
                                        <i className="fas fa-chevron-down ml-1 text-xs"></i>
                                    </button>
                                    <div className="border-t border-dashed border-gray-300 flex-grow"></div>
                                </div>
                                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    <ul className="flex space-x-4 min-w-[900px]">
                                        {/* Product 1 */}
                                        <li className="w-40 flex-shrink-0">
                                            <img
                                                alt="Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)"
                                                className="rounded-lg mb-2"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/2280453d-df81-4475-8307-af57b629982a.jpg"
                                                width="160"
                                            />
                                            <p className="text-xs leading-4 mb-1">
                                                Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star-half-alt text-black text-xs"></i>
                                                <span className="text-xs text-gray-600 ml-1">(64)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $63.45 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$40.00 Used</p>
                                        </li>

                                        {/* Product 2 */}
                                        <li className="w-40 flex-shrink-0">
                                            <img
                                                alt="Lutron Diva Smart Dimmer - White"
                                                className="rounded-lg mb-2"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/068fc194-6789-4e26-ea9a-0d08bdc906a3.jpg"
                                                width="160"
                                            />
                                            <p className="text-xs leading-4 mb-1">
                                                Lutron Diva Smart Dimmer - White
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <span className="text-xs text-gray-600 ml-1">(25)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $43.99 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$34.99 Used</p>
                                        </li>
                                        {/* Product 1 */}
                                        <li className="w-40 flex-shrink-0">
                                            <img
                                                alt="Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)"
                                                className="rounded-lg mb-2"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/2280453d-df81-4475-8307-af57b629982a.jpg"
                                                width="160"
                                            />
                                            <p className="text-xs leading-4 mb-1">
                                                Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star-half-alt text-black text-xs"></i>
                                                <span className="text-xs text-gray-600 ml-1">(64)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $63.45 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$40.00 Used</p>
                                        </li>

                                        {/* Product 3 */}
                                        <li className="w-40 flex-shrink-0">
                                            <img
                                                alt="Milwaukee M18 18V Cordless Tire Inflator - 2848-20"
                                                className="rounded-lg mb-2"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/de4a22a0-21f0-48bb-77fe-5e68ba8e7e18.jpg"
                                                width="160"
                                            />
                                            <p className="text-xs leading-4 mb-1">
                                                Milwaukee M18 18V Cordless Tire Inflator - 2848-20
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star-half-alt text-black text-xs"></i>
                                                <span className="text-xs text-gray-600 ml-1">(215)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $147.49 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$139.95 Used</p>
                                        </li>

                                        {/* Product 4 */}
                                        <li className="w-40 flex-shrink-0">
                                            <img
                                                alt="Milwaukee M18 High Output 18V Lithium Ion 12.0Ah Battery (48-11-1812)"
                                                className="rounded-lg mb-2"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/d67ae094-14df-4ed9-3387-ddd74d940abb.jpg"
                                                width="160"
                                            />
                                            <p className="text-xs leading-4 mb-1">
                                                Milwaukee M18 High Output 18V Lithium Ion 12.0Ah Battery (48-11-1812)
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <span className="text-xs text-gray-600 ml-1">(736)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $130.00 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$29.99 Used</p>
                                        </li>

                                        {/* Product 5 */}
                                        <li className="w-40 flex-shrink-0">
                                            <img
                                                alt="GE XWFE Refrigerator Water Filter - White"
                                                className="rounded-lg mb-2"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/f300aa85-bc29-4521-0f41-590b398d43b3.jpg"
                                                width="160"
                                            />
                                            <p className="text-xs leading-4 mb-1">
                                                GE XWFE Refrigerator Water Filter - White
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star text-black text-xs"></i>
                                                <i className="fas fa-star-half-alt text-black text-xs"></i>
                                                <span className="text-xs text-gray-600 ml-1">(306)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $29.99 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$24.88 Used</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Construction Season Essentials Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                {/* Promo Card */}
                                <div className="bg-[#3b7de3] text-white p-6 flex flex-col justify-center rounded-md">
                                    <h2 className="font-extrabold text-lg leading-tight mb-2">
                                        Construction season essentials
                                    </h2>
                                    <p className="text-sm mb-6">
                                        Equipment, parts, attachments, and more.
                                    </p>
                                    <button className="w-max px-4 py-2 border border-white rounded-full text-white text-sm font-normal hover:bg-white hover:text-[#3b7de3] transition">
                                        Shop now
                                        <i className="fas fa-arrow-right ml-1"></i>
                                    </button>
                                </div>

                                {/* Product Cards */}
                                <a className="group rounded-md overflow-hidden" href="/item">
                                    <img
                                        alt="3 Point Hitch Receiver 21x27 Tractor Receiver Hitch Drawbar 2 inch for Category 1"
                                        className="w-full object-cover"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/27988172-43b2-4c25-9899-e59d1576e062.jpg"
                                        width="260"
                                    />
                                    <p className="text-xs mt-2 leading-tight">
                                        3 Point Hitch Receiver 21 x27  Tractor Receiver Hitch Drawbar 2 For Category 1
                                    </p>
                                    <p className="font-bold mt-1 text-sm">$50.50</p>
                                </a>

                                <a className="group rounded-md overflow-hidden" href="#">
                                    <img
                                        alt="John Deere LG265 Home Maintenance Kit with oil bottles, spark plugs, and filters on white background"
                                        className="w-full object-cover"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/d4d8a327-0f43-495a-1b9a-37780ae6fa55.jpg"
                                        width="260"
                                    />
                                    <p className="text-xs mt-2 leading-tight">
                                        John Deere LG265 Home Maintenance Kit
                                    </p>
                                    <p className="font-bold mt-1 text-sm">$60.30</p>
                                </a>

                                <a className="group rounded-md overflow-hidden" href="#">
                                    <img
                                        alt="Set of 2 yellow 18 inch seats for John Deere Gator 4X2 4X4 4X6 Trail Worksite Turf VG11696"
                                        className="w-full object-cover"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/221a9997-1009-400e-6955-c438407daa5a.jpg"
                                        width="260"
                                    />
                                    <p className="text-xs mt-2 leading-tight">
                                        Set of Seats for John Deere Gator 4X2 4X4 4X6 Trail Worksite Turf VG11696
                                    </p>
                                    <p className="font-bold mt-1 text-sm">$249.99</p>
                                </a>

                                <a className="group rounded-md overflow-hidden bg-[#f3f4f6] p-2" href="#">
                                    <img
                                        alt="Green tractor roof canopy with inset images showing canopy from different angles"
                                        className="w-full object-cover rounded-md"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/e64277ac-d819-4476-b297-bbe31e1090cc.jpg"
                                        width="260"
                                    />
                                </a>

                                <a className="group rounded-md overflow-hidden" href="#">
                                    <img
                                        alt="Black grill guard for John Deere X300 X500 OEM BM23057 with before and after images of tractor"
                                        className="w-full object-cover"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/a9fca950-30f5-4944-d92f-eae62d943704.jpg"
                                        width="260"
                                    />
                                </a>

                                <a className="group rounded-md overflow-hidden" href="#">
                                    <img
                                        alt="Black tractor seat mounting bracket with screws and hardware on white background"
                                        className="w-full object-cover"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/191128c0-9c9e-4dec-23d4-0d21e23a54b0.jpg"
                                        width="260"
                                    />
                                </a>

                                <a className="group rounded-md overflow-hidden bg-[#f3f4f6] p-2" href="#">
                                    <img
                                        alt="Tractor canopy with metal frame and inset image showing canopy top view, outdoor background"
                                        className="w-full object-cover rounded-md"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/3c9cf9d8-c94d-4c0f-b0dd-44aeadf16ac4.jpg"
                                        width="260"
                                    />
                                </a>
                            </div>

                            {/* Top Rated Products Section */}
                            <div className="max-w-[1200px] mx-auto py-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="font-bold text-lg leading-6">Top rated</h2>
                                    <a className="text-sm text-black hover:underline" href="#">
                                        See All
                                    </a>
                                </div>
                                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    <div className="flex space-x-4 min-w-[900px]">
                                        {/* Product 1 */}
                                        <div className="flex-shrink-0 w-44">
                                            <img
                                                alt="SUPCO RIM900 Replacement Ice Maker machine white and black"
                                                className="w-full h-36 object-contain rounded"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/f03dbca6-4084-4bef-34df-a8353bb918f0.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                SUPCO RIM900 Replacement Ice Maker
                                            </p>
                                            <div className="star-rating flex items-center mt-1">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <span className="text-[10px] ml-1">(616)</span>
                                            </div>
                                            <div className="h-[2px] w-full bg-orange-500 mt-1 mb-1"></div>
                                            <p className="text-[10px] text-gray-600">
                                                97% agree - Would recommend
                                            </p>
                                            <p className="mt-1 font-semibold text-sm">
                                                $18.98 <span className="font-normal">New</span>
                                            </p>
                                        </div>

                                        {/* Product 2 */}
                                        <div className="flex-shrink-0 w-44 ">
                                            <img
                                                alt="DEWALT DCW600B 20V MAX XR Cordless Compact Router - Tool Only yellow and black"
                                                className="w-full h-36 object-contain rounded"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/6d212a28-83c4-417f-05f3-d44b076046ef.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                DEWALT DCW600B 20V MAX XR Cordless Compact Router - Tool Only
                                            </p>
                                            <div className="star-rating flex items-center mt-1">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="text-[10px] ml-1">(345)</span>
                                            </div>
                                            <div className="h-[2px] w-full bg-orange-500 mt-1 mb-1"></div>
                                            <p className="text-[10px] text-gray-600">
                                                98% agree - Would recommend
                                            </p>
                                            <p className="mt-1 font-semibold text-sm">
                                                $116.00 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-500 line-through">
                                                $49.00 Used
                                            </p>
                                        </div>

                                        {/* Product 3 */}
                                        <div className="flex-shrink-0 w-44 ">
                                            <img
                                                alt="Milwaukee M18 18V Cordless Tire Inflator - 2848-20 red and black"
                                                className="w-full h-36 object-contain rounded"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/8035580d-8c99-4e8c-ca79-caa92a08df27.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                Milwaukee M18 18V Cordless Tire Inflator - 2848-20
                                            </p>
                                            <div className="star-rating flex items-center mt-1">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <span className="text-[10px] ml-1">(219)</span>
                                            </div>
                                            <div className="h-[2px] w-full bg-orange-500 mt-1 mb-1"></div>
                                            <p className="text-[10px] text-gray-600">
                                                99% agree - Powerful
                                            </p>
                                            <p className="mt-1 font-semibold text-sm">
                                                $147.49 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-500 line-through">
                                                $139.95 Used
                                            </p>
                                        </div>

                                        {/* Product 4 */}
                                        <div className="flex-shrink-0 w-44">
                                            <img
                                                alt="Tyler Glamorous Wash Laundry Detergent, Diva - 1 Gallon white bottle with gold label"
                                                className="w-full h-36 object-contain rounded"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/fd180392-0d84-4d83-d42c-a02fb3b0b1bf.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                Tyler Glamorous Wash Laundry Detergent, Diva - 1 Gallon
                                            </p>
                                            <div className="star-rating flex items-center mt-1">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="text-[10px] ml-1">(196)</span>
                                            </div>
                                            <div className="h-[2px] w-full bg-orange-500 mt-1 mb-1"></div>
                                            <p className="text-[10px] text-gray-600">
                                                98% agree - Would recommend
                                            </p>
                                            <p className="mt-1 font-semibold text-sm">
                                                $90.00 <span className="font-normal">New</span>
                                            </p>
                                        </div>

                                        {/* Product 5 */}
                                        <div className="flex-shrink-0 w-44">
                                            <img
                                                alt="Poo-Pourri Before-You-Go 472ml Toilet Spray - Lavender Vanilla Scent (LV-016-BR) white bottle with purple floral design"
                                                className="w-full h-36 object-contain rounded"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/8f88bd37-5314-45f8-df31-266117b2d77b.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                Poo-Pourri Before-You-Go 472ml Toilet Spray - Lavender Vanilla Scent (LV-016-BR)
                                            </p>
                                            <div className="star-rating flex items-center mt-1">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="text-[10px] ml-1">(177)</span>
                                            </div>
                                            <div className="h-[2px] w-full bg-orange-500 mt-1 mb-1"></div>
                                            <p className="text-[10px] text-gray-600">
                                                100% agree - Would recommend
                                            </p>
                                            <p className="mt-1 font-semibold text-sm">
                                                $22.00 <span className="font-normal">New</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}