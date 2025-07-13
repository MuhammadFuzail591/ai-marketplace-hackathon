'use client';

import { useState } from 'react';
import { GoogleGenerativeAI, createUserContent, createPartFromUri } from "@google/generative-ai";
import { LoadingSpinner } from '../components/AiSearch';

// Initialize with the correct class and your API key
const genAI = new GoogleGenerativeAI("AIzaSyA0PYUazS1UvN837JHh_2JuzOwncE_3ZCo");

async function fileToGenerativePart(file) {
   const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
   });
   return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
   };
}

export default function SellerPage() {
   const [productImageFile, setProductImageFile] = useState(null);
   const [productImageUrl, setProductImageUrl] = useState('');
   const [userPrompt, setUserPrompt] = useState(''); // State for the user's text prompt
   const [productDetails, setProductDetails] = useState({
      title: '',
      category: '',
      description: '',
      price: '',
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [status, setStatus] = useState('');

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setProductImageFile(file);
         setProductImageUrl(URL.createObjectURL(file));
         setError('');
         // Reset details when a new image is selected
         setProductDetails({ title: '', category: '', description: '', price: '' });
      }
   };

   const generateProductDetails = async () => {
      if (!productImageFile) {
         setError('Please select an image first.');
         return;
      }
      setLoading(true);
      setError('');

      try {
         // Use the 'gemini-pro-vision' model which is optimized for this
         const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
         const imagePart = await fileToGenerativePart(productImageFile);
         // const prompt = `Based on the image of the product, suggest a product title, category, description, and price. Provide the response as a clean JSON object with keys: "title", "category", "description", and "price".`;


         let finalPrompt = `Based on the image of the product, suggest a product title, category, description, and price.`;
         if (userPrompt) {
            finalPrompt += ` Also, consider these important details provided by the user: "${userPrompt}".`;
         }
         finalPrompt += ` Provide the response as a clean JSON object with keys: "title", "category", "description", and "price".`;
         const result = await model.generateContent([finalPrompt, imagePart]);
         const response = await result.response;
         const text = response.text();

         const jsonString = text.replace(/```json/g, '').replace(/```/g, '').trim();
         const parsedDetails = JSON.parse(jsonString);

         setProductDetails(parsedDetails);

      } catch (err) {
         console.error("API Error:", err);
         setError('Failed to generate product details. Please try again.');
      } finally {
         setLoading(false);
      }
   };
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProductDetails((prevDetails) => ({
         ...prevDetails,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitting product:', { ...productDetails, imageName: productImageFile.name });
      alert('Product submitted! Check the console for the final data.');
   };

   return (
      <div className="flex flex-col items-center min-h-screen py-10 text-black bg-gray-50">
         <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md">
            <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">
               Sell Your Product with AI
            </h1>

            {/* Step 1: Image Upload */}
            <div className="mb-6">
               <label htmlFor="product-image" className="block mb-2 text-lg font-semibold text-gray-700">
                  1. Upload a Product Image
               </label>
               <input
                  id="product-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
               />
            </div>

            {productImageUrl && (
               <div className="mb-6 text-center">
                  <img
                     src={productImageUrl}
                     alt="Product Preview"
                     className="max-w-xs mx-auto rounded-lg shadow-sm"
                  />
               </div>
            )}

            {/* Step 2: User Prompt */}
            <div className="mb-6">
               <label htmlFor="user-prompt" className="block mb-2 text-lg font-semibold text-gray-700">
                  2. Add Extra Details (Optional)
               </label>
               <textarea
                  id="user-prompt"
                  name="user-prompt"
                  rows="3"
                  className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="e.g., 'This is a handmade leather wallet, brand new.' or 'The brand is Acme, model X. Slightly used.'"
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
               />
            </div>

            {/* Step 3: Generate */}
            <div className="mb-6 text-center">
               <h2 className="block mb-2 text-lg font-semibold text-gray-700">
                  3. Let AI Suggest the Rest
               </h2>
               <button
                  onClick={generateProductDetails}
                  disabled={loading || !productImageFile}
                  className="px-6 py-3 font-medium text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
               >
                  {loading ? <LoadingSpinner className="w-6 h-6" /> : 'Generate with AI'}
               </button>
            </div>

            {error && <p className="mb-4 text-center text-red-500">{error}</p>}

            {/* Step 4: Review and Submit */}
            <form onSubmit={handleSubmit} className="pt-6 border-t">
               <div className="space-y-4">
                  <div>
                     <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                     <input type="text" name="title" id="title" value={productDetails.title} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                  </div>
                  <div>
                     <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                     <input type="text" name="category" id="category" value={productDetails.category} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                  </div>
                  <div>
                     <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                     <textarea name="description" id="description" rows="4" value={productDetails.description} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
                  </div>
                  <div>
                     <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                     <input type="text" name="price" id="price" value={productDetails.price} onChange={handleInputChange} className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                  </div>
               </div>
               <div className="mt-8 text-center">
                  <button type="submit" className="w-full px-8 py-3 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 disabled:bg-gray-400" disabled={!productDetails.title}>
                     Upload Product
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}