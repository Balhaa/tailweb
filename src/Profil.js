import Navbar from "./Navbar";

import React from 'react';

function ProfilePage() {
  return (
    <div className="overflow-hidden bg-gray-300 py-24 sm:py-32">
      <Navbar />
      <div className="w-2/3 mx-auto mt-15 p-20 bg-green-200 rounded-lg shadow-lg">
        <div className="text-center">
          <img src="https://img.freepik.com/free-vector/business-workplace-with-notebook_98292-5448.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=sph" alt="Profil Foto" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h1 className="text-2xl font-bold">Iqbal Habibi</h1>
          <p className="text-gray-600">Mahasiswa Universitas Muhammadiyah Purwokerto</p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Tentang Saya</h2>
          <p className="text-gray-700">Umur saya 19 Tahun. Hobi Saya Bermain Tenis Meja dan Badminton.</p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Kontak</h2>
          <ul className="list-disc pl-6">
            <li>Email: Iqbalhabibi064@Gmail.com</li>
            <li>Contact: 085731629473</li>
            <li>Adress: Desa Tambaksari Kec. Kedungreja Kab. Cilacap.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
