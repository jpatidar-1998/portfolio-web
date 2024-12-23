import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white h-screen p-7 flex justify-center items-center gap-8">
      <div className="flex w-[50%]">
        <p className="text-4xl">I'm Jaya</p>
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          quibusdam architecto suscipit doloremque quos et similique? Aut,
          beatae pariatur eius deserunt asperiores velit minima cumque iure
          assumenda expedita? Repudiandae, culpa!
        </p>
        <div className="flex gap-4">
          <button>lorem</button>
          <button>ipsum</button>
        </div>
      </div>
      <div className="w-[50%]">
        <img src="vite.svg" height="130px" width="130px" />
      </div>
    </section>
  );
};

export default HeroSection;
