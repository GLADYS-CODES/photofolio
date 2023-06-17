
import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/random?count=9&client_id=wzHpQ6ch1lTEqZL-qQoOimq8lKbVmYOry9Rku9-PuHg'
      );
      const data = await response.json();
      const formattedImages = data.map((image) => ({
        id: image.id,
        url: image.urls.regular,
        project: 'Project ' + image.id,
      }));
      setImages(formattedImages);
    } catch (error) {
      console.log('Error fetching images:', error);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="gallery bg-black min-h-screen p-4">
      <div className="gallery-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="card relative rounded overflow-hidden cursor-pointer hover:shadow-lg"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.url}
              alt={image.project}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="card-overlay absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <h3 className="text-white text-lg font-bold mb-2">{image.project}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="modal-content bg-white rounded p-4 flex flex-col items-center w-3/4">
            <img src={selectedImage.url} alt={selectedImage.project} className="w-full mb-4" />
            <div className="modal-info text-center">
              <h3 className="text-lg font-bold mb-2">{selectedImage.project}</h3>
            </div>
          </div>
          <button
            className="close-button absolute top-2 right-2 text-white text-lg font-semibold px-2 py-1 bg-green-500 rounded"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
        </div>
      )}
      <Footer />
    </div>
    
  );
};

export default Gallery;
