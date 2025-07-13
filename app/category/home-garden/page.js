'use client';

import Head from 'next/head';

export default function HomeAndGardenPage() {
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

                {/* Page title */}
                <h1 className="px-4 mb-6 text-3xl font-extrabold select-none">
                    Home & Garden
                </h1>

                <main className="px-4 mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6 lg:flex-row">
                        {/* Left sidebar category list */}
                        <aside className="flex-shrink-0 w-full lg:w-48">
                            <h2 className="mb-3 text-sm font-bold select-none">
                                Shop by category
                            </h2>
                            <ul className="space-y-2 text-xs text-gray-900">
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
                                    <h3 className="mb-2 text-xl font-bold text-white select-none">
                                        Just what your garden needs
                                    </h3>
                                    <p className="mb-6 text-sm text-white select-none">
                                        Discover BBQ, pools and garden furniture on eBay.
                                    </p>
                                    <a
                                        className="inline-block px-5 py-2 text-sm text-white transition border border-white rounded-full select-none hover:bg-white hover:text-black"
                                        href="#"
                                    >
                                        Shop now→
                                    </a>
                                </div>
                            </div>

                            {/* Best Selling Section */}
                            <div className="max-w-full py-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-extrabold leading-6">Best selling</h2>
                                    <a className="text-xs underline" href="#">
                                        See All
                                    </a>
                                </div>
                                <div className="flex items-center mb-4">
                                    <button
                                        aria-label="More options"
                                        className="flex items-center px-2 py-1 mr-4 text-sm font-bold border border-gray-300 rounded"
                                    >
                                        More
                                        <i className="ml-1 text-xs fas fa-chevron-down"></i>
                                    </button>
                                    <div className="flex-grow border-t border-gray-300 border-dashed"></div>
                                </div>
                                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    <ul className="flex space-x-4 min-w-[900px]">
                                        {/* Product 1 */}
                                        <li className="flex-shrink-0 w-40">
                                            <img
                                                alt="Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)"
                                                className="mb-2 rounded-lg"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/2280453d-df81-4475-8307-af57b629982a.jpg"
                                                width="160"
                                            />
                                            <p className="mb-1 text-xs leading-4">
                                                Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star-half-alt"></i>
                                                <span className="ml-1 text-xs text-gray-600">(64)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $63.45 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$40.00 Used</p>
                                        </li>

                                        {/* Product 2 */}
                                        <li className="flex-shrink-0 w-40">
                                            <img
                                                alt="Lutron Diva Smart Dimmer - White"
                                                className="mb-2 rounded-lg"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/068fc194-6789-4e26-ea9a-0d08bdc906a3.jpg"
                                                width="160"
                                            />
                                            <p className="mb-1 text-xs leading-4">
                                                Lutron Diva Smart Dimmer - White
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <span className="ml-1 text-xs text-gray-600">(25)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $43.99 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$34.99 Used</p>
                                        </li>
                                        {/* Product 1 */}
                                        <li className="flex-shrink-0 w-40">
                                            <img
                                                alt="Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)"
                                                className="mb-2 rounded-lg"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/2280453d-df81-4475-8307-af57b629982a.jpg"
                                                width="160"
                                            />
                                            <p className="mb-1 text-xs leading-4">
                                                Milwaukee M12 High Output XC5.0 Lithium-Ion Battery Pack - Red (48-11-2450)
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star-half-alt"></i>
                                                <span className="ml-1 text-xs text-gray-600">(64)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $63.45 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$40.00 Used</p>
                                        </li>

                                        {/* Product 3 */}
                                        <li className="flex-shrink-0 w-40">
                                            <img
                                                alt="Milwaukee M18 18V Cordless Tire Inflator - 2848-20"
                                                className="mb-2 rounded-lg"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/de4a22a0-21f0-48bb-77fe-5e68ba8e7e18.jpg"
                                                width="160"
                                            />
                                            <p className="mb-1 text-xs leading-4">
                                                Milwaukee M18 18V Cordless Tire Inflator - 2848-20
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star-half-alt"></i>
                                                <span className="ml-1 text-xs text-gray-600">(215)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $147.49 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$139.95 Used</p>
                                        </li>

                                        {/* Product 4 */}
                                        <li className="flex-shrink-0 w-40">
                                            <img
                                                alt="Milwaukee M18 High Output 18V Lithium Ion 12.0Ah Battery (48-11-1812)"
                                                className="mb-2 rounded-lg"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/d67ae094-14df-4ed9-3387-ddd74d940abb.jpg"
                                                width="160"
                                            />
                                            <p className="mb-1 text-xs leading-4">
                                                Milwaukee M18 High Output 18V Lithium Ion 12.0Ah Battery (48-11-1812)
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <span className="ml-1 text-xs text-gray-600">(736)</span>
                                            </div>
                                            <p className="text-sm font-normal leading-5 mb-0.5">
                                                $130.00 <span className="font-normal">New</span>
                                            </p>
                                            <p className="text-xs text-gray-600">$29.99 Used</p>
                                        </li>

                                        {/* Product 5 */}
                                        <li className="flex-shrink-0 w-40">
                                            <img
                                                alt="GE XWFE Refrigerator Water Filter - White"
                                                className="mb-2 rounded-lg"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/f300aa85-bc29-4521-0f41-590b398d43b3.jpg"
                                                width="160"
                                            />
                                            <p className="mb-1 text-xs leading-4">
                                                GE XWFE Refrigerator Water Filter - White
                                            </p>
                                            <div className="flex items-center mb-1">
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star"></i>
                                                <i className="text-xs text-black fas fa-star-half-alt"></i>
                                                <span className="ml-1 text-xs text-gray-600">(306)</span>
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
                            <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 md:grid-cols-4">
                                {/* Promo Card */}
                                <div className="bg-[#3b7de3] text-white p-6 flex flex-col justify-center rounded-md">
                                    <h2 className="mb-2 text-lg font-extrabold leading-tight">
                                        Construction season essentials
                                    </h2>
                                    <p className="mb-6 text-sm">
                                        Equipment, parts, attachments, and more.
                                    </p>
                                    <button className="w-max px-4 py-2 border border-white rounded-full text-white text-sm font-normal hover:bg-white hover:text-[#3b7de3] transition">
                                        Shop now
                                        <i className="ml-1 fas fa-arrow-right"></i>
                                    </button>
                                </div>

                                {/* Product Cards */}
                                <a className="overflow-hidden rounded-md group" href="#">
                                    <img
                                        alt="3 Point Hitch Receiver 21x27 Tractor Receiver Hitch Drawbar 2 inch for Category 1"
                                        className="object-cover w-full"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/27988172-43b2-4c25-9899-e59d1576e062.jpg"
                                        width="260"
                                    />
                                    <p className="mt-2 text-xs leading-tight">
                                        3 Point Hitch Receiver 21 x27  Tractor Receiver Hitch Drawbar 2 For Category 1
                                    </p>
                                    <p className="mt-1 text-sm font-bold">$50.50</p>
                                </a>

                                <a className="overflow-hidden rounded-md group" href="#">
                                    <img
                                        alt="John Deere LG265 Home Maintenance Kit with oil bottles, spark plugs, and filters on white background"
                                        className="object-cover w-full"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/d4d8a327-0f43-495a-1b9a-37780ae6fa55.jpg"
                                        width="260"
                                    />
                                    <p className="mt-2 text-xs leading-tight">
                                        John Deere LG265 Home Maintenance Kit
                                    </p>
                                    <p className="mt-1 text-sm font-bold">$60.30</p>
                                </a>

                                <a className="overflow-hidden rounded-md group" href="#">
                                    <img
                                        alt="Set of 2 yellow 18 inch seats for John Deere Gator 4X2 4X4 4X6 Trail Worksite Turf VG11696"
                                        className="object-cover w-full"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/221a9997-1009-400e-6955-c438407daa5a.jpg"
                                        width="260"
                                    />
                                    <p className="mt-2 text-xs leading-tight">
                                        Set of Seats for John Deere Gator 4X2 4X4 4X6 Trail Worksite Turf VG11696
                                    </p>
                                    <p className="mt-1 text-sm font-bold">$249.99</p>
                                </a>

                                <a className="group rounded-md overflow-hidden bg-[#f3f4f6] p-2" href="#">
                                    <img
                                        alt="Green tractor roof canopy with inset images showing canopy from different angles"
                                        className="object-cover w-full rounded-md"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/e64277ac-d819-4476-b297-bbe31e1090cc.jpg"
                                        width="260"
                                    />
                                </a>

                                <a className="overflow-hidden rounded-md group" href="#">
                                    <img
                                        alt="Black grill guard for John Deere X300 X500 OEM BM23057 with before and after images of tractor"
                                        className="object-cover w-full"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/a9fca950-30f5-4944-d92f-eae62d943704.jpg"
                                        width="260"
                                    />
                                </a>

                                <a className="overflow-hidden rounded-md group" href="#">
                                    <img
                                        alt="Black tractor seat mounting bracket with screws and hardware on white background"
                                        className="object-cover w-full"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/191128c0-9c9e-4dec-23d4-0d21e23a54b0.jpg"
                                        width="260"
                                    />
                                </a>

                                <a className="group rounded-md overflow-hidden bg-[#f3f4f6] p-2" href="#">
                                    <img
                                        alt="Tractor canopy with metal frame and inset image showing canopy top view, outdoor background"
                                        className="object-cover w-full rounded-md"
                                        height="260"
                                        src="https://storage.googleapis.com/a1aa/image/3c9cf9d8-c94d-4c0f-b0dd-44aeadf16ac4.jpg"
                                        width="260"
                                    />
                                </a>
                            </div>

                            {/* Top Rated Products Section */}
                            <div className="max-w-[1200px] mx-auto py-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold leading-6">Top rated</h2>
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
                                                className="object-contain w-full rounded h-36"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/f03dbca6-4084-4bef-34df-a8353bb918f0.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                SUPCO RIM900 Replacement Ice Maker
                                            </p>
                                            <div className="flex items-center mt-1 star-rating">
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
                                            <p className="mt-1 text-sm font-semibold">
                                                $18.98 <span className="font-normal">New</span>
                                            </p>
                                        </div>

                                        {/* Product 2 */}
                                        <div className="flex-shrink-0 w-44 ">
                                            <img
                                                alt="DEWALT DCW600B 20V MAX XR Cordless Compact Router - Tool Only yellow and black"
                                                className="object-contain w-full rounded h-36"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/6d212a28-83c4-417f-05f3-d44b076046ef.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                DEWALT DCW600B 20V MAX XR Cordless Compact Router - Tool Only
                                            </p>
                                            <div className="flex items-center mt-1 star-rating">
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
                                            <p className="mt-1 text-sm font-semibold">
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
                                                className="object-contain w-full rounded h-36"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/8035580d-8c99-4e8c-ca79-caa92a08df27.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                Milwaukee M18 18V Cordless Tire Inflator - 2848-20
                                            </p>
                                            <div className="flex items-center mt-1 star-rating">
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
                                            <p className="mt-1 text-sm font-semibold">
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
                                                className="object-contain w-full rounded h-36"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/fd180392-0d84-4d83-d42c-a02fb3b0b1bf.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                Tyler Glamorous Wash Laundry Detergent, Diva - 1 Gallon
                                            </p>
                                            <div className="flex items-center mt-1 star-rating">
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
                                            <p className="mt-1 text-sm font-semibold">
                                                $90.00 <span className="font-normal">New</span>
                                            </p>
                                        </div>

                                        {/* Product 5 */}
                                        <div className="flex-shrink-0 w-44">
                                            <img
                                                alt="Poo-Pourri Before-You-Go 472ml Toilet Spray - Lavender Vanilla Scent (LV-016-BR) white bottle with purple floral design"
                                                className="object-contain w-full rounded h-36"
                                                height="160"
                                                src="https://storage.googleapis.com/a1aa/image/8f88bd37-5314-45f8-df31-266117b2d77b.jpg"
                                                width="160"
                                            />
                                            <p className="mt-2 text-xs leading-4">
                                                Poo-Pourri Before-You-Go 472ml Toilet Spray - Lavender Vanilla Scent (LV-016-BR)
                                            </p>
                                            <div className="flex items-center mt-1 star-rating">
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
                                            <p className="mt-1 text-sm font-semibold">
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