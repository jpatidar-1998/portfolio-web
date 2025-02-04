import { FaReact, FaJs, FaGitAlt, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiWebpack,
  SiVite
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    level: "90%"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    level: "80%"
  },
  {
    name: "React.js",
    icon: <FaReact className="text-blue-400" />,
    level: "90%"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-400" />,
    level: "80%"
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    level: "80%"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    level: "95%"
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-orange-500" />,
    level: "90%"
  },
  { name: "Azure", icon: <FaCloud className="text-blue-600" />, level: "75%" },
  {
    name: "Webpack",
    icon: <SiWebpack className="text-blue-400" />,
    level: "80%"
  },
  { name: "Vite", icon: <SiVite className="text-purple-400" />, level: "90%" }
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-stone-700 text-white p-10 pt-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">🛠️ Technical Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-stone-800 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            {/* Icon */}
            <div className="text-3xl">{skill.icon}</div>

            {/* Skill Details */}
            <div className="w-full">
              <p className="text-lg font-semibold">{skill.name}</p>
              <div className="w-full bg-stone-600 rounded-full h-2.5 mt-2">
                <div
                  className="bg-cyan-400 h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
