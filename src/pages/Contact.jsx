import PageLayout from './PageLayout';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <PageLayout title="Contact">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300">
          I'd love to hear from you — whether it's a project, opportunity, or just to connect.
        </p>

        <div className="flex justify-center gap-8 text-3xl sm:text-4xl text-gray-600 dark:text-gray-300 py-4">
          <a
            href="mailto:saranshk@terpmail.umd.edu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope className="hover:text-[#D93025] transition-transform transform hover:scale-110 duration-200" />
          </a>
          <a
            href="https://github.com/saranshkr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub className="hover:text-[#181717] dark:hover:text-white transition-transform transform hover:scale-110 duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/saranshkr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin className="hover:text-[#0077B5] transition-transform transform hover:scale-110 duration-200" />
          </a>
          <a
            href="https://www.instagram.com/krsaransh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram className="hover:text-[#E1306C] transition-transform transform hover:scale-110 duration-200" />
          </a>
          <a
            href="/portfolio/Saransh_Kumar_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            title="Resume"
          >
            <FaFileAlt className="hover:text-[#0F766E] transition-transform transform hover:scale-110 duration-200" />
          </a>
        </div>

        <div className="flex justify-center items-center gap-2 text-gray-700 dark:text-gray-300 text-sm mt-4">
          <FaMapMarkerAlt />
          <span>College Park, MD, USA</span>
        </div>
      </div>
    </PageLayout>
  );
}
