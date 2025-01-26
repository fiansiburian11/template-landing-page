"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Content() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <main className="pt-10">
        <section className="h-screen bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
          <p data-aos="zoom-in-up" className="text-sm sm:text-xs md:text-lg lg:text-2xl font-bold text-white text-center">
            Welcome to My Website
          </p>
        </section>
        <section id="project" className="h-screen bg-gradient-to-r from-purple-500 to-indigo-900 flex items-center justify-center space-x-5">
          <button data-aos="fade-right" className="sm:text-xs md:text-lg lg:text-2xl sm:p-1 md:p-3 lg:p-5 text-xs font-bold text-white bg-none border-2 p-2 rounded-full hover:shadow-lg ">
            More content
          </button>
          <button data-aos="fade-up" className="sm:text-xs md:text-lg lg:text-2xl sm:p-1 md:p-3 lg:p-5 text-xs font-bold bg-gradient-to-r from-blue-700 to-sky-900 border-2 p-2 rounded-full hover:shadow-lg ">
            More content
          </button>
          <div data-aos="fade-left" className="relative inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 to-gray-500">
            <div className="rounded-full bg-black/30 p-1 sm:p-1 md:p-3 lg:p-5 hover:shadow-lg">
              <button className="sm:text-xs md:text-lg lg:text-2xl  text-white text-xs font-bold rounded-full border border-transparent ">More content</button>
            </div>
          </div>
        </section>
        <section id="contact" className="h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
          <button data-aos="flip-up" className="bg-black  p-3 rounded-lg sm:text-xs md:text-lg lg:text-2xl hover:shadow-2xl text-xs font-bold text-white ">
            Even more content
          </button>
        </section>
      </main>
    </div>
  );
}
