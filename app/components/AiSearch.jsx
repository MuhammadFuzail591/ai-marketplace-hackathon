// app/page.js

'use client'; // This component has state and event listeners, so it must be a Client Component.

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

// A simple SVG search icon component - it now accepts a className prop
const SearchIcon = ({ className }) => (
   <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
   </svg>
);

// A simple SVG loading spinner component - it now accepts a className prop
export const LoadingSpinner = ({ className }) => (
   <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
   >
      <path
         d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
         opacity=".25"
      />
      <path
         d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
         className="origin-center animate-spin"
      />
   </svg>
);


export default function ProductSearchPage() {
   const [query, setQuery] = useState('');
   const [suggestions, setSuggestions] = useState([]);
   const [message, setMessage] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');

   const inputRef = useRef(null);
   useEffect(() => {
      inputRef.current?.focus();
   }, []);

   const handleSearch = async (e) => {
      // Allows searching by pressing Enter or clicking the button
      if (e.type === 'keydown' && e.key !== 'Enter') return;
      e.preventDefault();

      if (!query) {
         setError('Please enter a search query.');
         return;
      }
      setIsLoading(true);
      setError('');
      setSuggestions([]);
      setMessage('');
      try {
         const response = await fetch('/api/suggest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
         });
         const data = await response.json();
         if (!response.ok) throw new Error(data.error || 'Something went wrong');
         setSuggestions(data.suggested_products || []);
         const resultMessage = data.message || (data.suggested_products?.length === 0 ? "I couldn't find products matching your search. Try another query!" : '');
         setMessage(resultMessage);
      } catch (err) {
         setError(err.message);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="max-w-5xl p-4 mx-auto font-sans text-gray-800 sm:p-8">
         <header className="mb-10 text-center">
            <h1 className="mb-2 text-4xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">
               AI Product Finder
            </h1>
            <p className="text-lg text-gray-600">
               Describe what you are looking for, and let AI find it for you.
            </p>
         </header>

         {/* --- Search Bar --- */}
         <form className="relative flex items-center mb-8" onSubmit={handleSearch}>
            <SearchIcon className="absolute w-5 h-5 text-gray-400 pointer-events-none left-4" />
            <input
               ref={inputRef}
               type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               onKeyDown={handleSearch}
               placeholder="e.g., 'a stylish chair for my home office' or 'colorful running shoes'"
               className="w-full py-3 pl-12 pr-32 text-lg transition-shadow border border-gray-300 rounded-full shadow-sm outline-none sm:pr-36 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-md"
            />
            <button
               type="button"
               onClick={handleSearch}
               disabled={isLoading}
               className="absolute flex items-center justify-center h-12 font-semibold text-white transition-colors bg-blue-600 rounded-full right-2 w-28 sm:w-32 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
               {isLoading ? <LoadingSpinner className="w-6 h-6" /> : 'Search'}
            </button>
         </form>

         {/* --- Results Area --- */}
         <div className="min-h-[500px]">
            {error && <p className="font-medium text-center text-red-600">{error}</p>}

            {message && (
               <div className="p-4 mb-8 text-blue-800 border-l-4 border-blue-500 rounded-r-lg shadow bg-blue-50">
                  <p className="font-medium">🤖 {message}</p>
               </div>
            )}

            {suggestions.length > 0 && (
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {suggestions.map((product) => (
                     <Link href={`/product/${product.title}`} key={product.id}>
                        <div key={product.id} className="flex flex-col overflow-hidden transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl">
                           <img
                              src={product.image}
                              alt={product.title}
                              className="object-cover w-full h-56"
                           />
                           <div className="flex flex-col flex-grow p-6">
                              <h3 className="mb-2 text-xl font-bold">{product.title}</h3>
                              <p className="mb-4 text-2xl font-extrabold text-blue-600">${product.price}</p>
                              <p className="flex-grow text-sm leading-relaxed text-gray-700 line-clamp-3">{product.description}</p>
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}