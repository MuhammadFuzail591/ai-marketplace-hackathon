// app/product/[id]/page.tsx
import { notFound } from 'next/navigation';

async function getProduct(id) {
   const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
   if (!res.ok) return null;
   return res.json();
}

export default async function ProductDetailsPage({ params }) {
   const product = await getProduct(params.id);

   if (!product) return notFound();

   return (
      <div className="max-w-5xl min-h-screen px-4 py-10 mx-auto bg-white">
         <div className="grid gap-8 lg:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
               <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="object-cover w-full h-auto"
               />
            </div>

            {/* Info */}
            <div className="space-y-4">
               <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
               <p className="text-lg text-gray-700">${product.price}</p>
               <p className="text-gray-600">{product.description}</p>

               <div>
                  <button className="px-6 py-3 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
