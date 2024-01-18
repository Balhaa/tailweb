  /* eslint-disable no-unused-vars */
  /* eslint-disable jsx-a11y/img-redundant-alt */
  import React, { useState, useEffect } from 'react';
import DaftarImage from './DaftarImage.json'; // File JSON ini, yaitu DaftarImage.json, diimpor dan diakses menggunakan sintaks

const Imagegallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  // State ini digunakan untuk melacak indeks gambar yang sedang ditampilkan di galeri.
  const { images } = DaftarImage; // sintaknya  dan propertinya (images)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((nextIndex) => (nextIndex + 1) % images.length);
  };

  useEffect(() => {
    // Buat interval untuk mengganti warna border setiap 2 detik
    const intervalId = setInterval(() => {
      // Mendapatkan elemen gambar
      const imgElement = document.querySelector('.gallery-image');

      // Mendapatkan warna random
      const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

      // Mengatur warna border
      imgElement.style.borderColor = randomColor;
    }, 2000);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div className="image-gallery">
      <button className="arrow-button rounded-full bg-gray-800 text-white p-4 hover:bg-gray-600" onClick={handlePrev}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="photo-container w-82 h-82">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="gallery-image rounded-full w-full h-full object-cover border-4 transition duration-1000 ease-in-out" // Menambahkan transition
        />
      </div>
      <button className="arrow-button rounded-full bg-gray-900 text-white p-4 hover:bg-gray-600" onClick={handleNext}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Imagegallery;

  
