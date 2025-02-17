import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-700 text-white p-10 pt-20 flex flex-col items-center">
      <h2 className="text-3xl font-bold my-6">📞 Get in Touch</h2>

      <div className="text-center mb-8">
        <p className="text-lg">
          Let's connect! Feel free to reach out for collaboration or job
          opportunities.
        </p>
        <p className="mt-4 flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-red-400" /> Based in Dewas, Madhya
          Pradesh
        </p>
      </div>

      <div className="flex gap-6 text-2xl mb-8">
        <a
          href="mailto:jayapatidar459@gmail.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/jaya-patidar-39b7381aa"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/jpatidar-1998"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
      </div>

      <div className="w-full max-w-md bg-stone-800 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">✉️ Send Me a Message</h3>
        {status && <p className="mb-4 text-center text-yellow-300">{status}</p>}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 bg-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 bg-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 bg-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="p-3 bg-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-3 rounded-lg transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>

      <div className="w-full max-w-md mt-10">
        <iframe
          title="Dewas Location"
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29351.01214621009!2d76.03443050000001!3d22.963679450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcf60a16e795%3A0xf2bd8c9d3b0c36f4!2sDewas%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1648669984090!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
