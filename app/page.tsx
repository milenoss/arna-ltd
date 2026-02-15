import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 border-b">
        <div className="flex lg:flex-1">
          <span className="text-2xl font-bold tracking-tight text-gray-900">ARNA LTD</span>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Services</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Portfolio</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="tel:+" className="text-sm font-semibold leading-6 text-gray-900">Get a Quote &rarr;</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Precision Building & Expert Renovations
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Arna Ltd provides high-quality construction services across the UK. From luxury extensions to full-scale renovations, we build with precision and passion.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Start Your Project
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              View Work <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
