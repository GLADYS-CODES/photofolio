import React from "react";

const GalleryCategory = ({ category, setCategory }) => {
  const categories = [
    { id: "nature", name: "Nature" },
    { id: "weddings", name: "Weddings" },
    { id: "sports", name: "Sports" },
    { id: "portraits", name: "Portraits" },
    { id: "animals", name: "Animals" },
  ];

  const handleCategoryChange = (id) => {
    setCategory(id);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${
            category.id === category ? "bg-green-500 text-white" : "bg-gray-700 text-white"
          } py-2 px-4 rounded-full focus:outline-none hover:bg-green-500 hover:text-white transition duration-500 ease-in-out`}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default GalleryCategory;
