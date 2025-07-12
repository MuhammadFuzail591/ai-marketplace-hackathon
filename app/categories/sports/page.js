'use client';

import Head from 'next/head';

export default function SportingGoodsPage() {
    return (
        <div className="min-h-screen bg-white text-black font-sans">

            <Head>
                <title>eBay Sporting Goods</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>

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

            {/* Breadcrumb */}
            <div className="px-4 py-3 text-xs text-gray-700">
                <span>eBay &gt; Sporting Goods</span>
            </div>

            {/* Main content */}
            <main className="px-4 pb-10 max-w-7xl mx-auto">
                <h1 className="text-3xl font-extrabold mb-6">Sporting Goods</h1>

                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Left sidebar */}
                    <aside className="w-full sm:w-60 flex-shrink-0">
                        <h2 className="font-semibold text-sm mb-3">Shop by category</h2>
                        <nav className="flex flex-col space-y-2 text-sm text-gray-900">
                            <a className="hover:underline" href="#">
                                Boxing, Martial Arts & MMA
                            </a>
                            <a className="hover:underline" href="#">
                                Camping & Hiking
                            </a>
                            <a className="hover:underline" href="#">
                                Cycling
                            </a>
                            <a className="hover:underline" href="#">
                                Fishing
                            </a>
                            <a className="hover:underline" href="#">
                                Fitness, Running & Yoga
                            </a>
                            <a className="hover:underline" href="#">
                                Golf
                            </a>
                            <a className="hover:underline" href="#">
                                Hunting
                            </a>
                            <a className="hover:underline" href="#">
                                Indoor Games
                            </a>
                            <a className="hover:underline" href="#">
                                Other Sporting Goods
                            </a>
                            <a className="hover:underline" href="#">
                                Outdoor Sports
                            </a>
                            <a className="hover:underline" href="#">
                                Sports Mem, Cards & Fan Shop
                            </a>
                        </nav>
                    </aside>

                    {/* Right content */}
                    <section className="flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-lg">Best selling</h2>
                            <a className="text-xs underline" href="#">
                                See All
                            </a>
                        </div>

                        <div
                            aria-label="Best selling sporting goods"
                            className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide"
                            role="list"
                        >
                            {/* Item 1 */}
                            <article className="flex-shrink-0 w-40" role="listitem">
                                <img
                                    alt="Ruger BX-110/22 10 Round Magazine black, stacked three times"
                                    className="w-full h-40 object-contain mb-2 rounded"
                                    height="160"
                                    src="https://storage.googleapis.com/a1aa/image/6c58e995-03ec-4cda-ccc6-8af8e00957d4.jpg"
                                    width="160"
                                />
                                <h3 className="text-xs font-normal mb-1 leading-tight">
                                    Ruger BX-110/22 10 Round Magazine - 90451
                                </h3>
                                <div className="flex items-center text-yellow-500 mb-1 text-sm">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className="text-gray-500 ml-1 text-xs">(2889)</span>
                                </div>
                                <p className="text-sm font-normal">
                                    $17.89
                                    <span className="text-xs"> New</span>
                                </p>
                            </article>

                            {/* Item 2 */}
                            <article className="flex-shrink-0 w-40 " role="listitem">
                                <img
                                    alt="SIG SAUER Romeo5 Compact Red-Dot Sight black with orange lens"
                                    className="w-full h-40 object-contain mb-2 rounded"
                                    height="160"
                                    src="https://storage.googleapis.com/a1aa/image/f7e245ef-2ac6-4877-4317-b928c24f5a6e.jpg"
                                    width="160"
                                />
                                <h3 className="text-xs font-normal mb-1 leading-tight">
                                    SIG SAUER Romeo5 Compact Red-Dot Sight (SOR52001)
                                </h3>
                                <div className="flex items-center text-yellow-500 mb-1 text-sm">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className="text-gray-500 ml-1 text-xs">(1589)</span>
                                </div>
                                <p className="text-sm font-normal">
                                    $33.95
                                    <span className="text-xs"> New</span>
                                </p>
                            </article>

                            {/* Item 3 */}
                            <article className="flex-shrink-0 w-40" role="listitem">
                                <img
                                    alt="Umarex XBG 2254804 .177 Caliber BB Air Pistol black"
                                    className="w-full h-40 object-contain mb-2 rounded"
                                    height="160"
                                    src="https://storage.googleapis.com/a1aa/image/8fd9c43c-b5cb-4eeb-70b3-d20594203c7f.jpg"
                                    width="160"
                                />
                                <h3 className="text-xs font-normal mb-1 leading-tight">
                                    Umarex XBG 2254804 .177 Caliber BB Air Pistol - Black
                                </h3>
                                <div className="flex items-center text-yellow-500 mb-1 text-sm">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <span className="text-gray-500 ml-1 text-xs">(161)</span>
                                </div>
                                <p className="text-sm font-normal">
                                    $33.95
                                    <span className="text-xs"> New</span>
                                </p>
                            </article>

                            {/* Item 4 */}
                            <article className="flex-shrink-0 w-40" role="listitem">
                                <img
                                    alt="SIG SAUER ROMEOZero 1x 24mm 3 MOA Red Dot Sight black"
                                    className="w-full h-40 object-contain mb-2 rounded"
                                    height="160"
                                    src="https://storage.googleapis.com/a1aa/image/6b5ff8cf-fa45-4cde-5e75-9e9d983cf243.jpg"
                                    width="160"
                                />
                                <h3 className="text-xs font-normal mb-1 leading-tight">
                                    SIG SAUER ROMEOZero 1x 24 mm 3 MOA Red Dot Sight - Black (SOR01300)
                                </h3>
                                <div className="flex items-center text-yellow-500 mb-1 text-sm">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <span className="text-gray-500 ml-1 text-xs">(148)</span>
                                </div>
                                <p className="text-sm font-normal">
                                    $33.95
                                    <span className="text-xs"> New</span>
                                </p>
                            </article>

                            {/* Item 5 */}
                            <article className="flex-shrink-0 w-44 " role="listitem">
                                <img
                                    alt="Ruger 90645 Mark III and IV Magazine 10 Rounds 2 Pieces black"
                                    className="w-full h-40 object-contain mb-2 rounded"
                                    height="180"
                                    src="https://storage.googleapis.com/a1aa/image/ec1ca4db-0b6c-4c51-48f7-7608f9e30335.jpg"
                                    width="180"
                                />
                                <h3 className="text-xs font-normal mb-1 leading-tight">
                                    Ruger 90645 Mark III and IV Magazine 10 Rounds 2 Pieces
                                </h3>
                                <div className="flex items-center text-yellow-500 mb-1 text-sm">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span className="text-gray-500 ml-1 text-xs">(500)</span>
                                </div>
                                <p className="text-sm font-normal">
                                    $38.00
                                    <span className="text-xs"> New</span>
                                </p>
                            </article>
                        </div>
                        {/* Correct placement of Limited Time Deals Section */}
                        <div className="max-w-full overflow-x-auto scrollbar-hide py-6">
                            <div className="mb-2">
                                <h2 className="font-extrabold text-lg leading-6">
                                    Limited time deals
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Free Shipping Included
                                </p>
                            </div>
                            <div className="flex space-x-4 min-w-[900px]">
                                {[
                                    {
                                        id: 1,
                                        title: "Taylormade STEALTH HD Single iron sand lob wedge Choose RH / LH New",
                                        price: "$119.99",
                                        image: "https://storage.googleapis.com/a1aa/image/8e9b5ab4-11f0-4f9a-f29f-957f76be330b.jpg"
                                    },
                                    {
                                        id: 2,
                                        title: "Garmin inReach Mini 2 Compact GPS Satellite Communicator 010-02602-00",
                                        price: "$265.99",
                                        originalPrice: "$399.99",
                                        discount: "34% off",
                                        refurbished: true,
                                        image: "https://storage.googleapis.com/a1aa/image/461639b5-8492-41f6-e376-a455fde2278c.jpg"
                                    },
                                    {
                                        id: 3,
                                        title: "PUMA Star Vital Men's Shoes",
                                        price: "$32.99",
                                        originalPrice: "$70.00",
                                        discount: "53% off",
                                        image: "https://storage.googleapis.com/a1aa/image/04b66a3e-535a-4ea1-2965-9dda5879379a.jpg"
                                    },
                                    {
                                        id: 4,
                                        title: "PUMA Serve Pro Men's Sneakers",
                                        price: "$30.99",
                                        originalPrice: "$65.00",
                                        discount: "52% off",
                                        image: "https://storage.googleapis.com/a1aa/image/d3501cbf-af5e-4ce6-b54a-0ecbea9911d4.jpg"
                                    },
                                    {
                                        id: 5,
                                        title: "PUMA Caracal Men's Sneakers",
                                        price: "$34.99",
                                        originalPrice: "$70.00",
                                        discount: "50% off",
                                        image: "https://storage.googleapis.com/a1aa/image/b7d731c2-bfc8-4a35-cd58-20a980c09c28.jpg"
                                    }
                                ].map((deal) => (
                                    <div key={deal.id} className="flex-shrink-0 w-40">
                                        <img
                                            alt={deal.title}
                                            className="w-full h-auto mb-2"
                                            src={deal.image}
                                        />
                                        <p className="text-xs leading-tight mb-1">
                                            {deal.title}
                                        </p>
                                        <p className="font-bold text-sm">
                                            {deal.price}
                                        </p>
                                        {deal.originalPrice && (
                                            <>
                                                <p className="text-xs text-gray-500 line-through">
                                                    {deal.originalPrice}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    | {deal.discount}
                                                </p>
                                            </>
                                        )}
                                        {deal.refurbished && (
                                            <div className="flex items-center text-xs font-bold text-blue-700 mt-1">
                                                <i className="fas fa-check-circle mr-1"></i>
                                                eBay Refurbished
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* You may also like section */}
                        <section className="mb-8">
                            <h2 className="font-bold text-lg mb-4">You may also like</h2>
                            <div className="relative">
                                {/* Left fade effect */}
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

                                <ul className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide">
                                    {[
                                        {
                                            id: 1,
                                            title: "Strike Pads & Mitts",
                                            image: "https://storage.googleapis.com/a1aa/image/dcaca4d3-6c10-4901-f247-a6826907ce65.jpg"
                                        },
                                        {
                                            id: 2,
                                            title: "Hand Wraps",
                                            image: "https://storage.googleapis.com/a1aa/image/8dbd35cb-e811-4c20-ca22-02320937948e.jpg"
                                        },
                                        {
                                            id: 3,
                                            title: "adidas Boxing & MMA Equipment",
                                            image: "https://storage.googleapis.com/a1aa/image/476d1a90-62de-48b4-3fad-f097c7e36b0b.jpg"
                                        },
                                        {
                                            id: 4,
                                            title: "RDX Boxing & MMA Equipment",
                                            image: "https://storage.googleapis.com/a1aa/image/0e418808-18a0-4b74-1ad8-c8c499533fd3.jpg"
                                        },
                                        {
                                            id: 5,
                                            title: "Fairtex Boxing & MMA Equipment",
                                            image: "https://storage.googleapis.com/a1aa/image/8081d6d2-df25-417a-20ad-8ee22db95efe.jpg",
                                            disabled: true
                                        }
                                    ].map((item) => (
                                        <li key={item.id} className={`flex-shrink-0 w-40 text-center ${item.disabled ? 'opacity-40' : ''}`}>
                                            <img
                                                alt={item.title}
                                                className="mx-auto h-48 w-68 object-contain"
                                                src={item.image}
                                            />
                                            <p className={`text-xs mt-2 ${item.disabled ? 'text-gray-400' : ''}`}>
                                                {item.title}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                {/* Right fade effect */}
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                            </div>
                            <hr className="border-t border-gray-300 mt-4" />

                        </section>

                        {/* Related Searches section */}
                        <section className="mt-6">
                            <h3 className="font-bold text-base mb-3">Related Searches</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Sporting Products",
                                    "Sporting Sport",
                                    "Sport Items",
                                    "Sports Items",
                                    "Sporting New",
                                    "Sports Products",
                                    "Sports Equipment Used",
                                    "Auctions Sports",
                                    "Sports Collectibles",
                                    "Football Sports Equipment",
                                    "Sporting Clothes",
                                    "Bike Sports"
                                ].map((searchTerm, index) => (
                                    <button
                                        key={index}
                                        className="text-xs bg-gray-100 rounded-full px-3 py-1 text-gray-700 hover:bg-gray-200"
                                        type="button"
                                    >
                                        {searchTerm}
                                    </button>
                                ))}
                            </div>
                        </section>

                    </section>
                </div>
            </main>


            <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-6 text-xs text-gray-600 select-none">
                <nav className="flex flex-wrap gap-x-4 gap-y-1 mb-1">
                    {[
                        "About eBay",
                        "Announcements",
                        "Community",
                        "Security Center",
                        "Seller Center",
                        "Policies",
                        "Affiliates",
                        "Help & Contact",
                        "Site Map"
                    ].map((link, index) => (
                        <a key={index} className="hover:underline" href="#">
                            {link}
                        </a>
                    ))}
                </nav>
                <p>
                    Copyright © 1995-2025 eBay Inc. All Rights Reserved.
                    {[
                        "Accessibility",
                        "User Agreement",
                        "Privacy",
                        "Consumer Health Data",
                        "Payments Terms of Use",
                        "Cookies",
                        "CA Privacy Notice"
                    ].map((link, index) => (
                        <span key={index}>
                            {index > 0 && ', '}
                            <a className="text-blue-600 hover:underline" href="#">
                                {link}
                            </a>
                        </span>
                    ))}
                    {' and '}
                    <a className="text-blue-600 hover:underline" href="#">
                        AdChoice
                        <i className="fas fa-info-circle ml-1"></i>
                    </a>
                </p>
            </footer>

            {/* Scroll to top and help buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50">
                <button
                    aria-label="Scroll to top"
                    className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    type="button"
                >
                    <i className="fas fa-chevron-up text-gray-700"></i>
                </button>
                <button
                    aria-label="Help"
                    className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100"
                    type="button"
                >
                    <i className="fas fa-question text-gray-700"></i>
                </button>
            </div>
            <style jsx global>{`
        /* Custom scrollbar for horizontal scroll */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}