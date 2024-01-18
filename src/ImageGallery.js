  /* eslint-disable no-unused-vars */
  /* eslint-disable jsx-a11y/img-redundant-alt */
  import React, { useState, useEffect } from 'react';
  import DaftarImage from './DaftarImage.json'; // File JSON ini, yaitu DaftarImage.json, diimpor dan diakses menggunakan sintaks

  const Imagegallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // State ini digunakan untuk melacak indeks gambar yang sedang ditampilkan di galeri.
    const { images } = DaftarImage; // sintaknya  dan propertinya (images)

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
      setCurrentIndex((nextIndex) => (nextIndex + 1) % images.length);
    };

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
      className="gallery-image rounded-full w-full h-full object-cover"
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
