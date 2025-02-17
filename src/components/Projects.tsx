const projects = [
  {
    name: "Portfolio Website",
    description:
      "A sleek and modern portfolio showcasing my work, skills, and experience.",
    technologies: ["React.js", "Tailwind CSS"],
    image: "/portfolio-img.png",
    liveLink: " https://portfolio-web-green-three.vercel.app/",
    codeLink: "https://github.com/jpatidar-1998/portfolio-web"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-800 text-white sm:mt-10 md:mt-10 p-10 pt-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-fuchsia-400 sm:mb-10 md:mb-10">
        🚀 Showcasing My Best Work!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  🔗 View Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  🛠 View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
