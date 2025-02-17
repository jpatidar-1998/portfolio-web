import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white p-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h3 className="text-xl font-semibold">🔗 Stay Connected</h3>
          <p className="text-stone-300">
            Let's connect and build something amazing together!
          </p>
          <div className="flex flex-wrap gap-4 mt-3">
            <a
              href="https://portfolio-web-green-three.vercel.app/"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <FaGlobe /> Website
            </a>
            <a
              href="mailto:jayapatidar459@gmail.com"
              className="flex items-center gap-2 hover:text-red-400 transition"
            >
              <FaEnvelope /> Email
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jaya-patidar-39b7381aa"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/jpatidar-1998"
              className="flex items-center gap-2 hover:text-gray-400 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        <hr className="border-stone-700 my-4" />

        <div className="mb-4">
          <h3 className="text-xl font-semibold">📜 Quick Links</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
              { name: "Projects", url: "/projects" },
              { name: "Skills", url: "/skills" },
              { name: "Contact", url: "/contact" }
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-stone-300 hover:text-blue-400 transition"
              >
                📌 {link.name}
              </a>
            ))}
          </div>
        </div>

        <p className="text-stone-400 text-sm mt-4">
          Copyright © 2024 Jaya Patidar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
