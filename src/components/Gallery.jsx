
import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("nature");

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${category}&per_page=6&client_id=wzHpQ6ch1lTEqZL-qQoOimq8lKbVmYOry9Rku9-PuHg`
      );
      setImages(response.data.results);
    };
    fetchImages();
  }, [category]);

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Gallery
      </h2>
      <div className="flex justify-center mb-10">
        <GalleryCategory
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <GalleryCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
