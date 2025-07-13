'use client';
import Head from 'next/head';
import Link from 'next/link';
import { FaFacebookF, FaApple, FaInfoCircle } from 'react-icons/fa';

export default function SignInPage() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between">
      <Head>
        <title>eBay Sign In</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Arial&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: Arial, sans-serif;
          }
        `}</style>
      </Head>

      <header className="flex justify-between items-center p-4">
        {/* <img alt="eBay logo" className="object-contain" height="24" src="https://storage.googleapis.com/a1aa/image/e8fae77c-4d70-493e-04de-2b1696601d45.jpg" width="80"/> */}
        <div className="w-20 h-6 bg-gray-200 rounded"></div>
        <Link href="#" className="text-xs underline text-black hover:text-blue-700">
          Tell us what you think
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center px-4">
        <form action="#" className="w-full max-w-xs flex flex-col items-center space-y-3" method="POST">
          <h1 className="font-bold text-lg text-center">Sign in to your account</h1>
          <p className="text-xs text-center">
            New to eBay?{' '}
            <Link href="#" className="underline text-black hover:text-blue-700">
              Create account
            </Link>
          </p>
          
          <input
            autoComplete="username"
            className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            name="email"
            placeholder="Email or username"
            type="text"
          />
          
          <button
            className="w-full bg-[#2566eb] text-white font-semibold rounded-full py-3 text-sm hover:bg-[#1a4fcf] transition-colors"
            type="submit"
          >
            Continue
          </button>
          
          <div className="flex items-center w-full text-xs text-gray-600">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          
          <button
            className="w-full border border-gray-600 rounded-full py-3 px-4 flex items-center space-x-3 text-sm font-semibold hover:bg-gray-100 transition"
            type="button"
          >
            {/* <img alt="Google logo" className="object-contain" height="20" src="https://storage.googleapis.com/a1aa/image/03d5aa61-90d5-426a-e1a4-89bfa8ff1977.jpg" width="20"/> */}
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <span>Continue with Google</span>
          </button>
          
          <button
            className="w-full border border-gray-600 rounded-full py-3 px-4 flex items-center space-x-3 text-sm font-semibold hover:bg-gray-100 transition"
            type="button"
          >
            <FaFacebookF className="text-black text-lg" />
            <span>Continue with Facebook</span>
          </button>
          
          <button
            className="w-full border border-gray-600 rounded-full py-3 px-4 flex items-center space-x-3 text-sm font-semibold hover:bg-gray-100 transition"
            type="button"
          >
            <FaApple className="text-black text-lg" />
            <span>Continue with Apple</span>
          </button>
          
          <label className="flex items-center space-x-2 text-xs text-black mt-1" htmlFor="staySignedIn">
            <input
              checked
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-1"
              id="staySignedIn"
              name="staySignedIn"
              type="checkbox"
            />
            <span>Stay signed in</span>
            <FaInfoCircle
              aria-label="Information"
              className="text-xs text-black"
              title="Information"
            />
          </label>
        </form>
      </main>

      <footer className="text-[10px] text-center text-black py-3 px-2">
        <p className="max-w-full overflow-x-auto whitespace-nowrap">
          Copyright © 1995-2025 eBay Inc. All Rights Reserved.{' '}
          <Link href="#" className="underline hover:text-blue-700">
            Accessibility
          </Link>
          ,{' '}
          <Link href="#" className="underline hover:text-blue-700">
            User Agreement
          </Link>
          ,{' '}
          <Link href="#" className="underline hover:text-blue-700">
            Privacy
          </Link>
          ,{' '}
          <Link href="#" className="underline hover:text-blue-700">
            Consumer Health Data
          </Link>
          ,{' '}
          <Link href="#" className="underline hover:text-blue-700">
            Payments Terms of Use
          </Link>
          ,{' '}
          <Link href="#" className="underline hover:text-blue-700">
            Cookies
          </Link>
          ,{' '}
          <Link href="#" className="underline hover:text-blue-700">
            CA Privacy Notice
          </Link>
          ,{' '}
          <Link href="#" className="underline hover:text-blue-700">
            Your Privacy Choices{' '}
            {/* <img alt="Checkmark icon" className="inline-block ml-1" height="12" src="https://storage.googleapis.com/a1aa/image/26745e30-d98a-4b27-b880-8864a4b8a7bf.jpg" width="12"/> */}
            <span className="inline-block w-3 h-3 bg-gray-300 ml-1"></span>
          </Link>{' '}
          and{' '}
          <Link href="#" className="underline hover:text-blue-700">
            AdChoice{' '}
            <FaInfoCircle
              aria-label="Information"
              className="text-[10px] inline-block ml-1"
              title="Information"
            />
          </Link>
        </p>
      </footer>
    </div>
  );
}