import Navbar from "./Navbar";

import React from 'react';

function ProfilePage() {
  const phoneNumber = "6285731629473"; // Nomor WhatsApp Anda tanpa tanda '+' dan '0'

  const handleSendMessage = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappURL;
  };

  return (
    <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-400 overflow-hidden py-24 sm:py-40">
      <Navbar />
      <div className="w-2/3 mx-auto mt-10 p-8 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-lg shadow-lg">

        <div className="text-center">
          <img
            src="https://img.freepik.com/free-vector/business-workplace-with-notebook_98292-5448.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=sph"
            alt="Profil Foto"
            className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-green-500"
          />
          <h1 className="text-3xl font-bold text-gray-800">Iqbal Habibi</h1>
          <p className="text-gray-600">Mahasiswa Universitas Muhammadiyah Purwokerto</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Tentang Saya</h2>
          <p className="text-gray-700">Umur saya 19 Tahun. Hobi Saya Bermain Tenis Meja dan Badminton.</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Kontak</h2>
          <ul className="list-disc pl-6">
            <li>Email: iqbalhabibi064@gmail.com</li>
            <li>Contact: 0857-3162-9473</li>
            <li>Alamat: Desa Tambaksari Kec. Kedungreja Kab. Cilacap.</li>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSendMessage}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Kirim Pesan WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;