'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AISearch() {
   const [query, setQuery] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);

      try {
         // Fetch the full product data (this endpoint must be implemented by you)
         // Alternatively, if you already have the product data in context, you can pass that instead.
         const productsRes = await fetch('/api/products');
         if (!productsRes.ok) {
            throw new Error('Failed to fetch products data');
         }
         const products = await productsRes.json();

         // Send query and products data to your AI Search backend that wraps Gemini API
         const res = await fetch('/api/ai-search', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               query,
               products
            })
         });

         const data = await res.json();
         if (!res.ok) {
            throw new Error(data.error || 'AI search failed');
         }

         // Expected response: { relevantProductIds: [/* product IDs */] }
         const ids = data.relevantProductIds;

         // Navigate to the search results page with the IDs (comma separated)
         router.push(`/search-results?ids=${ids.join(',')}`);
      } catch (err) {
         setError(err.message);
         console.error(err);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="max-w-xl px-6 py-8 mx-auto bg-white shadow-lg rounded-xl">
         <h2 className="mb-4 text-2xl font-bold text-gray-800">AI Product Search</h2>
         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
               type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder="Search for products..."
               className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
               required
            />
            <button
               type="submit"
               disabled={loading}
               className="px-4 py-2 font-semibold text-white transition-colors bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
            >
               {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
         </form>
      </div>
   );
}
