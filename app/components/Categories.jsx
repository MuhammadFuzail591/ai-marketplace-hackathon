"use client"



import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Categories = () => {
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchCategories = async () => {
         try {
            const res = await fetch('https://api.escuelajs.co/api/v1/categories');
            if (!res.ok) throw new Error('Failed to fetch categories');
            const data = await res.json();

            const valid = data.filter(cat =>
               cat.image &&
               cat.image.startsWith('https://') &&
               !cat.image.includes('placeimg') &&
               !cat.image.includes('pravatar') &&
               cat.name &&
               cat.name.length > 2
            );

            // Taking the first 12 to create a balanced grid on most screens
            setCategories(valid.slice(0, 12));
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCategories();
   }, []);

   if (loading) {
      return (
         <div className="mb-12 animate-pulse">
            <div className="w-1/3 h-8 mb-4 bg-gray-200 rounded" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
               {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-gray-200 rounded-lg aspect-square" />
               ))}
            </div>
         </div>
      );
   }

   if (error) {
      return (
         <div className="p-4 mb-12 text-center text-red-600 bg-red-100 border border-red-400 rounded-lg">
            <h2 className="mb-1 text-xl font-semibold">Error loading categories</h2>
            <p>{error}</p>
         </div>
      );
   }

   return (
      <div className="mb-12">
         <div className="mb-3">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
         </div>
         <div
            className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
         >
            {categories.map((cat) => (
               <CategoryCardd key={cat.id} category={cat} />
            ))}
         </div>
      </div>
   );
};

const CategoryCardd = ({ category }) => {
   return (
      <Link
         href={`/category/${category.id}/${category.name.toLowerCase()}`}
         className="block text-center transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
      >
         <div className="p-4">
            <div className="relative overflow-hidden bg-gray-100 rounded-md aspect-square ">
               <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
               />
            </div>
            <p className="py-2 text-sm font-semibold text-gray-700 truncate">
               {category.name}
            </p>
         </div>
      </Link>
   );
};

export default Categories;