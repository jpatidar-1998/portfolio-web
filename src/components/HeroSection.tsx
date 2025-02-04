import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-stone-800 text-white p-10">
      <div className="flex items-center w-full max-w-5xl flex-col sm:flex-col md:flex-row">
        <div className="w-full md:w-3/5 p-2 md:p-8">
          <p className="font-bold sm:text-xl md:text-3xl">👋 Hi, I'm Jaya Patidar!</p>
          <p className="font-semibold sm:text-lg md:text-xl mt-3 text-stone-300">
            🚀 Frontend Developer | JavaScript & React Enthusiast
          </p>
          <p className="font-normal mt-3 text-stone-400 leading-relaxed">
            I specialize in building intuitive, responsive, and scalable web
            applications using modern technologies like React.js, Next.js, and
            TypeScript. Passionate about crafting seamless user experiences and
            solving complex problems with clean, efficient code.
          </p>
          <p className="text-stone-400 mt-3">
            📍 Based in Dewas, Madhya Pradesh | Available for Freelance &
            Full-time opportunities
          </p>
          <p className="text-stone-400">
            💡 Let's build something amazing together!
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-500">
            View My Work
          </button>
        </div>

        <div className="w-2/5 my-4 md:mt-0 flex justify-center">
          <img
            src="Avatar.jpg"
            alt="Jaya Patidar"
            className="h-48 w-48 object-cover rounded-full border-4 border-stone-600 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
