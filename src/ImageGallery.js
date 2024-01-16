/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
 import React, { useState, useEffect } from 'react';

const images = [
  'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  'https://img.freepik.com/free-photo/white-flower-with-yellow-center-is-reflected-reflective-surface_91008-569.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=ais',
  'https://lzd-img-global.slatic.net/g/p/ee1ba0e177da4366c45b351ae376cef2.png_720x720q80.png',
  'https://img.freepik.com/free-photo/men-beige-long-sleeves-shirt-minimal-outfit_53876-96983.jpg?w=360&t=st=1698284416~exp=1698285016~hmac=18ca17063b5d2052f46e7954bfab70ab87fc2551ff26db491b379f38cdf8c04b',
  'https://images.pexels.com/photos/7820362/pexels-photo-7820362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://down-id.img.susercontent.com/file/e702e754a4db4db3a1ccfef3d70a7233',
  'https://media.istockphoto.com/id/1041286784/id/foto/deretan-kemeja-pria-dengan-warna-biru-di-gantungan.jpg?s=170667a&w=0&k=20&c=f39cOvEi01qznfgdxk1TP8-HfUIDopUzEF-8ZIONQYk=',
  'https://img.freepik.com/free-photo/baby-elementson-light-blue-background_1220-4300.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=ais',
  'https://img.freepik.com/premium-psd/canvas-bucket-hat-mockup-template_185216-380.jpg?w=740',
  'https://img.freepik.com/free-psd/cap-mock-up-lateral-view_1310-154.jpg?w=996&t=st=1705395242~exp=1705395842~hmac=a4e06d0295dfa71fa2f014426cd4be0c8519dc0eb5e14a00fe73b8305af74e40',
  'https://img.freepik.com/free-photo/second-hand-market-with-vintage-pants_23-2149338408.jpg?w=360&t=st=1705395352~exp=1705395952~hmac=14fd7154b9eaee6d4e6071eeee259ddf458d42d74fb2ac08c4ab4dae0ea20aa9',
  'https://img.freepik.com/free-photo/white-hoodie-rear-view-minimal-fashion-apparel_1409-5204.jpg?t=st=1705395767~exp=1705399367~hmac=c472e17af8eb3c307caddd8bc075a85ed7286a5393b426778c4a8c44b9c631dd&w=996',

];

const Imagegallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((NextIndex) => (NextIndex + 1) % images.length);
  };

 //mutar otomatis

 return (
    <div className="image-gallery">
      <button className="arrow-button rounded-full bg-gray-800 text-white p-4 hover:bg-gray-600" onClick={handlePrev}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="photo-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="gallery-image rounded-full w-82 h-82" // Ubah ukuran sesuai kebutuhan Anda (misalnya, 32x32)
        />
      </div>
      <button className="arrow-button rounded-full bg-gray-900 text-white p-4 hover:bg-gray-600" onClick={handleNext}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}; // rounded full digunakan agar tampilan dalam bentuk lingkaran

export default Imagegallery;