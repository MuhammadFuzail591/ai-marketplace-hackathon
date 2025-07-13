'use client';
import Head from 'next/head';
import Link from 'next/link';
import { FaEye, FaChevronUp, FaInfoCircle } from 'react-icons/fa';

export default function SignUpPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>eBay Create Account</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
       
      </Head>

      <header className="flex justify-between items-center px-6 py-4 max-w-[1200px] mx-auto">
        <div className="flex items-center">
          {/* <img alt="eBay logo" className="object-contain" height="30" src="https://storage.googleapis.com/a1aa/image/0e65e8cc-ac93-4ff3-46da-3c5057e29074.jpg" width="90"/> */}
          <div className="w-[90px] h-[30px] bg-gray-200 rounded"></div>
        </div>
        <div className="text-sm text-gray-700">
          Already have an account?{' '}
          <Link href="#" className="underline hover:text-gray-900">
            Sign in
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-6 pb-12">
        <div className="md:flex-1 max-w-[600px] w-full">
          {/* <img alt="People smiling" className="rounded-2xl w-full h-auto object-cover" height="700" src="https://storage.googleapis.com/a1aa/image/94b22ab0-9497-4893-1a9f-5c983a2b2832.jpg" width="600"/> */}
          <div className="w-full h-[400px] md:h-[700px] bg-gray-200 rounded-2xl"></div>
        </div>

        <section className="md:flex-1 w-full max-w-md">
          <h1 className="text-2xl font-extrabold mb-6">Create an account</h1>
          
          <div className="flex border border-gray-400 rounded-full overflow-hidden w-full max-w-md mb-6 text-sm">
            <button className="bg-black text-white px-6 py-2 rounded-full flex-1 text-center font-normal" type="button">
              Personal
            </button>
            <button className="flex-1 text-gray-900 px-6 py-2 rounded-full border border-transparent hover:bg-gray-100" type="button">
              Business
            </button>
          </div>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                className="border border-gray-400 rounded-md px-4 py-3 w-full text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="First name"
                type="text"
              />
              <input
                className="border border-gray-400 rounded-md px-4 py-3 w-full text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Last name"
                type="text"
              />
            </div>
            
            <input
              className="border border-gray-400 rounded-md px-4 py-3 w-full text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Email"
              type="email"
            />
            
            <div className="relative">
              <input
                className="border border-gray-400 rounded-md px-4 py-3 w-full text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black pr-10"
                placeholder="Password"
                type="password"
              />
              <button aria-label="Toggle password visibility" className="absolute inset-y-0 right-3 flex items-center text-gray-600" type="button">
                <FaEye />
              </button>
            </div>
            
            <p className="text-xs text-gray-600 leading-tight">
              By selecting <strong>Create personal account</strong>, you agree to our{' '}
              <Link href="#" className="underline text-blue-600 hover:text-blue-800">
                User Agreement
              </Link>{' '}
              and acknowledge reading our{' '}
              <Link href="#" className="underline text-blue-600 hover:text-blue-800">
                User Privacy Notice
              </Link>.
            </p>
            
            <button className="w-full bg-gray-300 text-gray-700 font-semibold rounded-full py-3 mt-4 cursor-not-allowed" disabled type="submit">
              Create personal account
            </button>
          </form>

          <div className="flex items-center my-8 max-w-md">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-xs text-gray-700">or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex gap-4 max-w-md">
            <button className="flex items-center gap-2 border border-gray-400 rounded-full py-2 px-5 text-sm font-semibold hover:bg-gray-100" type="button">
              {/* <img alt="Google logo" className="w-5 h-5" height="20" src="https://storage.googleapis.com/a1aa/image/d7078832-85c8-4b77-9eb1-1fc113c22549.jpg" width="20"/> */}
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              Google
            </button>
            <button className="flex items-center gap-2 border border-gray-400 rounded-full py-2 px-5 text-sm font-semibold hover:bg-gray-100" type="button">
              {/* <img alt="Facebook logo" className="w-5 h-5" height="20" src="https://storage.googleapis.com/a1aa/image/7db87710-e8cf-47ac-8651-54f7e6121313.jpg" width="20"/> */}
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              Facebook
            </button>
            <button className="flex items-center gap-2 border border-gray-400 rounded-full py-2 px-5 text-sm font-semibold hover:bg-gray-100" type="button">
              {/* <img alt="Apple logo" className="w-5 h-5" height="20" src="https://storage.googleapis.com/a1aa/image/8d8a893e-99b4-4232-2ed4-a92526709238.jpg" width="20"/> */}
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              Apple
            </button>
          </div>
        </section>
      </main>

      <footer className="max-w-[1200px] mx-auto px-6 pb-6 text-[10px] text-gray-700 leading-tight">
        <p className="text-center">
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
            Your Privacy Choices
          </Link>{' '}
          and{' '}
          <Link href="#" className="underline hover:text-blue-700">
            AdChoice
          </Link>{' '}
          <FaInfoCircle className="inline text-[10px]" />
        </p>
      </footer>

      <button aria-label="Scroll to top" className="fixed bottom-6 right-6 bg-white border border-gray-300 rounded-full p-3 shadow-md hover:bg-gray-100">
        <FaChevronUp className="text-gray-700" />
      </button>
    </div>
  );
}