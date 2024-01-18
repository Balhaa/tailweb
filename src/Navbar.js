import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: 'Product' },
  { name: 'About', href: 'About' },
  { name: 'Profil', href: 'Profil' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Ini adalah penggunaan state dengan hook useState. 
  // State ini digunakan untuk mengontrol apakah menu mobile (navbar pada tampilan layar kecil) sedang terbuka atau tidak.
  
  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-gray-800">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            {/* Your company logo */}
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-9"
                src="https://cdn.discordapp.com/attachments/1134473536459772005/1167305303331717200/11zon_cropped-transformed.png?ex=654da4c7&is=653b2fc7&hm=2242eb01ae0bb56bc005e53a929c2568536eeb3c0bb00321451cb6253985755e&"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Assuming Bars3Icon is a valid component */}
              {/* Replace Bars3Icon with your actual icon component */}
              {/* Make sure you have imported the Bars3Icon component */}
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {/* Your navigation links */}
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          {/* More desktop links */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="Product" className="text-sm font-semibold leading-6 text-green-900">
              {/* Your link content */}
              <span aria-hidden="true"></span>
            </a>
          </div>
          {/* Search bar */}
          <div className="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            {/* Search icon */}
            <div className="grid place-items-center h-full w-12 text-green-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* Search input */}
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Cari Sesuatu disini "
            />
          </div>
        </nav>
        {/* Mobile menu dialog */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          {/* Your mobile menu content */}
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* Your mobile menu content */}
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* The rest of your content goes here */}
    </div>
  );
}
