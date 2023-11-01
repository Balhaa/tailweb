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
                Biodata
              </p>
              <p className="mt-1 text-lg leading-8 text-gray-700">
                {" "}
                <br></br>➲ Nama saya : Iqbal Habibi. Umur saya 19 Tahun dan
                Sedang Belajar Di Universitas Muhammadiyah Purwokerto
              </p>{" "}
              <br></br>
              <p className="mt-1 text-lg leading-8 text-gray-700">
                ➲ Alamat Rumah : Desa Tambaksari Kec. Kedungreja Kab. Cilacap
              </p><br></br>
              <p className="mt-1 text-lg leading-8 text-gray-700">
                ➲ Contact : 085731629473
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-800 lg:max-w-none">
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
            src="https://img.freepik.com/free-vector/business-workplace-with-notebook_98292-5448.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=sph " 
          />
        </div>
      </div>
    </div>
  );
}
