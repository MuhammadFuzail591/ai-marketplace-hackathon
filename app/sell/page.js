'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SellerPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How much does it cost to sell?",
      answer: "You'll pay a final value fee only when your item sells. Insertion fees may apply for certain listing types. Most sellers get 250 zero insertion fee listings per month."
    },
    {
      question: "What's the best way to ship my item?",
      answer: "We recommend using eBay's shipping services which offer discounted rates with major carriers. For small items, First Class Mail is often most cost-effective."
    },
    {
      question: "Can I sell locally on eBay?",
      answer: "Yes! You can offer local pickup as a delivery option. Just specify this in your listing and arrange the pickup details directly with your buyer."
    },
    {
      question: "How much will it cost to ship my item?",
      answer: "Shipping costs vary based on size, weight, and destination. Use our shipping calculator for accurate estimates before listing."
    },
    {
      question: "Where can I get shipping supplies?",
      answer: "eBay offers free shipping supplies through the eBay Shipping Supplies program. You can also purchase supplies at discounted rates through our partners."
    },
    {
      question: "How should I choose my listing price?",
      answer: "Research similar sold items on eBay to determine market value. Consider starting auctions at a low price to attract bidders, or set a competitive Buy It Now price."
    },
    {
      question: "How does eBay protect sellers?",
      answer: "We offer seller protections including payment guarantees, fraud detection, and dispute resolution services to help prevent abusive buyer behavior."
    },
    {
      question: "What can I sell on eBay?",
      answer: "You can sell most items except for prohibited or restricted goods. Check our policies for specific categories like electronics, collectibles, fashion, and more."
    },
    {
      question: "How do I create an account?",
      answer: "Simply click 'Register' at the top of any eBay page. You'll need an email address and to create a password. Business sellers can register for an eBay business account."
    }
  ];

  return (
    <div className="font-sans text-black bg-white min-h-screen">
      <Head>
        <title>eBay Seller Hub</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Arial&display=swap" rel="stylesheet" />
      </Head>

      {/* Top Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Hi! <Link href="/signin" className="text-blue-600 hover:underline">Sign in</Link> or <Link href="/register" className="text-blue-600 hover:underline">register</Link></span>
            <Link href="/daily-deals" className="hidden sm:inline hover:text-blue-600">Daily Deals</Link>
            <Link href="/brand-outlet" className="hidden sm:inline hover:text-blue-600">Brand Outlet</Link>
            <Link href="/gift-cards" className="hidden sm:inline hover:text-blue-600">Gift Cards</Link>
            <Link href="/help" className="hidden sm:inline hover:text-blue-600">Help & Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/ship-to" className="hover:text-blue-600">Ship to</Link>
            <Link href="/sell" className="font-semibold hover:text-blue-600">Sell</Link>
            <div className="hidden sm:flex items-center hover:text-blue-600 cursor-pointer">
              <span>Watchlist</span>
              <i className="fas fa-caret-down ml-1 text-xs"></i>
            </div>
            <div className="hidden sm:flex items-center hover:text-blue-600 cursor-pointer">
              <span>My eBay</span>
              <i className="fas fa-caret-down ml-1 text-xs"></i>
            </div>
            <button aria-label="Notifications" className="hover:text-blue-600">
              <i className="far fa-bell text-lg"></i>
            </button>
            <button aria-label="Cart" className="hover:text-blue-600">
              <i className="fas fa-shopping-cart text-lg"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header with Search */}
      <header className="border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-red-500">e</span>
                <span className="text-blue-500">B</span>
                <span className="text-yellow-500">a</span>
                <span className="text-green-500">y</span>
              </span>
            </Link>
            <button className="ml-4 flex items-center text-sm text-gray-600 hover:text-black">
              <span>Shop by category</span>
              <i className="fas fa-caret-down ml-1 text-xs"></i>
            </button>
          </div>
          
          <form className="w-full max-w-2xl flex">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              type="button"
              className="border border-l-0 border-gray-300 rounded-r-full px-4 text-sm text-gray-600 hover:bg-gray-100 flex items-center"
            >
              All Categories
              <i className="fas fa-caret-down ml-1 text-xs"></i>
            </button>
            <button 
              type="submit"
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-semibold"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Seller Sub Navigation */}
      <nav className="border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg font-bold">Selling</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/sell/business" className="text-gray-600 hover:text-black">Business selling</Link>
            <Link href="/sell/tips" className="text-gray-600 hover:text-black">Tips for listing</Link>
            <Link href="/sell/faq" className="text-gray-600 hover:text-black">FAQ</Link>
            <Link href="/account" className="text-gray-600 hover:text-black">My eBay</Link>
            <Link href="/sell/list-item" className="bg-blue-600 text-white rounded-full px-5 py-2 hover:bg-blue-700">
              List an item
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 w-full bg-gray-100">
          <Image
            src="/placeholder-hero.jpg"
            alt="Seller hero image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg max-w-xs md:max-w-sm">
          <h1 className="text-xl md:text-2xl font-bold mb-3">Make money selling on eBay</h1>
          <p className="text-sm mb-6">Sell your items fast—millions of buyers are waiting.</p>
          <Link 
            href="/sell/list-item" 
            className="block bg-blue-600 text-white text-center rounded-full py-2 font-semibold hover:bg-blue-700"
          >
            List an item
          </Link>
        </div>
      </section>

  {/* Trusted Buyers Section */}
      <section className="max-w-7xl mx-auto px-8 py-8">
        <h2 className="text-center font-extrabold text-xl md:text-2xl mb-8">
          Reach millions of trusted buyers on eBay
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto text-sm md:text-base">
          <div className="md:w-1/3">
            <h3 className="font-extrabold text-base md:text-lg mb-2">
              Quick listing
            </h3>
            <p>
              List in a few steps with AI-powered help for pricing and descriptions. Only pay a final value fee when your item sells.
              <Link className="underline hover:text-blue-700" href="/sell/fees">
                Learn more about fees
              </Link>
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="font-extrabold text-base md:text-lg mb-2">
              Secure payments
            </h3>
            <p>
              Get paid securely with fraud detection, dispute resolution, and safeguards against abusive buyers.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="font-extrabold text-base md:text-lg mb-2">
              Easy shipping
            </h3>
            <p>
              Pick your carrier or use our suggestions— get discounted shipping labels on eBay, or arrange a local pickup directly with the buyer.
            </p>
          </div>
        </div>
      </section>

    

      {/* Business Selling Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-normal mb-4">Selling as a business? We make it easy</h2>
            <p className="text-sm mb-6">
              Powerful tools to manage inventory, track sales, and build your brand.
            </p>
            <Link 
              href="/sell/business" 
              className="inline-block border border-blue-600 text-blue-600 rounded-full px-5 py-2 text-sm hover:bg-blue-50"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative aspect-video rounded-md overflow-hidden">
              <Image
                src="/placeholder-business.jpg"
                alt="Business seller"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


  <section className="max-w-8xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-1">Create a great listing</h1>
          <p className="text-sm text-gray-600 mb-8">Here is six ways to set yourself up for success.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <article className="bg-[#FDE6C9] rounded-lg p-10">
              <h2 className="text-2xl font-extrabold mb-4 text-[#3B1F0B]">Write a standout title</h2>
              <ul className="list-disc list-inside text-sm text-[#3B1F0B] space-y-4">
                <li>We will recommend search terms that buyers often use, so be sure to add these in the title.</li>
                <li>Avoid all caps and focus on specific details like brand, model, size, and color.</li>
              </ul>
            </article>

            {/* Tip 2 */}
            <article className="bg-[#FDF5CC] rounded-lg p-10">
              <h2 className="text-2xl font-extrabold mb-4 text-[#3B1F0B]">Take high-quality photos</h2>
              <ul className="list-disc list-inside text-sm text-[#3B1F0B] space-y-4">
                <li>Snap your items from multiple angles in a well-lit place, and capture any blemishes for transparency.</li>
                <li>On the eBay app, you can clean up your images and add a white background.</li>
              </ul>
            </article>


            {/* Tip 4 - Added for consistency with "six ways" mentioned in the heading */}
            <article className="bg-[#E6F7EE] rounded-lg p-10">
              <h2 className="text-2xl font-extrabold mb-4 text-[#0B3B1F]">Set competitive pricing</h2>
              <ul className="list-disc list-inside text-sm text-[#0B3B1F] space-y-4">
                <li>Research similar items to price competitively.</li>
                <li>Consider starting auctions at a low price to attract more bidders.</li>
              </ul>
            </article>

          
          </div>
</section>

     

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{item.question}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
        <button
          aria-label="Help"
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          <i className="fas fa-question"></i>
        </button>
      </div>


      
    </div>
  );
}