import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import Navbar from "./Navbar";
const features = [];

export default function Example() {
  return (
    <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-400 overflow-hidden py-24 sm:py-40">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tentang Toko
              </p>
              <p className="mt-1 text-lg leading-8 text-gray-700">
                <br />
                ➲ Toko Esa Grosir Sidareja adalah sebuah toko yang menjual
                berbagai macam produk, seperti pakaian jadi, perlengkapan bayi,
                perlengkapan pengantin, dan perlengkapan ibadah. Toko ini juga
                memiliki akun online di Instagram dan Facebook, di mana Anda
                bisa melihat dan membeli produk-produknya secara mudah dan
                cepat.
              </p>
              <br />
              <p className="mt-1 text-lg leading-8 text-gray-700">
                ➲ Toko Esa Grosir berlokasi di Jl. Kedungreja-Pangandaran,
                Sidareja, Kabupaten Cilacap, Jawa Tengah 53261.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/premium-photo/interior-shot-racks-with-shirts-undershirts-jeans_88135-5869.jpg?w=996"
              alt="Product screenshot"
              className="w-full max-h-[400px] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

