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
      <main className="pt-12">
        <section className="h-screen bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
          <p data-aos="zoom-in-up" className="text-4xl font-bold text-white">
            Welcome to My Website
          </p>
        </section>
        <section id="project" className="h-screen bg-gradient-to-r from-purple-500 to-indigo-900 flex items-center justify-center space-x-10">
          <p data-aos="fade-right" className="text-4xl font-bold text-white bg-none border-4 p-5 rounded-full hover:shadow-lg cursor-pointer">
            More content
          </p>
          <p data-aos="fade-up" className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-sky-900 border-4 p-5 rounded-full hover:shadow-lg cursor-pointer">
            More content
          </p>
          <div data-aos="fade-left" className="relative inline-block p-1 rounded-full bg-gradient-to-r from-purple-500 to-gray-500">
            <div className="rounded-full bg-white/30 p-5 hover:shadow-lg">
              <button className="bg-transparent text-white text-4xl font-bold rounded-full border border-transparent ">More content</button>
            </div>
          </div>
        </section>
        <section id="contact" className="h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
          <button data-aos="flip-up" className="bg-black  p-5 rounded-lg hover:shadow-2xl text-4xl font-bold text-white ">
            Even more content
          </button>
        </section>
      </main>
    </div>
  );
}
