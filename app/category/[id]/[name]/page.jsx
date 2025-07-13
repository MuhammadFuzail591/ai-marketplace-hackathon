'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryPage() {
   const { id, name } = useParams();
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   useEffect(() => {
      if (!id) return;
      const fetchProducts = async () => {
         try {
            const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`);
            if (!res.ok) throw new Error('Failed to fetch products');
            const data = await res.json();
            setProducts(data);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchProducts();
   }, [id]);

   return (
      <div className='min-h-screen bg-white'>
         <div className='px-4 py-6 mx-auto max-w-7xl'>
            <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
               {/* Sidebar */}
               <div className='w-full lg:w-64'>
                  <h1 className='mb-6 text-4xl font-bold text-gray-900 capitalize'>
                     {name}
                  </h1>
                  <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                     Shop by category
                  </h2>
                  <ul className='space-y-3'>
                     {['Accessories', 'Devices', 'Audio', 'Wearables'].map((cat, i) => (
                        <li key={i}>
                           <a href='#' className='block text-gray-700 hover:text-blue-600'>
                              {cat}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Main Content */}
               <div className='flex-1'>
                  {/* Hero Banner */}
                  <div className='relative mb-8 overflow-hidden rounded-lg bg-gradient-to-r from-purple-100 to-pink-100'>
                     <div className='absolute inset-0 bg-black bg-opacity-10'></div>
                     <div className='relative px-6 py-8 sm:px-12 sm:py-16'>
                        <div className='max-w-md'>
                           <h2 className='mb-4 text-2xl font-bold text-gray-900 sm:text-3xl'>
                              Explore {name} Deals
                           </h2>
                           <p className='mb-6 text-gray-700'>
                              Check out top-selling items in {name}
                           </p>
                           <button className='px-6 py-3 font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800'>
                              Shop Now
                           </button>
                        </div>
                     </div>
                     <div className='absolute top-0 right-0 hidden w-1/2 h-full sm:block'>
                        <Image
                           src='/api/placeholder/400/300'
                           alt='Category banner'
                           fill
                           style={{ objectFit: "cover" }}
                        />
                     </div>
                  </div>

                  {/* Listings */}
                  {loading ? (
                     <p>Loading products...</p>
                  ) : error ? (
                     <p className='text-red-500'>{error}</p>
                  ) : (
                     <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {products.map(product => (
                           <ProductCard product={product} key={product.id} />
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

const ProductCard = ({ product }) => {
   return (
      <Link
         href={`/product/${product.id}`}
         className="p-4 transition-shadow border rounded-lg hover:shadow-md"
      >
         <div className="relative w-full h-48 mb-4">
            <Image
               src={product.images?.[0]}
               alt={product.title}
               width={400}
               height={400}
               className='object-cover w-full h-full rounded-lg'
            />
         </div>
         <h3 className="mb-1 text-sm font-semibold text-gray-800 truncate">
            {product.title}
         </h3>
         <p className="text-lg font-semibold text-gray-600">${product.price}</p>
      </Link>
   );
};

{/* <div key={product.id} className='p-4 transition-shadow border rounded-lg hover:shadow-md'>
                              <div className="relative w-full h-48 mb-4">
                                 <Image
                                    src={product.images?.[0]}
                                    alt={product.title}
                                    width={400}
                                    height={400}
                                    className='object-cover w-full h-full rounded-lg'
                                 />
                              </div>
                              <h3 className='text-lg font-semibold text-gray-900'>{product.title}</h3>
                              <p className='mt-1 text-sm text-gray-600 truncate'>{product.description}</p>
                              <p className='mt-2 text-xl font-bold text-gray-900'>${product.price}</p>
                           </div> */}