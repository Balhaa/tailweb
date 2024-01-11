 import React, { useState, useEffect } from 'react';

const images = [
  'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  'https://img.freepik.com/free-photo/white-flower-with-yellow-center-is-reflected-reflective-surface_91008-569.jpg?size=626&ext=jpg&uid=R80913524&ga=GA1.1.1154042006.1698284187&semt=ais',
  'https://lzd-img-global.slatic.net/g/p/ee1ba0e177da4366c45b351ae376cef2.png_720x720q80.png',
  'https://img.freepik.com/free-photo/men-beige-long-sleeves-shirt-minimal-outfit_53876-96983.jpg?w=360&t=st=1698284416~exp=1698285016~hmac=18ca17063b5d2052f46e7954bfab70ab87fc2551ff26db491b379f38cdf8c04b',
  'https://shorturl.asia/K8VSl',
  'https://down-id.img.susercontent.com/file/a0566e4971eb065fddf4170af3fb989c',
  'https://shorturl.asia/aH7IW',
  'https://shorturl.asia/HG4ym',
  // Tambahkan URL gambar lain sesuai kebutuhan
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
      <button className="arrow-button" onClick={handlePrev}>
        <img src="https://cdn.discordapp.com/attachments/1169655452435492926/1193799589103415336/pa.jpg?ex=65ae0781&is=659b9281&hm=237534fcb9a00a403e076096613137992028b0fff114c7b9a6368962caf0a89d&" width={50} alt="Previous" />
      </button>
      <img class="photo photo-container"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="gallery-image"
      />
      <button className="arrow-button" onClick={handleNext}>
        <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/2/18/53d8e590-dd5f-4c24-9e1e-919d82a6990b.jpg" width={50} alt="Next" />
      </button>
    </div>
  );
};

export default Imagegallery;