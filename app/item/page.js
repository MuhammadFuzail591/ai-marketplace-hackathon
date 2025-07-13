'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaCaretDown, 
  FaBell, 
  FaShoppingCart, 
  FaChevronRight, 
  FaChevronLeft,
  FaHeart,
  FaExpandArrowsAlt,
  FaInfoCircle,
  FaChevronUp,
  FaBolt,
  FaShieldAlt
} from 'react-icons/fa';

export default function ProductPage() {
 const similarItems = [
    {
      id: 1,
      //mainImage: "https://storage.googleapis.com/a1aa/image/307f9686-ef19-4736-9290-0e87e7fd4c8d.jpg",
    //  secondaryImage: "https://storage.googleapis.com/a1aa/image/e188be17-378c-4960-8790-f2586b53074b.jpg",
      title: "Zero Turn Lawn Mower Trailer Hitch Kit fit for Ariens ZT-X, ZT-XL, IKON... New",
      price: "$12.50",
      shipping: "US $269.71 shipping",
      sold: "383 sold",
      badge: "Almost Gone"
    },
    {
      id: 2,
   //   mainImage: "https://storage.googleapis.com/a1aa/image/79dfe37f-649b-46bb-281f-77682c4b3f2b.jpg",
      title: "3 Point 2 inch Receiver Trailer LYA-030S Hitch Tractor Tow Hitch Drawbar",
      condition: "New (Other)",
      price: "$49.49",
      originalPrice: "$54.99",
      discount: "10% off",
      shipping: "US $94.58 shipping",
      feedback: "Seller with 99.3% positive feedback"
    },
    {
      id: 3,
  //    mainImage: "https://storage.googleapis.com/a1aa/image/804bf8b6-7e25-43ea-1462-9e81d50ff040.jpg",
      title: "Green metal John Deere Z325E Lawnmower Zero Turn Rear Hitch",
      condition: "New",
      price: "$45.00",
      shipping: "US $70.98 shipping",
      sold: "56 sold"
    },
    {
      id: 4,
    //  mainImage: "https://storage.googleapis.com/a1aa/image/64d20033-5bdb-4e32-67ec-ff311ff02946.jpg",
      title: "For John Deere X300 X500 Front Bumper Brush Guard Kit Lawn Tractors New",
      price: "$64.00",
      shipping: "US $271.23 shipping",
      sold: "610 sold",
      badge: "Almost Gone",
      topRated: true
    }
  ];

  const paymentMethods = [
   // "https://storage.googleapis.com/a1aa/image/7f7dc6a4-706a-464d-2009-2d11d9a93a97.jpg",
   // "https://storage.googleapis.com/a1aa/image/04e2e4f5-7b47-4f7a-4ac5-9ba062aa0a21.jpg",
   // "https://storage.googleapis.com/a1aa/image/46c220d7-5414-481a-2916-e9aad8e18ace.jpg",
   // "https://storage.googleapis.com/a1aa/image/9f1f8cf4-1883-4081-528e-25c66b821fc1.jpg",
   // "https://storage.googleapis.com/a1aa/image/9715d456-8e5d-49c6-8f67-ae10e6889114.jpg",
   // "https://storage.googleapis.com/a1aa/image/d767d434-0543-4f3c-6c77-b4ccc5de5aba.jpg"
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>eBay Product Page</title>
        <link href="https://fonts.googleapis.com/css2?family=Arial&display=swap" rel="stylesheet" />
      </Head>

      {/* Top Navigation */}
      <div className="text-xs px-4 py-1 flex flex-wrap justify-between border-b border-gray-300">
        <div className="flex space-x-1 items-center flex-wrap">
          <span>Hi!</span>
          <Link className="underline text-blue-700" href="#">Sign in</Link>
          <span>or</span>
          <Link className="underline text-blue-700" href="#">register</Link>
          <span>Daily Deals</span>
          <span>Brand Outlet</span>
          <span>Gift Cards</span>
          <span>Help & Contact</span>
        </div>
        <div className="flex space-x-4 items-center text-xs whitespace-nowrap">
          <span>Ship to</span>
          <span>Sell</span>
          <div className="relative cursor-pointer select-none">
            <span>Watchlist <FaCaretDown className="inline" /></span>
          </div>
          <div className="relative cursor-pointer select-none">
            <span>My eBay <FaCaretDown className="inline" /></span>
          </div>
          <button aria-label="Notifications" className="relative">
            <FaBell className="text-lg" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </button>
          <button aria-label="Cart" className="relative">
            <FaShoppingCart className="text-lg" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">1</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-wrap items-center gap-4 px-4 py-3 border-b border-gray-300">
        <div className="flex items-center gap-1 flex-shrink-0">
          <Image 
            alt="eBay logo" 
          //  src="https://storage.googleapis.com/a1aa/image/bf760b2c-1244-4122-f9bf-d2a117bc5d73.jpg" 
            width={80} 
            height={30} 
            className="h-8 w-auto"
          />
          <button aria-label="Shop by category" className="text-xs text-gray-600 flex items-center gap-1">
            Shop by category <FaCaretDown className="text-xs" />
          </button>
        </div>
        <form aria-label="Search" className="flex flex-grow max-w-4xl items-center gap-2 border border-gray-400 rounded-full px-3 py-1">
          <input 
            aria-label="Search for anything" 
            className="flex-grow text-sm outline-none" 
            placeholder="Search for anything" 
            type="search" 
          />
          <button aria-label="Select category" className="flex items-center gap-1 border border-gray-400 rounded-full px-3 py-1 text-sm whitespace-nowrap" type="button">
            All Categories <FaCaretDown className="text-xs" />
          </button>
          <button className="text-blue-700 border border-blue-700 rounded-full px-6 py-1 text-sm font-semibold hover:bg-blue-50" type="submit">
            Search
          </button>
        </form>
        <button aria-label="Advanced search" className="text-xs text-gray-600 underline whitespace-nowrap" type="button">
          Advanced
        </button>
      </div>

      {/* Sponsored Bar */}
      <div className="flex items-center justify-between bg-gray-100 text-xs text-gray-700 px-4 py-2 rounded-md mx-4 my-3">
        <div className="flex items-center gap-1 whitespace-nowrap">
          <span>Find similar items from</span>
          <Image 
            alt="Caltric logo" 
            //src="https://storage.googleapis.com/a1aa/image/1048846c-142c-40fa-8540-0e66a1d74650.jpg" 
          width={20} 
            height={20} 
            className="h-5 w-5 rounded-full" 
          />
          <span className="font-bold">Caltric</span>
          <span>(7.0M items sold)</span>
          {/* Additional sponsor images would go here */}
          <Link className="font-semibold underline whitespace-nowrap" href="#">
            Shop store on eBay
          </Link>
        </div>
        <span className="text-gray-400 whitespace-nowrap">Sponsored</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap gap-6 px-4 pb-10 max-w-7xl mx-auto">
        {/* Left Side - Images */}
        <div className="flex gap-4 max-w-[600px] flex-grow">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3 overflow-y-auto max-h-[600px] min-w-[80px] scrollbar-thin scrollbar-thumb-gray-300">
            {[1, 2, 3, 4, 5].map((item) => (
              <button key={item} aria-label={`Thumbnail ${item}`} className="border border-gray-300 rounded-md p-1">
                <Image
                  alt={`Thumbnail ${item}`}
                //  src={`https://storage.googleapis.com/a1aa/image/thumbnail-${item}.jpg`}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </button>
            ))}
          </div>

          {/* Main Image Carousel */}
          <div className="flex flex-col gap-2 flex-grow rounded-xl bg-gray-100 p-2 relative max-w-[520px]">
            {/* Top row images */}
            <div className="flex gap-2">
              <div className="relative flex-grow rounded-md overflow-hidden">
                <Image
                 alt="Tractor hitch part"
                 // src="https://storage.googleapis.com/a1aa/image/2e4af8fb-d69e-4217-133b-2cb49dbf6841.jpg"
                  width={260}
                  height={180}
                  className="rounded-md object-cover w-full h-44"
                />
                <div className="absolute top-2 left-2 bg-red-700 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  IN 12 CARTS
                </div>
              </div>
              <div className="relative flex-grow rounded-md overflow-hidden">
                <Image
                  alt="Tractor hitch part side view"
            //      src="https://storage.googleapis.com/a1aa/image/b3232841-6807-45aa-9075-898be2955510.jpg"
                  width={260}
                  height={180}
                  className="rounded-md object-cover w-full h-44"
                />
              </div>
            </div>

            {/* Main image */}
            <div className="relative rounded-md overflow-hidden">
              <Image
                alt="Front view of tractor hitch part"
          //      src="https://storage.googleapis.com/a1aa/image/316d4c59-99d3-4f75-a283-55d22963e3d0.jpg"
                width={520}
                height={400}
                className="rounded-md object-contain w-full max-h-[400px]"
              />
              <button aria-label="Zoom image" className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md">
                <FaExpandArrowsAlt className="text-gray-700" />
              </button>
              <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md flex items-center gap-1">
                <span className="text-sm font-semibold">468</span>
                <button aria-label="Add to favorites" className="text-gray-700">
                  <FaHeart />
                </button>
              </div>
            </div>

            {/* Carousel arrows */}
            <button aria-label="Previous image" className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <FaChevronLeft className="text-lg" />
            </button>
            <button aria-label="Next image" className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex flex-col max-w-xl flex-grow relative">
          <h1 className="text-lg font-bold leading-tight mb-2">
            3 Point Hitch Receiver 21 x27 Tractor Receiver Hitch Drawbar 2 For Category 1
          </h1>
          
          <div className="flex items-center gap-3 mb-3">
            <Image 
              alt="Seller avatar" 
             // src="https://storage.googleapis.com/a1aa/image/b03ac6ca-0491-48f9-032e-8755dc8cd718.jpg" 
              width={40} 
              height={40} 
              className="rounded-full" 
            />
            <div className="text-sm">
              <div className="font-semibold flex items-center gap-1">
                primeautobuy
                <span className="text-gray-500 text-xs">(100459)</span>
              </div>
              <div className="flex gap-2 text-xs text-blue-700 underline">
                <Link className="hover:text-blue-900" href="#">99.3% positive</Link>
                <Link className="hover:text-blue-900" href="#">Seller other items</Link>
                <Link className="hover:text-blue-900" href="#">Contact seller</Link>
              </div>
            </div>
            <button aria-label="Seller details" className="ml-auto">
              <FaChevronRight />
            </button>
          </div>

          <div className="text-2xl font-bold mb-4">US $50.50</div>
          <hr className="border-gray-300 mb-4" />

          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1 whitespace-nowrap">
              <span>Condition:</span>
              <span className="font-bold">New</span>
              <button aria-label="Condition info" className="text-gray-500 hover:text-gray-700">
                <FaInfoCircle />
              </button>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <label className="font-semibold" htmlFor="quantity">Quantity:</label>
              <input 
                className="border border-gray-300 rounded-md w-16 text-center text-sm" 
                id="quantity" 
                min="1" 
                type="number" 
                defaultValue="1" 
              />
              <span className="text-red-600 text-xs font-bold whitespace-nowrap">
                Last one · 2,900 sold
              </span>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-3 text-center mb-2">
            Buy It Now
          </button>
       

<Link href="/cart">
  <button className="border border-blue-600 text-blue-600 font-semibold rounded-full py-3 text-center w-full hover:bg-blue-50">
    Add to cart
  </button>
</Link>

          <button aria-label="Help" className="absolute right-4 bottom-4 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 shadow-md">
            ?
          </button>
        </div>
      </div>
       <div className="bg-white text-gray-900">
      <Head>
        <title>Similar Items</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left side: Similar Items */}
        <section className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg leading-6">Similar Items</h2>
            <Link href="#" className="text-sm text-gray-900 hover:underline font-normal">
              See all
            </Link>
          </div>
          <p className="text-xs text-gray-500 mb-4">Sponsored</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {similarItems.map((item) => (
              <div key={item.id} className="bg-gray-100 rounded-lg p-2 relative">
                <button aria-label="Favorite" className="absolute top-2 right-2 text-gray-700 hover:text-black">
                  <FaHeart />
                </button>
                
                <div className="relative aspect-square">
                  <Image
                    alt={item.title}
                    src={item.mainImage}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                
                {item.secondaryImage && (
                  <div className="relative h-10 mt-1">
                    <Image
                      alt=""
                      src={item.secondaryImage}
                      fill
                      className="rounded-b-md object-cover"
                    />
                  </div>
                )}

                {item.badge && (
                  <div className="mt-1">
                    <span className="inline-block text-[9px] font-semibold text-red-700 border border-red-700 rounded-full px-1.5 py-[1px] uppercase tracking-wide">
                      {item.badge}
                    </span>
                  </div>
                )}

                <p className="text-xs mt-1 leading-tight">{item.title}</p>
                <p className="font-semibold mt-1 text-sm">{item.price}</p>
                
                {item.originalPrice && (
                  <p className="text-xs line-through text-gray-400 -mt-1">
                    {item.originalPrice}
                  </p>
                )}
                
                {item.discount && (
                  <p className="text-xs text-gray-500">{item.discount}</p>
                )}

                <p className="text-xs text-gray-700">
                  + {item.shipping}
                  {item.sold && (
                    <>
                      <br />
                      {item.sold}
                    </>
                  )}
                </p>

                {item.topRated && (
                  <span className="inline-flex items-center gap-1 text-blue-700 text-xs">
                    <FaShieldAlt />
                    Top Rated Plus
                  </span>
                )}

                {item.feedback && (
                  <p className="text-xs text-gray-500 mt-1">{item.feedback}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Right side: Info panel */}
        <section className="w-full lg:w-[360px] bg-gray-50 rounded-lg p-4 text-xs text-gray-900 space-y-4 relative">
          <div className="space-y-2 bg-white rounded-lg p-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-900">
                <FaBolt />
              </div>
              <p>
                <strong>People want this.</strong> 468 people are watching this.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-900">
                <FaBolt />
              </div>
              <p>
                <strong>This one s trending.</strong> 2900 have already sold.
              </p>
            </div>
          </div>

          <dl className="space-y-3">
            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal">Shipping:</dt>
              <dd className="flex flex-wrap items-center gap-1 text-sm">
                <span className="font-semibold">US $270.83</span>
                eBay International Shipping
                <button aria-label="Shipping info" className="text-gray-500 hover:text-gray-700">
                  <FaInfoCircle />
                </button>
                .
                <Link href="#" className="underline text-sm text-gray-700 hover:text-gray-900">
                  See details
                </Link>
              </dd>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal"></dt>
              <dd className="text-xs text-gray-500">
                Located in: Hayward, CA, United States
              </dd>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal"></dt>
              <dd className="flex flex-wrap items-center gap-1 text-sm">
                <span className="font-semibold underline cursor-pointer">
                  Save on combined shipping
                </span>
                <button aria-label="Combined shipping info" className="text-gray-500 hover:text-gray-700">
                  <FaInfoCircle />
                </button>
              </dd>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal"></dt>
              <dd className="text-xs text-gray-500">
                Authorities may apply duties, fees, and taxes upon delivery
                <button aria-label="Duties info" className="text-gray-500 hover:text-gray-700">
                  <FaInfoCircle />
                </button>
              </dd>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal">Delivery:</dt>
              <dd className="flex flex-wrap items-center gap-1 text-sm">
                Estimated between
                <strong>Tue, Aug 26</strong>
                and
                <strong>Thu, Sep 18</strong>
                to 30000
                <button aria-label="Delivery info" className="text-gray-500 hover:text-gray-700">
                  <FaInfoCircle />
                </button>
              </dd>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal"></dt>
              <dd className="text-xs text-gray-500">
                Seller ships within 1 day after
                <Link href="#" className="underline text-xs text-gray-700 hover:text-gray-900">
                  receiving cleared payment
                </Link>
                .
              </dd>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal">Returns:</dt>
              <dd className="text-xs text-gray-900 max-w-[240px]">
                30 days returns. Buyer pays for return shipping. If you use an eBay
                shipping label, it will be deducted from your refund amount.
                <Link href="#" className="underline text-xs text-blue-700 hover:text-blue-900">
                  See details
                </Link>
              </dd>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <dt className="w-20 font-normal">Payments:</dt>
              <dd>
                <div className="flex gap-1 items-center flex-wrap">
                  {paymentMethods.map((src, index) => (
                    <div key={index} className="relative h-6 w-10">
                      <Image
                        src={src}
                        alt="Payment method"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </dd>
            </div>
          </dl>

          <button 
            aria-label="Scroll to top" 
            className="absolute right-4 bottom-4 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 hover:text-black"
          >
            <FaChevronUp />
          </button>
        </section>
      </div>
      </div>
    </div>
  );
}