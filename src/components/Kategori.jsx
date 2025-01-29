import React, { useState } from "react";

export default function Kategori({ onSelectedCategory }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Men's clothing", "Women's clothing", "Jewelery", "Electronics"];

  const handleFilter = (category) => {
    setSelectedCategory(category);
    onSelectedCategory(category);
  };

  return (
    <div className="bg-white text-black p-5">
      <h1 className="font-bold">Kategori</h1>
      <ul className="flex divide-x divide-gray-400 border border-gray-400 mt-1 text-center">
        {categories.map((category) => (
          <li key={category} className={`px-4 py-2 w-full hover:bg-slate-300 cursor-pointer ${selectedCategory === category ? "bg-gray-300 font-bold" : ""}`} onClick={() => handleFilter(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
