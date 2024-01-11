/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
/**membuat import navbar dan  pannggilan navbar pada setiap halaman */
import Navbar from "./Navbar";
const products = [
  {
    id: 1,
    name: "Kaos Oblong",
    href: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rp. 50.000",
    color: "Black",
  },
  {
    id: 2,
    name: "Kaos Putih",
    href: "https://img.freepik.com/free-photo/white-flower-with-yellow-center-is-reflected-reflective-surface_91008-569.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=ais",
    imageSrc:
      "https://img.freepik.com/free-photo/white-flower-with-yellow-center-is-reflected-reflective-surface_91008-569.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=ais",
    price: "Rp. 75.000",
    color: "white",
  },

  {
    id: 3,
    name: "Celana Pria",
    href: "https://lzd-img-global.slatic.net/g/p/ee1ba0e177da4366c45b351ae376cef2.png_720x720q80.png",
    imageSrc:
      "https://lzd-img-global.slatic.net/g/p/ee1ba0e177da4366c45b351ae376cef2.png_720x720q80.png",
    price: "Rp. 150.000,00",
    color: "light blue",
  },
  {
    id: 4,
    name: "Celana pendek Pria",
    href: "https://img.freepik.com/free-photo/men-beige-long-sleeves-shirt-minimal-outfit_53876-96983.jpg?w=360&t=st=1698284416~exp=1698285016~hmac=18ca17063b5d2052f46e7954bfab70ab87fc2551ff26db491b379f38cdf8c04b",
    imageSrc:
      "https://img.freepik.com/free-photo/men-beige-long-sleeves-shirt-minimal-outfit_53876-96983.jpg?w=360&t=st=1698284416~exp=1698285016~hmac=18ca17063b5d2052f46e7954bfab70ab87fc2551ff26db491b379f38cdf8c04b",
    price: "Rp. 60.000,00",
    color: "white",
  },
  {
    id: 5,
    name: "Sajadah",
    href: "https://shorturl.asia/K8VSl",
    imageSrc:
      "https://shorturl.asia/K8VSl",
    price: "Rp. 180.000,00",
    color: "colorful",
  },
  {
    id: 6,
    name: "Songkok",
    href: "https://down-id.img.susercontent.com/file/a0566e4971eb065fddf4170af3fb989c",
    imageSrc:
      "https://down-id.img.susercontent.com/file/a0566e4971eb065fddf4170af3fb989c",
    price: "Rp. 50.000,00",
    color: "Hitam dengan motif menarik",
  },
  {
    id: 7,
    name: "Kemeja",
    href: "https://shorturl.asia/aH7IW",
    imageSrc:
      "https://shorturl.asia/aH7IW",
    price: "Rp. 150.000,00",
    color: "Bercorak "
  },
  {
    id: 8,
    name: "Perlengkapan Bayi",
    href: "https://shorturl.asia/HG4ym",
    imageSrc:
      "https://shorturl.asia/HG4ym",
    price: "Harga menyesuaikan",
  },

  // More products dan warna bg dibawahnya ini
];

export default function Example() {
  return (
    <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-400 overflow-hidden py-24 sm:py-15 "> 
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Silahkan Memilih Produk :
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
