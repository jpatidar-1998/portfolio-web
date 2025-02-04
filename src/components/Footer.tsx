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
              href=""
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
              href=""
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href=""
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
            {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-stone-300 hover:text-blue-400 transition"
              >
                📌 {link}
              </a>
            ))}
          </div>
        </div>

        <p className="text-stone-400 text-sm mt-4">
          📄
          <a href="/privacy-policy" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          | © 2024 Jaya Patidar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
