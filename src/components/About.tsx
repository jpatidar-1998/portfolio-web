import { FaGraduationCap, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-stone-700 text-white text-left mt-10 px-10 py-10 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="mb-10">
          <h2 className="flex items-center text-2xl font-bold">👩‍💻 About Me</h2>
          <p className="font-normal mt-4 text-stone-300 leading-relaxed">
            Hello! I’m <b>Jaya Patidar</b>, a passionate Frontend Developer with
            a knack for creating intuitive, responsive, and user-friendly web
            applications. With expertise in{" "}
            <b>JavaScript, TypeScript, React.js, and Next.js</b>, I focus on
            delivering seamless digital experiences that make an impact. My goal
            is to constantly learn and innovate, transforming ideas into elegant
            solutions.
          </p>
          <p className="font-semibold mt-4 text-lg text-blue-400">
            🚀 Let's connect and build something amazing together!
          </p>
        </div>

        <hr className="border-stone-500 mb-6" />

        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            🎓 Education
          </h2>
          <div className="mt-4 space-y-4">
            <div className="p-5 bg-stone-800 rounded-lg shadow-md hover:scale-105 transition transform">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <FaGraduationCap /> Acropolis Institute of Technology and
                Research, Indore
              </h3>
              <p className="text-stone-300">2019 – 2023 | 📊 CGPA: 7.89</p>
              <div className="w-full bg-stone-600 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "79%" }}
                ></div>
              </div>
            </div>

            <div className="p-5 bg-stone-800 rounded-lg shadow-md hover:scale-105 transition transform">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <FaGraduationCap /> Kendriya Vidyalaya, Dewas
              </h3>
              <p className="text-stone-300">Class XII | 📊 Percentage: 62.6%</p>
              <div className="w-full bg-stone-600 rounded-full h-2.5 mt-2">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "63%" }}
                ></div>
              </div>
            </div>

            <div className="p-5 bg-stone-800 rounded-lg shadow-md hover:scale-105 transition transform">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <FaGraduationCap /> Kendriya Vidyalaya, Dewas
              </h3>
              <p className="text-stone-300">Class X | 📊 Percentage: 87.4%</p>
              <div className="w-full bg-stone-600 rounded-full h-2.5 mt-2">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/Jaya-Patidar-2-2.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 rounded-lg shadow-md text-white hover:bg-blue-500 transition-transform transform hover:scale-105"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
