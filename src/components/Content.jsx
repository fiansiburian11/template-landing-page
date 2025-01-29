"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Kategori from "./Kategori";

export default function Content() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("failed to fecth data", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory.toLowerCase());

  return (
    <div>
      <main className="pt-10">
        <section className="min-h-screen bg-gradient-to-r from-red-500 to-blue-500 pt-10">
          <div className="mx-4">
            <Kategori onSelectedCategory={setSelectedCategory} />
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 pt-2">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white p-1 shadow-lg hover:shadow-xl flex flex-col justify-between">
                    <img className="w-[200px] h-[200px] object-cover rounded-md" src={product.image} alt={product.title} />
                    <h1 className="text-black text-sm font-semibold flex-grow">{product.title}</h1>
                    <div className="self-end">
                      <p className="text-gray-700 text-xs">Rate: {product.rating.rate}</p>
                      <p className="text-gray-700 text-xs">Price: ${product.price}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-6 text-white font-bold">Produk tidak ditemukan</p>
              )}
            </div>
          </div>
        </section>

        <section id="project" className="h-screen bg-gradient-to-r from-purple-500 to-indigo-900 flex items-center justify-center space-x-5">
          <button data-aos="fade-right" className="sm:text-xs md:text-lg lg:text-2xl sm:p-1 md:p-3 lg:p-5 font-bold text-white border-2 p-2 rounded-full hover:shadow-lg">
            More content
          </button>
          <button data-aos="fade-up" className="sm:text-xs md:text-lg lg:text-2xl sm:p-1 md:p-3 lg:p-5 font-bold bg-gradient-to-r from-blue-700 to-sky-900 border-2 p-2 rounded-full hover:shadow-lg">
            More content
          </button>
          <div data-aos="fade-left" className="relative inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 to-gray-500">
            <div className="rounded-full bg-black/30 p-1 sm:p-1 md:p-3 lg:p-5 hover:shadow-lg">
              <button className="sm:text-xs md:text-lg lg:text-2xl text-white font-bold rounded-full border border-transparent">More content</button>
            </div>
          </div>
        </section>

        <section id="contact" className="h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
          <button data-aos="flip-up" className="bg-black p-3 rounded-lg sm:text-xs md:text-lg lg:text-2xl hover:shadow-2xl font-bold text-white">
            Even more content
          </button>
        </section>
      </main>
    </div>
  );
}
