import Navbar from './Navbar'
import React from 'react';
import ImageGallery from './ImageGallery';

export default function Example() {
  return (
    <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-400 overflow-hidden py-24 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Konten tambahan, sesuaikan sesuai kebutuhan */}
      </div>

      {/* Navbar */}
      <Navbar />

      <div className="mt-5 flex items-center justify-center">
        {/* ImageGallery */}
        <div className="mt-[-50px]">
          <ImageGallery />
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 text-green-600">
        {/* Konten teks, sesuaikan sesuai kebutuhan */}
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="https://www.instagram.com/reel/CnLXsxdBnBT/?utm_source=ig_web_copy_link"
          className="text-sm font-semibold leading-6 text-green-900 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition duration-300"
        >
          Follow us on Instagram <span aria-hidden="true">→</span>
        </a>
        <a
          href="https://linktr.ee/esagrosir_sidareja"
          className="text-sm font-semibold leading-6 text-green-900 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition duration-300"
        >
          Hubungi Kami <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}