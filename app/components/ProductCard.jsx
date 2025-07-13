import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
   return (
      <Link
         href={`/product/${product.title}`}
         className="flex flex-col overflow-hidden transition-transform duration-300 bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl"
      >
         <div className="relative w-full h-56">
            <Image
               src={product.images?.[0] || '/placeholder.png'}
               alt={product.title}
               fill
               className="object-cover w-full h-full"
            />
         </div>
         <div className="flex flex-col flex-grow p-6">
            <h3 className="mb-2 text-xl font-bold text-black">{product.title}</h3>
            <p className="mb-4 text-2xl font-extrabold text-blue-600">${product.price}</p>
            <p className="flex-grow text-sm leading-relaxed text-gray-700 line-clamp-3">
               {product.description}
            </p>
         </div>
      </Link>
   );
};

export default ProductCard;