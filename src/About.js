import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import Navbar from "./Navbar";
const features = [];

export default function Example() {
  return (
    <div className="overflow-hidden bg-gray-300 py-24 sm:py-32">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {" "}
                Tentang Toko
              </p>
              <p className="mt-1 text-lg leading-8 text-gray-700">
                {" "}
                <br></br>➲ Toko Esa Grosir Sidareja adalah Sebuah toko yang
                menjual berbagai macam produk, seperti pakaian jadi,
                perlengkapan bayi, perlengkapan pengantin, dan Perlengkapan
                Ibadah. Toko ini juga memiliki akun online di Instagram dan
                Facebook, di mana Anda bisa melihat dan membeli produk-produknya
                secara mudah dan cepat.
              </p>{" "}
              <br></br>
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
          <img
  src="https://lh3.googleusercontent.com/p/AF1QipO1aKIUjGkJUSN_KDaFP51tViMO0V32fgkrSKIO=s680-w680-h510"
  alt="Product screenshot"
  width="500"
  height="600"
  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
/>

        </div>
      </div>
    </div>
  );
}
