import React, { useEffect, useState } from 'react';
//import Navbar from './Navbar';
import './Home.css';
const ACCESS_KEY = 'wzHpQ6ch1lTEqZL-qQoOimq8lKbVmYOry9Rku9-PuHg';

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(`https://api.unsplash.com/photos/?client_id=${wzHpQ6ch1lTEqZL-qQoOimq8lKbVmYOry9Rku9-PuHg}`);
      const data = await response.json();
      setPhotos(data);
    }
    fetchPhotos();
  }, []);

  return (
    <div className="bg-black">
      
      <div className="bg-black py-20">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            I'm Jenny Wilson,
          </h1>
          <h2 className="text-3xl font-bold mb-8">
            A Professional Photographer from New York
          </h2>
          <a href="#portfolio" className="bg-green-500 py-3 px-8 rounded-full hover:bg-green-600">
            Available for Hire
          </a>
        </div>
      </div>
      <div id="portfolio" className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 image-container">
              <img src={photo.urls.regular} alt={photo.alt_description} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{photo.alt_description}</h3>
                <p className="text-gray-700">{photo.user.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

