'use client';
import Head from 'next/head';
import Link from 'next/link';

export default function SellLayout({ children }) {
  return (
    <div className="font-sans text-black bg-white min-h-screen">
      <Head>
        <title>eBay Seller Hub</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>


      {/* Page Content */}
      {children}
    </div>
  );
}